import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export default function handler(req, res) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access. Please log in.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.status(200).json({ user: decoded });
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
}
