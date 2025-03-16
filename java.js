document.addEventListener("DOMContentLoaded", function () {
    // Detectar si es móvil
    const isMobile = window.innerWidth <= 768;
    const yValue = isMobile ? 30 : 100;
    const durationValue = isMobile ? 1 : 1.5;

    // Animaciones de entrada
    gsap.from(".fade-in", { opacity: 0, y: yValue, duration: durationValue, stagger: 0.3 });

    // Animaciones de scroll
    gsap.utils.toArray(".section").forEach(section => {
        gsap.fromTo(section,
            { opacity: 0, y: yValue },
            { 
                opacity: 1, 
                y: 0, 
                duration: durationValue, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: isMobile ? "top 90%" : "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    });
    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.getElementById("menu-toggle");
        const sidebar = document.getElementById("sidebar");
        const closeMenu = document.getElementById("close-menu");
        const body = document.body;
    
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("active");
            body.classList.toggle("no-scroll");
        });
    
        closeMenu.addEventListener("click", () => {
            sidebar.classList.remove("active");
            body.classList.remove("no-scroll");
        });
    
        document.querySelectorAll("#sidebar a").forEach(link => {
            link.addEventListener("click", () => {
                sidebar.classList.remove("active");
                body.classList.remove("no-scroll");
            });
        });
    });
    
    // Menú responsive
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeMenu = document.getElementById("close-menu");
    const body = document.body;

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        body.classList.toggle("no-scroll");
    });

    closeMenu.addEventListener("click", () => {
        sidebar.classList.remove("active");
        body.classList.remove("no-scroll");
    });

    // Cerrar menú al hacer clic en un enlace y hacer scroll suave
    document.querySelectorAll("#sidebar a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));

            if (targetSection) {
                sidebar.classList.remove("active");
                body.classList.remove("no-scroll");
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Barra de progreso de scroll
    const progressBar = document.getElementById("progress-bar");
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });

    // Agregar estilos dinámicamente
    const style = document.createElement("style");
    style.innerHTML = `
    /* --- MENÚ RESPONSIVE (LADO DERECHO) --- */
    #sidebar {
        position: fixed;
        right: -250px;
        top: 0;
        width: 250px;
        height: 100%;
        background: #333;
        color: white;
        transition: right 0.3s ease;
        padding-top: 60px;
        z-index: 999;
        display: flex;
        flex-direction: column;
        align-items: center;
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

    #close-menu {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
    }

    /* --- ESTILOS DEL MENÚ --- */
    #sidebar a {
        display: block;
        padding: 15px 20px;
        color: white;
        text-decoration: none;
        font-size: 18px;
        text-align: center;
        width: 100%;
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
    
    /* Evitar scroll cuando el menú está activo */
    .no-scroll {
        overflow: hidden;
    }
    `;
    document.head.appendChild(style);
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", function() {
            modal.classList.add("active");
            modalImg.src = this.src;
        });
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener("click", function(e) {
        if (e.target !== modalImg) {
            modal.classList.remove("active");
        }
    });
});