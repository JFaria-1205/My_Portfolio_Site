//#region Global Variables

//#endregion

//#region Event-Listeners
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY; // Get the vertical scroll position
    const scrollSpeed = 0.3;
    const backgroundOffset = scrollY * scrollSpeed;

    // Apply the offset
    document.body.style.backgroundPosition = `center -${backgroundOffset}px`;
});

document.addEventListener("scroll", () => {
    const glowIndicator = document.querySelector(".glow-indicator");
    const footer = document.querySelector(".footer");

    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (atBottom) {
        glowIndicator.style.display = "none";
        footer.style.display = "block";
    } else {
        glowIndicator.style.display = "block";
        footer.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownContent = document.getElementById("dropdown-content");
    
    updateNavCurrentPage();
    handleResize();    

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
});

window.addEventListener("resize", function() {
    handleResize();
    updateNavCurrentPage();
});
//#endregion

//#region Functions
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
        
        case "/projects.html":
            for (let element of projectsLinks) {
                element.style.fontWeight = "bold";
                element.style.color = "rgb(242, 97, 63)";
            }
            break;

        case "/resume.html":
            for (let element of resumeLinks) {
                element.style.fontWeight = "bold";
                element.style.color = "rgb(242, 97, 63)";
            }
            break;

        case "/about.html":
            for (let element of aboutLinks) {
                element.style.fontWeight = "bold";
                element.style.color = "rgb(242, 97, 63)";
            }
            break;

        case "/contact.html":
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

function handleResize() {
    const elementsToHideOnMedium = document.getElementsByClassName("hide-on-medium");
    const elementsToHideOnSmall = document.getElementsByClassName("hide-on-small");
    const elementsToShowOnSmall = document.getElementsByClassName("show-on-small");
    const headerElement = document.getElementById("head");

    if (window.innerWidth <= 530) {
        for (let element of elementsToHideOnMedium) {
            element.style.display = "none";
        }
        for (let element of elementsToHideOnSmall) {
            element.style.display = "none";
        }
        for (let element of elementsToShowOnSmall) {
            element.style.display = "block";
        }
        headerElement.className = "sticky grid grid-cols-1 items-center";
    } else if (window.innerWidth < 800) {
        for (let element of elementsToHideOnMedium) {
            element.style.display = "none";
        }
        for (let element of elementsToHideOnSmall) {
            element.style.display = "block";
        }
        for (let element of elementsToShowOnSmall) {
            element.style.display = "none";
        }
        headerElement.className = "sticky grid grid-cols-1 items-center";
    } else {
        for (let element of elementsToHideOnMedium) {
            element.style.display = "block";
        }
        for (let element of elementsToHideOnSmall) {
            element.style.display = "block";
        }
        for (let element of elementsToShowOnSmall) {
            element.style.display = "none";
        }
        headerElement.className = "sticky grid grid-cols-3 items-center";
    }
}
//#endregion

