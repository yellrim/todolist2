const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

// 로컬스토리지에 JSON을 이용해 배열형태로 투두리스트내용 저장
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 부모엘리먼트 li를 이벤트타겟으로잡고 remove로 없애기
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();

    // 리스트 삭제  
    // 클릭한 toDo.id와 li.id가 같지 않으면 지우지 않고 싶다는 내용
    // toDo.id는 숫자형이였는데 li.id가 문자열이여서 parseInt로 타입을 숫자형으로 변환해줌
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    
    // toDos DB에서 todo를 지운 뒤에 다시한번 불러줘야함
    saveToDos();
}

// li>span,button 엘리먼트 생성 해주고 innerText로 필요한 내용 넣어주기
function paintToDo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');

    button.innerText ="X";

    button.addEventListener('click',deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

// 서브밋 될때 실행되는 함수
function handToDoSubmit(event){
    event.preventDefault();  // submit 막기
    const newTodo = toDoInput.value;
    toDoInput.value = ""; //엔터눌러서 새로고침되면 내용 없애주기
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //toDos배열에 newTodo 넣어실행
    paintToDo(newTodoObj); //paintToDo toDoInput.value 넣어실행
    saveToDos(); // 배열변환 실행
}

//서브밋 될때 handToDoSubmit함수 실행
toDoForm.addEventListener("submit",handToDoSubmit);



// 투두리스트 저장하기
const savedToDos = localStorage.getItem(TODOS_KEY);

// 만약 savedToDos에 저장값이 있다면 
if(savedToDos !== null){
    //문자열객체를 json 배열로 변환시켜줌
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

//투두리스트 삭제하기