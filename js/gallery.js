const galleryItems =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightbox-image");

const closeLightbox =
document.querySelector(".close-lightbox");

galleryItems.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";
    }

});