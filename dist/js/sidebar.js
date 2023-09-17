document.addEventListener('DOMContentLoaded', function() {
    const floatingFilter = document.getElementById('filter');
    const optionsContainer = document.getElementById('optionsContainer');
    const closeButton = document.getElementById('closeButton');

    let isOpen = false; // Variable para rastrear si el contenedor está abierto

    floatingFilter.addEventListener('click', function(event) {
        event.stopPropagation(); // Evitar que el clic en el filtro se propague y cierre inmediatamente

        if (!isOpen) {
            optionsContainer.style.display = 'block';
            document.body.appendChild(optionsContainer);
            isOpen = true;
        } else {
            optionsContainer.style.display = 'none';
            isOpen = false;
        }
    });

    // Agregar un evento clic al botón de cierre
    closeButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Evitar que el clic en el botón de cierre propague al contenedor

        optionsContainer.style.display = 'none';
        isOpen = false;
    });

});
