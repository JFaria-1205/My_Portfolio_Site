// Header HTML 
const siteHeader = `
    <header class="sticky-header">
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
`;

document.body.insertAdjacentHTML('afterbegin', siteHeader);