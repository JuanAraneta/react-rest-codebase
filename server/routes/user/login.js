/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Auth management
 */

/**
 * @swagger
 * path:
 *  /login:
 *    post:
 *      summary: Login a user in the app
 *      tags: [Auth]
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *      responses:
 *        "200":
 *          description: A jwt token to be used in the app
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  token:
 *                    type: string
 */

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../../models/user';

export default async (req, res) => {
  const { body } = req;
  try {
    const user = await User.find({
      email: body.email
    });
    if (!user.length) res.status(401).json({ message: 'Auth failed' });
    else {
      const compareResult = await bcrypt.compare(body.password, user[0].password);
      if (compareResult) {
        const token = await jwt.sign(
          {
            email: user[0].email,
            userId: user[0]._id
          },
          process.env.JWT_KEY,
          { expiresIn: '1h' }
        );
        res.status(200).json({ message: 'Auth success', token });
      } else res.status(401).json({ message: 'Auth failed' });
    }
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};
