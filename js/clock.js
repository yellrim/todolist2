const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText =`${hours}:${minutes}:${seconds}`;
}
getClock() //즉시호출
setInterval(getClock,1000);


// 1초마다 sayHello라는 함수를 실행해주는 setInterval
// setInterval(sayHello,1000);
// 1초기다렸다가 함수를 실행해주는 setTimeout
// setTimeout(sayHello, 1000);



