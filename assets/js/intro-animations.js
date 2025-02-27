// Delay function; reusable
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Preloader animation function
document.addEventListener("DOMContentLoaded", () => {
    const spaceship = document.getElementById("spaceship");
    const loadingText = document.getElementById("loading-text");
    const preloader = document.getElementById("preloader");
    const bodyContainer = document.getElementById("body-container");
    const heroVideo = document.getElementById("hero-video");
    const header = document.getElementById("head");
    const footer = document.getElementById("foot");
    const preloaderBackground = document.getElementById("preloader-background");
    const nonHeroContent = document.getElementById("non-hero-content-container");

    header.classList.add("hidden");
    footer.classList.add("hidden");

    //Image rotation for spaceship loading animation
    const spaceshipLoadFrames = [
        "../assets/images/spaceship-smoke-1.png",
        "../assets/images/spaceship-smoke-2.png",
        "../assets/images/spaceship-smoke-3.png"
    ];

    //Image rotation for spaceship launching animation
    const spaceshipLaunchFrames = [
        "../assets/images/spaceship-fire-1.png",
        "../assets/images/spaceship-fire-2.png",
        "../assets/images/spaceship-fire-3.png"
    ];


    let frameIndex = 0; //index for spaceship anim func
    let loadingDone = false;

    //Spaceship loading animation handler
    const spaceshipLoadingAnimation = setInterval(() => {
        spaceship.src = spaceshipLoadFrames[frameIndex];
        frameIndex = (frameIndex + 1) % spaceshipLoadFrames.length;
    }, 300);


    let loadingIndex = 0; //index for loading dots func

    //Loading dots animation handler
    const loadingDotsAnimation = setInterval(() => {
        const dots = ".".repeat(loadingIndex);
        loadingText.textContent = `Loading${dots}`;
        loadingIndex = (loadingIndex + 1) % 4;
    }, 400);

    //On full page loaded, continue animations
    window.onload = () => {
        runAfterPageLoad();
    };

    async function runAfterPageLoad() {
        await delay(3000); //wait 3 seconds (1000=1s)
        
        //Clear loading dot animation
        clearInterval(loadingDotsAnimation);
        loadingText.textContent = "Ready for Launch!";
        loadingText.style = "font-size: 1.5rem;";
        
        clearInterval(spaceshipLoadingAnimation);

        let launchIndex = 0;
        const spaceshipLaunchAnimation = setInterval(() => {
            spaceship.src = spaceshipLaunchFrames[launchIndex];
            launchIndex = (launchIndex + 1) % spaceshipLaunchFrames.length;
        }, 75);

        await delay(1000);
        
        loadingText.classList.add("fade-out");
        await delay(1000);
        
        spaceship.classList.add("launch");
        preloaderBackground.classList.add("bg-fade-in");
        document.body.classList.add("bg-move-down");
        await delay(3000);

        preloader.style.display = "none";
        bodyContainer.classList.add("body-fade-in");  
        bodyContainer.classList.remove("hidden");
        await delay(2500);

        header.classList.add("body-fade-in");
        header.classList.add("header-move-down");
        header.classList.remove("hidden");
        await delay(2000);


        heroVideo.classList.remove("hidden");
    }

    
});