const { validate } = require('revalidator');
const { errorFlatter } = require('../helpers/commons');

/**
 * @class PodsRequestValidator
 * @description Machine request validator class
 */
class PodsRequestValidator {
  /**
   * @method podReqValidator
   * @description This method is a middleware with take the body as parameter,
   * schema crated for revalidator library. Validates the request parameters
   * pass context to next method if success otherwise return 400 HTTP code
   * @returns {Promise<void>}
   */
  static podReqValidator(req, res, next) {
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
        coffeeFlavor: {
          type: 'string',
          required: false,
          allowEmpty: false,
          messages: {
            type: 'Not a string type',
            allowEmpty: 'Must not be empty'
          }
        },
        packSize: {
          type: 'string',
          required: false,
          allowEmpty: false,
          messages: {
            type: 'Not a string type',
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
 *@description Pods Request Validator Methods Module.
 *@module validations/PodsRequestValidator
 */
module.exports = PodsRequestValidator;
