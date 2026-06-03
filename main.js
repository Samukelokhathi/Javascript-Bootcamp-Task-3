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
    checkEmptyInput()


})

function checkEmptyInput() {
    if (username.value == "") {
        return usernameError.textContent = "Username input is empty!!"

    } else if (email.value == "") {
        emailError.textContent = "Email input is empty!!"
    } else if (password.value == "") {
        passwordError.textContent = "Password input is empty!!"
    }
}

function validateEmail() {
    let regExpr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}