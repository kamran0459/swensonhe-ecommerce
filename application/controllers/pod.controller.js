const Pod = require('../database/models/pod.model');

/**
 * @class PodController
 * @description This class contains Machine routes handlers.
 */
class PodController {
  /**
   * @method getPods
   * @description This method query from mongo and get all pod records or based on filter
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  static async getPods(req, res) {
    try {
      const {
        pageNumber = 1, pageSize = 50, productType, coffeeFlavor, packSize
      } = req.body;
      let query = {};
      if (productType) {
        query = { ...query, productType };
      }
      if (coffeeFlavor) {
        query = { ...query, coffeeFlavor };
      }
      if (packSize) {
        query = { ...query, packSize };
      }
      /**
       * @property Pod.find().countDocuments()
       * @description Provide count of total records in Pods collection
       */
      const totalPods = await Pod.find(query).countDocuments().lean();
      /**
       * @property Pod.find().skip(pageSize * (pageNumber - 1)).limit(pageSize)
       * @description Provide all or pods records from Pods collection by pagination
       */
      const pods = await Pod.find(query)
        .skip(pageSize * (pageNumber - 1))
        .limit(pageSize).lean();

      res.send({
        responseError: null,
        success: true,
        responseData: { totalPods, pods }
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
 *@description this modules contains Pods routes handler methods.
 *@module PodController
 */
module.exports = PodController;
