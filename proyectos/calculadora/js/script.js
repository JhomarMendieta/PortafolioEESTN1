var btn = document.querySelector('.igual');
function calculate() {
    var resultado = document.querySelector('.display').value;
    let num = document.querySelector('.img').innerHTML = resultado + "<img src='img/p.jpg'>";
}



btn.addEventListener("click", () => {
    calculate();
});