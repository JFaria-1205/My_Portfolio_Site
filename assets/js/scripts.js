// Background image scroll speed control
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY; // Get the vertical scroll position
    const scrollSpeed = 0.3;
    const backgroundOffset = scrollY * scrollSpeed;

    // Apply the offset
    document.body.style.backgroundPosition = `center -${backgroundOffset}px`;
});

// Bottom glow (additional content indicator)
document.addEventListener("scroll", () => {
    const glowIndicator = document.querySelector(".glow-indicator");
    const footer = document.querySelector(".footer");

    const atBottom = window.innerHeight + window.scrollY + (footer.offsetHeight * 0.25) >= document.body.offsetHeight;

    if (atBottom) {
        glowIndicator.style.display = "none";
    } else {
        glowIndicator.style.display = "block";
    }
});

// Event Listener (DOM Content Loaded)
document.addEventListener("DOMContentLoaded", function () {
    //#region Nav Dropdown Controller
    const dropdownButton = document.getElementById("dropdown-button-mobile");
    const dropdownContent = document.getElementById("dropdown-content-mobile");     

    dropdownButton.addEventListener("click", () => {
        dropdownContent.style.display =
          dropdownContent.style.display === "block" ? "none" : "block";
      });
      
      // Close dropdown if clicking outside
      window.addEventListener("click", (event) => {
        if (!dropdownButton.contains(event.target)) {
          dropdownContent.style.display = "none";
        }
      });
    //#endregion
      updateNavCurrentPage();
});



//  Window Resize event listener
window.addEventListener("resize", function() {
    updateNavCurrentPage();
    updateHeroHeight();
});

// Event Listener (Load {All content})
window.addEventListener("load", function() {
    updateHeroHeight();
});

function updateNavCurrentPage() {
    let homeLinks = document.getElementsByClassName("nav_home_link");
    let projectsLinks = document.getElementsByClassName("nav_projects_link");
    let resumeLinks = document.getElementsByClassName("nav_resume_link");    
    let aboutLinks = document.getElementsByClassName("nav_about_link");
    let contactLinks = document.getElementsByClassName("nav_contact_link");

    switch (window.location.pathname) {
        case "/index.html":
            for (let element of homeLinks) {
                element.style.fontWeight = "bold";
                element.style.color = "rgb(242, 97, 63)";
            }            
            break;
        
        case "/pages/projects.html":
            for (let element of projectsLinks) {
                element.style.fontWeight = "bold";
                element.style.color = "rgb(242, 97, 63)";
            }
            break;

        case "/pages/resume.html":
            for (let element of resumeLinks) {
                element.style.fontWeight = "bold";
                element.style.color = "rgb(242, 97, 63)";
            }
            break;

        case "/pages/about.html":
            for (let element of aboutLinks) {
                element.style.fontWeight = "bold";
                element.style.color = "rgb(242, 97, 63)";
            }
            break;

        case "/pages/contact.html":
            for (let element of contactLinks) {
                element.style.fontWeight = "bold";
                element.style.color = "rgb(242, 97, 63)";
            }
            break;   
        
        default:
            for (let element of homeLinks) {
                element.style.fontWeight = "bold";
                element.style.color = "rgb(242, 97, 63)";
            }
            console.error("updateNavCurrentPage(scripts.js): no html found; using default");
            break;
    }
}

function updateHeroHeight() {
    const hero = document.querySelector(".hero");
    const header = document.querySelector(".nav-header");

    if (header && hero) {
        let headerHeight = header.offsetHeight;
        hero.style.height = `calc(100vh - ${headerHeight}px)`;       
    }
}

//General animate on enter view
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll"); //Get all elements with class ".animate-on-scroll"

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view"); //Add animation class
                observer.unobserve(entry.target); //Don't redo the animation once it leaves and re-enters view
            }
        });
    }, { threshold: 0.2 }); //Animation triggers on 20% element visibility

    elements.forEach(element => observer.observe(element));
});

