var userLabel = document.getElementById("userLabel")
var username = document.getElementById("userName")
var passLabel = document.getElementById("passLabel")
var password = document.getElementById("password")
username.addEventListener("click", () => {
    userLabel.classList.add("active");
})

password.addEventListener("click", () => {
    passLabel.classList.add("active")
})

var newUserLabel = document.getElementById("newUserLabel")
var newUsername = document.getElementById("newUser")
var newPassLabel = document.getElementById("newPassLabel")
var newPassword = document.getElementById("newPass")
var confirmPassLabel = document.getElementById("confirmPassLabel");
var confirmPass = document.getElementById("confirmPass")
var newMailLabel = document.getElementById("newMailLabel")
var newMail = document.getElementById("newMail")

newUsername.addEventListener("click", () => {
    newUserLabel.classList.add("active");
})

newPassword.addEventListener("click", () => {
    newPassLabel.classList.add("active");
})

confirmPass.addEventListener("click", () => {
    confirmPassLabel.classList.add("active");

})

newMail.addEventListener("click", () => {
    newMailLabel.classList.add("active");
    if (newPassword.value != confirmPass.value) {
        newPassLabel.style.backgroundColor = "#ff1515"
        confirmPassLabel.style.backgroundColor = "#ff1515"
    } else if (newPassword.value === confirmPass.value) {
        newPassLabel.style.backgroundColor = "#39FF14"
        confirmPassLabel.style.backgroundColor = "#39FF14"
    }
})

const signUpForm = document.getElementById('signup-form');
const signInForm = document.getElementById('signin-form');
const formContainer = document.querySelector('.form-container');
const signUp = document.getElementById("signUp")
signUp.addEventListener("click", () => {
    formContainer.classList.add('active');
    userLabel.classList.remove("active");
    passLabel.classList.remove("active")
    username.value = ""
    password.value = ""
    setTimeout(() => {
        signInForm.style.display = "none"
        signUpForm.style.display = "flex"
    }, 300);
})
const signIn = document.getElementById("signIn")
signIn.addEventListener("click", () => {
        newUserLabel.classList.remove("active");
        newPassLabel.classList.remove("active");
        newMailLabel.classList.remove("active");
        newUsername.value = ""
        newPassword.value = ""
        newMail.value = ""
        setTimeout(() => {
            formContainer.classList.remove('active');
            signInForm.style.display = "flex"
            signUpForm.style.display = "none"
        }, 300);
    })
    /* 
    formContainer.addEventListener('mouseover', () => {
    });

    formContainer.addEventListener('mouseout', () => {
        formContainer.classList.remove('hover');
    }); */