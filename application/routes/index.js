const express = require('express');

const router = express.Router();

// custom required files
const { getMachines } = require('../controllers/machine.controller');
const { getPods } = require('../controllers/pod.controller');
const { machineReqValidator } = require('../validations/machines.request');
const { podReqValidator } = require('../validations/pods.request');

/**
 * @property
 * @description get all or filtered Machines
 */
router.post('/machines', machineReqValidator, getMachines);

/**
 * @property
 * @description get all or filtered pods
 */
router.post('/pods', podReqValidator, getPods);

/**
 *@description Router Module.
 *@module router
 */
module.exports = router;
