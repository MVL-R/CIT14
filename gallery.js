document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-photos img');

    galleryImages.forEach(function(image) {
        image.addEventListener('mouseenter', function() {
            image.classList.add('zoom-in');
        });

        image.addEventListener('mouseleave', function() {
            image.classList.remove('zoom-in');
        });
    });
});