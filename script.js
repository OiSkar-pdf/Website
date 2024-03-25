document.addEventListener("DOMContentLoaded", function() {
    const servicesSection = document.getElementById("services");
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener("scroll", function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        const scrollAmount = Math.abs(scrollTop - lastScrollTop);

        const currentPosition = parseFloat(getComputedStyle(servicesSection).left);
        const newPosition = scrollDirection === 'down' ? currentPosition - scrollAmount : currentPosition + scrollAmount;

        servicesSection.style.left = `${newPosition}px`;

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});
