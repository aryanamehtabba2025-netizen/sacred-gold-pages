import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { customerReviews, REVIEW_ROTATION_MS } from "./customer-reviews";

describe("screenshot-sourced review rules", () => {
  test("each review remains for seven seconds", () => {
    assert.equal(REVIEW_ROTATION_MS, 7_000);
  });

  test("shows exactly five reviews", () => {
    assert.equal(customerReviews.length, 5);
  });

  test("preserves the actual mixed ratings", () => {
    assert.deepEqual(
      customerReviews.map(({ name, rating }) => [name, rating]),
      [
        ["Shibapriya Dutta", 5],
        ["Dhyanu Jindal", 5],
        ["Akshata pawar", 5],
        ["Harshpreet", 4],
        ["Smita Nagaokar", 4],
      ],
    );
  });
});
