document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => {
                l.classList.remove('active'); // Remove active class from all
            });
            this.classList.add('active'); // Add active class to the clicked link
        });
    });
});

let initailActive= document.querySelector(".nav-link.active")

if(initailActive){
    initailActive.classList.add("active")
}

/* Nav Mobile */

const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (this.classList.contains("partners")) {
           gsap.to(".nav-links-lower",{
               x: -115,
               duration: 0.5,
               delay: 0,
               ease: "power2.inOut"
           })    
           gsap.to(".main-navlinks",{
               x: -70,
               gap: '1rem',
               duration: 0.5,
               delay: 0,
               ease: "power2.inOut"
           })    
           gsap.to(".extra-navlinks",{
               x: -70,
               duration: 0.5,
               delay: 0,
               ease: "power2.inOut"
           }) 
           gsap.to(".innerframe",{
            duration: 0.5,
            scrollTo: {y:"#partners"},
            delay: 0
           })   
       } 
        if (this.classList.contains("prizes")) {
           gsap.to(".nav-links-lower",{
               x: -230,
               duration: 0.5,
               delay: 0,
               ease: "power2.inOut"
           })  
           gsap.to(".main-navlinks",{
            x: -136,
            gap: '0.75rem',
            duration: 0.5,
            delay: 0,
            ease: "power2.inOut"
            })    
        gsap.to(".extra-navlinks",{
            x: -134,
            gap: '0.75rem',
            duration: 0.5,
            delay: 0,
            ease: "power2.inOut"
            })    
            gsap.to(".innerframe",{
                duration: 0.5,
                scrollTo: {y:"#prizes"},
                delay: 0
               })  
       } 
        if (this.classList.contains("faqs")) {
           gsap.to(".nav-links-lower",{
               x: -345,
               duration: 0.5,
               delay: 0,
               ease: "power2.inOut"
           })   
           gsap.to(".main-navlinks",{
            x: -180,
            gap: '0.70rem',
            duration: 0.5,
            delay: 0,
            ease: "power2.inOut"
            })    
        gsap.to(".extra-navlinks",{
            x: -180,
            gap: '0.70rem',
            duration: 0.5,
            delay: 0,
            ease: "power2.inOut"
            })  
            gsap.to(".innerframe",{
                duration: 0.5,
                scrollTo: {y:"#faqs"},
                delay: 0
               })  
       } 
        if (this.classList.contains("contact")) {
           gsap.to(".nav-links-lower",{
               x: -460,
               duration: 0.5,
               delay: 0,
               ease: "power2.inOut"
           })    
           gsap.to(".main-navlinks",{
            x: -245,
            gap: '0.75rem',
            duration: 0.5,
            delay: 0,
            ease: "power2.inOut"
            })    
        gsap.to(".extra-navlinks",{
            x: -245,
            gap: '0.75rem',
            duration: 0.5,
            delay: 0,
            ease: "power2.inOut"
            })  
            gsap.to(".innerframe",{
                duration: 0.5,
                scrollTo: {y:"#contact"},
                delay: 0
               }) 
       } 
        if (this.classList.contains("home")) {
           gsap.to(".nav-links-lower",{
               x: 0,
               duration: 0.5,
               delay: 0,
               ease: "power2.inOut"
           })  
           gsap.to(".main-navlinks",{
            x: 0,
            gap: '0.5rem',
            duration: 0.5,
            delay: 0,
            ease: "power2.inOut"
            })    
        gsap.to(".extra-navlinks",{
            x: 0,
            gap: '0.5rem',
            duration: 0.5,
            delay: 0,
            ease: "power2.inOut"
            })   
            gsap.to(".innerframe",{
                duration: 0.5,
                scrollTo: {y:0},
                delay: 0
               }) 
       } 
      })
    });






/* Our Team Card Rotate Logic for touch display */

function is_touch_enabled() {
    return ( 'ontouchstart' in window ) || 
           ( navigator.maxTouchPoints > 0 ) ||
           ( navigator.msMaxTouchPoints > 0 );
}
if( is_touch_enabled() ) {
    
    
    
    let teamCardGSAPTimeline = gsap.timeline();
    document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.team-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Check if the clicked card is already active
            const isActive = this.classList.contains('active');
            
            // Remove active class from all cards and reset image rotation
            cards.forEach(b => {
                b.classList.remove('active');
                b.classList.remove('team-card-active');
                teamCardGSAPTimeline.to(".team-card",{
                    rotateY:0,
                    delay:0,
                    duration:0.005
                })
            });
            
            // If the clicked card was not active, add the active class
            if (!isActive) {
                this.classList.add('active');
                this.classList.add('team-card-active'); // Rotate image
                teamCardGSAPTimeline.to(".team-card-active",{
                    rotateY:180,
                    delay:0,
                    duration:0.005
                })
            }
        });
    });
});

}

/* FAQ Btn Toggle Script */
let faqBtnGSAPTimeline = gsap.timeline();
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Check if the clicked button is already active
            const isActive = this.classList.contains('active');

            // Remove active class from all buttons and reset image rotation
            buttons.forEach(b => {
                b.classList.remove('active');
                b.querySelector('.img').classList.remove('faq-btn-active');
                faqBtnGSAPTimeline.to(".faq-btn",{
                    rotate:0,
                    delay:0,
                    duration:0.005
                })
            });

            // If the clicked button was not active, add the active class
            if (!isActive) {
                this.classList.add('active');
                this.querySelector('.img').classList.add('faq-btn-active'); // Rotate image
                faqBtnGSAPTimeline.to(".faq-btn-active",{
                    rotate:135,
                    delay:0,
                    duration:0.005
                })
            }
        });
    });
});

// hide unhide logic 

function toggleAnswer1() {
    const question = document.querySelector('.question1');
    const answer = document.querySelector('.ans1');
    
    // Toggle visibility
    question.classList.toggle('hidden');
    answer.classList.toggle('hidden');
}
function toggleAnswer2() {
    const question = document.querySelector('.question2');
    const answer = document.querySelector('.ans2');
    
    // Toggle visibility
    question.classList.toggle('hidden');
    answer.classList.toggle('hidden');
}
function toggleAnswer3() {
    const question = document.querySelector('.question3');
    const answer = document.querySelector('.ans3');
    
    // Toggle visibility
    question.classList.toggle('hidden');
    answer.classList.toggle('hidden');
}
function toggleAnswer4() {
    const question = document.querySelector('.question4');
    const answer = document.querySelector('.ans4');
    
    // Toggle visibility
    question.classList.toggle('hidden');
    answer.classList.toggle('hidden');
}

        // current question

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the current question and answer
            const question = this.parentElement.querySelector('.question');
            const answer = this.parentElement.querySelector('.ans');

            // Check if any other answer is visible and hide it
            buttons.forEach(b => {
                const otherQuestion = b.parentElement.querySelector('.question');
                const otherAnswer = b.parentElement.querySelector('.ans');
                
                if (otherAnswer !== answer) {
                    otherQuestion.classList.remove('hidden');
                    otherAnswer.classList.add('hidden');
                    b.classList.remove('active');
                }
            });    
        });
    });
});


/* Timeline Page Script */

const timelineBlocks = document.getElementById('timelineBlocks');
let isDragging = false;
let startX;
let scrollLeft;

// Mouse down event
timelineBlocks.addEventListener('mousedown', (e) => {
    isDragging = true;
    timelineBlocks.classList.add('active');
    startX = e.pageX - timelineBlocks.offsetLeft;
    scrollLeft = timelineBlocks.scrollLeft;
});

// Mouse up event
timelineBlocks.addEventListener('mouseup', () => {
    isDragging = false;
    timelineBlocks.classList.remove('active');
});

// Mouse leave event
timelineBlocks.addEventListener('mouseleave', () => {
    isDragging = false;
    timelineBlocks.classList.remove('active');
});

// Mouse move event
timelineBlocks.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // stop the function if it's not being dragged
    e.preventDefault();
    const x = e.pageX - timelineBlocks.offsetLeft;
    const walk = (x - startX) * 3; // scroll-fast
    timelineBlocks.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile devices
timelineBlocks.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - timelineBlocks.offsetLeft;
    scrollLeft = timelineBlocks.scrollLeft;
});

timelineBlocks.addEventListener('touchend', () => {
    isDragging = false;
});

timelineBlocks.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - timelineBlocks.offsetLeft;
    const walk = (x - startX) * 3;
    timelineBlocks.scrollLeft = scrollLeft - walk;
});

// Intersection Observer for auto-scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Auto-scroll to the center of the element
            const blockCenter = entry.target.getBoundingClientRect().left + (entry.target.offsetWidth / 2);
            const timelineCenter = timelineBlocks.getBoundingClientRect().left + (timelineBlocks.offsetWidth / 2);
            const scrollOffset = blockCenter - timelineCenter;

            // Prevent multiple scrolls
            if (Math.abs(scrollOffset) > 5) {
                timelineBlocks.scrollBy({ left: scrollOffset, behavior: 'smooth' });
            }
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the element is visible
});

// Observe each block for intersection
const blocks = document.querySelectorAll('.block');
blocks.forEach(block => {
    observer.observe(block);
});



