// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active class
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Animation for feature cards
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    const modules = document.querySelectorAll('.module');
    const steps = document.querySelectorAll('.step');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });
    
    // Animate feature cards
    featureCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
    });
    
    // Animate modules
    modules.forEach(module => {
        module.style.opacity = "0";
        module.style.transform = "translateY(20px)";
        module.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(module);
    });
    
    // Animate steps
    steps.forEach(step => {
        step.style.opacity = "0";
        step.style.transform = "translateY(20px)";
        step.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(step);
    });
    
    // Generate QR code for ID card preview
    const qrElement = document.getElementById('qr-code');
    if (qrElement) {
        new QRCode(qrElement, {
            text: "https://smartid-system.com/student/SE2023-045",
            width: 60,
            height: 60,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
});

// Mobile menu toggle (can be added later)
function initMobileMenu() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.header-container').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });
}

// Initialize mobile menu if needed
if (window.innerWidth < 992) {
    initMobileMenu();
}