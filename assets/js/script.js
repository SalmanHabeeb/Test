document.getElementById("generator").addEventListener("click", downloadImage);
// document.getElementById("generator").addEventListener("click", downloadImage);

function changeImage() {
    var image = document.getElementById("image");
    // image.srcset = "./assets/images/heic1206a.jpg 512w, ./assets/images/heic1206a.jpg 512w";
    if (image.srcset.match("./assets/images/default.jpg 512w, ./assets/images/default.jpg 512w")) {
    image.srcset = "./assets/images/heic1206a.jpg 2048w, ./assets/images/heic1206a.jpg 2048w";
    }
    else {
        image.srcset = "./assets/images/default.jpg 512w, ./assets/images/default.jpg 512w";
    }
}

async function downloadImage() {
    var image_url = "https://cdn.spacetelescope.org/archives/images/wallpaper5/heic2007a.jpg"; //@Hard coding
    console.log(image_url)
    const image_stream = await fetch(image_url);
    console.log(image_url)
    const imageraw = await image_stream.blob();
    // var url = URL.createObjectURL(imageraw);
    // var image = document.getElementById("image");
    // image.srcset = "$url, $url"
    // var encoder = new JPEGEncoder(9);
    // var jpgFile = encoder.encode(imageraw, 9);
    // document.getElementById("image").srcset = "$jpgFile, $jpgFile";
    const canvas = document.createElement("canvas");
    canvas.id = "canvas";
    ele = document.getElementById("canvas");
    ele.context.drawImage(imageraw, 100, 100);
}


