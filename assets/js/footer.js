// Footer html
if (typeof siteFooter ==="undefined"){
    const siteFooter = 
    `
        <div class="glow-indicator"></div>
        <footer class="footer">
            This is the footer content.
        </footer>
    `;

    document.body.insertAdjacentHTML("afterend", siteFooter);
}