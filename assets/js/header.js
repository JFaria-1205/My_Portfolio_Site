// Header HTML 
const siteHeader = `
    <header class="sticky top-0 bg-gray-800 p-4 shadow-md">
        <nav>
            <ul class="flex space-x-4 justify-center text-white">
                <li><a href="index.html" class="hover:text-yellow-200">Home</a></li>
                <li><a href="projects.html" class="hover:text-yellow-300">Projects</a></li>
                <li><a href="about.html" class="hover:text-yellow-400">About</a></li>
                <li><a href="contact.html" class="hover:text-yellow-500">Contact</a></li>
            </ul>
        </nav>
    </header>
`;

document.body.insertAdjacentHTML('afterbegin', siteHeader);