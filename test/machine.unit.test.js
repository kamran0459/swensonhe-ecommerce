const Machine = require('../application/database/models/machine.model');
const mongoose =require('mongoose');

describe("Machine", () => {
  it("SKU validation", done => {
    const machine = new Machine({ sku: "abc" });
    expect(machine.sku).toBeTruthy();
    machine.validate(err => {
      expect(err.errors.sku).toBeFalsy();
      done();
    });
  });
  it("SKU Length if less than 3", done => {
    const machine = new Machine({ sku: "ab" });
    machine.validate(err => {
      expect(err.errors.sku).toBeTruthy();
      done();
    });
  });
  it("SKU Length if less than 255", done => {
    const sku = "a".repeat(256);
    const machine = new Machine({ sku });
    machine.validate(err => {
      expect(err.errors.sku).toBeTruthy();
      done();
    });
  });
  it("productTypeId validation", done => {
    const machine = new Machine({
      productTypeId: new mongoose.Types.ObjectId().toHexString()
    });
    expect(machine.productTypeId).toBeTruthy();
    machine.validate(err => {
      expect(err.errors.productTypeId).toBeFalsy();
      done();
    });
  });
  it("productType validation", done => {
    const machine = new Machine({ productType: "a" });
    expect(machine.productType).toBeTruthy();
    machine.validate(err => {
      expect(err.errors.productType).toBeFalsy();
      done();
    });
  });
});
