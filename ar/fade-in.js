document.addEventListener('DOMContentLoaded', () => {
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-section {
            opacity: 0;
            transform: translateY(15px);
            transition: all 0.8s ease-out;
        }

        .animate-section.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .animate-item {
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.6s ease-out;
        }

        .animate-item.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Add animation classes to sections
    const sections = document.querySelectorAll('section:not(.contact-us)');
    sections.forEach(section => {
        section.classList.add('animate-section');
    });

    // Add animation classes to items
    const items = document.querySelectorAll('.meeting-item, .reason-box');
    items.forEach(item => {
        item.classList.add('animate-item');
    });

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // For items, add a small delay between each
                if (entry.target.classList.contains('animate-item')) {
                    const items = entry.target.parentElement.querySelectorAll('.animate-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100);
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe sections and items
    sections.forEach(section => observer.observe(section));
    items.forEach(item => observer.observe(item));
});