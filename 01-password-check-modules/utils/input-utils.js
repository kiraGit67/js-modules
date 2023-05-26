"use strict";

export function togglePasswords(input1, input2, btn) {
  if (input1.getAttribute("type") === "password") {
    input1.setAttribute("type", "text");
    input2.setAttribute("type", "text");
    btn.innerText = "Hide Passwords";
    btn.classList.add("btn--hide");
    btn.classList.remove("btn--show");
  } else {
    input1.setAttribute("type", "password");
    input2.setAttribute("type", "password");
    btn.innerText = "Show Passwords";
    btn.classList.add("btn--show");
    btn.classList.remove("btn--hide");
  }
}
