let userNameInput = document.querySelector("#username");
let userEmailInput = document.querySelector("#useremail");
let userPassInput = document.querySelector("#userpassword");
let signUpBtn = document.querySelector("#signUpBtn");
let submitMsg = document.querySelector("#submitMsg");
let LoginBTN = document.querySelector("#loginBtn");
let loginEmail = document.querySelector("#loginmail");
let loginPass = document.querySelector("#loginPass");
let welcome = document.querySelector("#welcome");
let userName = localStorage.getItem("username");
let users;

if (localStorage.getItem(`users`) == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
}

LoginBTN.addEventListener("click", function () {
  if (loginEmail.value == null || loginPass.value == null) {
    submitMsg.innerHTML = "all inputs reuired";
    submitMsg.style.color = "red";
  } else {
    for (let i = 0; i < users.length; i++) {
      if (
        loginEmail.value == users[i].useremail &&
        loginPass.value == users[i].password
      ) {
        console.log("exist");
        localStorage.setItem("username", users[i].username);
        LoginBTN.setAttribute("href", "./welcom.html");
        localStorage.setItem("username", users[i].username);
      } else {
        console.log("not-exist");
        submitMsg.innerHTML = "account is not exist please SignUP";
        submitMsg.style.color = "red";
      }
    }
  }
});

signUpBtn.addEventListener("click", function (e) {
  EmailExist();
  userInputValidation();
  if (userInputValidation() && EmailExist() != true) {
    var usersO = {
      username: userNameInput.value,
      useremail: userEmailInput.value,
      password: userPassInput.value,
    };
    users.push(usersO);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("sucess");
   signUpBtn.setAttribute("href","./login.html");
    clear();
    submitMsg.innerHTML = "sucess";
    submitMsg.style.color = "green";
  } else {
    console.log("error");
  }
});
function clear() {
  userEmailInput.value = null;
  userNameInput.value = null;
  userPassInput.value = null;
}

function EmailExist() {
  for (let i = 0; i < users.length; i++) {
    if (users[i].useremail == userEmailInput.value) {
      submitMsg.innerHTML = "email is already exist";
      submitMsg.style.color = "red";

      console.log("email is already exit");
      return true;
    } else {
      return false;
    }
  }
}
function userInputValidation() {
  userNameValidation();
  userEmailValidation();
  userPassValidation();
  inputsNull();
  if (
    userPassValidation() &&
    userEmailValidation() &&
    userNameValidation() &&
    inputsNull()
  ) {
    return true;
  } else {
    return false;
  }
}
function inputsNull() {
  if (
    userEmailInput.value == " " ||
    userEmailInput.value == " " ||
    userPassInput.value == ""
  ) {
    submitMsg.innerHTML = "all inputs are required";
    submitMsg.style.color = "red";

    submitMsg.style.color = "red";

    console.log("null");
    return false;
  } else {
    return true;
  }
}
function userNameValidation() {
  var regex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
  if (regex.test(userNameInput.value) && userNameInput.value != "") {
    return true;
  } else {
    console.log("name is wrong");
    return false;
  }
}
function userEmailValidation() {
  var regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;
  if (regex.test(userEmailInput.value) && userEmailInput.value != "") {
    return true;
  } else {
    console.log("email is wrong");

    return false;
  }
}
function userPassValidation() {
  var regex = /^.{1,8}$/;
  if (regex.test(userPassInput.value) && userPassInput.value != "") {
    return true;
  } else {
    console.log("pass is wrong");

    return false;
  }
}
function Welcome() {
  welcome.innerHTML = `welcome ${userName}`;
}
