// Header HTML 
const siteHeader = `
    <header class="sticky top-0 bg-gray-800 p-4 shadow-md grid grid-cols-2 items-center">
        <div class="text-white font-thin text-2xl z-10">
            <nav>
                <ul class="flex justify-start space-x-4">
                    <li><a href="index.html" class="hover:text-yellow-200">Home</a></li>
                    <li><a href="projects.html" class="hover:text-yellow-300">Projects</a></li>
                    <li><a href="about.html" class="hover:text-yellow-400">About</a></li>
                    <li><a href="contact.html" class="hover:text-yellow-500">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div class="text-white font-thin text-2xl text-right z-0">
            <a href="index.html" class="hover:text-yellow-200">Jason Faria | Portfolio</a>
        </div>        
    </header>
`;

document.body.insertAdjacentHTML('afterbegin', siteHeader);