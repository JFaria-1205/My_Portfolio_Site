document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card").forEach(element => {
        element.addEventListener("mouseenter", () => {
            //on mouse enter card
            element.classList.remove("in-view-right");
            element.classList.remove("in-view-left");

            const currentWidth = element.offsetWidth + "px";
            const elementToChange = document.getElementById(element.id);

            element.style.width = currentWidth;
            element.style.transition = "width 1s ease-out";

            requestAnimationFrame(() => {
                element.style.width = "60%";
            });
        });
    
        element.addEventListener("mouseleave", () => {
            //on mouse leave card

            const currentWidth = element.offsetWidth + "px";

            element.style.width = currentWidth;
            element.style.transition = "width 0.5s ease-out";

            requestAnimationFrame(() => {
                element.style.width = "44%";
            });
        });
    });
})

