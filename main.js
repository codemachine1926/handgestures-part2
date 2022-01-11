result_1 = "";
result_2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:85
});

Webcam.attach("camera");

function take_snapshot() {

    Webcam.snap(function (dataURI) {

        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+dataURI+'">';
    });
}
console.log("ml5 version : ", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GF8CqWzj0/model.json",modelLoaded());