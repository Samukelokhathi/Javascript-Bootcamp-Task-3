let signUpPortal = document.getElementById("sign-up-portal");

let username = document.getElementById("username-input")
let email = document.getElementById("email-input")
let password = document.getElementById("password-input")

let emailError = document.getElementById("email-error")
let usernameError = document.getElementById("username-error")
let passwordError = document.getElementById("password-error")


let submitBtn = document.getElementById("submit-btn")

signUpPortal.addEventListener('submit', function (value) {
    value.preventDefault()
    clearContent()
    checkEmptyInput()
    validateEmail()

})


function clearContent() {
    usernameError.textContent = ""
    emailError.textContent = ""
    passwordError.textContent = ""
}

function checkEmptyInput() {

    if (username.value === "") {
        usernameError.textContent = "Username input is empty!!"


    }
    if (email.value === "") {
        console.log("Password reached")
        emailError.textContent = "Email input is empty!!"
    }
    if (password.value === "") {
        passwordError.textContent = "Password input is empty!!"

    }
}

function validateEmail() {
    let regExpr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!regExpr.test(email.value)) {
        emailError.textContent = "Enter a valid email format"
    }
}
