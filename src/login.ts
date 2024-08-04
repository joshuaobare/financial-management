import "../styles/login.css";
import "../styles/main.css";
import "../styles/navbar.css";

const loginForm: HTMLElement | null = document.getElementById("login-form");
const email: HTMLInputElement | null = <HTMLInputElement>(
  document.getElementById("email")
);
const email_error: HTMLElement | null = document.getElementById("email_error");
const password: HTMLInputElement | null = <HTMLInputElement>(
  document.getElementById("password")
);
const password_error: HTMLElement | null =
  document.getElementById("password_error");

const displayError = (node: HTMLElement) => {
  if (node === email) {
    if (email.validity.valueMissing) {
      email_error!.textContent = "Email address is required!";
    } else if (email.validity.typeMismatch) {
      email_error!.textContent = "Valid email address is required!";
    }
  } else if (node === password) {
    if (password.validity.valueMissing) {
      password_error!.textContent = "Password cannot be blank!";
    } else if (password.validity.tooShort) {
      password_error!.textContent = "Password is too short!";
    }
  }
};

email?.addEventListener("input", (e: Event) => {
  if (email.validity.valid) {
    email_error!.textContent = "";
  } else {
    displayError(email);
  }
});

password?.addEventListener("input", (e: Event) => {
  if (password.validity.valid) {
    password_error!.textContent = "";
  } else {
    displayError(password);
  }
});
