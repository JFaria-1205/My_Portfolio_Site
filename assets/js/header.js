// Header HTML
if (typeof siteHeader ==="undefined"){
    const siteHeader = 
    `
        <header class="sticky grid grid-cols-3 items-center">
            <a id="nav-extra" class="font-thin text-lg z-0" href="test.html">Jason Faria</a>
            
            <nav class="font-thin text-xl z-10">
                <ul class="flex justify-center space-x-20">
                    <li><a id="nav_home_link" href="index.html" class="link-hover">Home</a></li>
                    <li><a id="nav_projects_link" href="projects.html" class="link-hover">Projects</a></li>
                    <li><a id="nav_about_link" href="about.html" class="link-hover">About</a></li>
                    <li><a id="nav_contact_link" href="contact.html" class="link-hover">Contact</a></li>
                </ul>
            </nav>
            
            <a id="nav-extra" class="font-thin text-lg text-right z-0" href="index.html">Portfolio</a>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', siteHeader);
}
