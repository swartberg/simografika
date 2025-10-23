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

window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const targetNav = document.querySelector(`.navbar-li[data-target="${hash}"]`);
    const targetSection = document.getElementById(hash);

    if (targetNav && targetSection) {
      document.querySelectorAll(".navbar-li").forEach(nav => nav.classList.remove("nav-active"));
      document.querySelectorAll(".img-section").forEach(sec => sec.classList.remove("img-active"));
      targetNav.classList.add("nav-active");
      targetSection.classList.add("img-active");
    }
  }
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