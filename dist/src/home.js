const createHome = () => {
    const newDiv = document.createElement("div");
    //newDiv?.setAttribute("background-color", "black");
    const heading = document.createElement("h1");
    heading.textContent = "HOME HEADING";
    newDiv.appendChild(heading);
    return newDiv;
};
export default createHome;
//# sourceMappingURL=home.js.map