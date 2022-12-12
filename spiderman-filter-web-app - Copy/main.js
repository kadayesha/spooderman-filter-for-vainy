noseX = 0;
noseY = 0;
function preload(){
spiderman = loadImage("spooderman.png")
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();

video = createCapture(VIDEO);
video.size(300,300)
video.hide();

poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on("pose",getPoses);
}

function draw(){
image(video, 0,0,300,300);
image(spiderman, noseX, noseY, 180,180)
}

function take_snapshot(){
    save("snapshot.png");
}

function modelLoaded() {
    console.log("model loaded")
}

function getPoses(results) {
    if (results.length > 0){
        console.log(results)
        console.log("nose_x = "+results[0].pose.nose.x)
        console.log("nose_y = "+results[0].pose.nose.y)

        noseX = results[0].pose.nose.x-90;
        noseY = results[0].pose.nose.y-110;
    }

}