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
            homeLink.style.fontWeight = "bold";
            homeLink.style.color = "rgb(242, 97, 63)";
            break;
        
        case "/projects.html":
            projectsLink.style.fontWeight = "bold";
            projectsLink.style.color = "rgb(242, 97, 63)";
            break;

        case "/about.html":
            aboutLink.style.fontWeight = "bold";
            aboutLink.style.color = "rgb(242, 97, 63)";
            break;

        case "/contact.html":
            contactLink.style.fontWeight = "bold";
            contactLink.style.color = "rgb(242, 97, 63)";
            break;   
        
        default:
            homeLink.style.fontWeight = "bold";
            homeLink.style.color = "rgb(242, 97, 63)";
            console.error("updateNavCurrentPage(scripts.js): no html found; using default");
            break;
    }
}