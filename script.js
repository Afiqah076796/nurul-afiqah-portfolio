// =========================
// DARK MODE
// =========================

function darkMode(){

    document.body.classList.toggle("dark-mode");

}

// =========================
// SCROLL FADE ANIMATION
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(
'.fade-section, .project-card, .timeline-card, .contact-card, .stat-box, .about-intro-card, .contact-form'
);

hiddenElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});
