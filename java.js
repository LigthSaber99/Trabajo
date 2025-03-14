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

    // Menú responsive en el lado derecho
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    function toggleMenu() {
        sidebar.classList.toggle("active");
    }

    menuToggle.addEventListener("click", toggleMenu);

    // Cerrar menú al hacer clic en un enlace y hacer scroll suave
    document.querySelectorAll("#sidebar a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                sidebar.classList.remove("active");
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Barra de progreso de scroll
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;
        let progress = (scrollTop / docHeight) * 100;
        document.getElementById("progress-bar").style.width = progress + "%";
    });
});

// 🔹 CSS Integrado en JavaScript
const style = document.createElement("style");
style.innerHTML = `
/* --- MENÚ RESPONSIVE (LADO DERECHO) --- */
#sidebar {
    position: fixed;
    right: -250px; /* Oculto */
    top: 0;
    width: 250px;
    height: 100%;
    background: #333;
    color: white;
    transition: right 0.3s ease;
    padding-top: 60px;
    z-index: 999;
}

#sidebar.active {
    right: 0;
}

#menu-toggle {
    position: fixed;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1000;
}

#menu-toggle img {
    width: 40px;
    height: 40px;
}

/* --- ESTILOS DEL MENÚ --- */
#sidebar a {
    display: block;
    padding: 15px 20px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
}

#sidebar a:hover {
    background: #575757;
}

/* --- BARRA DE PROGRESO --- */
#progress-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

#progress-bar {
    height: 5px;
    background: #4caf50;
    width: 0%;
    transition: width 0.2s ease;
}
`;
document.head.appendChild(style);
    