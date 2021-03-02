/*
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
*/
/*
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        })
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
*/
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; // toDo를 저장할 array

let toDoLength = 0; // toDo의 id를 만들 변수

function deleteToDo(event) { // 버튼 누를 때 실행할 함수
    const btn = event.target; // 눌린 버튼을 찾음
    const li = btn.parentNode; // 그 버튼의 부모 요소
    toDoList.removeChild(li); // 투두리스트(ul)에서 버튼을 누른 요소(li) 제거. 아직은 HTML 상에서만 제거됨
    const cleanToDos = toDos.filter(function (toDo) { // filter 함수로 toDos의 요소 하나씩을 toDo로 보고 함수 실행
        return toDo.id !== parseInt(li.id); // li.id와 toDo.id가 다르면 true 리턴
    }); // true 리턴된 요소들로 배열을 만들어서 cleanToDos에 줌
    toDos = cleanToDos; // 클릭한 요소만 빠진 새로운 배열을 toDos에 덮어씀
    saveToDos(); // 갱신된 toDos를 다시 로컬 스토리지에 저장
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // JSON.stringify()로 의미있는 문자열로 로컬 스토리지에 저장
}

function paintToDo(text) {
    const li = document.createElement("li"); // li 요소 생성
    const delBtn = document.createElement("button"); // button 요소 생성
    const span = document.createElement("span"); // span 요소 생성
    const newId = toDoLength + 1; // id 만들 변수
    delBtn.innerText = "❌"; // 버튼에 X 붙임
    delBtn.addEventListener("click", deleteToDo); // 삭제 button을 누르면 deleteToDo() 함수 실행
    span.innerText = text; // input 입력 창에 쓰인 값(사용자가 작성한 to do) 작성
    li.appendChild(delBtn); // li에 button 붙임
    li.appendChild(span); // li에 span 붙임
    li.id = newId; // id 저장
    toDoList.appendChild(li); // toDoList(ul)에 li 삽입
    const toDoObj = { // toDo 배열에 저장할 객체
        text: text, // toDo의 문자열 나타냄
        id: newId // 그 toDo의 번호
    };
    toDoLength += 1; // 추가하면 id가 하나씩 증가함
    toDos.push(toDoObj); // toDos에 푸시
    saveToDos(); // 로컬스토리지에도 저장
}

function handleSubmit(event) {
    event.preventDefault(); // 기본 이벤트 금지
    const currentValue = toDoInput.value; // input 입력 창에 쓰인 값을 가져옴
    paintToDo(currentValue); // 그 값을 전달
    toDoInput.value = ""; // 입력 창을 깨끗하게 초기화
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS); // key가 "toDo"인 value를 가져옴
    if (loadedToDos !== null) { // 저장된 toDo가 있으면
        const parsedToDos = JSON.parse(loadedToDos); // 하나씩 끊어서 parsedToDos로 저장
        parsedToDos.forEach(function (toDo) { // parsedToDos 요소 각각을 toDo로 보고 실행
            paintToDo(toDo.text); // toDo를 화면에 표시
        });
    }
}

function init() {
    loadToDos(); // 저장되어 있는 to do를 꺼냄
    toDoForm.addEventListener("submit", handleSubmit); // form 에서 submit 발생하면 실행
}

init();