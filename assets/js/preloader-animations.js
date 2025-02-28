// Delay function; reusable
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Preloader animation controller
document.addEventListener("DOMContentLoaded", () => {
    const skipIntro = sessionStorage.getItem("skipIntro");

    if (!skipIntro && window.location.pathname == "/index.html") {
        //Play site intro
        runIntroAnimations();
        console.log("intro animation");
    }
    else {
        //Play preloader
        runPreloaderAnimations();
        console.log("preloader animation");
    }
});

// Preloader animation
function runPreloaderAnimations() {
    const spaceship = document.getElementById("spaceship");
    const loadingText = document.getElementById("loading-text");
    const preloader = document.getElementById("preloader");
    const bodyContainer = document.getElementById("body-container");
    const header = document.getElementById("head");
    const footer = document.getElementById("foot");

    //Image rotation for spaceship loading animation
    const spaceshipLoadFrames = [
        "../assets/images/spaceship-smoke-1.png",
        "../assets/images/spaceship-smoke-2.png",
        "../assets/images/spaceship-smoke-3.png"
    ];

    let frameIndex = 0; //index for spaceship anim func

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
        clearInterval(spaceshipLoadingAnimation);
        clearInterval(loadingDotsAnimation);

        preloader.style.display = "none";

        bodyContainer.classList.remove("hidden");
        header.classList.remove("hidden");
        footer.classList.remove("hidden");
    };
}

// Intro animation
function runIntroAnimations() {
    const spaceship = document.getElementById("spaceship");
    const loadingText = document.getElementById("loading-text");
    const preloader = document.getElementById("preloader");
    const bodyContainer = document.getElementById("body-container");
    const heroVideo = document.getElementById("hero-video");
    const header = document.getElementById("head");
    const footer = document.getElementById("foot");
    const preloaderBackground = document.getElementById("preloader-background");
    const nonHeroContent = document.getElementById("non-hero-content-container");

    bodyContainer.classList.add("hidden");
    nonHeroContent.classList.add("hidden");
    heroVideo.classList.add("hidden");
    header.style = "opacity: 0;";
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
        await delay(2000); //wait 2 seconds (1000=1s)
        
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
        await delay(2500);

        bodyContainer.classList.remove("hidden");
        clearInterval(spaceshipLaunchAnimation);
        header.classList.remove("hidden");
        await delay(1500);

        preloader.style.display = "none";
        await delay(1000);


        heroVideo.classList.remove("hidden");
        nonHeroContent.classList.remove("hidden");
        footer.classList.remove("hidden");
    }  
}