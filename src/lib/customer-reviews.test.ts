import { describe, expect, test } from "bun:test";
import { customerReviews, REVIEW_ROTATION_MS } from "./customer-reviews";

describe("screenshot-sourced review rules", () => {
  test("each review remains for seven seconds", () => {
    expect(REVIEW_ROTATION_MS).toBe(7_000);
  });

  test("shows exactly five reviews", () => {
    expect(customerReviews).toHaveLength(5);
  });

  test("preserves the actual mixed ratings", () => {
    expect(customerReviews.map(({ name, rating }) => [name, rating])).toEqual([
      ["Shibapriya Dutta", 5],
      ["Dhyanu Jindal", 5],
      ["Akshata pawar", 5],
      ["Harshpreet", 4],
      ["Smita Nagaokar", 4],
    ]);
  });
});