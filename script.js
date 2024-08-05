function openEnvelope() {
    const envelopeTop = document.getElementById('envelope-top');
    const envelopeBottom = document.getElementById('envelope-bottom');
    const seal = document.getElementById('seal');
    const invitation = document.getElementById('invitation');

    envelopeTop.style.transform = 'rotateX(-180deg)';
    envelopeBottom.style.transform = 'rotateX(180deg)';

    setTimeout(() => {
        seal.style.display = 'none';
        invitation.classList.add('show');
    }, 1000); // La duración debe coincidir con la transición de la apertura
}

// Reproductor de música
const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const playPauseIcon = document.getElementById('playPauseIcon');
const progressBar = document.getElementById('progressBar');
const currentTime = document.getElementById('currentTime');
const durationTime = document.getElementById('durationTime');
const volumeButton = document.getElementById('volumeButton');
const volumeIcon = document.getElementById('volumeIcon');
const volumeBar = document.getElementById('volumeBar');

audioPlayer.addEventListener('loadedmetadata', () => {
    progressBar.max = audioPlayer.duration;
    durationTime.textContent = formatTime(audioPlayer.duration);
    audioPlayer.play();
    playPauseIcon.classList.replace('fa-play', 'fa-pause');
});

audioPlayer.addEventListener('timeupdate', () => {
    progressBar.value = audioPlayer.currentTime;
    currentTime.textContent = formatTime(audioPlayer.currentTime);
});

playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseIcon.classList.replace('fa-play', 'fa-pause');
    } else {
        audioPlayer.pause();
        playPauseIcon.classList.replace('fa-pause', 'fa-play');
    }
});

progressBar.addEventListener('input', () => {
    audioPlayer.currentTime = progressBar.value;
});

volumeButton.addEventListener('click', () => {
    audioPlayer.muted = !audioPlayer.muted;
    volumeIcon.classList.toggle('fa-volume-up');
    volumeIcon.classList.toggle('fa-volume-mute');
});

volumeBar.addEventListener('input', () => {
    audioPlayer.volume = volumeBar.value / 100;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
