const clock = document.querySelector("h2#clock");

function getTime(){
    const date = new Date();

    Hour = String(date.getHours()).padStart(2,'0');
    Min = String(date.getMinutes()).padStart(2,'0');
    Sec = String(date.getSeconds()).padStart(2,'0');

    clock.innerHTML = `${Hour} : ${Min} : ${Sec}`
}

//시계 바로 출력
getTime();
//1초마다 시계 갱신
setInterval(getTime, 1000);