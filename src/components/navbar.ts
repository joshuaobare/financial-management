import "../../styles/navbar.css";

const navbar: HTMLElement = document.createElement("div");
navbar.className = "navbar";

const navbarLeft = document.createElement("div");
navbarLeft.textContent = "FINTRACK";
navbarLeft.className = "navbar-left";
const navbarMid = document.createElement("div");
navbarMid.className = "navbar-mid";
const navbarRight = document.createElement("div");
navbarRight.className = "navbar-right";
navbar.append(navbarLeft, navbarMid, navbarRight);

export { navbar };
