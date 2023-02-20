const hamburgerBtn = document.querySelector("[data-hamburger-btn]");
const closeBtn = document.querySelector("[data-close-btn]");
const navMenu = document.querySelector("[data-navigation-header]");
const navMenuLink = navMenu.querySelectorAll("a");

export function handleNavigationMenu() {
  hamburgerBtn.addEventListener("click", () => {
    openNavigationMenu();
  });

  closeBtn.addEventListener("click", () => {
    closeNavigationMenu();
  });
}

export function handleHeaderAria() {
  if (window.innerWidth < 768) {
    hamburgerBtn.setAttribute("aria-hidden", false);
    hamburgerBtn.classList.remove("hide");
    navMenu.setAttribute("aria-expanded", false);
    navMenuLink.forEach((menuLink) => menuLink.setAttribute("tabindex", "-1"));
  } else {
    hamburgerBtn.setAttribute("aria-hidden", true);
    closeBtn.setAttribute("aria-hidden", true);
    hamburgerBtn.classList.add("hide");
    closeBtn.classList.add("hide");
    navMenu.removeAttribute("aria-expanded");
    navMenuLink.forEach((menuLink) => menuLink.removeAttribute("tabindex"));
  }
}

export function closeNavigationMenu() {
  closeBtn.classList.add("hide");
  hamburgerBtn.classList.remove("hide");
  navMenu.classList.add("hide-navigation");
  navMenu.setAttribute("aria-expanded", false);
  navMenuLink.forEach((menuLink) => menuLink.setAttribute("tabindex", "-1"));
  closeBtn.setAttribute("aria-hidden", true);
  hamburgerBtn.setAttribute("aria-hidden", false);
}

function openNavigationMenu() {
  hamburgerBtn.classList.add("hide");
  closeBtn.classList.remove("hide");
  navMenu.classList.remove("hide-navigation");
  navMenu.setAttribute("aria-expanded", true);
  navMenuLink.forEach((menuLink) => menuLink.removeAttribute("tabindex"));
  hamburgerBtn.setAttribute("aria-hidden", true);
  closeBtn.setAttribute("aria-hidden", false);
}
