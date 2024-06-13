const form: HTMLElement | null = document.getElementById("register-form");
const first_name: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("first_name")
);
const first_name_error: HTMLElement | null =
  document.getElementById("first_name_error");
const last_name: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("last_name")
);
const last_name_error: HTMLElement | null =
  document.getElementById("last_name_error");
const email: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("email")
);
const email_error: HTMLElement | null = document.getElementById("email_error");
const date_of_birth: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("date_of_birth")
);
const date_of_birth_error: HTMLElement | null =
  document.getElementById("date_of_birth");
const password: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("password")
);
const password_error: HTMLElement | null =
  document.getElementById("password_error");
const confirm_password: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("confirm_password")
);
const confirm_password_error: HTMLElement | null = document.getElementById(
  "confirm_password_error"
);
const inputs: HTMLInputElement[] = [
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

const displayError = (node: HTMLElement) => {
  if (node == email) {
    if (email.validity.valueMissing) {
      email_error!.textContent = "Email address is required";
    } else if (email.validity.typeMismatch) {
      email_error!.textContent = "Valid email address is required";
    }
  }
};

// An eventListener is added to all inputs at once rather than each individually
inputs.forEach((input: HTMLInputElement) => {
  input?.addEventListener("input", (e: Event) => {
    // if valid, remove any error messages, else display error message
    if (input.validity.valid) {
      inputErrorMap.input!.textContent = "";
    } else {
      displayError(input);
    }
  });
});
