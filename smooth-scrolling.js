document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links (e.g., in your navigation menu)
    const links = document.querySelectorAll('a[href^="#"]');

    // Add click event listeners to each link
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target section's ID from the link's href
            const targetId = this.getAttribute('href').substring(1);

            // Find the target section by ID
            const targetSection = document.getElementById(targetId);

            // Calculate the scroll position with a 50px margin top
            const offset = targetSection.getBoundingClientRect().top + window.scrollY - 90;

            // Scroll smoothly to the target section with the margin top
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });
});
