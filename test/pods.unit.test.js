const Pod = require('../application/database/models/pod.model');
const mongoose =require('mongoose');

describe("Pod", () => {
  it("SKU validation", done => {
    const pod = new Pod({ sku: "abc" });
    expect(pod.sku).toBeTruthy();
    pod.validate(err => {
      expect(err.errors.sku).toBeFalsy();
      done();
    });
  });
  it("SKU Length if less than 3", done => {
    const pod = new Pod({ sku: "ab" });
    pod.validate(err => {
      expect(err.errors.sku).toBeTruthy();
      done();
    });
  });
  it("SKU Length if less than 255", done => {
    const sku = "a".repeat(256);
    const pod = new Pod({ sku });
    pod.validate(err => {
      expect(err.errors.sku).toBeTruthy();
      done();
    });
  });
});
