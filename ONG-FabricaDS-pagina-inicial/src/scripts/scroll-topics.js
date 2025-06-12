document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.topics-text-bottom a');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ativo-scroll');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); 

    links.forEach(link => observer.observe(link));
});
document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll('.scroll-animado-left');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    elementos.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll('.scroll-animado-right');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInRight');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    elementos.forEach(el => observer.observe(el));
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
document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll('.scroll-animado-cima');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInDown');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    elementos.forEach(el => observer.observe(el));
});