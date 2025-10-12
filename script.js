const navItems = document.querySelectorAll(".navbar-li");
const sections = document.querySelectorAll(".img-section");

navItems.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();

        sections.forEach(section => section.classList.remove("img-active"));
        navItems.forEach(nav => nav.classList.remove("nav-active"));

        item.classList.add("nav-active");

        const targetId = item.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if(targetSection) {
            targetSection.classList.add("img-active");
        }
    });
});