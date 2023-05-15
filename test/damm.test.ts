import {
  assertEquals,
} from "https://deno.land/std@0.65.0/testing/asserts.ts";

import {
  computeAlphabet,
  computeAlphaNumeric,
  computeMixedCaseAlphaNumeric,
  computeNumber,
  validateAlphabet,
  validateAlphaNumeric,
  validateMixedCaseAlphaNumeric,
  validateNumber,
} from "../src/damm.ts";

Deno.test("computeAlphaNumeric", () => {
  const input = "ABCDE123";
  const digit = computeAlphaNumeric(input);
  assertEquals(validateAlphaNumeric(input + digit), true);
  assertEquals(validateAlphaNumeric(input + "A"), false);
  assertEquals(validateAlphaNumeric("ABCDE132" + digit), false);
});

Deno.test("computeAlphabet", () => {
  const input = "ABCDEFG";
  const digit = computeAlphabet(input);
  assertEquals(validateAlphabet(input + digit), true);
  assertEquals(validateAlphabet(input + "A"), false);
  assertEquals(validateAlphabet("ABCDEGF" + digit), false);
});

Deno.test("computeMixedCaseAlphaNumeric", () => {
  const input = "ABCabc123";
  const digit = computeMixedCaseAlphaNumeric(input);
  assertEquals(validateMixedCaseAlphaNumeric(input + digit), true);
  assertEquals(validateMixedCaseAlphaNumeric(input + "A"), false);
  assertEquals(validateMixedCaseAlphaNumeric("ABCabc132" + digit), false);
});

Deno.test("computeNumber", () => {
  const input = "01234";
  const digit = computeNumber(input);
  assertEquals(validateNumber(input + digit), true);
  assertEquals(validateNumber(input + "1"), false);
  assertEquals(validateNumber("12345" + digit), false);
});
