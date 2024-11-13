// Con el "cont" definimos la cantidad de imagenes que tenemos en la carpeta img
var cont = 12;

// Obtenemos elementos a partir del ID
var contenedor = document.getElementById('contenedor');
var label = document.getElementById('label');

// Iniciamos un bucle para "imprimir" todas la etiquetas necesarias para la galeria
for (i = 1; i <= cont; i++) {
    // Creamos un elemento "div" a cual le asignamos la clase "img" y un id
    var cont_img = document.createElement('div');
    cont_img.className = 'img';

    // Agrega el elemento creado dentro del label obtenido
    label.appendChild(cont_img)

    // Mas de lo mismo, creamos un elemento y le asignamos la ruta de la imagen a mostrar
    var img = document.createElement('img');
    img.src = 'Img/img' + i + '.jpg';
    img.id = i;

    // Agrega la imagen dentro del div creado anteriormente
    cont_img.appendChild(img);

    // Crea un h2 el cual tendra como texto el numero de imagen
    var num_img = document.createElement('h2');
    num_img.innerText = "Imagen #" + i + "";

    // Agrega un texto dentro del div creado anteriormente
    cont_img.appendChild(num_img);
}


// Obtiene el contenedor donde se mostraran las imagenes
var contenedor_img = document.getElementById("contenedor_img");

// Obtiene los botones para que se puedan cambiar las imagenes
var izq = document.querySelector("#izq");
var der = document.querySelector("#der");

// Obtiene el boton para cerrar las imagenes
var cerrar = document.getElementById("cerrar");

// Obtiene todas las imagenes que existan
var imagenes = document.querySelectorAll(".img");
imagenes.forEach(el => {

    // Crea un evento a la imagen que sea clickeada
    el.addEventListener("click", e => {

        // Crea una variable donde obtiene la id creada
        var id = e.target.getAttribute("id");

        // Transforma la id a int
        var id_a = parseInt(id);

        // Crea un etiqueta img
        var img_ventana = document.createElement('img');

        // Si se preciona el boton "izq" resta el numero de la id para mostrar la id anterior
        if (izq.addEventListener('click', () => {
            id_a -= 1;
            if (id_a < 1) {
                id_a = cont;
            }

            // Asigna la url de la imagen a mostrar
            img_ventana.src = "Img/img" + id_a + ".jpg";
        }));

        // Sino, si se preciona "der" incrementa en uno para mostrar la siguiente imagen
        else if (der.addEventListener('click', () => {
            id_a += 1;
            if (id_a > cont) {
                id_a = 1;
            }

            // Asigna la url de la imagen a mostrar
            img_ventana.src = "Img/img" + id_a + ".jpg";
        }));

        // Sino, muestra la imagen que fue clickeada
        else {
            img_ventana.src = "Img/img" + id + ".jpg";
        }

        // agrega la imagen al contenedor de la imagen
        contenedor_img.appendChild(img_ventana);

        // Si se precion el boton de cerrar, quita la etiqueta
        if (cerrar.addEventListener('click', () => {
            contenedor_img.removeChild(img_ventana);
        }));
    });
});
