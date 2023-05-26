"use strict";

import { createRandomID } from "./utilities.js";

const toDos = [
  { description: "Learn CSS", done: false, id: "1" },
  { description: "Learn HTML", done: true, id: "2" },
];

const toDoList = document.querySelector("#toDo-list");
toDoList.addEventListener("change", updateToDo);

const btnAddToDo = document.querySelector("#btn-add");
btnAddToDo.addEventListener("click", addToDo);

export function listToDos() {
  toDoList.innerText = "";

  for (let toDo of toDos) {
    const listElement = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = toDo.id;
    checkBox.checked = toDo.done;

    const toDoLabel = document.createElement("label");
    toDoLabel.setAttribute("for", checkBox.id);
    toDoLabel.innerText = toDo.description;

    listElement.append(checkBox, toDoLabel);
    toDoList.appendChild(listElement);
  }
}

function addToDo(event) {
  const newToDoDescription = document.querySelector("#toDo-description");

  event.preventDefault();

  if (newToDoDescription.value.replaceAll(" ", "").length === 0) {
    return;
  }

  const newToDo = {
    description: newToDoDescription.value,
    done: false,
    id: createRandomID(newToDoDescription.value),
  };

  toDos.push(newToDo);
  listToDos();
  newToDoDescription.value = "";
}

function updateToDo(event) {
  const id = event.target.id;
  const index = toDos.findIndex((element) => element.id === id);

  toDos[index].done = !toDos[index].done;
}
