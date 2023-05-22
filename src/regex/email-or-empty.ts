import { describe, expect, test } from "vitest";

// Regex for matching email addresses or empty strings.
const regex = /^$|^[\w\.\+\-]+@[\w\-]+(\.[\w\-]+)*(\.[a-z]{2,})$/i;

describe("email-or-empty", () => {
  test("Empty string should match", () => {
    expect(regex.test("")).toBe(true);
  });

  test("Invalid email should not match", () => {
    expect(regex.test("notAnEmail")).toBe(false);
  });

  test("Valid email should match", () => {
    expect(regex.test("test@example.com")).toBe(true);
  });

  test("Valid email with dots and plus signs should match", () => {
    expect(regex.test("test.someone+else@example.co.uk")).toBe(true);
  });

  test('Email with double "@" sign should not match', () => {
    expect(regex.test("test@@example.com")).toBe(false);
  });

  test("Valid email with uppercase characters should match", () => {
    expect(regex.test("Test@example.com")).toBe(true);
  });

  test("Email address should not contain spaces", () => {
    expect(regex.test("user name@example.com")).toBe(false);
  });

  test("Email address should not contain special characters", () => {
    expect(regex.test("user*name@example.com")).toBe(false);
  });

  test("Email address should not contain only one domain component", () => {
    expect(regex.test("user@example")).toBe(false);
  });

  test("Email address should accept complex domain structures", () => {
    expect(regex.test("user@sub.domain.example.com")).toBe(true);
  });
});
