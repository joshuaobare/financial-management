const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
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

email?.addEventListener("input", (e: Event) => {
  if (email.validity.valid) {
    email_error!.textContent = "";
  }
});
