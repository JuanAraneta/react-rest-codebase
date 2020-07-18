import { Types } from 'mongoose';
import Order from '../../models/order';
import Product from '../../models/product';

export default async (req, res) => {
  const { body } = req;
  try {
    const product = await Product.findById(body.productId);
    if (!product) res.status(404).json({ message: "There's no product with the provided id on the database" });
    const order = new Order({
      _id: Types.ObjectId(),
      quantity: body.quantity,
      product: body.productId
    });
    const mongoResult = await order.save();
    res.status(201).json(mongoResult);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};
