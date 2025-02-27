// script.js

// 1. Validación del formulario de búsqueda 
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".search-box");
    if (searchForm) {
        const searchInput = searchForm.querySelector("input[type='text']");
        const locationInput = searchForm.querySelector("input[type='text']:nth-child(2)");

        searchForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita que el formulario se envíe

            // Validación básica
            if (searchInput.value.trim() === "" || locationInput.value.trim() === "") {
                alert("Por favor, completa todos los campos.");
            } else {
                alert(`Buscando: ${searchInput.value} en ${locationInput.value}`);
                
            }
        });
    }
});

// 2. Animación al hacer hover en las categorías 
const categories = document.querySelectorAll(".service");

categories.forEach((category) => {
    category.addEventListener("mouseenter", () => {
        category.style.transform = "scale(1.05)";
        category.style.transition = "transform 0.3s ease";
    });

    category.addEventListener("mouseleave", () => {
        category.style.transform = "scale(1)";
    });
});

// 3. Funcionalidad para el botón "Explorar servicios" 
const exploreButton = document.getElementById("explorar-servicios");

if (exploreButton) {
    exploreButton.addEventListener("click", () => {
        alert("Explorando servicios...");
    });
}

// 4. Carga dinámica de testimonios 
const testimonialGrid = document.querySelector(".testimonial-grid");

if (testimonialGrid) {
    const testimonials = [
        {
            text: "Excelente servicio, los profesionales son muy confiables y puntuales.",
            author: "María G.",
        },
        {
            text: "Encontré a un jardinero increíble en minutos. ¡Totalmente recomendado!",
            author: "Juan P.",
        },
        {
            text: "La plataforma es fácil de usar y los precios son justos.",
            author: "Ana L.",
        },
    ];

    testimonials.forEach((testimonial) => {
        const testimonialElement = document.createElement("div");
        testimonialElement.classList.add("testimonial");

        testimonialElement.innerHTML = `
            <p>"${testimonial.text}"</p>
            <span>- ${testimonial.author}</span>
        `;

        testimonialGrid.appendChild(testimonialElement);
    });
}