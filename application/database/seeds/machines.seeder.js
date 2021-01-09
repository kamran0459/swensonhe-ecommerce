const {
  green,
  red
} = require('chalk');
const Type = require('../models/type.model');
const Machine = require('../models/machine.model');

class MachinesSeeder {
  static async runSeeder() {
    try {
      await Type.deleteMany({}, () => {});
      await Machine.deleteMany({}, () => {});

      const large = new Type({
        productType: 'COFFEE_MACHINE_LARGE'
      });
      await large.save();

      const small = new Type({
        productType: 'COFFEE_MACHINE_SMALL'
      });
      await small.save();

      const espresso = new Type({
        productType: 'ESPRESSO_MACHINE'
      });
      await espresso.save();

      await Machine.insertMany([
        {
          sku: 'EM001',
          description: 'espresso machine, base model',
          productTypeId: espresso.id,
          productType: espresso.productType
        },
        {
          sku: 'EM002',
          description: 'espresso machine, premium model',
          productTypeId: espresso.id,
          productType: espresso.productType
        },
        {
          sku: 'EM003',
          description: 'espresso machine, deluxe model, water line compatible',
          waterLineCompatible: true,
          productTypeId: espresso.id,
          productType: espresso.productType
        },
        {
          sku: 'CM001',
          description: 'small machine, base model',
          productTypeId: small.id,
          productType: small.productType
        },
        {
          sku: 'CM002',
          description: 'small machine, premium model',
          productTypeId: small.id,
          productType: small.productType
        },
        {
          sku: 'CM002',
          description: 'small machine, delux water line compatible',
          waterLineCompatible: true,
          productTypeId: small.id,
          productType: small.productType
        },
        {
          sku: 'CM101',
          description: 'large machine, base model',
          productTypeId: large.id,
          productType: large.productType
        },
        {
          sku: 'CM102',
          description: 'large machine, premium model, water line compatible',
          waterLineCompatible: true,
          productTypeId: large.id,
          productType: large.productType
        },
        {
          sku: 'CM103',
          description: 'large machine, deluxe model, water line compatible',
          waterLineCompatible: true,
          productTypeId: large.id,
          productType: 'COFFEE_MACHINE_LARGE'
        }
      ]);
      // eslint-disable-next-line no-console
      console.log(green('Seeder completed for Machine'));
    }
    catch (e) {
      // eslint-disable-next-line no-console
      console.log(red(`Machine Seeder Error:\n ${e.message}`));
    }
  }
}

/**
 *@description Machines Seeder module.
 *@module seeds/MachinesSeeder
 */
module.exports = MachinesSeeder;
