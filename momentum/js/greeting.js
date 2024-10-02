const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const greet_h1 = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const saved_username = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  //제출했을 때 새로고침되는 submit의 디폴트 설정 막기
  event.preventDefault();

  const userName = loginInput.value;

  //입력폼 숨기기
  loginForm.classList.add(HIDDEN_CLASSNAME);

  //유저네임 로컬에 저장하기
  localStorage.setItem(USERNAME_KEY, userName);

  greet_f(userName);
}

function greet_f(userName) {
  greet_h1.classList.remove(HIDDEN_CLASSNAME);
  greet_h1.innerHTML = `Hi, ${userName}.<br><br> What is your main goal for today?`;
}

loginForm.addEventListener("submit", onLoginSubmit);

if (saved_username === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  greet_h1.classList.remove(HIDDEN_CLASSNAME);
  greet_f(saved_username);
}
