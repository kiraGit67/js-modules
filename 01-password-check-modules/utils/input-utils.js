"use strict";

export function togglePasswords(input1, input2, btn) {
  if (input1.getAttribute("type") === "password") {
    input1.setAttribute("type", "text");
    input2.setAttribute("type", "text");
    btn.innerText = "Hide Passwords";
  } else {
    input1.setAttribute("type", "password");
    input2.setAttribute("type", "password");
    btn.innerText = "Show Passwords";
  }
}
