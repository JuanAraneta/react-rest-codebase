import { Schema, model } from 'mongoose';

export default model(
  'Order',
  Schema({
    _id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    }
  })
);
