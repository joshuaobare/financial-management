import "../../styles/navbar.css";
import { UserService } from "../services/UserService";

const createNavComponent = () => {
  const navbar: HTMLElement = document.createElement("div");
  navbar.className = "navbar";

  const navbarLeft = document.createElement("div");
  navbarLeft.textContent = "FINTRACK";
  navbarLeft.className = "navbar-left";
  const navbarMid = document.createElement("div");
  navbarMid.className = "navbar-mid";
  const navbarRight = navbarRightSection();
  navbar.append(navbarLeft, navbarMid, navbarRight);

  return navbar;
};

const navbarRightSection = () => {
  const navbarRight = document.createElement("div");
  navbarRight.className = "navbar-right";

  const userId = localStorage.getItem("user_id");
  if (userId) {
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

export { createNavComponent };
