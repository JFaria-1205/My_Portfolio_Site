function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card").forEach(element => {
        element.addEventListener("mouseenter", () => {
            //on mouse enter card
            onHoverEnter(element);
        });
    
        element.addEventListener("mouseleave", () => {
            //on mouse leave card
            onHoverExit(element);
        });
    });
})

async function onHoverEnter(element) {
    element.classList.remove("in-view-right");
    element.classList.remove("in-view-left");
    
    element.classList.add("grow-in-progress");
    await delay(350); //wait 0.35 seconds (1000=1s)

    if (element.classList.contains("grow-in-progress")) {
        element.classList.add("enlarged");

        const currentWidth = element.offsetWidth + "px";
        element.style.width = currentWidth;
        element.style.transition = "width 1s ease-out"
        requestAnimationFrame(() => {
            element.style.width = "60%";
        });
    }    
}

function onHoverExit(element) {
    element.classList.remove("grow-in-progress")

    if (element.classList.contains("enlarged")) {
        element.classList.remove("enlarged");

        const currentWidth = element.offsetWidth + "px";

        element.style.width = currentWidth;
        element.style.transition = "width 0.345s ease-out";

        requestAnimationFrame(() => {
            element.style.width = "44%";
        });
    }
    
}

