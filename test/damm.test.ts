import {
  computeAlphaNumeric,
  computeAlphabet,
  computeMixedCaseAlphaNumeric,
  computeNumber,
  validateAlphaNumeric,
  validateAlphabet,
  validateMixedCaseAlphaNumeric,
  validateNumber
} from "../src/damm";


test("computeAlphaNumeric", () => {
  const input = "ABCDE123";
  const digit = computeAlphaNumeric(input);
  expect(validateAlphaNumeric(input+digit)).toBe(true);
  expect(validateAlphaNumeric(input+"A")).toBe(false);
  expect(validateAlphaNumeric("ABCDE132"+digit)).toBe(false);
})

test("computeAlphabet", () => {
  const input = "ABCDEFG";
  const digit = computeAlphabet(input);
  expect(validateAlphabet(input+digit)).toBe(true);
  expect(validateAlphabet(input+"A")).toBe(false);
  expect(validateAlphabet("ABCDEGF"+digit)).toBe(false);
})

test("computeMixedCaseAlphaNumeric", () => {
  const input = "ABCabc123";
  const digit = computeMixedCaseAlphaNumeric(input);
  expect(validateMixedCaseAlphaNumeric(input+digit)).toBe(true);
  expect(validateMixedCaseAlphaNumeric(input+"A")).toBe(false);
  expect(validateMixedCaseAlphaNumeric("ABCabc132"+digit)).toBe(false);
})

test("computeNumber", () => {
  const input = "01234";
  const digit = computeNumber(input);
  expect(validateNumber(input+digit)).toBe(true);
  expect(validateNumber(input+"1")).toBe(false);
  expect(validateNumber("12345"+digit)).toBe(false);
})

