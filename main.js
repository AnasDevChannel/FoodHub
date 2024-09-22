const skewPhotos = document.querySelectorAll(".skew-photos div");
const skewPhotosTXT = document.querySelectorAll(".skew-photos p");

skewPhotos.forEach(function(photo, index) {
    photo.addEventListener("mouseenter", function() {
        skewPhotosTXT[index].style.display = "block";
        skewPhotosTXT[index].style.animation = "show-text 0.5s forwards";
        skewPhotos.forEach(function(p) {
            if (p !== photo) {
                p.style.filter = "blur(5px)";
            }
        });
    });

    photo.addEventListener("mouseleave", function() {
        skewPhotosTXT[index].style.display = "none";
        skewPhotos.forEach(function(p) {
            p.style.filter = "none";
        });
    });
});
