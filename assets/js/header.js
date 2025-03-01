// Header HTML
if (typeof siteHeader ==="undefined"){
    const siteHeader = 
    `
        <header id="head" class="hidden nav-header sticky items-center">
            <div class="nav-desktop items-center">
                <a id="nav-name" class="nav-extras font-thin text-lg z-0 text-start" href="../test.html">Jason Faria</a>

                <nav id="nav-page-links" class="font-thin z-10">
                    <a href="../../index.html" class="nav_home_link nav-link" onclick="sessionStorage.setItem('skipIntro', 'true')">Home</a>
                    <a href="../../pages/projects.html" class="nav_projects_link nav-link">Projects</a>
                    <a href="../../pages/resume.html" class="nav_resume_link nav-link">Resume</a>
                    <a href="../../pages/about.html" class="nav_about_link nav-link">About</a>
                    <a href="../../pages/contact.html" class="nav_contact_link nav-link">Contact</a>
                </nav>

                <a id="nav-title" class="nav-extras font-thin text-lg text-right z-0" href="../index.html">Portfolio</a>
            </div>
            <div class="nav-mobile">
                <ul id="nav-small-menu" class="font-thin text-xl z-10 items-center">
                    <li id="dropdown-button-mobile" class="nav-link-mobile-menu">
                        <img id="mobile-nav-menu-icon" src="../assets/images/nav-menu-button.png">
                    </li>
                    <ul id="dropdown-content-mobile">
                        <li><a href="../../index.html" class="nav_home_link" onclick="sessionStorage.setItem('skipIntro', 'true')">Home</a></li>
                        <li><a href="../../pages/projects.html" class="nav_projects_link">Projects</a></li>
                        <li><a href="../../pages/resume.html" class="nav_resume_link">Resume</a></li>
                        <li><a href="../../pages/about.html" class="nav_about_link">About</a></li>
                        <li><a href="../../pages/contact.html" class="nav_contact_link">Contact</a></li>
                </ul>
            </div>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', siteHeader);
}
