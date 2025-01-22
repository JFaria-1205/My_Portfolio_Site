//#region Global Variables

//#endregion

//#region Event-Listeners
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // Get the vertical scroll position
    const scrollSpeed = 0.3;
    const backgroundOffset = scrollY * scrollSpeed;

    // Apply the offset
    document.body.style.backgroundPosition = `center -${backgroundOffset}px`;
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
    const elementsToHideOn800 = document.getElementsByClassName("hide-on-800");
    const elementsToHideOn530 = document.getElementsByClassName("hide-on-530");
    const elementsToShowOn530 = document.getElementsByClassName("show-on-530");
    const headerElement = document.getElementById("head");

    if (window.innerWidth <= 530) {
        for (let element of elementsToHideOn800) {
            element.style.display = "none";
        }
        for (let element of elementsToHideOn530) {
            element.style.display = "none";
        }
        for (let element of elementsToShowOn530) {
            element.style.display = "block";
        }
        headerElement.className = "sticky grid grid-cols-1 items-center";
    } else if (window.innerWidth < 800) {
        for (let element of elementsToHideOn800) {
            element.style.display = "none";
        }
        for (let element of elementsToHideOn530) {
            element.style.display = "block";
        }
        for (let element of elementsToShowOn530) {
            element.style.display = "none";
        }
        headerElement.className = "sticky grid grid-cols-1 items-center";
    } else {
        for (let element of elementsToHideOn800) {
            element.style.display = "block";
        }
        for (let element of elementsToHideOn530) {
            element.style.display = "block";
        }
        for (let element of elementsToShowOn530) {
            element.style.display = "none";
        }
        headerElement.className = "sticky grid grid-cols-3 items-center";
    }
}
//#endregion

