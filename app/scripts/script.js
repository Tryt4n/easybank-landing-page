import { handleHeaderAria, handleNavigationMenu, closeNavigationMenu } from "./nav.js";

handleNavigationMenu();

window.addEventListener("load", () => {
  handleHeaderAria();
});

window.addEventListener("resize", () => {
  closeNavigationMenu();
  handleHeaderAria();
});
