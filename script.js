document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audioPlayer");
    var playPauseButton = document.getElementById("playPauseButton");
    var iconoPlayPause = document.getElementById("iconoPlayPause");
    var seal = document.getElementById("seal");

    let currentSlide = 0;
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

    // Función para abrir el sobre y reproducir la música
    function openEnvelopeAndPlayMusic() {
        var envelopeTop = document.getElementById("envelope-top");
        var envelopeBottom = document.getElementById("envelope-bottom");
        var envelope = document.getElementById("envelope");
        var invitation = document.getElementById("invitation");

        envelopeTop.style.transform = 'translateY(-100vh)';
        envelopeBottom.style.transform = 'translateY(100vh)';

        setTimeout(function() {
            envelope.classList.add('hidden');
            invitation.classList.remove('hidden');
        }, 1000); // Ajusta el tiempo según tu animación

        // Reproducir música
        audio.play().then(function() {
            iconoPlayPause.classList.remove("fa-play");
            iconoPlayPause.classList.add("fa-pause");
        }).catch(function(error) {
            console.log('Playback failed: ', error);
            iconoPlayPause.classList.add("fa-play");
            iconoPlayPause.classList.remove("fa-pause");
        });
    }

    // Agregar event listener para el sello
    seal.addEventListener("click", function() {
        openEnvelopeAndPlayMusic();
    });

    // Agregar event listener para el botón de play/pause
    playPauseButton.addEventListener("click", function() {
        togglePlayPause();
    });

    function togglePlayPause() {
        if (audio.paused) {
            audio.play().then(function() {
                iconoPlayPause.classList.remove("fa-play");
                iconoPlayPause.classList.add("fa-pause");
            }).catch(function(error) {
                console.log('Playback failed: ', error);
                iconoPlayPause.classList.add("fa-play");
                iconoPlayPause.classList.remove("fa-pause");
            });
        } else {
            audio.pause();
            iconoPlayPause.classList.add("fa-play");
            iconoPlayPause.classList.remove("fa-pause");
        }
    }

    // Inicializar el contador
    const targetDate = new Date('2024-11-23T00:00:00').getTime();
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(countdown);
            document.querySelector('.countdown').textContent = "¡La boda ya ocurrió!";
        }
    }, 1000);

    // Función para mostrar la información del invitado
    function displayGuestInfo(index) {
        const guest = guests[index];
        document.getElementById('guest-name').textContent = guest.name;
        document.getElementById('passes').textContent = guest.passes;
        document.getElementById('adults').textContent = guest.adults;
        document.getElementById('children').textContent = guest.children;
    }

    // Inicializar la información del invitado
    displayGuestInfo(0);

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
});






