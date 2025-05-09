// Basic JavaScript for future interactivity (e.g., smooth scrolling, dynamic content loading)

document.addEventListener("DOMContentLoaded", () => {
    console.log("Dilon Concept DAO - Simplified Website Loaded");

    // Example: Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
