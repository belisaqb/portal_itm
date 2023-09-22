/* Sidebar */
document.addEventListener('DOMContentLoaded', function() {
    const floatingFilter = document.getElementById('filter');
    const optionsContainer = document.getElementById('optionsContainer');
    const closeButton = document.getElementById('closeButton');

    let isOpen = false;

    floatingFilter.addEventListener('click', function(event) {
        event.stopPropagation();

        if (!isOpen) {
            optionsContainer.style.display = 'block';
            optionsContainer.classList.remove('hide');
            optionsContainer.classList.add('show');
            document.body.appendChild(optionsContainer);
            isOpen = true;
        } else {
            optionsContainer.classList.remove('show');
            optionsContainer.classList.add('hide');
            setTimeout(() => {
                optionsContainer.style.display = 'none';
            }, 500); // 500ms es la duración de la animación
            isOpen = false;
        }
    });

    closeButton.addEventListener('click', function(event) {
        event.stopPropagation();

        optionsContainer.classList.remove('show');
        optionsContainer.classList.add('hide');
        setTimeout(() => {
            optionsContainer.style.display = 'none';
        }, 500); // 500ms es la duración de la animación
        isOpen = false;
    });
});
/* Sidebar */


















