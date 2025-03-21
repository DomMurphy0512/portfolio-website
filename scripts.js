document.addEventListener("DOMContentLoaded", () => {
    // Dark mode toggle
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.padding = '10px';
    toggleButton.style.cursor = 'pointer';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fade-in sections when scrolling
    const sections = document.querySelectorAll("section");

    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.85) {
                section.classList.remove("opacity-0");
                section.classList.add("opacity-100");
            }
        });
    };

    // Run function on page load and scroll
    fadeInOnScroll();
    window.addEventListener("scroll", fadeInOnScroll);

    // Render Projects Dynamically
    const projects = [
        {
            title: "ColorCatcher",
            description: "A classic arcade-style brick breaker game built in Unity with C#",
            link: "https://dmurphydev.github.io/ColorCatcher/",
            image: "assets/ColorCatcherThumbnail.jpg"
        },
        {
            title: "Portfolio Website",
            description: "My personal portfolio website built using Tailwind CSS and JavaScript.",
            link: "https://dommurphy0512.github.io/portfolio-website/",
            image: "assets/PortfolioWebsiteThumbnail.jpg"
        }
    ];

    const projectContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("bg-gray-100", "p-4", "rounded-lg", "shadow-lg", "text-center", "opacity-0", "transition-all", "duration-1000");

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-40 object-cover rounded-md">
            <h3 class="text-xl font-semibold mt-3">${project.title}</h3>
            <p class="mt-2 text-gray-700">${project.description}</p>
            <a href="${project.link}" target="_blank" class="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View Project</a>
        `;

        projectContainer.appendChild(projectCard);
    });

    // Fade-in projects after they are loaded
    setTimeout(() => {
        document.querySelectorAll("#projects-container div").forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove("opacity-0");
                card.classList.add("opacity-100");
            }, index * 200);
        });
    }, 500);
});
