// Header HTML
if (typeof siteHeader ==="undefined"){
    const siteHeader = `
        <header class="sticky top-0 grid grid-cols-2 items-center">
            <div class="font-thin text-xl z-10">
                <nav>
                    <ul class="flex justify-start space-x-4">
                        <li><a id="nav_home_link" href="index.html" class="hover:text-yellow-200">Home</a></li>
                        <li><a id="nav_projects_link" href="projects.html" class="hover:text-yellow-300">Projects</a></li>
                        <li><a id="nav_about_link" href="about.html" class="hover:text-yellow-400">About</a></li>
                        <li><a id="nav_contact_link" href="contact.html" class="hover:text-yellow-500">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div class="font-thin text-xl text-right z-0">
                <a href="index.html" class="hover:text-yellow-200">Jason Faria | Portfolio</a>
            </div>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', siteHeader);
}
