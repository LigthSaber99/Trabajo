
document.addEventListener("DOMContentLoaded", function () {
    // Definir valores dinámicos según el tamaño de la pantalla
    const yValue = window.innerWidth < 768 ? 50 : 100; // Menos desplazamiento en móviles

    // Animación de entrada general
    gsap.from(".fade-in", { opacity: 0, y: yValue, duration: 1, stagger: 0.3 });

    // Animaciones de las secciones al hacer scroll
    gsap.utils.toArray(".section, .seccion").forEach((seccion) => {
        gsap.fromTo(seccion,
            { opacity: 0, y: yValue },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1.5, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: seccion,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                    onEnter: () => gsap.fromTo(seccion, { opacity: 0, y: yValue }, { opacity: 1, y: 0, duration: 1 }),
                    onEnterBack: () => gsap.fromTo(seccion, { opacity: 0, y: yValue }, { opacity: 1, y: 0, duration: 1 })
                }
            }
        );
    });
});
