// MDN and W3 review ref //
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.flex-ImageGallery a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Stops default link
            const rollType = this.getAttribute('data-roll'); // Get roll type 
            const detailPage = 'ProductDetailsPage.html'; 
            const newUrl = `${detailPage}?roll=${encodeURIComponent(rollType)}`; // Create new URL/Address 
            window.location.href = newUrl; // New page 
        });
    });
});
