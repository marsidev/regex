import { describe, expect, test } from "vitest";

// Regex for matching URLs or empty strings. Only matches protocols http and https, and support query parameters and hashes. Also supports URLs without a protocol (e.g. "example.com").
const regex = /^(?:(?:https?):\/\/)?(?:[^\s\/$.?#]+\.[^\s]*)?$/i;

// Also works with:
// const regex = /^(?:|((?:http|https):\/\/[^\s]+)|([a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)+))$/i;

describe("url-or-empty", () => {
  test("Empty string should match", () => {
    expect(regex.test("")).toBe(true);
  });

  test("Valid http URL should match", () => {
    expect(regex.test("http://example.com")).toBe(true);
  });

  test("Valid https URL should match", () => {
    expect(regex.test("https://example.com")).toBe(true);
  });

  test("URL with a path should match", () => {
    expect(regex.test("https://example.com/path/to/resource")).toBe(true);
  });

  test("URL with a query parameter should match", () => {
    expect(regex.test("https://example.com/path?query=param")).toBe(true);
  });

  test("URL with a hash should match", () => {
    expect(regex.test("https://example.com#hash")).toBe(true);
  });

  test("URL with a params and hash should match", () => {
    expect(
      regex.test("https://www.example.com/path/to/page.html?query=param#hash")
    ).toBe(true);
  });

  test("URL with special characters in the domain should match", () => {
    expect(regex.test("https://www.sömething.com")).toBe(true);
  });

  test("URL with invalid invalid protocol should not match", () => {
    expect(regex.test("ftp://example.com")).toBe(false);
  });

  test("Invalid URL should not match", () => {
    expect(regex.test("invalid url")).toBe(false);
  });

  test("URL with no protocol should match", () => {
    expect(regex.test("example.com")).toBe(true);
  });
});
