import { Schema, model } from 'mongoose';

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - email
 *        properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *        example:
 *           name: Alexander
 *           email: fake@email.com
 */

export default model(
  'User',
  Schema({
    _id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // eslint-disable-next-line max-len
      match: /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)/
    },
    password: {
      type: String,
      required: true
    }
  })
);
