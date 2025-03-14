document.addEventListener("DOMContentLoaded", function () {
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

    // Menú responsive
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    function toggleMenu() {
        if (sidebar.classList.contains("active")) {
            sidebar.classList.remove("active");
        } else {
            sidebar.classList.add("active");
        }
    }

    menuToggle.addEventListener("click", toggleMenu);

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll("#sidebar a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el salto inmediato
            const targetId = this.getAttribute("href"); // Obtiene el ID de la sección
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                sidebar.classList.remove("active"); // Cierra el menú
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajusta la posición
                    behavior: "smooth" // Desplazamiento suave
                });
            }
        });
    });

    // Barra de progreso
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;
        let progress = (scrollTop / docHeight) * 100;
        document.getElementById("progress-bar").style.width = progress + "%";
    });
});
