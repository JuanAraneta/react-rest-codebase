// @route POST api/signup/
// @desc POST signup a non existing user
import { Types } from 'mongoose';
import bcrypt from 'bcrypt';

import User from '../../models/user';

export default async (req, res) => {
  const { body } = req;
  try {
    const existingUser = await User.find({ email: body.email });
    if (existingUser.length) res.status(422).json({ message: "There's an user with that email on the database" });
    else {
      const hashPassword = await bcrypt.hash(body.password, 10);
      const user = new User({
        _id: Types.ObjectId(),
        email: body.email,
        password: hashPassword
      });
      const storedUser = await user.save();
      res.status(201).json(storedUser);
    }
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};
