document.getElementById("generator").addEventListener("click", changeImage);
// document.getElementById("generator").addEventListener("click", downloadImage);

function changeImage() {
    var image = document.getElementById("image");
    // image.srcset = "assets/images/heic1206a.jpg 512w, assets/images/heic1206a.jpg 512w";
    if (image.srcset.match("assets/images/default.jpg 512w, assets/images/default.jpg 512w")) {
    image.srcset = "assets/images/heic1206a.jpg 2048w, assets/images/heic1206a.jpg 2048w";
    }
    else {
        image.srcset = "assets/images/default.jpg 512w, assets/images/default.jpg 512w";
    }
}
