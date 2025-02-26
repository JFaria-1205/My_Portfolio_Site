// Footer html
if (typeof siteFooter ==="undefined"){
    const siteFooter = 
    `
        <footer class="footer">
            This is the footer content.
        </footer>
    `;

    document.body.insertAdjacentHTML("afterend", siteFooter);
}