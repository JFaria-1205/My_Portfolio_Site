// Header HTML
if (typeof siteHeader ==="undefined"){
    const siteHeader = 
    `
        <header class="nav-header sticky items-center">
            <div class="nav-desktop items-center">
                <a id="nav-name" class="nav-extra font-thin text-lg z-0 text-start" href="test.html">Jason Faria</a>

                <nav id="nav-page-links" class="font-thin z-10">
                    <a href="index.html" class="nav_home_link nav-link">Home</a>
                    <a href="projects.html" class="nav_projects_link nav-link">Projects</a>
                    <a href="resume.html" class="nav_resume_link nav-link">Resume</a>
                    <a href="about.html" class="nav_about_link nav-link">About</a>
                    <a href="contact.html" class="nav_contact_link nav-link">Contact</a>
                </nav>

                <a id="nav-title" class="nav-extra font-thin text-lg text-right z-0" href="index.html">Portfolio</a>
            </div>
            <div class="nav-mobile">
                <ul id="nav-small-menu" class="show-on-mobile font-thin text-xl z-10 items-center">
                    <li id="dropdown-button" class="nav-link-mini-menu">
                        <img id="small-nav-menu-pic" src="assets/images/nav-menu-button.png">
                    </li>
                    <ul id="dropdown-content">
                        <li><a href="index.html" class="nav_home_link nav-link-mini-menu">Home</a></li>
                        <li><a href="projects.html" class="nav_projects_link nav-link-mini-menu">Projects</a></li>
                        <li><a href="resume.html" class="nav_resume_link nav-link-mini-menu">Resume</a></li>
                        <li><a href="about.html" class="nav_about_link nav-link-mini-menu">About</a></li>
                        <li><a href="contact.html" class="nav_contact_link nav-link-mini-menu">Contact</a></li>
                </ul> 
            </div>   
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', siteHeader);
}
