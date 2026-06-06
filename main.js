let signUpPortal = document.getElementById("sign-up-portal");

let username = document.getElementById("username-input")
let email = document.getElementById("email-input")
let password = document.getElementById("password-input")
let termsInput = document.getElementById("terms-input")

let emailError = document.getElementById("email-error")
let usernameError = document.getElementById("username-error")
let passwordError = document.getElementById("password-error")
let termsError = document.getElementById("terms-error")


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
    termsError.textContent = ""
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
    if (!termsInput.checked) {
        termsError.textContent = "Agree with the terms"
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
        let count = 10
        countDownSpan.textContent = count

        const timer = setInterval(() => {
            count--
            resendBtn.disabled = true

            if (count <= 0) {
                clearInterval(timer)
                resendBtn.disabled = false
                alert("Submition has been resent!")
            }
            countDownSpan.textContent = count

        }, 1000)
    }))

    btnContainer.append(resendBtn, countDownSpan)
    document.body.appendChild(btnContainer)
}


const studentDatabase = [
    { "first-name": "Bayanda", "last-name": "Zuma", age: 18, email: "zuma123@gmail.com", "course": "Cyber Security" },
    { "first-name": "Sanele", "last-name": "Mbatha", age: 20, email: "mbata123@gmail.com", "course": "Administrator" },
    { "first-name": "Zanele", "last-name": "Mthembu", age: 30, email: "mazet23@gmail.com", "course": "Medicine" },
    { "first-name": "Snethemba", "last-name": "Goqo", age: 26, email: "sne@gmail.com", "course": "Law" },
    { "first-name": "Neliswa", "last-name": "Ngobese", age: 21, email: "mangobese90@gmail.com", "course": "Software Development" },
]

// console.log(studentDatabase[0])