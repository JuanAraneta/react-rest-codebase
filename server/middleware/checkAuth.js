import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  const { headers } = req;
  try {
    console.log(headers.authorization);
    if (headers.authorization && headers.authorization.startsWith('Bearer ')) {
      console.log(headers.authorization.substring(7));
      const decoded = await jwt.verify(headers.authorization.substring(7), process.env.JWT_KEY);
      req.userData = decoded;
      next();
    } else res.status(401).json({ message: 'Auth failed' });
  } catch (error) {
    res.send(401).json({ message: 'Auth failed' });
  }
};
