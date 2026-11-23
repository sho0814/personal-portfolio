"use strict";

const navigationLinks = document.querySelectorAll("nav a");

function updateCurrentLink() {
  const currentHash = window.location.hash || "#home";

  for (const link of navigationLinks) {
    if (link.hash === currentHash) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  }
}

window.addEventListener("hashchange", updateCurrentLink);
updateCurrentLink();
