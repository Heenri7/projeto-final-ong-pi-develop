function animateCounter(element, target) {
    let current = 0;
    const increment = target / 45; 
    function update() {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    update();
}

function handleCounters() {
    const counters = document.querySelectorAll('.contador');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        animateCounter(counter, target);
    });
}

let countersAnimated = false;
window.addEventListener('scroll', function() {
    const container = document.querySelector('.container-dados');
    const rect = container.getBoundingClientRect();
    if (!countersAnimated && rect.top < window.innerHeight && rect.bottom >= 0) {
        handleCounters();
        countersAnimated = true;
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll('.scroll-animado-fade');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    elementos.forEach(el => observer.observe(el));
});