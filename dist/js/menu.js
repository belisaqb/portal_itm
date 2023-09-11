document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggleButton').addEventListener('click', function() {
        var optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.style.display = (optionsContainer.style.display === 'none') ? 'block' : 'none';
    });
});