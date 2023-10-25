document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const toggleIcon = document.querySelector(".toggle-icon");
    const offCanvasMenu = document.querySelector(".off-canvas-menu");
    const closeButton = document.querySelector(".close-button");
    const navLinks = document.querySelectorAll(".off-canvas-menu a"); // Select all navigation links in the off-canvas menu

    // Function to toggle the off-canvas menu
    function toggleMenu() {
        if (offCanvasMenu.style.right === "0px" || offCanvasMenu.style.right === "") {
            offCanvasMenu.style.right = "-250px";
        } else {
            offCanvasMenu.style.right = "0px";
        }
    }

    // Toggle off-canvas menu when the toggle icon is clicked
    toggleIcon.addEventListener("click", toggleMenu);

    // Close off-canvas menu when the close button ("X") is clicked
    closeButton.addEventListener("click", toggleMenu);

    // Close off-canvas menu when a navigation link is clicked
    navLinks.forEach((link) => {
        link.addEventListener("click", toggleMenu);
    });

    // Delay video playback
    setTimeout(function () {
        const video = document.querySelector(".navbar-logo video");
        if (video) {
            video.play().catch(function (error) {
                // Handle video playback error if needed
                console.error("Video playback error: " + error.message);
            });
        }
    }, 1000); // 3 seconds delay
});
