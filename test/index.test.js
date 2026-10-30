const test = require("node:test");
const assert = require("node:assert");
const { formatAmount } = require("../index.js");

test("formats cents", () => {
  assert.strictEqual(formatAmount(1234), "12.34");
});
