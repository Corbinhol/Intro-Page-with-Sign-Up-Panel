const regex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
const submit_button = document.querySelector("button");

const first_input = document.getElementById("first-name");
const first_container = document.getElementById("first-container");
const first_error = document.getElementById("first-error")
const first_error_svg = document.getElementById("first-error-svg")
var first_last_value = "";

const last_input = document.getElementById("last-name");
const last_container = document.getElementById("last-container");
const last_error = document.getElementById("last-error");
const last_error_svg = document.getElementById("last-error-svg");
var last_last_value = "";

const email_input = document.getElementById("email");
const email_container = document.getElementById("email-container");
const email_error = document.getElementById("email-error")
const email_error_svg = document.getElementById("email-error-svg")
var check_email = false;

const password_input = document.getElementById("password");
const password_container = document.getElementById("password-container");
const password_error = document.getElementById("password-error")
const password_error_svg = document.getElementById("password-error-svg")
var check_password = false;


function show_first_error() {
    first_container.classList.add("error")
    first_error.classList.remove("disabled")
    first_error_svg.classList.remove("disabled")
    first_last_value = first_input.value;
    console.log(first_last_value);
}

function hide_first_error() {
    first_container.classList.remove("error")
    first_error.classList.add("disabled")
    first_error_svg.classList.add("disabled")
    first_last_value = "";
}

function show_last_error() {
    last_container.classList.add("error")
    last_error.classList.remove("disabled")
    last_error_svg.classList.remove("disabled")
    last_last_value = last_input.value;
}

function hide_last_error() {
    last_container.classList.remove("error")
    last_error.classList.add("disabled")
    last_error_svg.classList.add("disabled")
    last_last_value = "";
}

function show_email_error() {
    email_container.classList.add("error")
    email_error.classList.remove("disabled")
    email_error_svg.classList.remove("disabled")
    check_email = true;
}

function hide_email_error() {
    email_container.classList.remove("error")
    email_error.classList.add("disabled")
    email_error_svg.classList.add("disabled")
    check_email = false;
}

function show_password_error() {
    password_container.classList.add("error")
    password_error.classList.remove("disabled")
    password_error_svg.classList.remove("disabled")
    check_password = true
}

function hide_password_error() {
    password_container.classList.remove("error")
    password_error.classList.add("disabled")
    password_error_svg.classList.add("disabled")
    check_password = false
}


submit_button.addEventListener("click", () => {
    if(!regex.test(email_input.value)) {
        show_email_error();
    } else {
        hide_email_error();
    }

    if(first_input.value == "") {
        show_first_error();
    } else {
        hide_first_error(); 
    }

    if(last_input.value == "") {
        show_last_error();
    } else {
        hide_last_error(); 
    }

    if(password_input.value == "") {
        show_password_error();
    } else {
        hide_password_error();
    }
})

first_input.addEventListener("input", ()=> {
    if(first_last_value == "") {
        hide_first_error();
    }
})

last_input.addEventListener("input", ()=> {
    if(last_last_value == "") {
        hide_last_error();
    }
})

password_input.addEventListener("input", ()=> {
    if(check_password) {
        hide_password_error();
        console.log("Hello!")
    }
})

email_input.addEventListener("input", ()=> {
    if(check_email) {
        hide_email_error();
    }
})

