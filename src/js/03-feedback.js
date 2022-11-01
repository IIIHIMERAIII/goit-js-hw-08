import throttle  from "lodash.throttle";
const formRef = document.querySelector(".feedback-form")
const formMessage = document.querySelector('[name="message"]');
const formEmail = document.querySelector('[name="email"]');
const STORAGE_KEY = "feedback-form-state";

formRef.addEventListener("input", setData);
formRef.addEventListener("submit", submitData);

function getData() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function setData(e) {
    const data = getData();
    data[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function submitData(e) {
    e.preventDefault();
    for (let element of e.currentTarget.elements) {
        if (element.name && !element.value)
            return alert("Please complete form")
    }
    console.log({ email: formEmail.value, message: formMessage.value });
    localStorage.removeItem(STORAGE_KEY);
    formRef.reset();
}

function autocomplete() {
    const data = getData();
    if (localStorage.hasOwnProperty("feedback-form-state")) {
        formEmail.value = data.email;
        formMessage.value = data.message;
    }
}
autocomplete()
