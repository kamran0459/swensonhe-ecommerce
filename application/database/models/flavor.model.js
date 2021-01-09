const {
  Schema, model
} = require('mongoose');

const flavorSchema = Schema(
  {
    flavor: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255
    },
    description: {
      type: String,
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
 *@description Flavor Schema Mongo Model.
 *@module models/Flavor
 */
module.exports = model('Flavor', flavorSchema);
