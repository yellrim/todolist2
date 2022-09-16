// API KEY문제로 실행 불가

let API_KEY = 'ece55a49febdb7a86d58c8714697cc86'


function onGeoOk(position){
    // 인자값으로 콘솔찍으면 좌표값을 알 수 있음
    console.log(position);

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("당신의 위치정보입니다",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}=${API_KEY}`
    fetch(url).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

    });
};
function onGeoError(){
    alert("당신의 위치를 찾을 수 없어 날씨를 제공할 수 없습니다.")
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);