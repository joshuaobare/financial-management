import { InputErrorMap } from "./interfaces/errorMapInterface";
import "../styles/register.css";
import "../styles/main.css";
import "../styles/navbar.css";
import { config } from "./config";

interface PasswordRequirements {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  special: boolean;
}

const registerForm: HTMLFormElement = <HTMLFormElement>(
  document.getElementById("register-form")
);
const first_name: HTMLInputElement | null = <HTMLInputElement>(
  document.getElementById("first_name")
);
const first_name_error: HTMLElement | null =
  document.getElementById("first_name_error");
const last_name: HTMLInputElement | null = <HTMLInputElement>(
  document.getElementById("last_name")
);
const last_name_error: HTMLElement | null =
  document.getElementById("last_name_error");
const email: HTMLInputElement | null = <HTMLInputElement>(
  document.getElementById("email")
);
const email_error: HTMLElement | null = document.getElementById("email_error");
const date_of_birth: HTMLInputElement | null = <HTMLInputElement>(
  document.getElementById("date_of_birth")
);
const date_of_birth_error: HTMLElement | null =
  document.getElementById("date_of_birth");
const password: HTMLInputElement | null = <HTMLInputElement>(
  document.getElementById("password")
);
const password_error: HTMLElement | null =
  document.getElementById("password_error");
const confirm_password: HTMLInputElement | null = <HTMLInputElement>(
  document.getElementById("confirm_password")
);
const confirm_password_error: HTMLElement | null = document.getElementById(
  "confirm_password_error"
);

// Password requirement elements
const lengthReq: HTMLElement | null = document.getElementById("length-req");
const uppercaseReq: HTMLElement | null =
  document.getElementById("uppercase-req");
const lowercaseReq: HTMLElement | null =
  document.getElementById("lowercase-req");
const numberReq: HTMLElement | null = document.getElementById("number-req");
const specialReq: HTMLElement | null = document.getElementById("special-req");

const inputs: HTMLInputElement[] = [
  first_name,
  last_name,
  email,
  password,
  confirm_password,
  date_of_birth,
];

const inputErrorMap: InputErrorMap = {
  email: email_error,
  first_name: first_name_error,
  last_name: last_name_error,
  password: password_error,
  confirm_password: confirm_password_error,
  date_of_birth: date_of_birth_error,
};

// The minimum birthdate is set to 18 years ago
const currentDate = new Date();
if (date_of_birth) {
  date_of_birth.max = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  )
    .toISOString()
    .split("T")[0];
}

const validatePassword = (password: string): PasswordRequirements => {
  const requirements: PasswordRequirements = {
    length: password.length >= 12,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  // Update UI for each requirement
  if (lengthReq)
    lengthReq.className = `requirement ${
      requirements.length ? "valid" : "invalid"
    }`;
  if (uppercaseReq)
    uppercaseReq.className = `requirement ${
      requirements.uppercase ? "valid" : "invalid"
    }`;
  if (lowercaseReq)
    lowercaseReq.className = `requirement ${
      requirements.lowercase ? "valid" : "invalid"
    }`;
  if (numberReq)
    numberReq.className = `requirement ${
      requirements.number ? "valid" : "invalid"
    }`;
  if (specialReq)
    specialReq.className = `requirement ${
      requirements.special ? "valid" : "invalid"
    }`;

  return requirements;
};

const isPasswordValid = (requirements: PasswordRequirements): boolean => {
  return Object.values(requirements).every(Boolean);
};
const displayError = (node: HTMLElement) => {
  if (node === email) {
    if (email?.validity.valueMissing) {
      email_error!.textContent = "Email address is required!";
    } else if (email?.validity.typeMismatch) {
      email_error!.textContent = "Valid email address is required!";
    }
  } else if (node === first_name) {
    if (first_name?.validity.valueMissing) {
      first_name_error!.textContent = "First name cannot be blank!";
    } else if (first_name?.validity.tooShort) {
      first_name_error!.textContent = "First name too short!";
    }
  } else if (node === last_name) {
    if (last_name?.validity.valueMissing) {
      last_name_error!.textContent = "Last name cannot be blank!";
    } else if (last_name?.validity.tooShort) {
      last_name_error!.textContent = "Last name too short!";
    }
  } else if (node === date_of_birth) {
    if (date_of_birth?.validity.valueMissing) {
      date_of_birth_error!.textContent = "Invalid date!";
    }
  } else if (node === password) {
    if (password?.validity.valueMissing) {
      password_error!.textContent = "Password cannot be blank!";
    } else {
      const requirements = validatePassword(password.value);
      if (!isPasswordValid(requirements)) {
        password_error!.textContent = "Password must meet all requirements";
      }
    }
  } else if (node === confirm_password) {
    if (confirm_password?.validity.valueMissing) {
      confirm_password_error!.textContent = "Field cannot be blank!";
    } else if (password?.value !== confirm_password?.value) {
      confirm_password_error!.textContent = "Passwords must match!";
    }
  }
};

// Input event listeners
inputs.forEach((input: HTMLInputElement) => {
  input?.addEventListener("input", (e: Event) => {
    if (input.validity.valid) {
      inputErrorMap[input.id as keyof InputErrorMap]!.textContent = "";

      // Additional password validation if this is the password field
      if (input === password) {
        const requirements = validatePassword(input.value);
        if (!isPasswordValid(requirements)) {
          password_error!.textContent = "Password must meet all requirements";
        }
      }
    } else {
      displayError(input);
    }
  });
});

// Password-specific event listeners
password?.addEventListener("input", (e: Event) => {
  validatePassword(password.value);
  if (password.value === confirm_password?.value) {
    confirm_password_error!.textContent = "";
  }
});

confirm_password?.addEventListener("input", (e: Event) => {
  if (password?.value !== confirm_password.value) {
    displayError(confirm_password);
  } else {
    confirm_password_error!.textContent = "";
  }
});

// Form submission handler
registerForm?.addEventListener("submit", async (e: Event) => {
  e.preventDefault();
  let isValid = true;

  // Validate all inputs
  if (!first_name?.validity.valid) {
    displayError(first_name);
    isValid = false;
  }
  if (!last_name?.validity.valid) {
    displayError(last_name);
    isValid = false;
  }
  if (!email?.validity.valid) {
    displayError(email);
    isValid = false;
  }
  if (!date_of_birth?.validity.valid) {
    displayError(date_of_birth);
    isValid = false;
  }

  // Password validation
  if (
    password &&
    (!password.validity.valid ||
      !isPasswordValid(validatePassword(password.value)))
  ) {
    displayError(password);
    isValid = false;
  }

  // Confirm password validation
  if (
    !confirm_password?.validity.valid ||
    password?.value !== confirm_password?.value
  ) {
    displayError(confirm_password);
    isValid = false;
  }

  if (isValid) {
    try {
      const formData = {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        password: password.value,
        confirm_password: confirm_password.value,
        date_of_birth: date_of_birth.value,
      };
      console.log(formData);
      console.log(registerForm.action);
      const response = await fetch(`${config.BASE_URL}userCreate.php`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        alert("Registration successful!");
        (e.target as HTMLFormElement).reset();
      } else {
        alert(result.message);
        if (result.errors) {
          result.errors.forEach((error: string) => {
            if (password_error) password_error.textContent += error + "\n";
          });
        }
      }
    } catch (error) {
      console.log(
        "An error occurred during registration. Please try again.",
        error
      );
    }
  }
});
