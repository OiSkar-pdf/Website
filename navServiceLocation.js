// Function to scroll to the threshold position of a section
function scrollToSection(sectionId, scrollOffset = 0) {
    const section = document.getElementById(sectionId);
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const halfwayPoint = windowHeight / 12;
    const scrollThreshold = section.getBoundingClientRect().height + halfwayPoint + scrollOffset;

    // Calculate the target scroll position
    let targetPosition = sectionTop - scrollThreshold;

    // Adjust the target position if it's already in view
    if (targetPosition > 0 && targetPosition < windowHeight) {
        targetPosition = 0;
    }

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Function to scroll to the Contact Us section
function scrollToContact() {
    const contactSection = document.getElementById("contact");
    const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header
    const contactSectionTop = contactSection.getBoundingClientRect().top; // Get the top position of the contact section
    const scrollOffset = headerHeight; // Set the scroll offset to the height of the header

    window.scrollTo({
        top: contactSectionTop + window.pageYOffset - scrollOffset,
        behavior: 'smooth'
    });
}

function scrollToHome() {
    const homeSection = document.getElementById("home");
    const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header
    const homeSectionTop = homeSection.getBoundingClientRect().top; // Get the top position of the contact section
    const scrollOffset = headerHeight; // Set the scroll offset to the height of the header

    window.scrollTo({
        top: homeSectionTop + window.pageYOffset - scrollOffset,
        behavior: 'smooth'
    });
}

function scrollToNews() {
    const newsSection = document.getElementById("news");
    const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header
    const newsSectionTop = newsSection.getBoundingClientRect().top; // Get the top position of the contact section
    const scrollOffset = headerHeight; // Set the scroll offset to the height of the header

    window.scrollTo({
        top: newsSectionTop + window.pageYOffset - scrollOffset,
        behavior: 'smooth'
    });
}

// Event listener for clicking on navigation links
document.addEventListener("DOMContentLoaded", function() {
    // Scroll to "Services" section
    document.querySelector('nav a[href="#services"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        scrollToSection('services');
    });

    // Scroll to "Contact Us" section
    document.querySelector('nav a[href="#contact"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        scrollToContact();
    });

    // Scroll to "Home" section
    document.querySelector('nav a[href="#home"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        scrollToHome();
    });

    // Scroll to "News Updates" section
    document.querySelector('nav a[href="#news"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        scrollToNews();
    });
});
