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

// The minimum birthdate is set to 18 years ago
const currentDate = new Date();
date_of_birth.max = new Date(
  currentDate.getFullYear() - 18,
  currentDate.getMonth(),
  currentDate.getDate()
)
  .toISOString()
  .split("T")[0];

const displayError = (node: HTMLElement) => {
  if (node === email) {
    if (email.validity.valueMissing) {
      email_error!.textContent = "Email address is required!";
    } else if (email.validity.typeMismatch) {
      email_error!.textContent = "Valid email address is required!";
    }
  } else if (node === first_name) {
    if (first_name.validity.valueMissing) {
      first_name_error!.textContent = "First name cannot be blank!";
    } else if (first_name.validity.tooShort) {
      first_name_error!.textContent = "First name too short!";
    }
  } else if (node === last_name) {
    if (last_name.validity.valueMissing) {
      last_name_error!.textContent = "Last name cannot be blank!";
    } else if (last_name.validity.tooShort) {
      last_name_error!.textContent = "Last name too short!";
    }
  } else if (node === date_of_birth) {
    if (date_of_birth.validity.valueMissing) {
      date_of_birth_error!.textContent = "Invalid date!";
    }
  } else if (node === password) {
    if (password.validity.valueMissing) {
      password_error!.textContent = "Password cannot be blank!";
    } else if (password.validity.tooShort) {
      password_error!.textContent = "Password is too short!";
    }
  } else if (node === confirm_password) {
    confirm_password_error!.textContent = "Passwords must match!";
  }
};

// An eventListener is added to all inputs at once rather than each individually
inputs.forEach((input: HTMLInputElement) => {
  input?.addEventListener("input", (e: Event) => {
    // if valid, remove any error messages, else display error message
    if (input.validity.valid) {
      // the corresponding errorNode is retrieved and emptied
      inputErrorMap[input.id]!.textContent = "";
    } else {
      displayError(input);
    }
  });
});

confirm_password.addEventListener("input", (e: Event) => {
  console.log(password.textContent, confirm_password.textContent);
  if (password.value !== confirm_password.value) {
    displayError(password);
    displayError(confirm_password);
  } else {
    confirm_password_error!.textContent = "";
  }
});

password.addEventListener("input", (e: Event) => {
  if (password.value === confirm_password.value) {
    confirm_password_error!.textContent = "";
  }
});
