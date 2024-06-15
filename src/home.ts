const createHome = (): HTMLDivElement => {
  const newDiv = document.createElement("div");
  newDiv?.setAttribute("background-color", "black");

  return newDiv;
};

export default createHome;
