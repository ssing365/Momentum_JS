const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoForm(event) {
  event.preventDefault();
  
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newToDo);
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const delBtn = document.createElement("button");
  delBtn.innerText='❌';

  delBtn.addEventListener("click", deleteToDo);

  list.appendChild(span);
  list.appendChild(delBtn);
  toDoList.appendChild(list);  
}

toDoForm.addEventListener("submit", handleToDoForm);
