import { handleHeaderAria, handleNavigationMenu, closeNavigationMenu } from "./nav.js";

AOS.init();

handleNavigationMenu();

window.addEventListener("load", () => {
  handleHeaderAria();
});

window.addEventListener("resize", () => {
  closeNavigationMenu();
  handleHeaderAria();
});
