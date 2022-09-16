const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector('#greeting');

// 버튼 클릭
function onLoginBtnclick(){
    const name = loginInput.value;
    console.log(`${name}`);

    // 아래와 같이 유효성체크를 하는 방법도 있지만 html에서 form안 input에 속성사용가능
    // if ( name === ''){
    //     alert('이름이 입력되지 않았습니다..!');
    // }else if(name.length > 15){
    //     alert('이름을 15자 이내로 입력해주세요.');
    // }else{
    //     alert(`환영합니다! ${name}님`);
    // }
};
loginButton.addEventListener("click", onLoginBtnclick); 



// 새로고침 방지
function onLoginSubmit(event){
    event.preventDefault();
    //로그인 폼 숨기기
    loginForm.classList.add("hidden");

    const name = loginInput.value;

    //웹에 유저네임 저장하기 
    localStorage.setItem("name",name);

    //숨겨져 있던 h1 보이게하고 텍스트 넣기
    paintGreetings(name);

}

function paintGreetings(username){
    greeting.classList.remove("hidden");
    greeting.innerText = `환영합니다 ${username}님`;
}

const savedUsername = localStorage.getItem("name");
if(savedUsername === null){
    //로그인 폼 보이게
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit); 
}else{
    loginForm.classList.add("hidden");
    paintGreetings(savedUsername);

}



