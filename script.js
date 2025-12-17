document.addEventListener('DOMContentLoaded', () => {
const slider = document.getElementById('comments-slider');
const scrollAmount = 600; // Cuánto se mueve en cada paso (ajusta si es necesario)
const intervalTime = 3000; // Tiempo en milisegundos para el auto-deslizamiento (3 segundos)
let direction = 1; // 1 para derecha, -1 para izquierda
let autoScrollInterval;


function startAutoScroll() {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
    }

    autoScrollInterval = setInterval(() => {
        const currentScroll = slider.scrollLeft;
        const maxScroll = slider.scrollWidth - slider.clientWidth;

  
        if (currentScroll >= maxScroll) {
            direction = -1; 
        } else if (currentScroll <= 0) {
            direction = 1; 
        }

        const newScroll = currentScroll + (scrollAmount * direction);
         
        slider.scrollTo({
            left: newScroll,
            behavior: 'smooth'
        });

    }, intervalTime);
}

function pauseAutoScroll() {
    clearInterval(autoScrollInterval);
}

// --- Event Listeners ---


startAutoScroll();

slider.addEventListener('mouseenter', pauseAutoScroll);


slider.addEventListener('mouseleave', () => {
    setTimeout(startAutoScroll, 1000); 
});


slider.addEventListener('scroll', () => {l
    pauseAutoScroll();
    
    clearTimeout(slider.scrollTimeout);
    slider.scrollTimeout = setTimeout(startAutoScroll, 1500);
});
});