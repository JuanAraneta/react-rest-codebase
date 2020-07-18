// @route DELETE api/products/
// @desc DELETE delete a user by id
import User from '../../models/user';

export default async (req, res) => {
  const { body } = req;
  try {
    await User.findByIdAndDelete(body.id);
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};
