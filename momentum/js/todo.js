const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoForm(event) {
  event.preventDefault();
  
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newToDo);
}

function paintToDo(newToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  delBtn.innerText='X';

  list.appendChild(span);
  list.appendChild(delBtn);
  span.innerText = newToDo;

  toDoList.appendChild(list);  
}

toDoForm.addEventListener("submit", handleToDoForm);
delBtn.addEventListener
