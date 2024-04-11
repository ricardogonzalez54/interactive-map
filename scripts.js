// Variable para almacenar el ángulo de rotación en grados
var rotate_degrees = -27.3 + 90; // Por ejemplo, puedes establecer aquí el ángulo de rotación deseado
// Variable que controla el movimiento de teclado
const step= 10;

// Inicializar Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiZGllZ28tY2xiYiIsImEiOiJjbHNjbWZodHEwcWtxMmxxdW13NzkxamV5In0.GpUh5FL_TGYPxXuuAUwvDA';
var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/mapbox/streets-v11',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-73.06180165035789, -36.83121502282673],
    zoom: 15.2,
    bearing: rotate_degrees,
    keyboard: false,
});

// Agregar control de navegación al mapa
map.addControl(new mapboxgl.NavigationControl());

// Rotar la vista del mapa


// Inicializar Mapbox Draw
var draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
        point: true,
        line_string: true,
        polygon: true,
        trash: true
    }
});
map.addControl(draw);

// Manejador de evento para el botón de guardar
// document.getElementById('saveButton').addEventListener('click', function() {
//     // Obtener todas las geometrías dibujadas
//     var features = draw.getAll().features;

//     // Iterar sobre las geometrías y agregar nombre y categoría
//     features.forEach(function(feature) {
//         // Aquí puedes permitir al usuario ingresar el nombre y la categoría
//         var nombre = prompt("Ingrese el nombre para esta geometría:");
//         var categoria = prompt("Ingrese la categoría para esta geometría:");

//         // Asignar nombre y categoría a las propiedades de la geometría
//         feature.properties = {
//             name: nombre,
//             category: categoria
//         };

//         // Aquí puedes hacer lo que desees con la geometría, como enviarla a un servidor o guardarla localmente
//         console.log('Geometría dibujada con propiedades:', feature);
//     });
// });

// Manejador de evento para el botón de dibujar área verde
// document.getElementById('drawGreenAreaButton').addEventListener('click', function() {
//     // Configurar el estilo del polígono
//     var greenPolygonStyle = {
//         'fill-color': '#FF0000', // Relleno verde
//         'fill-opacity': 0.7, // Opacidad del relleno
//         'fill-outline-color': '#FF0000', // Borde verde
//     };

//     // Configurar el modo de dibujo del polígono con el estilo personalizado
//     draw.changeMode('draw_polygon', {
//         defaultMode: 'simple_select',
//         polygon: {
//             ...draw.options.modes.draw_polygon,
//             userProperties: true, // Permite propiedades de usuario personalizadas
//             style: greenPolygonStyle // Aplica el estilo personalizado al polígono
//         }
//     });
// });

function printMapState() {
    // Obtener el centro actual del mapa
    var center = map.getCenter();

    // Obtener el nivel de zoom actual del mapa
    var zoom = map.getZoom();

    // Obtener la rotación actual del mapa
    var rotation = map.getBearing();

    // Imprimir los valores en la consola
    console.log('Centro del mapa:', center);
    console.log('Nivel de zoom:', zoom);
    console.log('Rotación:', rotation);
}
// Movemos el mapa con teclado usando step y panBy
document.addEventListener('keydown',function(e){
    switch (e.key) {
        case 'ArrowUp':
          map.panBy([0, -step], { duration: 0 });
          break;
        case 'ArrowDown':
          map.panBy([0, step], { duration: 0 });
          break;
        case 'ArrowLeft':
          map.panBy([-step, 0], { duration: 0 });
          break;
        case 'ArrowRight':
          map.panBy([step, 0], { duration: 0 });
          break;
      }
   
})

document.addEventListener('keyup',printMapState); // al presionar una tecla imrpimirá centro, zoom y rotation







