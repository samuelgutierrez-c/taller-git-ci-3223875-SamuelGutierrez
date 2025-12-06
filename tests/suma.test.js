import { strict as assert } from "assert";
import { sumar } from "../src/app.js";

describe("sumar", () => {
  it("suma correctamente 2 + 3", () => {
    assert.equal(sumar(2, 3), 5);
  });
});
