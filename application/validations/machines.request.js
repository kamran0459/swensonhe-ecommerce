const { validate } = require('revalidator');
const { errorFlatter } = require('../helpers/commons');

/**
 * @class MachinesRequestValidator
 * @description Machine request validator class
 */
class MachinesRequestValidator {
  /**
   * @method machineReqValidator
   * @description This method is a middleware with take the body as parameter,
   * schema crated for revalidator library. Validates the request parameters
   * pass context to next method if success otherwise return 400 HTTP code
   * @returns {Promise<void>}
   */
  static machineReqValidator(req, res, next) {
    const validated = validate(req.body, {
      properties: {
        productType: {
          type: 'string',
          required: false,
          allowEmpty: false,
          messages: {
            type: 'Not a string type',
            allowEmpty: 'Must not be empty'
          }
        },
        waterLineCompatible: {
          type: 'boolean',
          required: false,
          allowEmpty: false,
          messages: {
            type: 'Not a boolean type',
            allowEmpty: 'Must not be empty'
          }
        }
      }
    });
    if (validated.valid) {
      next();
    }
    else {
      res.status(400).send({
        responseError: errorFlatter(validated.errors),
        success: false,
        responseData: {}
      });
    }
  }
}

/**
 *@description Machines Request Validator Methods Module.
 *@module validations/MachinesRequestValidator
 */
module.exports = MachinesRequestValidator;
