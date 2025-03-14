ddocument.addEventListener("DOMContentLoaded", function () {
    // Detectar si es móvil
    const isMobile = window.innerWidth < 768;
    const yValue = isMobile ? 30 : 100;
    const durationValue = isMobile ? 1 : 1.5;

    // Animaciones de entrada
    gsap.from(".fade-in", { opacity: 0, y: yValue, duration: durationValue, stagger: 0.3 });

    // Animaciones de scroll
    gsap.utils.toArray(".section").forEach((seccion) => {
        gsap.fromTo(seccion,
            { opacity: 0, y: yValue },
            { 
                opacity: 1, 
                y: 0, 
                duration: durationValue, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: seccion,
                    start: isMobile ? "top 90%" : "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    });

    // Menú responsive (siempre funcional)
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeMenu = document.getElementById("close-menu");

    // Asegurar que el menú funcione siempre
    function abrirMenu() {
        sidebar.style.left = "0";
    }

    function cerrarMenu() {
        sidebar.style.left = "-250px";
    }

    menuToggle.addEventListener("click", abrirMenu);
    closeMenu.addEventListener("click", cerrarMenu);

    document.querySelectorAll("#sidebar a").forEach(link => {
        link.addEventListener("click", cerrarMenu);
    });

    // Barra de progreso
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;
        let progress = (scrollTop / docHeight) * 100;
        document.getElementById("progress-bar").style.width = progress + "%";
    });
});
