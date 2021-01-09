const {
  Schema,
  model
} = require('mongoose');

const typeSchema = Schema(
  {
    productType: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false
  }
);

/**
 *@description Type Schema Mongo Model.
 *@module models/Type
 */
module.exports = model('Type', typeSchema);
