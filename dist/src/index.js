import createHome from "./home.js";
const container = document.getElementById("container");
const homeBtn = document.getElementById("home-btn");
homeBtn === null || homeBtn === void 0 ? void 0 : homeBtn.addEventListener("click", (e) => {
    const home = createHome();
    container === null || container === void 0 ? void 0 : container.replaceChildren();
    container === null || container === void 0 ? void 0 : container.appendChild(home);
});
//# sourceMappingURL=index.js.map