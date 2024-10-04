const weather = document.querySelector("#weather");
const city = document.querySelector("#city");
const weather_description = weather.querySelector("span:nth-of-type(1)");
const temp = weather.querySelector("span:nth-of-type(2)");

const API_KEY = "5a672a5cd9a42bbf97cea2385ef83e2d"; //API : 다른 서버와 이야기할 수 있는 방법

function onGeoOk(position) { //성공 시 함수는 GeolocationPosition object 하나를 JS로부터 입력받는다.
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json()) //fetch는 promise객체를 받는다. Promise : 자바스크립트의 비동기 작업을 처리하는 객체.
    .then((data) => { //.json()메소드도 promise객체를 받는다. 비동기 작업이므로 then메소드 활용.
    //한번 읽은 HTTP 응답의 본문은 재사용할 수 없다. Response 객체의 본문(body)을 한 번만 읽고 활용하기 위해 data로 담아두기 
      console.dir(data);
      city.innerHTML = data.name;
      weather_description.innerHTML = data.weather[0].description + ", ";
      temp.innerHTML = data.main.temp  + "C";
    });
}

function onGeoError() {
  alert("Can not find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 
//설명을 읽어보면 알 수 있듯이, getCurrentPosition 메소드는 호출 성공 시 함수를 할당해주어야한다.(실패 시 함수(onGeoError)는 옵션).
//성공 시 함수는 GeolocationPosition object 하나를 입력받는다.
//우리는 공간만 만들어주면 JS가 다 해준다.



