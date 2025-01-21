window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // Get the vertical scroll position
    const scrollSpeed = 0.3;
    const backgroundOffset = scrollY * scrollSpeed;

    // Apply the offset
    document.body.style.backgroundPosition = `center -${backgroundOffset}px`;
});

document.addEventListener("DOMContentLoaded", function () {
    updateNavCurrentPage();
});

function updateNavCurrentPage() {
    let homeLink = document.getElementById("nav_home_link");
    let projectsLink = document.getElementById("nav_projects_link");
    let aboutLink = document.getElementById("nav_about_link");
    let contactLink = document.getElementById("nav_contact_link");

    switch (window.location.pathname) {
        case "/index.html":
            homeLink.style.textDecoration = "underline";
            break;
        
        case "/projects.html":
            projectsLink.style.textDecoration = "underline";
            break;

        case "/about.html":
            aboutLink.style.textDecoration = "underline";
            break;

        case "/contact.html":
            contactLink.style.textDecoration = "underline";
            break;   
        
        default:
            homeLink.style.textDecoration = "underline";
            console.error("updateNavCurrentPage(scripts.js): no html found; using default");
            break;
    }
}