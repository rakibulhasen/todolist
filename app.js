"use strict";
// Select Element
const inputName = document.getElementById("name");
const inputTask = document.getElementById("task");
const btn = document.getElementById("submit");
const tbody = document.querySelector("tbody");

// // Action
// btn.addEventListener("click", function () {
//   const createTr = document.createElement("tr");
//   const createTdf = document.createElement("td");
//   const createTdl = document.createElement("td");
//   createTdl.textContent = inputTask.value;
//   createTdf.textContent = inputName.value;
//   createTr.append(createTdl, createTdf);
//   tbody.append(createTr);
// });

// Action
btn.addEventListener("click", function () {
  const contentTr = document.createElement("tr");
  contentTr.innerHTML = ` 
    <td>${inputName.value}</td>
    <td>${inputTask.value}</td>`;
  tbody.append(contentTr);
});
