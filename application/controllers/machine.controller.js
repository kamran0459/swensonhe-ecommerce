const Machine = require('../database/models/machine.model');

/**
 * @class MachineController
 * @description This class contains Machine routes handlers.
 */
class MachineController {
  /**
   *@description This method query from mongo and get all machine records or based on filter
   * @method getMachines
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  static async getMachines(req, res) {
    try {
      const {
        pageNumber = 1, pageSize = 50, productType, waterLineCompatible
      } = req.body;
      let query = {};
      if (productType) {
        query = { ...query, productType };
      }
      if (waterLineCompatible || waterLineCompatible === false) {
        query = { ...query, waterLineCompatible };
      }

      /**
       * @property Machine.find().countDocuments()
       * @description Provide count of total records in Machine collection
       */
      const totalMachines = await Machine.find(query).countDocuments().lean();
      /**
       * @property Machine.find().skip(pageSize * (pageNumber - 1)).limit(pageSize)
       * @description Provide all or matching records from Machine collection by pagination
       */
      const machines = await Machine.find(query)
        .skip(pageSize * (pageNumber - 1))
        .limit(pageSize).lean();

      res.send({
        responseError: null,
        success: true,
        responseData: { totalMachines, machines }
      });
    }
    catch (e) {
      res.status(500).send({
        responseError: e.message,
        success: false,
        responseData: {}
      });
    }
  }
}

/**
 *@description this modules contains Machine routes handler methods.
 *@module MachineController
 */
module.exports = MachineController;
