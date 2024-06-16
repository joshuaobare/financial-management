const navbar: HTMLElement = document.createElement("div");

const navbarLeft = document.createElement("div");
navbarLeft.textContent = "FINTRACK";
const navbarMid = document.createElement("div");
const navbarRight = document.createElement("div");
navbar.append(navbarLeft, navbarMid, navbarRight);

export default navbar;
