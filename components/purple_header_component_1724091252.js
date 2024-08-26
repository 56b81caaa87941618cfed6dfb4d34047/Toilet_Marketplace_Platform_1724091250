Vue.component("purple_header_component_1724091252", {
    template: `
    <header class="w-full z-30 bg-purple-800" id="header-section-container" style="min-height: 270px"   >
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="flex items-center justify-between h-16 md:h-20">
    
                <div id="site-branding" class="flex-1">
                    <a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip">
                        <img id="logo-image" class="max-w-none" src="./images/logo.svg" width="38" height="38" alt="Stellar">
                    </a>
                </div>
    
                <nav id="desktop-navigation" class="hidden md:flex md:grow">
    
                    <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
                        <li><a id="Home-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-200" href="Home.html">Home</a></li>
                        <li><a id="Browse Toilets-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-200" href="Browse Toilets.html">Browse Toilets</a></li>
                        <li><a id="Sellers-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-200" href="Sellers.html">Sellers</a></li>
                        <li><a id="About Us-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-200" href="About Us.html">About Us</a></li>
                        <li><a id="Contact-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-purple-200" href="Contact.html">Contact</a></li>
                    </ul>
    
                </nav>
    
                <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
                    <li><a id="sign-in-link" class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-white hover:text-purple-200" href="signin.html">Sign in</a></li>
                    <li class="ml-6"><a id="sign-up-link" class="btn-sm transition duration-150 ease-in-out w-full group relative bg-white text-purple-800 hover:bg-purple-100 rounded-full px-4 py-2" href="signup.html"><span class="relative inline-flex items-center">Sign up <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-500">-&gt;</span></span></a></li>
                </ul>
    
                <div id="mobile-menu" class="md:hidden flex items-center ml-4">
    
                    <button id="hamburger-button" class="hamburger" @click="expanded = !expanded" aria-controls="mobile-nav" :aria-expanded="expanded">
                        <span class="sr-only">Menu</span>
                        <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-white hover:text-purple-200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <rect y="2" width="20" height="2" rx="1" />
                            <rect y="9" width="20" height="2" rx="1" />
                            <rect y="16" width="20" height="2" rx="1" />
                        </svg>
                    </button>
    
                    <nav id="mobile-nav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" v-show="expanded" @click.outside="expanded = false" @keydown.escape="expanded = false">
                        <ul id="mobile-nav-list" class="bg-purple-700 rounded-lg px-4 py-2">
                            <li><a id="mobile-Home-link" class="flex font-medium text-sm py-2 text-white hover:text-purple-200" href="Home.html">Home</a></li>
                            <li><a id="mobile-Browse Toilets-link" class="flex font-medium text-sm py-2 text-white hover:text-purple-200" href="Browse Toilets.html">Browse Toilets</a></li>
                            <li><a id="mobile-Sellers-link" class="flex font-medium text-sm py-2 text-white hover:text-purple-200" href="Sellers.html">Sellers</a></li>
                            <li><a id="mobile-About Us-link" class="flex font-medium text-sm py-2 text-white hover:text-purple-200" href="About Us.html">About Us</a></li>
                            <li><a id="mobile-Contact-link" class="flex font-medium text-sm py-2 text-white hover:text-purple-200" href="Contact.html">Contact</a></li>
                        </ul>
                    </nav>
    
                </div>
    
            </div>
        </div>
    </header>
    `,
    data() {
        return {
            expanded: false
        };
    },
    methods: {
        // Add any necessary methods here
    }
});