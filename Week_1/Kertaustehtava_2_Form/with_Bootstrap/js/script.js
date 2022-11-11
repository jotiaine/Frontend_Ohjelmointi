"use strict";

// Version 2 with bootstrap
const usernameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const forgotBtn = document.getElementById("forgot-btn");
const rememberMe = document.getElementById("remember-me");

forgotBtn.addEventListener("click", () => {
  alert("Functionality will be updated");
});

function printAlert(string) {
  alert(string);
}

function emptyValues() {
  usernameEl.value = "";
  passwordEl.value = "";
}

loginBtn.addEventListener("click", function () {
  const isStudent = usernameEl.value === "opiskelija";
  const correctPassword = passwordEl.value === "lapinamk2022";
  const isEmpty = usernameEl.value === "" && passwordEl.value === "";
  if (isEmpty) {
    printAlert("Täytä kentät");
  } else if (isStudent && correctPassword) {
    printAlert("kirjautuminen onnistui");
  } else {
    emptyValues();
    usernameEl.focus();
    printAlert("kirjautuminen epäonnistui");
  }
});
