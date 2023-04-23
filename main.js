noseX = 0;
noseY = 0;
function preload(){
moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 300);
    image(moustache, noseX-22, noseY-12, 50, 50);
}

function take_snapshot(){
    save('moustache.png');
}

function modelLoaded(){
    console.log("Posenet is initialised");
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x : " + noseX);
        console.log("nose y : " + noseY);
    }
}