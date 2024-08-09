function openEnvelope() {
    const envelopeTop = document.getElementById('envelope-top');
    const envelopeBottom = document.getElementById('envelope-bottom');
    const seal = document.getElementById('seal');
    const envelope = document.getElementById('envelope');
    const invitation = document.getElementById('invitation');
    const audio = document.getElementById('wedding-song');
    const playPauseIcon = document.getElementById('play-pause-icon');

    envelopeTop.style.transform = 'translateY(-100vh)';
    envelopeBottom.style.transform = 'translateY(100vh)';

    setTimeout(() => {
        seal.style.opacity = '0';
    }, 30); // Reducido para una desaparición rápida

    setTimeout(() => {
        envelope.classList.add('hidden');
        invitation.classList.remove('hidden');
        displayGuestInfo(0); // Cambia el índice según el invitado

        // Inicia la reproducción de la canción automáticamente
        audio.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    }, 1000); // Se espera un poco más para ocultar el sobre completo
}

document.getElementById('play-pause-button').addEventListener('click', function() {
    const audio = document.getElementById('wedding-song');
    const playPauseIcon = document.getElementById('play-pause-icon');

    if (audio.paused) {
        audio.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    } else {
        audio.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }
});

// Actualizar el tiempo de la canción y el tiempo restante
document.getElementById('wedding-song').addEventListener('timeupdate', function() {
    const audio = this;
    const currentTime = document.getElementById('current-time');
    const durationTime = document.getElementById('duration-time');

    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60);
    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);

    currentTime.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;
    durationTime.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
});
