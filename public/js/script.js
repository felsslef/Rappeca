let currentSlide = 0;
const carousel = document.querySelector('[data-carousel]');
const slides = carousel.querySelectorAll('.slide');
const descriptions = [
    'Descrição da imagem 1.',
    'Descrição da imagem 2.',
    'Descrição da imagem 3.'
];

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    carousel.querySelector('.carousel-caption').textContent = descriptions[index];
}

carousel.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

carousel.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

showSlide(currentSlide);

// Ver Mais functionality
const verMaisBtn = document.getElementById('ver-mais');
const eventsColumn = document.querySelector('.events-column');

// set footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// admin request form handling (placeholder)
const adminForm = document.getElementById('admin-request-form');
const adminMsg = document.getElementById('admin-msg');
if (adminForm) {
    adminForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('admin-email').value.trim();
        if (!email) {
            adminMsg.textContent = 'Por favor insira um e-mail válido.';
            return;
        }
        // Placeholder: aqui você pode integrar com backend para processar a solicitação
        adminMsg.textContent = 'Solicitação enviada. Verificaremos e entraremos em contato.';
        adminForm.reset();
    });
}

function criarEvento({ titulo, descricao, imagem }) {
    const template = document.getElementById('evento-template');
    const container = document.getElementById('eventos-container');

    const clone = template.content.cloneNode(true);

    clone.querySelector('img').src = imagem;
    clone.querySelector('.evento-titulo').textContent = titulo;
    clone.querySelector('.evento-descricao').textContent = descricao;

    container.appendChild(clone);
}

criarEvento({
    titulo: "Feira Agroecológica",
    descricao: "Venha conhecer produtores locais e alimentos sustentáveis.",
    imagem: "../img/carrossel/carrossel1.jpg"
});

criarEvento({
    titulo: "Oficina de Compostagem",
    descricao: "Aprenda práticas sustentáveis para o dia a dia.",
    imagem: "../img/carrossel/carrossel2.jpg"
});
