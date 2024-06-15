const loginForm = document.getElementById("login-form");
const email = (document.getElementById("email"));
const email_error = document.getElementById("email_error");
const password = (document.getElementById("password"));
const password_error = document.getElementById("password_error");
const displayError = (node) => {
    if (node === email) {
        if (email.validity.valueMissing) {
            email_error.textContent = "Email address is required!";
        }
        else if (email.validity.typeMismatch) {
            email_error.textContent = "Valid email address is required!";
        }
    }
    else if (node === password) {
        if (password.validity.valueMissing) {
            password_error.textContent = "Password cannot be blank!";
        }
        else if (password.validity.tooShort) {
            password_error.textContent = "Password is too short!";
        }
    }
};
email.addEventListener("input", (e) => {
    if (email.validity.valid) {
        email_error.textContent = "";
    }
    else {
        displayError(email);
    }
});
password.addEventListener("input", (e) => {
    if (password.validity.valid) {
        password_error.textContent = "";
    }
    else {
        displayError(password);
    }
});
export {};
//# sourceMappingURL=login.js.map