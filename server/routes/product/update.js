// @route PATCH api/products/
// @desc PATCH update a product
import Product from '../../models/product';

export default async (req, res) => {
  const { body } = req;
  try {
    const product = await Product.findByIdAndUpdate(req.params.productId, body);
    product
      ? res.status(200).json({ success: true })
      : res.status(404).json("There's no product with the id provided");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};
