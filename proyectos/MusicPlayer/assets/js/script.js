let sound;
let musicPlaying = false;
let musicPaused = false;
let amplitude;
let fft;
let bars = [];

function preload() {
    sound = loadSound('assets/music/506.mp3');
}

function setup() {
    let canvas = createCanvas(400, 160);
    canvas.parent('musicBox');
    amplitude = new p5.Amplitude();
    fft = new p5.FFT();

    let startButton = select('#startButton');
    let pauseButton = select('#pauseButton');
    startButton.mousePressed(startMusic);
    pauseButton.mousePressed(togglePause);
    
    for (let i = 0; i < 10; i++) {
        bars.push(new Bar(i * 40 + 10, height / 2, 20, 10));
    }
}

function draw() {
    background('#c0c0c0');
    if (musicPlaying && !musicPaused) {
        let level = amplitude.getLevel();
        let spectrum = fft.analyze();
        for (let i = 0; i < bars.length; i++) {
            bars[i].update(level, spectrum[i]);
            bars[i].display();
        }
    } else {
        for (let bar of bars) {
            bar.display();
        }
    }
}

function startMusic() {
    if (musicPlaying) {
        sound.stop();
    }
    sound.loop();
    musicPlaying = true;
    musicPaused = false;
}

function togglePause() {
    if (musicPlaying) {
        if (musicPaused) {
            sound.loop();
            musicPaused = false;
        } else {
            sound.pause();
            musicPaused = true;
        }
    }
}

class Bar {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color(133, 133, 133);
    }
    
    update(level, spectrumValue) {
        this.h = map(level, 0, 1, 10, 160);
        this.color = color(map(spectrumValue, 0, 255, 0, 255), 100, 150);
    }
    
    display() {
        fill(this.color);
        rect(this.x, this.y - this.h / 2, this.w, this.h);
    }
}
