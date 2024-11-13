let map;
let marker;
let audio;
let isPlaying = false;

function initMap() {
    const initialLocation = { lat: -34.603722, lng: -58.381592 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: initialLocation,
    });

    marker = new google.maps.Marker({
        position: initialLocation,
        map: map,
    });

    simulateRealTimeUpdate();

    audio = new Audio('assets/music/506.mp3');

    document.getElementById("pauseResumeBtn").addEventListener("click", togglePauseResume);
    document.getElementById("restartBtn").addEventListener("click", restartMashupSound);
}

function simulateRealTimeUpdate() {
    setInterval(() => {
        const newLocation = {
            lat: marker.getPosition().lat() + Math.random() * 0.01,
            lng: marker.getPosition().lng() + Math.random() * 0.01,
        };

        marker.setPosition(newLocation);
        map.setCenter(newLocation);

        if (isPlaying) {
            playMashupSound();
        }
    }, 5000);
}

function playMashupSound() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    }
}

function togglePauseResume() {
    const pauseResumeBtn = document.getElementById("pauseResumeBtn");
    
    if (audio.paused) {
        audio.play();
        pauseResumeBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        isPlaying = true;
    } else {
        audio.pause();
        pauseResumeBtn.innerHTML = '<i class="fa-solid fa-play"></i>' ;
        isPlaying = false;
    }
}

function restartMashupSound() {
    audio.currentTime = 0;
    audio.play();
    isPlaying = true;
    document.getElementById("pauseResumeBtn").textContent = "Pausar Sonido";
}
