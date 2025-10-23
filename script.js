const navItems = document.querySelectorAll(".navbar-li");
const sections = document.querySelectorAll(".img-section");

navItems.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    navItems.forEach(nav => nav.classList.remove("nav-active"));
    sections.forEach(section => section.classList.remove("img-active"));

    item.classList.add("nav-active");

    const targetId = item.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("img-active");

      history.pushState(null, "", `#${targetId}`);
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const media = document.querySelectorAll(".gallery img, .gallery video");

  media.forEach(el => {
    if (el.complete) {
      el.classList.add("loaded");
    } else {
      el.addEventListener("load", () => el.classList.add("loaded"));
      el.addEventListener("loadeddata", () => el.classList.add("loaded"));
    }
  });
});