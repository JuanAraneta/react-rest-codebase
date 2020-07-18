// @route POST api/products/
// @desc POST save a new product to the database
import { Types } from 'mongoose';
import imageUpload from '../../utils/imageUpload';

import Product from '../../models/product';

export default async (req, res) => {
  const { body } = req;
  let uploadImage = null;
  try {
    if (body.image) uploadImage = await imageUpload(body.image);
    const product = new Product({
      _id: Types.ObjectId(),
      name: body.name,
      price: body.price,
      image: uploadImage ? uploadImage.url : null
    });
    const mongoResult = await product.save();
    res.status(201).json(mongoResult);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};
