document.addEventListener("DOMContentLoaded", function() {
    const servicesSection = document.getElementById("services");
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    window.addEventListener("scroll", function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        const scrollAmount = Math.abs(scrollTop - lastScrollTop);
        const sectionHeight = servicesSection.getBoundingClientRect().height;
        const sectionTop = servicesSection.getBoundingClientRect().top;
        const halfwayPoint = windowHeight - 690; //adjust for position when scroll starts higher-starts later lower-starts earlier
        const scrollThreshold = sectionHeight + halfwayPoint;
        const speedAdjust = 3.5; //adjust for speed higher-faster lower-smaller

        let newPosition = parseFloat(getComputedStyle(servicesSection).left);

        if (scrollDirection === 'down' && sectionTop < scrollThreshold) {
            newPosition -= scrollAmount * speedAdjust * (sectionHeight / windowHeight);
        } else if (scrollDirection === 'up' && sectionTop < scrollThreshold) {
            newPosition += scrollAmount * speedAdjust * (sectionHeight / windowHeight);
        } else if (scrollDirection === 'up' && sectionTop >= scrollThreshold) {
            newPosition = 0; // Return to center position
        }

        servicesSection.style.left = `${newPosition}px`;

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});
