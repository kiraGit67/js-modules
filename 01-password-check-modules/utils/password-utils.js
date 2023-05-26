"use strict";

import {
  containsNumbers,
  containsLowerCase,
  containsUpperCase,
} from "./string-utils.js";

export function atLeast10charsLong(str) {
  return str.length >= 10;
}

export function isValid(pw) {
  return (
    containsNumbers(pw) &&
    containsLowerCase(pw) &&
    containsUpperCase(pw) &&
    atLeast10charsLong(pw)
  );
}
