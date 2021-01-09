const {
  Schema,
  model
} = require('mongoose');

const sizeSchema = Schema(
  {
    packSize: {
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
 *@description Size Schema Mongo Model.
 *@module models/Size
 */
module.exports = model('Size', sizeSchema);
