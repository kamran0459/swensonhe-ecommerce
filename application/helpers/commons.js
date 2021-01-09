/**
 * @class helper/Commons
 * @description this is a Common class with contain the common methods
 */
class Commons {
  /**
   * @method errorFlatter
   * @param error
   * @returns {string}
   * @description This method receives the error Array of Object from revalidator
   * and generate single string
   */
  static errorFlatter(error) {
    const errors = [];
    error.map((elem) => errors.push(`${elem.property} ${elem.message}`));
    return errors.join(', ');
  }
}

/**
 *@description Commons Methods Module.
 *@module helpers/Commons
 */
module.exports = Commons;
