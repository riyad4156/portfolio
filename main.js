// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Loader animation
window.addEventListener('load', () => {
    gsap.to('#loader', {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            document.getElementById('loader').style.display = 'none';
        }
    });
});

// Hero section animations
gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5
});

gsap.from('.hero-image', {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.8
});

// Animated image section
gsap.to('.animated-image', {
    x: '-100%',
    ease: 'none',
    scrollTrigger: {
        trigger: '.animated-image-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project card animations
gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        delay: index * 0.2
    });
});
// Testimonial carousel animation
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
    gsap.to(testimonials[currentTestimonial], {
        opacity: 0,
        x: -50,
        duration: 0.5,
        onComplete: () => {
            gsap.set(testimonials[currentTestimonial], { display: 'none' });
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            gsap.set(testimonials[currentTestimonial], { display: 'block', x: 50, opacity: 0 });
            gsap.to(testimonials[currentTestimonial], {
                opacity: 1,
                x: 0,
                duration: 0.5
            });
        }
    });
}

gsap.set(testimonials, { display: 'none' });
gsap.set(testimonials[0], { display: 'block' });

const testimonialInterval = setInterval(showNextTestimonial, 5000);

// Optional: Pause animation on hover
document.querySelector('.testimonial-container').addEventListener('mouseenter', () => clearInterval(testimonialInterval));
document.querySelector('.testimonial-container').addEventListener('mouseleave', () => testimonialInterval = setInterval(showNextTestimonial, 5000));


// Testimonial entrance animation
gsap.utils.toArray('.testimonial').forEach((testimonial, index) => {
    gsap.from(testimonial, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
            trigger: testimonial,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
        },
        delay: index * 0.2
    });
});


// Contact form animations
const formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input, { scale: 1.05, duration: 0.3 });
    });

    input.addEventListener('blur', () => {
        gsap.to(input, { scale: 1, duration: 0.3 });
    });
});

// Form submission and validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    formInputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            gsap.to(input, {
                x: [-10, 10, -10, 10, 0],
                duration: 0.4,
                ease: "power2.inOut"
            });
        }
    });

    if (isValid) {
        // Here you would typically send the form data to a server
        alert('Form submitted successfully!');
        this.reset();
    }
});

// Parallax scrolling effect
gsap.to('.hero', {
    backgroundPosition: '50% 100%',
    ease: "none",
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// contact input
document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("preview");
    const input = document.getElementById("fileInput");
    const button = document.getElementById("submit")
    
    input.addEventListener("change", function() {
       const file = this.files[0];
       if (file) {
           const reader = new FileReader();
           reader.onload = function(e) {
               image.src = e.target.result;
           };
           reader.readAsDataURL(file);
       }
    });
    });
