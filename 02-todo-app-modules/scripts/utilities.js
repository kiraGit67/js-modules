"use strict";

export function createRandomID(text) {
  return (
    text.replaceAll(" ", "").toLowerCase() + Math.floor(Math.random() * 99999)
  );
}
