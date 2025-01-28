// Header HTML
if (typeof siteHeader ==="undefined"){
    const siteHeader = 
    `
        <header id="head" class="sticky grid grid-cols-3 items-center">
            <a id="nav-extra" class="hide-on-medium font-thin text-lg z-0" href="test.html">Jason Faria</a>
            
            <nav class="hide-on-small font-thin text-xl z-10">
                <ul class="flex justify-center space-x-10">
                    <li><a href="index.html" class="nav_home_link link-hover">Home</a></li>
                    <li><a href="projects.html" class="nav_projects_link link-hover">Projects</a></li>
                    <li><a href="resume.html" class="nav_resume_link link-hover">Resume</a></li>
                    <li><a href="about.html" class="nav_about_link link-hover">About</a></li>
                    <li><a href="contact.html" class="nav_contact_link link-hover">Contact</a></li>
                </ul>
            </nav>
            
            <a id="nav-extra" class="hide-on-medium font-thin text-lg text-right z-0" href="index.html">Portfolio</a>

            <ul id="header-small-menu" class="show-on-small font-thin text-xl z-10 items-center">
                <li id="dropdown-button" class="link-hover-menu">
                    <img id="small-nav-menu-pic" src="assets/images/nav-menu-button.png">
                </li>
                <ul id="dropdown-content" style="display: none;">
                    <li><a href="index.html" class="nav_home_link link-hover-menu">Home</a></li>
                    <li><a href="projects.html" class="nav_projects_link link-hover-menu">Projects</a></li>
                    <li><a href="resume.html" class="nav_resume_link link-hover">Resume</a></li>
                    <li><a href="about.html" class="nav_about_link link-hover-menu">About</a></li>
                    <li><a href="contact.html" class="nav_contact_link link-hover-menu">Contact</a></li>
            </ul>    
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', siteHeader);
}
