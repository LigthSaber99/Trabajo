
        document.addEventListener("DOMContentLoaded", function() {
            gsap.from(".fade-in", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
            
            gsap.utils.toArray(".section").forEach(section => {
                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1.5
                });
            });
        });
 