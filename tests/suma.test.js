const test = require("node:test");
const assert = require("node:assert/strict");
const { sumar } = require("../src/app.js");

test("sumar 2 + 3 = 5", () => {
  assert.equal(sumar(2, 3), 5);
});
