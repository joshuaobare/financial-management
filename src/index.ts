import createHome from "./home.js";

const container = document.getElementById("container");
const homeBtn = document.getElementById("home-btn");

homeBtn?.addEventListener("click", (e: Event) => {
  const home = createHome();
  container?.replaceChildren();
  container?.appendChild(home);
});
