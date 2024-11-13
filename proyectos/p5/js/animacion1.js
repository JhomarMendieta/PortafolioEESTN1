let animationRunning = false;
let canvas;

function setup() {
    let container = document.getElementById('p5-container');
    let canvasWidth = container.offsetWidth;
    let canvasHeight = container.offsetHeight;
    
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('p5-container');
    background(200);
    frameRate(random(1, 20));
}

function draw() {
    if (animationRunning) {
        noStroke();
        fill(random(0, 250), random(0, 250), random(0, 250), 127.5);
        ellipse(random(width), random(height), random(5, 100), random(5, 100));
    }
}

function windowResized() {
    let container = document.getElementById('p5-container');
    resizeCanvas(container.offsetWidth, container.offsetHeight);
    background(200);  // Opcional: Restablecer el fondo cuando se redimensiona la ventana
}

document.getElementById('start-button').addEventListener('click', function() {
    animationRunning = !animationRunning;
    if (!animationRunning) {
        clear(); // Limpia el lienzo cuando se detiene la animación
        background(200); // Restablece el fondo
    }
});