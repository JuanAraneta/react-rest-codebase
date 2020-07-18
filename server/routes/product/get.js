// @route GET api/products/
// @desc GET get all the products or the one with the provided Id
import Product from '../../models/product';

export default async (req, res) => {
  try {
    const products = await Product.find();
    const response = {
      count: products.length,
      products: products.map((product) => ({
        name: product.name,
        price: product.price,
        id: product._id,
        image: product.image
      }))
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};
