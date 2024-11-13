let angle = 0;
let radius = 240;
let centerX, centerY;
let diametro = 40;
let colorElipse = [255, 0, 0];

let imagen;

function setup() {
  createCanvas(800, 600);

  imagen = loadImage("assets/img/imagen.jpg");

  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  image(imagen, width - 100, 10, 80, 80);

  fill(colorElipse);
  let x = centerX + cos(angle) * radius;
  let y = centerY + sin(angle) * radius;
  ellipse(x, y, diametro, diametro);

  angle += 4;

  drawInitials();
}

function drawInitials() {
  let initialsCenterX = width / 2;
  let initialsY = 450;

  stroke(0);
  strokeWeight(5);


  // Mi nombre: Jhomar
  // J
  line(initialsCenterX - 90, initialsY, initialsCenterX - 60, initialsY);
  line(initialsCenterX - 70, initialsY + 20, initialsCenterX - 70, initialsY);
  arc(initialsCenterX - 80, initialsY + 23, 20, 25, TWO_PI, PI);

  // h
  line(initialsCenterX - 50, initialsY, initialsCenterX - 50, initialsY + 36);
  arc(initialsCenterX - 40, initialsY + 36, 20, 50, PI + TWO_PI, TWO_PI);

  // o
  arc(initialsCenterX - 10, initialsY + 24, 20, 25, PI + TWO_PI, PI);

  // m
  line(initialsCenterX + 10, initialsY + 10, initialsCenterX + 10, initialsY + 36);
  arc(initialsCenterX + 20, initialsY + 36, 20, 50, PI + TWO_PI, TWO_PI);
  arc(initialsCenterX + 40, initialsY + 36, 20, 50, PI + TWO_PI, TWO_PI);

  // a
  arc(initialsCenterX + 70, initialsY + 24, 20, 25, PI + TWO_PI, PI);
  line(initialsCenterX + 80, initialsY + 10, initialsCenterX + 80, initialsY + 36);

  // r
  line(initialsCenterX + 90, initialsY + 10, initialsCenterX + 90, initialsY + 36);
  arc(initialsCenterX + 100, initialsY + 36, 20, 50, PI + TWO_PI, HALF_PI + PI);
}

function mousePressed() {
  colorElipse = [random(255), random(255), random(255)];
}
