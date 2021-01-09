const {
  Schema,
  model
} = require('mongoose');

const machineSchema = Schema(
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
    waterLineCompatible: {
      type: Boolean,
      default: false
    },
    productTypeId: {
      type: Schema.Types.ObjectId,
      ref: 'Type',
      required: true
    },
    productType: {
      type: String,
      required: true
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
 *@description Machine Schema Mongo Model.
 *@module models/Machine
 */
module.exports = model('Machine', machineSchema);
