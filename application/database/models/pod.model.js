const {
  Schema,
  model
} = require('mongoose');

const podSchema = Schema(
  {
    sku: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255
    },
    coffeeFlavorId: {
      type: Schema.Types.ObjectId,
      ref: 'Flavor',
      required: true
    },
    coffeeFlavor: { type: String, required: true },
    productTypeId: {
      type: Schema.Types.ObjectId,
      ref: 'Type',
      required: true
    },
    productType: { type: String, required: true },
    packSizeId: {
      type: Schema.Types.ObjectId,
      ref: 'Size',
      required: true
    },
    packSize: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

/**
 *@description Pod Schema Mongo Model.
 *@module models/Pod
 */
module.exports = model('Pod', podSchema);
