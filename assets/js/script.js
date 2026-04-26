// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.section-title, .about-text, .highlight-card, .timeline-item, .education-card, .certificate-card, .skill-item, .advantage-item'
    );
    
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Animate skill bars when in view
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Mohon lengkapi semua field!', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Mohon masukkan email yang valid!', 'error');
            return;
        }
        
        // Show success message
        showNotification('Pesan Anda telah terkirim! Saya akan segera menghubungi Anda.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification function
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        max-width: 300px;
    `;
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #00b09b, #96c93d)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
    }
    
    // Add to body
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Typing effect for hero title
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let index = 0;
        
        function typeWriter() {
            if (index < originalText.length) {
                heroTitle.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.highlight-card, .certificate-card, .advantage-item, .education-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Timeline animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        timelineObserver.observe(item);
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Image error handling
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            if (this.nextElementSibling && this.nextElementSibling.classList.contains('profile-icon')) {
                this.nextElementSibling.style.display = 'flex';
            }
        });
    });
});

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Scroll-based animations
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Add CSS for animations
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .notification {
        font-family: 'Inter', sans-serif;
    }
    
    @media (max-width: 768px) {
        .notification {
            right: 10px;
            left: 10px;
            max-width: none;
            transform: translateY(-100px);
        }
        
        .notification.show {
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(additionalStyles);

// Mobile touch support
document.addEventListener('DOMContentLoaded', () => {
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // Add touch feedback for buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            button.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }
});

// Print styles
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// Add print styles
const printStyles = document.createElement('style');
printStyles.textContent = `
    @media print {
        .navbar, .hamburger, .hero-buttons, .contact-form {
            display: none !important;
        }
        
        .hero {
            background: white !important;
            color: black !important;
            padding: 40px 0 !important;
        }
        
        .hero-title, .hero-subtitle, .hero-description {
            color: black !important;
        }
        
        section {
            padding: 40px 0 !important;
            break-inside: avoid;
        }
        
        .timeline-item, .highlight-card, .certificate-card, .advantage-item {
            break-inside: avoid;
        }
    }
`;
document.head.appendChild(printStyles);

// Carousel Functionality
class Carousel {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.carousel-track');
        this.slides = container.querySelectorAll('.highlight-card');
        this.prevBtn = container.querySelector('.carousel-btn-prev');
        this.nextBtn = container.querySelector('.carousel-btn-next');
        this.indicators = container.querySelectorAll('.indicator');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.autoSlideInterval = null;
        this.isPaused = false;
        
        this.init();
    }
    
    init() {
        // Set initial position
        this.updateCarousel();
        
        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Add indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Add touch/swipe support for mobile
        this.addTouchSupport();
        
        // Add keyboard navigation
        this.addKeyboardSupport();
        
        // Start auto-slide
        this.startAutoSlide();
        
        // Pause on hover
        this.container.addEventListener('mouseenter', () => this.pauseAutoSlide());
        this.container.addEventListener('mouseleave', () => this.resumeAutoSlide());
        
        // Pause on touch
        this.container.addEventListener('touchstart', () => this.pauseAutoSlide());
        this.container.addEventListener('touchend', () => this.resumeAutoSlide());
    }
    
    updateCarousel() {
        const slideWidth = 100; // Percentage
        const offset = -this.currentSlide * slideWidth;
        this.track.style.transform = `translateX(${offset}%)`;
        
        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });
        
        // Remove button opacity changes since carousel now loops
        this.prevBtn.style.opacity = '1';
        this.nextBtn.style.opacity = '1';
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
        } else {
            this.currentSlide = 0; // Loop back to first slide
        }
        this.updateCarousel();
    }
    
    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
        } else {
            this.currentSlide = this.totalSlides - 1; // Loop to last slide
        }
        this.updateCarousel();
    }
    
    goToSlide(slideIndex) {
        if (slideIndex >= 0 && slideIndex < this.totalSlides) {
            this.currentSlide = slideIndex;
            this.updateCarousel();
            // Reset auto-slide when manually changing slides
            this.resetAutoSlide();
        }
    }
    
    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            if (!this.isPaused) {
                this.nextSlide();
            }
        }, 3500); // 3.5 detik
    }
    
    pauseAutoSlide() {
        this.isPaused = true;
    }
    
    resumeAutoSlide() {
        this.isPaused = false;
    }
    
    resetAutoSlide() {
        clearInterval(this.autoSlideInterval);
        this.startAutoSlide();
    }
    
    stopAutoSlide() {
        clearInterval(this.autoSlideInterval);
    }
    
    addTouchSupport() {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const diff = startX - currentX;
            const threshold = 50; // Minimum swipe distance
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }
    
    addKeyboardSupport() {
        document.addEventListener('keydown', (e) => {
            // Only respond if carousel is in viewport
            const rect = this.container.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (!isInViewport) return;
            
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        new Carousel(carouselContainer);
    }
});

// Documentation Modal functionality
let currentDocSlide = 0;
let docCarouselData = {};

// Documentation data for each experience
const documentationData = {
    bki: {
        title: "Dokumentasi - PT. Biro Klasifikasi Indonesia",
        images: [
            "assets/images/bki-1.jpg",
            "assets/images/bki-2.jpg", 
            "assets/images/bki-3.jpg",
            "assets/images/bki-4.jpg"
        ],
        description: "Dokumentasi kegiatan sebagai Finance Intern di PT. Biro Klasifikasi Indonesia. Meliputi proses administrasi perpajakan menggunakan Coretax, rekonsiliasi data pajak, dan pelaporan SPT Masa."
    },
    dprd: {
        title: "Dokumentasi - Sekretariat DPRD Sulawesi Selatan",
        images: [
            "assets/images/dprd-1.jpg",
            "assets/images/DPRD-01.jpg",
            "assets/images/dprd-3.jpg"
        ],
        description: "Dokumentasi kegiatan sebagai Program and Finance Intern di Sekretariat DPRD Sulawesi Selatan. Meliputi penggunaan sistem SIADINDA, verifikasi dokumen keuangan, dan rekonsiliasi data wajib pajak."
    },
    btn: {
        title: "Dokumentasi - PT. Bank Tabungan Negara",
        images: [
            "assets/images/BTN-01.jpeg",
            "assets/images/BTN-02.jpeg",
            "assets/images/BTN-03.jpeg",
            "assets/images/BTN-04.jpeg"
        ],
        description: "Dokumentasi kegiatan sebagai General Support Intern di PT. Bank Tabungan Negara. Meliputi pengarsipan dokumen, penginputan interim, dan kegiatan magang."
    }
};

function openDocumentation(experienceId) {
    const modal = document.getElementById('docModal');
    const data = documentationData[experienceId];
    
    if (!data) return;
    
    docCarouselData = data;
    currentDocSlide = 0;
    
    // Update modal title
    document.getElementById('docModalTitle').textContent = data.title;
    
    // Update description
    document.getElementById('docModalDescription').textContent = data.description;
    
    // Load images
    loadDocImages();
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDocumentation() {
    const modal = document.getElementById('docModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function loadDocImages() {
    const track = document.getElementById('docCarouselTrack');
    const indicators = document.getElementById('docCarouselIndicators');
    
    // Clear existing content
    track.innerHTML = '';
    indicators.innerHTML = '';
    
    // Add images
    docCarouselData.images.forEach((imageSrc, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'doc-carousel-slide';
        
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Documentation image ${index + 1}`;
        img.onerror = function() {
            this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f8f9fa"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23666" font-family="Arial" font-size="16">Gambar tidak tersedia</text></svg>';
        };
        
        slide.appendChild(img);
        track.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('button');
        indicator.className = 'doc-indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.onclick = () => goToDocSlide(index);
        indicators.appendChild(indicator);
    });
    
    updateDocCarousel();
}

function changeDocSlide(direction) {
    const totalSlides = docCarouselData.images.length;
    
    if (direction === 1) {
        currentDocSlide = (currentDocSlide + 1) % totalSlides;
    } else {
        currentDocSlide = (currentDocSlide - 1 + totalSlides) % totalSlides;
    }
    
    updateDocCarousel();
}

function goToDocSlide(slideIndex) {
    currentDocSlide = slideIndex;
    updateDocCarousel();
}

function updateDocCarousel() {
    const track = document.getElementById('docCarouselTrack');
    const indicators = document.querySelectorAll('.doc-indicator');
    
    // Update track position
    const slideWidth = 100;
    const offset = -currentDocSlide * slideWidth;
    track.style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentDocSlide);
    });
}

// Keyboard navigation for documentation modal
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('docModal');
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeDocumentation();
    } else if (e.key === 'ArrowLeft') {
        changeDocSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeDocSlide(1);
    }
});

// Touch/swipe support for documentation carousel
let docTouchStartX = 0;
let docTouchCurrentX = 0;
let docIsDragging = false;

const docTrack = document.getElementById('docCarouselTrack');
if (docTrack) {
    docTrack.addEventListener('touchstart', (e) => {
        docTouchStartX = e.touches[0].clientX;
        docIsDragging = true;
    });
    
    docTrack.addEventListener('touchmove', (e) => {
        if (!docIsDragging) return;
        docTouchCurrentX = e.touches[0].clientX;
    });
    
    docTrack.addEventListener('touchend', () => {
        if (!docIsDragging) return;
        docIsDragging = false;
        
        const diff = docTouchStartX - docTouchCurrentX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                changeDocSlide(1);
            } else {
                changeDocSlide(-1);
            }
        }
    });
}

// Certificate Modal functionality
const certificateData = {
    'tax-brevet': {
        title: 'Tax Brevet A & B Training Certificate',
        image: 'assets/images/Sertifikat-1.JPG',
        name: 'Tax Brevet A & B Training Certificate',
        description: 'Sertifikasi kompetensi dalam perpajakan Indonesia. Mencakup perpajakan orang pribadi dan badan usaha, serta pelaporan pajak yang komprehensif.',
        year: '2024'
    },
    'financial-accounting': {
        title: 'Certificate of Competence in Institutional Financial Accounting',
        image: 'assets/images/Sertifikat-2.JPG',
        name: 'Certificate of Competence in Institutional Financial Accounting',
        description: 'Sertifikasi kompetensi dalam akuntansi keuangan institusional dari Politeknik Negeri Ujung Pandang.',
        year: '2021'
    }
};

function openCertificate(certificateId) {
    const modal = document.getElementById('certModal');
    const data = certificateData[certificateId];
    
    if (!data) return;
    
    // Update modal content
    document.getElementById('certModalTitle').textContent = data.title;
    document.getElementById('certImage').src = data.image;
    document.getElementById('certName').textContent = data.name;
    document.getElementById('certDescription').textContent = data.description;
    document.getElementById('certYear').textContent = `Tahun: ${data.year}`;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCertificate() {
    const modal = document.getElementById('certModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Keyboard navigation for certificate modal
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('certModal');
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeCertificate();
    }
});

// Error handling for certificate images
document.getElementById('certImage').addEventListener('error', function() {
    this.style.display = 'none';
    this.nextElementSibling.style.display = 'flex';
});

console.log('Carousel initialized successfully!');
console.log('Documentation modal initialized successfully!');
console.log('Certificate modal initialized successfully!');
