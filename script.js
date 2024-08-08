const guests = [
    {
        name: "Fam. López García",
        passes: 2,
        adults: 2,
        children: 0
    },
    {
        name: "Ana López",
        passes: 3,
        adults: 2,
        children: 1
    }
];

const wishes = [];

let currentSlide = 0;

function openEnvelope() {
    const envelopeTop = document.getElementById('envelope-top');
    const envelopeBottom = document.getElementById('envelope-bottom');
    const seal = document.getElementById('seal');
    const envelope = document.getElementById('envelope');
    const invitation = document.getElementById('invitation');

    envelopeTop.style.transform = 'translateY(-100vh)';
    envelopeBottom.style.transform = 'translateY(100vh)';

    setTimeout(() => {
        seal.style.opacity = '0';
    }, 30); // Reducido para una desaparición rápida

    setTimeout(() => {
        envelope.classList.add('hidden');
        invitation.classList.remove('hidden');
        displayGuestInfo(0); // Cambia el índice según el invitado
    }, 1000); // Se espera un poco más para ocultar el sobre completo
}

document.addEventListener('scroll', () => {
    const photoSections = document.querySelectorAll('.photo-section');
    photoSections.forEach(photoSection => {
        const speed = photoSection.getAttribute('data-speed');
        const yPos = -(window.scrollY * speed / 100);
        photoSection.style.transform = `translateY(${yPos}px)`;
    });
});

// Función para iniciar el contador
document.addEventListener('DOMContentLoaded', () => {
    // Define la fecha objetivo
    const targetDate = new Date('2024-11-23T00:00:00').getTime();

    // Actualiza el contador cada segundo
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calcula los días, horas, minutos y segundos restantes
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualiza los elementos del contador
        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

        // Si el contador ha terminado, detén la cuenta regresiva
        if (distance < 0) {
            clearInterval(countdown);
            document.querySelector('.countdown').textContent = "¡La boda ya ocurrió!";
        }
    }, 1000);
});


// Función para mostrar la información del invitado
function displayGuestInfo(index) {
    const guest = guests[index];
    document.getElementById('guest-name').textContent = guest.name;
    document.getElementById('passes').textContent = guest.passes;
    document.getElementById('adults').textContent = guest.adults;
    document.getElementById('children').textContent = guest.children;
}


// Funciones para los buenos deseos
function toggleWishes() {
    const wishesDiv = document.getElementById('wishes');
    wishesDiv.classList.toggle('hidden');
    wishesDiv.innerHTML = wishes.map(wish => `<p><strong>${wish.name}:</strong> ${wish.message}</p>`).join('');
}

function toggleWishForm() {
    document.getElementById('wish-form').classList.toggle('hidden');
}

function submitWish() {
    const name = document.getElementById('wish-name').value;
    const message = document.getElementById('wish-message').value;
    wishes.push({ name, message });
    document.getElementById('wish-name').value = '';
    document.getElementById('wish-message').value = '';
    toggleWishForm();
    toggleWishes();
}

// Función para cambiar la foto principal en la galería
function changePhoto(element) {
    const mainPhoto = document.getElementById('main-photo');
    mainPhoto.src = element.src;
}

// Iniciar el contador
const weddingDate = new Date('2024-11-23T00:00:00').getTime();
initializeCountdown(weddingDate);







