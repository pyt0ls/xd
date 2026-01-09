import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const USERS = [
  {
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10)
  }
];

export function login(email, senha) {
  const user = USERS.find(u => u.email === email);
  if (!user) return null;

  const ok = bcrypt.compareSync(senha, user.password);
  if (!ok) return null;

  return jwt.sign(
    { email },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );
}