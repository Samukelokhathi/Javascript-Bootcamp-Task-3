let signUpPortal = document.getElementById("sign-up-portal");

let username = document.getElementById("username-input")
let email = document.getElementById("email-input")
let password = document.getElementById("password-input")

let emailError = document.getElementById("email-error")
let usernameError = document.getElementById("username-error")
let passwordError = document.getElementById("password-error")


let submitBtn = document.getElementById("submit-btn")

signUpPortal.addEventListener('submit', function (value) {
    value.preventDefault();

    clearContent();
    validateEmail();
    checkEmptyInput();
    validatePassword();


})
verificationBtn()

function clearContent() {
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
}

function checkEmptyInput() {
    if (username.value === "") {
        usernameError.textContent = "Username input is empty!!"
    }
    if (email.value === "") {
        console.log("Email reached")
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

function validatePassword() {
    if (password.value.trim().length > 8) {
        passwordError.textContent = "Enter password with 8-character or less"
    }

}



function verificationBtn() {
    let btnContainer = document.createElement("div")
    let resendBtn = document.createElement("button")
    let countDownSpan = document.createElement("span")

    resendBtn.textContent = "Resend"

    let reset = false;

    resendBtn.addEventListener("click", ((value) => {
        event.preventDefault()
        let count;
        if (reset) {
            setInterval()
        }


        countDownSpan.textContent = "10"
    }))

    btnContainer.append(resendBtn, countDownSpan)
    document.body.appendChild(btnContainer)


}