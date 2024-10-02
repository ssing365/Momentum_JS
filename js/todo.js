const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

//to-do list 항목을 localStorge에 저장
function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//to-do list 항목 삭제
function deleteToDo(event) {
  //부모 element를 찾기
  const li = event.target.parentElement;
  li.remove();
}

//to-do list에 출력
function paintToDo(newToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";

  delBtn.addEventListener("click", deleteToDo);

  list.appendChild(span);
  list.appendChild(delBtn);
  toDoList.appendChild(list);
}

//submit 이벤트 발생시
function handleToDoForm(event) {
  event.preventDefault();

  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDo();
}

//to-do list의 submit 이벤트 감지
toDoForm.addEventListener("submit", handleToDoForm);

//로컬에 저장된 value(todos)를 변수에 저장
const savedToDos = localStorage.getItem(TODOS_KEY);

//로컬에 저장된 todos가 있다면 다시 화면에 출력
if (savedToDos !== null) {
  //단순 string형태의 value를 사용할 수 있는 object(array)로 parsing
  const parsedToDos = JSON.parse(savedToDos);
  
  //이전 to-do list 가져오기
  toDos = parsedToDos;

  //각각의 아이템을 to-do list에 출력
  parsedToDos.forEach(paintToDo);
}
