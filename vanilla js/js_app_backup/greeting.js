/*
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
*/

const form = document.querySelector(".js-form"), // form 객체 가져옴
    input = form.querySelector("input"), // form 안에 input 가져옴
    greeting = document.querySelector(".js-greetings"); // h4 가져옴

const USER_LS = "currentUser", // key 값으로 쓸 스트링
    SHOWING_CN = "showing"; // 클래스로 쓸 스트링. 포함되면 display 보임

init();

function init() {
    loadName(); // 이름 찾는다
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS); // key가 "currentUser"인 value 찾아옴
    if (currentUser === null) { // "currentUser"인 key가 없으면
        askForName(); // 이름을 물어
    } else { // 이름이 저장되어 있으면
        paintGreeting(currentUser); // 이름과 인사를 표시
    }
}

function askForName() {
    form.classList.add(SHOWING_CN); // 이름 입력하는 form 표시 ("showing" 클래스 추가)
    form.addEventListener("submit", handleSubmit); // "submit"하면 (엔터 치면) 실행
}
function handleSubmit(event) {
    event.preventDefault(); // 기본 이벤트 동작 막음
    const currentValue = input.value; // 텍스트 입력 창에 입력한 것(이름) 가져옴
    paintGreeting(currentValue); // 이름과 인사 표시
    saveName(currentValue); // 이름을 로컬 스토리지에 저장
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); // form을 안보이게 함
    greeting.classList.add(SHOWING_CN); // 인사를 보이게 함
    greeting.innerText = `Hello ${text}`; // 인사를 이름과 함께 작성
}
function saveName(text) {
    localStorage.setItem(USER_LS, text); // key는 "currentUser"로 받은 이름을 저장
}
