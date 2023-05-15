import { get10x10, get26x26, get36x36, get62x62 } from "./tables.ts";

function compute(table: number[][], input: number[]): number {
  return input.reduce((c, e) => table[c][e], 0);
}

export function computeNumber(input: string): string {
  if (!/^\d+$/.test(input)) {
    throw new SyntaxError("only number");
  }
  return "" + compute(get10x10(), input.split("").map(Number));
}

export function computeAlphabet(input: string) {
  if (!/^[A-Z]+$/.test(input)) {
    throw new SyntaxError("only alphabet");
  }
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.charAt(
    compute(get26x26(), input.split("").map((s) => alphabet.indexOf(s))),
  );
}

export function computeAlphaNumeric(input: string) {
  if (!/^[A-Z0-9]+$/.test(input)) {
    throw new SyntaxError("only alphabet and number");
  }
  const alphaNumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return alphaNumeric.charAt(
    compute(get36x36(), input.split("").map((s) => alphaNumeric.indexOf(s))),
  );
}

export function computeMixedCaseAlphaNumeric(input: string) {
  if (!/^[A-Za-z0-9]+$/.test(input)) {
    throw new SyntaxError("only alphabet and number");
  }
  const mixedCaseAlphaNumeric =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return mixedCaseAlphaNumeric.charAt(
    compute(
      get62x62(),
      input.split("").map((s) => mixedCaseAlphaNumeric.indexOf(s)),
    ),
  );
}

export function validateNumber(input: string): boolean {
  return computeNumber(input) === "0";
}

export function validateAlphabet(input: string): boolean {
  return computeAlphabet(input) === "A";
}

export function validateAlphaNumeric(input: string): boolean {
  return computeAlphaNumeric(input) === "A";
}

export function validateMixedCaseAlphaNumeric(input: string): boolean {
  return computeMixedCaseAlphaNumeric(input) === "a";
}
