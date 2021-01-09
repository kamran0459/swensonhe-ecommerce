const {
  green,
  red
} = require('chalk');
const Type = require('../models/type.model');
const Flavor = require('../models/flavor.model');
const Size = require('../models/size.model');
const Pod = require('../models/pod.model');

class PodsSeeder {
  static async runSeeder() {
    try {
      await Flavor.deleteMany({}, () => {
      });
      await Size.deleteMany({}, () => {
      });
      await Pod.deleteMany({}, () => {
      });

      const large = new Type({
        productType: 'COFFEE_POD_LARGE'
      });
      await large.save();

      const small = new Type({
        productType: 'COFFEE_POD_SMALL'
      });
      await small.save();

      const espresso = new Type({
        productType: 'ESPRESSO_POD'
      });
      await espresso.save();

      const vanilla = new Flavor({
        flavor: 'COFFEE_FLAVOR_VANILLA'
      });
      await vanilla.save();

      const caramel = new Flavor({
        flavor: 'COFFEE_FLAVOR_CARAMEL'
      });
      await caramel.save();

      const psl = new Flavor({
        flavor: 'COFFEE_FLAVOR_PSL'
      });
      await psl.save();

      const mocha = new Flavor({
        flavor: 'COFFEE_FLAVOR_MOCHA'
      });
      await mocha.save();

      const hazelnut = new Flavor({
        flavor: 'COFFEE_FLAVOR_HAZELNUT'
      });
      await hazelnut.save();

      const oneDozen = new Size({
        packSize: '1 dozen'
      });
      await oneDozen.save();

      const threeDozen = new Size({
        packSize: '3 dozen'
      });
      await threeDozen.save();

      const fiveDozen = new Size({
        packSize: '5 dozen'
      });
      await fiveDozen.save();

      const sevenDozen = new Size({
        packSize: '7 dozen'
      });
      await sevenDozen.save();

      await Pod.insertMany([
        {
          sku: 'CP001',
          description: 'small coffee pod, 1 dozen, vanilla',
          productTypeId: small.id,
          productType: small.productType,
          coffeeFlavorId: vanilla.id,
          coffeeFlavor: vanilla.flavor,
          packSizeId: oneDozen.id,
          packSize: oneDozen.packSize
        },
        {
          sku: 'CP003',
          description: 'small coffee pod, 3 dozen, vanilla',
          productTypeId: small.id,
          productType: small.productType,
          coffeeFlavorId: vanilla.id,
          coffeeFlavor: vanilla.flavor,
          packSizeId: threeDozen.id,
          packSize: threeDozen.packSize
        },
        {
          sku: 'CP011',
          description: 'small coffee pod, 1 dozen, caramel',
          productTypeId: small.id,
          productType: small.productType,
          coffeeFlavorId: caramel.id,
          coffeeFlavor: caramel.flavor,
          packSizeId: oneDozen.id,
          packSize: oneDozen.packSize
        },
        {
          sku: 'CP013',
          description: 'small coffee pod, 3 dozen, caramel',
          productTypeId: small.id,
          productType: small.productType,
          coffeeFlavorId: caramel.id,
          coffeeFlavor: caramel.flavor,
          packSizeId: threeDozen.id,
          packSize: threeDozen.packSize
        },
        {
          sku: 'CP021',
          description: 'small coffee pod, 1 dozen, psl',
          productTypeId: small.id,
          productType: small.productType,
          coffeeFlavorId: psl.id,
          coffeeFlavor: psl.flavor,
          packSizeId: oneDozen.id,
          packSize: oneDozen.packSize
        },
        {
          sku: 'CP023',
          description: 'small coffee pod, 3 dozen, psl',
          productTypeId: small.id,
          productType: small.productType,
          coffeeFlavorId: psl.id,
          coffeeFlavor: psl.flavor,
          packSizeId: threeDozen.id,
          packSize: threeDozen.packSize
        },
        {
          sku: 'CP031',
          description: 'small coffee pod, 1 dozen, mocha',
          productTypeId: small.id,
          productType: small.productType,
          coffeeFlavorId: mocha.id,
          coffeeFlavor: mocha.flavor,
          packSizeId: oneDozen.id,
          packSize: oneDozen.packSize
        },
        {
          sku: 'CP033',
          description: 'small coffee pod, 3 dozen, mocha',
          productTypeId: small.id,
          productType: small.productType,
          coffeeFlavorId: mocha.id,
          coffeeFlavor: mocha.flavor,
          packSizeId: threeDozen.id,
          packSize: threeDozen.packSize
        },
        {
          sku: 'CP041',
          description: 'small coffee pod, 1 dozen, hazelnut',
          productTypeId: small.id,
          productType: small.productType,
          coffeeFlavorId: hazelnut.id,
          coffeeFlavor: hazelnut.flavor,
          packSizeId: oneDozen.id,
          packSize: oneDozen.packSize
        },
        {
          sku: 'CP043',
          description: 'small coffee pod, 3 dozen, hazelnut',
          productTypeId: small.id,
          productType: small.productType,
          coffeeFlavorId: hazelnut.id,
          coffeeFlavor: hazelnut.flavor,
          packSizeId: threeDozen.id,
          packSize: threeDozen.packSize
        },
        {
          sku: 'CP101',
          description: 'large coffee pod, 1 dozen, vanilla',
          productTypeId: large.id,
          productType: large.productType,
          coffeeFlavorId: vanilla.id,
          coffeeFlavor: vanilla.flavor,
          packSizeId: oneDozen.id,
          packSize: oneDozen.packSize
        },
        {
          sku: 'CP103',
          description: 'large coffee pod, 3 dozen, vanilla',
          productTypeId: large.id,
          productType: large.productType,
          coffeeFlavorId: vanilla.id,
          coffeeFlavor: vanilla.flavor,
          packSizeId: threeDozen.id,
          packSize: threeDozen.packSize
        },
        {
          sku: 'CP111',
          description: 'large coffee pod, 1 dozen, caramel',
          productTypeId: large.id,
          productType: large.productType,
          coffeeFlavorId: caramel.id,
          coffeeFlavor: caramel.flavor,
          packSizeId: oneDozen.id,
          packSize: oneDozen.packSize
        },
        {
          sku: 'CP113',
          description: 'large coffee pod, 3 dozen, caramel',
          productTypeId: large.id,
          productType: large.productType,
          coffeeFlavorId: caramel.id,
          coffeeFlavor: caramel.flavor,
          packSizeId: threeDozen.id,
          packSize: threeDozen.packSize
        },
        {
          sku: 'CP121',
          description: 'large coffee pod, 1 dozen, psl',
          productTypeId: large.id,
          productType: large.productType,
          coffeeFlavorId: psl.id,
          coffeeFlavor: psl.flavor,
          packSizeId: oneDozen.id,
          packSize: oneDozen.packSize
        },
        {
          sku: 'CP123',
          description: 'large coffee pod, 3 dozen, psl',
          productTypeId: large.id,
          productType: large.productType,
          coffeeFlavorId: psl.id,
          coffeeFlavor: psl.flavor,
          packSizeId: threeDozen.id,
          packSize: threeDozen.packSize
        },
        {
          sku: 'CP131',
          description: 'large coffee pod, 1 dozen, mocha',
          productTypeId: large.id,
          productType: large.productType,
          coffeeFlavorId: mocha.id,
          coffeeFlavor: mocha.flavor,
          packSizeId: oneDozen.id,
          packSize: oneDozen.packSize
        },
        {
          sku: 'CP133',
          description: 'large coffee pod, 3 dozen, mocha',
          productTypeId: large.id,
          productType: large.productType,
          coffeeFlavorId: mocha.id,
          coffeeFlavor: mocha.flavor,
          packSizeId: threeDozen.id,
          packSize: threeDozen.packSize
        },
        {
          sku: 'CP141',
          description: 'large coffee pod, 1 dozen, hazelnut',
          productTypeId: large.id,
          productType: large.productType,
          coffeeFlavorId: hazelnut.id,
          coffeeFlavor: hazelnut.flavor,
          packSizeId: oneDozen.id,
          packSize: oneDozen.packSize
        },
        {
          sku: 'CP143',
          description: 'large coffee pod, 3 dozen, hazelnut',
          productTypeId: large.id,
          productType: large.productType,
          coffeeFlavorId: hazelnut.id,
          coffeeFlavor: hazelnut.flavor,
          packSizeId: threeDozen.id,
          packSize: threeDozen.packSize
        },
        {
          sku: 'EP003',
          description: 'espresso pod, 3 dozen, vanilla',
          productTypeId: espresso.id,
          productType: espresso.productType,
          coffeeFlavorId: vanilla.id,
          coffeeFlavor: vanilla.flavor,
          packSizeId: threeDozen.id,
          packSize: threeDozen.packSize
        },
        {
          sku: 'EP005',
          description: 'espresso pod, 5 dozen, vanilla',
          productTypeId: espresso.id,
          productType: espresso.productType,
          coffeeFlavorId: vanilla.id,
          coffeeFlavor: vanilla.flavor,
          packSizeId: fiveDozen.id,
          packSize: fiveDozen.packSize
        },
        {
          sku: 'EP007',
          description: 'espresso pod, 7 dozen, vanilla',
          productTypeId: espresso.id,
          productType: espresso.productType,
          coffeeFlavorId: vanilla.id,
          coffeeFlavor: vanilla.flavor,
          packSizeId: sevenDozen.id,
          packSize: sevenDozen.packSize
        },
        {
          sku: 'EP013',
          description: 'espresso pod, 3 dozen, caramel',
          productTypeId: espresso.id,
          productType: espresso.productType,
          coffeeFlavorId: caramel.id,
          coffeeFlavor: caramel.flavor,
          packSizeId: threeDozen.id,
          packSize: threeDozen.packSize
        },
        {
          sku: 'EP015',
          description: 'espresso pod, 5 dozen, caramel',
          productTypeId: espresso.id,
          productType: espresso.productType,
          coffeeFlavorId: caramel.id,
          coffeeFlavor: caramel.flavor,
          packSizeId: fiveDozen.id,
          packSize: fiveDozen.packSize
        },
        {
          sku: 'EP017',
          description: 'espresso pod, 7 dozen, caramel',
          productTypeId: espresso.id,
          productType: espresso.productType,
          coffeeFlavorId: caramel.id,
          coffeeFlavor: caramel.flavor,
          packSizeId: sevenDozen.id,
          packSize: sevenDozen.packSize
        }
      ]);
      // eslint-disable-next-line no-console
      console.log(green('Seeder completed for Pods'));
    }
    catch (e) {
      // eslint-disable-next-line no-console
      console.log(red(`Machine Seeder Error:\n ${e.message}`));
    }
  }
}

/**
 *@description Pods Seeder module.
 *@module seeds/PodsSeeder
 */
module.exports = PodsSeeder;
