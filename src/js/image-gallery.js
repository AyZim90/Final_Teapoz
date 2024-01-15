const images = document.querySelectorAll('.image-gallery img');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementById('closeBtn');
const expandBtn = document.querySelector('.fa-expand');
const magnifyingGlassBtn = document.querySelector('.fa-magnifying-glass');
const shareBtn = document.querySelector('.fa-share');
const xmarkBtn = document.querySelector('.fa-xmark');
const prevBtn = document.querySelector('.fa-angle-left');
const nextBtn = document.querySelector('.fa-angle-right');

let currentImageIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
        captionText.textContent = this.alt;
        currentImageIndex = index;
    });
});

closeBtn.addEventListener('click', closeModal);
expandBtn.addEventListener('click', openFullscreen);
magnifyingGlassBtn.addEventListener('click', zoomImage);
shareBtn.addEventListener('click', openShareMenu);
xmarkBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', () => showImage(-1));
nextBtn.addEventListener('click', () => showImage(1));

function closeModal() {
    modal.style.display = 'none';
}

function openFullscreen() {
    if (modalImg.requestFullscreen) {
        modalImg.requestFullscreen();
    } else if (modalImg.mozRequestFullScreen) {
        modalImg.mozRequestFullScreen();
    } else if (modalImg.webkitRequestFullscreen) {
        modalImg.webkitRequestFullscreen();
    } else if (modalImg.msRequestFullscreen) {
        modalImg.msRequestFullscreen();
    }
}

function zoomImage() {
    const scaleFactor = 1.5; // Фактор увеличения

    const currentWidth = modalImg.width;
    const currentHeight = modalImg.height;

    const newWidth = currentWidth * scaleFactor;
    const newHeight = currentHeight * scaleFactor;

    modalImg.style.width = `${newWidth}px`;
    modalImg.style.height = `${newHeight}px`;
}


function openShareMenu() {
    const shareMenu = document.getElementById('shareMenu');

    if (shareMenu.style.display === 'none' || !shareMenu.style.display) {
        shareMenu.style.display = 'block';
    } else {
        shareMenu.style.display = 'none';
    }
}

function showImage(n) {
    currentImageIndex += n;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    modalImg.src = images[currentImageIndex].src;
    captionText.textContent = images[currentImageIndex].alt;
}
