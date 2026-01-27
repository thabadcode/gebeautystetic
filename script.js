// Menu hambúrguer
const btnHamburguer = document.querySelector('.hamburguer-icon');
const logoLink = document.querySelector('#logo-link');
const menuLinks = document.querySelector('.menu-links');
const backdrop = document.querySelector('#backdrop');
const linksEspecíficos = document.querySelectorAll('.menu-links a');

btnHamburguer.addEventListener('click', () => {
    menuLinks.classList.toggle('ativo');
    backdrop.classList.toggle('ativo');
    btnHamburguer.classList.toggle('ativo');
});

logoLink.addEventListener('click', closeMenu);

backdrop.addEventListener('click', closeMenu);

linksEspecíficos.forEach(link => {
    link.addEventListener('click', closeMenu);
});

function closeMenu() {
    menuLinks.classList.remove('ativo');
    backdrop.classList.remove('ativo');
    btnHamburguer.classList.remove('ativo');
}

const btnAgendar = document.querySelector('.btn-agendar');

btnAgendar.addEventListener('click', closeMenu);


// Botão WhatsApp dinâmico
const btnWhatsapp = document.querySelector('.btn-whatsapp');
const footer = document.querySelector('footer');

let isStopped = false;

function handleScroll() {
    const btnRect = btnWhatsapp.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    if (!isStopped && btnRect.bottom + 16 >= footerRect.top) {
        btnWhatsapp.classList.add('stop');
        isStopped = true;
    }

    if (isStopped && footerRect.top > window.innerHeight) {
        btnWhatsapp.classList.remove('stop');
        isStopped = false;
    }
}

window.addEventListener('scroll', handleScroll);