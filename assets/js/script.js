
// nav toggle starts 

function toggleMenu() {
    document.getElementById("offcanvas").classList.toggle("show");
}

document.getElementById("closeOffcanvas").addEventListener("click", function () {
    document.getElementById("offcanvas").classList.remove("show");
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
        document.getElementById("offcanvas").classList.remove("show");
    }
});

// nav toggle ends




// counting section starts

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".achievements h4");

    let observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                entry.target.dataset.counted = "true"; 
                
                if (index < 2) {
                    startCounting(entry.target); 
                } else {
                    entry.target.classList.add("fade-in"); 
                }
                
                entry.target.classList.add("revealed");
            }
        });
    }, { threshold: 0.6 }); 

    counters.forEach(counter => observer.observe(counter));

    function startCounting(element) {
        let originalText = element.innerText.trim(); 
        let isPercentage = originalText.includes("%"); 
        let isPlus = originalText.includes("+"); 

        let target = parseFloat(originalText.replace(/[^0-9.]/g, ""));
        if (isNaN(target)) return; 

        let count = 0;
        let increment = target / 100; 
        let speed = 20; 

        let timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(timer);
            }
            element.innerText = formatNumber(count, isPercentage, isPlus);
        }, speed);
    }

    function formatNumber(number, isPercentage, isPlus) {
        let formattedNumber = Math.floor(number).toLocaleString(); 

        if (isPercentage) formattedNumber += "%"; 
        if (isPlus) formattedNumber += "+"; 

        return formattedNumber;
    }
});
// counting section ends



// expertice tab section starts
function changeImage(index) {
    let images = document.querySelectorAll('.image-content img');
    let buttons = document.querySelectorAll('.tab-button');
    
    images.forEach(img => img.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    images[index].classList.add('active');
    buttons[index].classList.add('active');
}
// expertice tab section ends




// tab  images starts 
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabImages = document.querySelectorAll(".tab-img div img");

    const imageSources = [
        "assets/images/tab 1.png",
        "assets/images/tab 2.png",
        "assets/images/mobile min-1.jpeg"
    ];

    tabButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            tabButtons.forEach(btn => btn.classList.remove("active"));

            this.classList.add("active");

            if (index === 0) {
                
                tabImages[0].src = imageSources[0]; 
                tabImages[1].src = imageSources[1]; 
            } else if (index === 1) {
                
                tabImages[0].src = imageSources[1]; 
                tabImages[1].src = imageSources[0]; 
            } else if (index === 2) {
                
                tabImages[0].src = imageSources[1]; 
                tabImages[1].src = imageSources[2]; 
            }
        });
    });
});

// tab  images ends



// testimonials load more btn starts

document.addEventListener("DOMContentLoaded", function() {
    const testimonials = Array.from(document.querySelectorAll(".testimonial"));
    const loadMoreBtn = document.getElementById("load-more");
    let visibleCount = 4;

    function showTestimonials() {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.display = index < visibleCount ? "block" : "none";
        });
        if (visibleCount >= testimonials.length) {
            loadMoreBtn.style.display = "none";
        }
    }

    loadMoreBtn.addEventListener("click", function() {
        visibleCount += 4;
        showTestimonials();
    });

    function checkScreenSize() {
        if (window.innerWidth <= 576) {
            loadMoreBtn.style.display = "block";
            showTestimonials();
        } else {
            loadMoreBtn.style.display = "none";
            testimonials.forEach(testimonial => testimonial.style.display = "block");
        }
    }

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
});
// testimonials load more btn ends




// faq starts  here

const buttons = document.querySelectorAll('.question button');

function toggleFAQ(clickedButton) {
    buttons.forEach(button => {
        const faq = button.nextElementSibling;
        const icon = button.querySelector('.fa-angle-down');

        if (button === clickedButton) {
            faq.classList.toggle('show');
            icon.classList.toggle('rotate');
        } else {
            faq.classList.remove('show');
            icon.classList.remove('rotate');
        }
    });
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        toggleFAQ(this);
    });
});

const thirdFAQ = buttons[2].nextElementSibling;
const thirdIcon = buttons[2].querySelector('.fa-angle-down');

thirdFAQ.classList.add('show');
thirdIcon.classList.add('rotate');


// faq ends  here



// top to bottom btn starts here
document.querySelector(".top__to--bottom").addEventListener("click", function () {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 10) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
});

// top to bottom btn ends here








