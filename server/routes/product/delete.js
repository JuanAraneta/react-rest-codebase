// @route DELETE api/products/
// @desc DELETE delete a product from the database
import Product from '../../models/product';

export default async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product
      ? res.status(200).json(product)
      : res.status(404).json("There's no product with the id provided");
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};
