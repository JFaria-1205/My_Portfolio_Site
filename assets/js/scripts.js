window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // Get the vertical scroll position
    const scrollSpeed = 0.3;
    const backgroundOffset = scrollY * scrollSpeed;

    // Apply the offset
    document.body.style.backgroundPosition = `center -${backgroundOffset}px`;
});