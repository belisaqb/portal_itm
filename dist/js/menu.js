// Manages the position and function of the filter menu
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggleButton').addEventListener('click', function () {
        // Obtiene el contenedor de opciones
        var optionsContainer = document.getElementById('optionsContainer');
        // Obtiene el elemento con la clase "filter"
        var filter = document.querySelector('.filter');

        // Obtiene las dimensiones y posición del botón y del elemento con la clase "filter"
        var buttonRect = this.getBoundingClientRect(); // Rectángulo del botón
        var filterRect = filter.getBoundingClientRect(); // Rectángulo del elemento con la clase "filter"

        // calculate the vertical position (x)
        var topPosition = buttonRect.top - filterRect.top + buttonRect.height - 92;
        // Calculate the horizontal position (y)
        var leftPosition = buttonRect.left - filterRect.left - 30;

        // Establece el estilo
        optionsContainer.style.position = 'absolute';
        optionsContainer.style.top = topPosition + 'px';
        optionsContainer.style.left = leftPosition + 'px';

        // Cambia el atributo de visualización
        optionsContainer.style.display = (optionsContainer.style.display === 'none') ? 'block' : 'none';
        // Alterna la clase 'show' 
        optionsContainer.classList.toggle('show');
    });
    document.getElementById('closeButton').addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que el evento se propague a otros elementos

        // Obtiene el contenedor de opciones
        var optionsContainer = document.getElementById('optionsContainer');
        // Agrega la clase 'hide' para iniciar la animación de cierre
        optionsContainer.classList.add('hide');

        // Espera a que termine la animación antes de ocultar el contenedor
        optionsContainer.addEventListener('animationend', function () {
            // Oculta el contenedor de opciones
            optionsContainer.style.display = 'none';
            // Quita las clases 'show' y 'hide'
            optionsContainer.classList.remove('show', 'hide');
        }, { once: true }); // Establece que este evento debe ejecutarse solo una vez
    });
});

//El tamano de filter crece segun el contenido de la pagina
document.addEventListener('DOMContentLoaded', function () {
    const filter = document.getElementById('filter');
    const content = document.getElementById('content');

    function equalizeHeights() {
        const maxHeight = Math.max(filter.offsetHeight, content.offsetHeight);
        filter.style.height = `${maxHeight}px`;
        content.style.height = `${maxHeight}px`;
    }

    // Llama a la función inicialmente
    equalizeHeights();

    // Vuelve a llamar a la función cuando el tamaño de la ventana cambia
    window.addEventListener('resize', equalizeHeights);
});
