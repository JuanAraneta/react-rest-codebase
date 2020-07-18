import { Schema, model } from 'mongoose';

export default model(
  'Product',
  Schema({
    _id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String
    }
  })
);
