document.getElementById("generator").addEventListener("click", changeImage);

function changeImage() {
    var image = document.getElementById("image");
    // image.srcset = "assets/images/heic1206a.jpg 512w, ./assets/images/heic1206a.jpg 512w";
    if (image.src.match("assets/images/default.jpg")) {
    image.src = "./assets/images/heic1206a.jpg";
    }
    else {
        image.src = "assets/images/default.jpg";
    }
}


