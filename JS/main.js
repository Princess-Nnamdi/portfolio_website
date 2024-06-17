/*----toggle navbar icon----*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
};

/*----scroll section active link----*/

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });

    /*----sticky navbar----*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*----remove toggle icon and navbar----*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');


};

/*----scroll reveal----*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: top });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


/*----typed js----*/

const typed = new Typed('.multiple-text', {
    strings: ['Junior Frontend Developer', 'Tech Enthusiast', 'Mechatronics Engineering Student'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*----Contact Form Functionality----*/

const contactForm = document.getElementById('contactForm');
const fullName = document.getElementById('fullName');
const emailAddress = document.getElementById('emailAddress');
const mobileNumber = document.getElementById('mobileNumber');
const emailSubject = document.getElementById('emailSubject');
const message = document.getElementById('message');
const sendLink = document.getElementById('sendLink');

contactForm.addEventListener('input', updateMailto);
sendLink.addEventListener('click', sendAndRefresh);

function updateMailto() {
    const name = fullName.value;
    const email = emailAddress.value;
    const phone = mobileNumber.value;
    const subject = emailSubject.value;
    const messageText = message.value;

    sendLink.href = `mailto:pnnamdi2020@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0APhone: ${encodeURIComponent(phone)}%0D%0AMessage: ${encodeURIComponent(messageText)}`;
}

function sendAndRefresh(event) {
    // Prevent the default action of the link
    event.preventDefault();
    // Open the mailto link
    window.location.href = sendLink.href;
    // Reset the form after a delay to allow the mail client to open
    setTimeout(() => {
        contactForm.reset();
        updateMailto(); // Ensure the mailto link is cleared or reset
    }, 1000); // Adjust the delay as needed
}
