document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    function toggleMenu() {
        sidebar.classList.toggle("active");
    }

    menuToggle.addEventListener("click", toggleMenu);

    document.querySelectorAll("#sidebar a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            sidebar.classList.remove("active");
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

    