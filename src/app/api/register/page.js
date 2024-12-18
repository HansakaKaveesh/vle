import db from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { full_name, username, country, email, phone, registering_as, password } = req.body;
    try {
      const [result] = await db.query(
        'INSERT INTO users (full_name, username, country, email, phone, registering_as, password) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [full_name, username, country, email, phone, registering_as, password]
      );
      res.status(200).json({ message: 'User registered successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error });
    }
  }
}
