const assert = require("assert/strict");
const { sumar } = require("../src/app.js");

describe("sumar", () => {
  it("suma correctamente 2 + 3", () => {
    assert.equal(sumar(2, 3), 5);
  });
});
