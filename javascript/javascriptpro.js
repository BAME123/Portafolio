    
    cambiarColorRedes();
// HAMBURGESAAAAAAAAAAAAAAAAAAAAAAAAAA
const boton_hamburgesa = document.getElementById('boton_hamburgesa');
const lista_nav = document.querySelector('#ocultar_hamburguesa');

// Inicialmente ocultar la lista en pantallas pequeñas
function ajustarMenu() {
    if (window.innerWidth <=576) {
        lista_nav.style.display = 'none'; // Ocultar por defecto en pantallas pequeñas
    } else {
        lista_nav.style.display = 'block'; // Mostrar en pantallas grandes
    }
}

// Llamar a la función al cargar la página
ajustarMenu();

// Agregar un event listener para el botón de hamburguesa
boton_hamburgesa.addEventListener('click', () => {
    if (window.innerWidth <= 576) { // Solo alternar en pantallas pequeñas
        if (lista_nav.style.display === 'block') {
            lista_nav.style.display = 'none'; // Ocultar
        } else {
            lista_nav.style.display = 'block'; // Mostrar
        }
    }
});

// Agregar un event listener para el cambio de tamaño de la ventana
window.addEventListener('resize', () => {
    ajustarMenu(); // Ajustar el menú según el tamaño de la ventana
});

// PARA QUE NO ME AFECTE EL CLICK EL EVETTO DE CAMBIAR LA VISTA QUE NO ME AFECTE AL DAR CLICK EN EL ENLACE O EN LOS LINKS 

function evento_carrusel(){

    const carrus= document.querySelectorAll('.boton_cambiar_carrusel');
    carrus.forEach(evento=>{

        evento.addEventListener('click',(event)=>{

            event.stopPropagation();
    
        })

    })
}

evento_carrusel();




      