const carouselSlide = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.carousel-slide img, .carousel-slide div');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoSlideInterval;

function moveToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, 1500);
}

function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        pauseAutoSlide(); 
        moveToSlide(index);
    });
});

startAutoSlide();
updateDots();

$(document).ready(function() {
    $('#welcome-message').text("Welcome to My Portfolio").hide().fadeIn(2000);
$(window).scroll(function() {
    $('.fade-in').each(function() {
    let elementPos = $(this).offset().top;
    let topOfWindow = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (elementPos < topOfWindow + windowHeight - 100) {
        $(this).css('opacity', '1');
            }
        });
    });
});

$(document).ready(function() {
    $('#toggle-info-btn').click(function() {
        $('#additional-info').slideToggle(400);
        
        if ($(this).text() === 'Show More Information') {
            $(this).text('Show Less Information');
        } else {
            $(this).text('Show More Information');
        }
    });
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (name === "" || email === "" || message === "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "All fields are required.";
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    errorMessage.style.display = "none";
    alert("Message sent successfully!");
    return true;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
