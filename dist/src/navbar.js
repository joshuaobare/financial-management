const navbar = document.createElement("nav");
navbar.classList.add("main-nav");
navbar.setAttribute("background-color", "black");
navbar.setAttribute("width", "100%");
const navbarLeft = document.createElement("div");
navbarLeft.textContent = "FINTRACK";
const navbarMid = document.createElement("div");
const navbarRight = document.createElement("div");
navbar.append(navbarLeft, navbarMid, navbarRight);
export default navbar;
//# sourceMappingURL=navbar.js.map