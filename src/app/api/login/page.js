import db from '../../../lib/db';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key'; // Use a strong secret key and store it in an environment variable.

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      const [user] = await db.query(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password]
      );

      if (user.length > 0) {
        // Generate JWT token
        const token = jwt.sign(
          { id: user[0].id, email: user[0].email },
          SECRET_KEY,
          { expiresIn: '1h' } // Token expires in 1 hour
        );

        // Set token in a cookie
        res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Secure; SameSite=Strict`);
        res.status(200).json({ message: 'Login successful!' });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  }
}
