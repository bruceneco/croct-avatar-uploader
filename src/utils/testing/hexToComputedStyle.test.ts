import { hexToComputedStyle } from "./hexToComputedStyle";

it("should convert correctly", () => {
  assert.equal(hexToComputedStyle("#000"), "rgb(0, 0, 0)");
  assert.equal(hexToComputedStyle("#fff"), "rgb(255, 255, 255)");
  assert.equal(hexToComputedStyle("#aaa"), "rgb(170, 170, 170)");
});
