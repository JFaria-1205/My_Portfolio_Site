document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card").forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.classList.remove("in-view-right");
            element.classList.remove("in-view-left");
        });
    
        element.addEventListener("mouseleave", () => {
            //on mouse leave card
        });
    });
})

