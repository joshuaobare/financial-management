import "../../styles/navbar.css";
import "../../styles/main.css";
import { UserService } from "../services/UserService";
import { User } from "../interfaces/userInterface";
import { config } from "../config";

const userService = new UserService();
const createNavComponent = (userData: User | null) => {
  const navbar: HTMLElement = document.createElement("div");
  navbar.className = "navbar";

  const navbarLeft = document.createElement("div");
  navbarLeft.textContent = "FINTRACK";
  navbarLeft.className = "navbar-left";
  const navbarMid = document.createElement("div");
  navbarMid.className = "navbar-mid";
  const navbarRight = navbarRightSection(userData);
  navbar.append(navbarLeft, navbarMid, navbarRight);

  return navbar;
};

const navbarRightSection = (userData: User | null) => {
  const navbarRight = document.createElement("div");
  navbarRight.className = "navbar-right";

  if (userData) {
    const userName = document.createElement("a");
    userName.href = `profile.php?id=${userData.user_id}`;
    userName.className = "navbar-link-username";
    userName.textContent = `${userData.first_name} ${userData.last_name}`;

    const logout = document.createElement("a");
    logout.href = `login.php`;
    logout.className = "navbar-link";
    logout.textContent = "Logout";
    navbarRight.append(userName, logout);
    logout.addEventListener("click", () => {
      localStorage.removeItem("user_id");
      logoutSession()
    });
  } else {
    const signIn = document.createElement("a");
    signIn.textContent = "Sign In";
    signIn.href = "login.php";
    signIn.className = "navbar-link";
    const register = document.createElement("a");
    register.textContent = "Register";
    register.href = "register.php";
    register.className = "navbar-link";
    navbarRight.append(signIn, register);
  }

  return navbarRight;
};

const logoutSession = async () => {
  try {
    const request = await fetch(`${config.BASE_URL}logout.php`);
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export { createNavComponent };
