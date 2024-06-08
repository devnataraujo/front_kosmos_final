// função para trocar ícone no hover
document.addEventListener('DOMContentLoaded', function() {
    const backIconLink = document.getElementById('backIconLink');
    const backIcon = document.getElementById('backIcon');

    backIconLink.addEventListener('mouseover', function() {
        backIcon.classList.remove('bi-arrow-left-circle');
        backIcon.classList.add('bi-arrow-left-circle-fill');
    });

    backIconLink.addEventListener('mouseout', function() {
        backIcon.classList.remove('bi-arrow-left-circle-fill');
        backIcon.classList.add('bi-arrow-left-circle');
    });
});
