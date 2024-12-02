// Get all the card elements and the modal
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const subImagesContainer = document.getElementById('sub-images');
const closeBtn = document.getElementById('close-btn');
const closeModalBtn = document.getElementById('close-modal');

// Add event listeners to all cards
cards.forEach(card => {
    card.addEventListener('click', function() {
        const mainImageSrc = card.getAttribute('data-image');
        const subImagesSrc = card.getAttribute('data-images').split(',');

        // Set the main image in the modal
        modalImg.src = mainImageSrc;

        // Clear any previous sub-images
        subImagesContainer.innerHTML = '';

        // Add the sub-images below the main image
        subImagesSrc.forEach(subImageSrc => {
            const subImage = document.createElement('img');
            subImage.src = subImageSrc;
            subImage.alt = "Sub Image";
            subImage.addEventListener('click', function() {
                modalImg.src = subImageSrc;  // Change the main image when a sub-image is clicked
            });
            subImagesContainer.appendChild(subImage);
        });

        modal.style.display = 'flex';  // Show the modal
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';  // Hide the modal
});

// Close the modal when the close modal button is clicked
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';  // Hide the modal
});

// Close the modal when clicking outside the image
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';  // Hide the modal
    }
});
