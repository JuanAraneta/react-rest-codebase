import Order from '../../models/order';

export default async (req, res) => {
  try {
    const orderRes = await Order.find().select('product quantity _id').populate('product', 'name');
    res.status(200).json({
      count: orderRes.length,
      orders: orderRes
    });
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};
