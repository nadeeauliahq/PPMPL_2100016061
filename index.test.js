// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    const result = capitalize("hello");
    expect(result).toBe("Hello");
  });

  test("should return uppercased World", () => {
    const result = capitalize("world");
    expect(result).toBe("World");
  });

  test("should return empty string for empty input", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });

  test("should handle single-character input", () => {
    const result = capitalize("a");
    expect(result).toBe("A");
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4] for [1, 2, 3, 4, 5]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return [] for [1, 3, 5, 7, 9]", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });

  // Additional test cases to cover more scenarios
  it("should return [] for empty array", () => {
    expect(filterOddNumber([])).toEqual([]);
  });

  it("should return [0, -2, -4] for [0, -1, -2, -3, -4]", () => {
    expect(filterOddNumber([0, -1, -2, -3, -4])).toEqual([0, -2, -4]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT for input 0", () => {
    const result = epochDateToUTC(0);
    expect(result).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  it("should handle a different epoch date", () => {
    const result = epochDateToUTC(1612137600000);
    expect(result).toBe("Mon, 01 Feb 2021 00:00:00 GMT");
  });

  it("should handle negative epoch date", () => {
    const result = epochDateToUTC(-100000);
    expect(result).toBe("Wed, 31 Dec 1969 23:58:20 GMT");
  });

  it("should handle epoch date with milliseconds", () => {
    const result = epochDateToUTC(1612137600123);
    expect(result).toBe("Mon, 01 Feb 2021 00:00:00.123 GMT");
  });
});
