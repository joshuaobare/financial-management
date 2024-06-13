const form = document.getElementById("register-form");
const first_name = (document.getElementById("first_name"));
const first_name_error = document.getElementById("first_name_error");
const last_name = (document.getElementById("last_name"));
const last_name_error = document.getElementById("last_name_error");
const email = (document.getElementById("email"));
const email_error = document.getElementById("email_error");
const date_of_birth = (document.getElementById("date_of_birth"));
const date_of_birth_error = document.getElementById("date_of_birth");
const password = (document.getElementById("password"));
const password_error = document.getElementById("password_error");
const confirm_password = (document.getElementById("confirm_password"));
const confirm_password_error = document.getElementById("confirm_password_error");
const inputs = [
    first_name,
    last_name,
    email,
    password,
    confirm_password,
    date_of_birth,
];
const inputErrorMap = {
    email: email_error,
    first_name: first_name_error,
    last_name: last_name_error,
    password: password_error,
    confirm_password: confirm_password_error,
    date_of_birth: date_of_birth_error,
};
0;
const displayError = (node) => {
    if (node === email) {
        if (email.validity.valueMissing) {
            email_error.textContent = "Email address is required";
        }
        else if (email.validity.typeMismatch) {
            email_error.textContent = "Valid email address is required";
        }
    }
    else if (node === first_name) {
        if (first_name.validity.valueMissing) {
            first_name_error.textContent = "First name cannot be blank";
        }
        else if (first_name.validity.tooShort) {
            first_name_error.textContent = "First name too short";
        }
    }
    else if (node === last_name) {
        if (last_name.validity.valueMissing) {
            last_name_error.textContent = "Last name cannot be blank";
        }
        else if (last_name.validity.tooShort) {
            last_name_error.textContent = "Last name too short";
        }
    }
    else if (node === date_of_birth) {
        if (date_of_birth.validity.valueMissing) {
            last_name_error.textContent = "Invalid date";
        }
    }
    else if (node === password) {
        if (last_name.validity.valueMissing) {
            last_name_error.textContent = "Password cannot be blank";
        }
        else if (last_name.validity.tooShort) {
            last_name_error.textContent = "Password too short";
        }
    }
    else if (node === confirm_password) {
    }
};
// An eventListener is added to all inputs at once rather than each individually
inputs.forEach((input) => {
    input === null || input === void 0 ? void 0 : input.addEventListener("input", (e) => {
        // if valid, remove any error messages, else display error message
        if (input.validity.valid) {
            // the corresponding errorNode is retrieved and emptied
            inputErrorMap[input.id].textContent = "";
        }
        else {
            displayError(input);
        }
    });
});
//# sourceMappingURL=register.js.map