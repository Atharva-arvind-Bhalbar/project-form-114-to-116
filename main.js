Nose_X = 0;
Nose_Y = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/3JcJ5tNB/31d5l-f-WNs-L-AC-SY1000.jpg'); 
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modalLoaded);
  poseNet.on('pose', gotPoses);
}

function modalLoaded()
{
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
      console.log(results);
      Nose_X = results[0].pose.nose.x;
      Nose_Y = results[0].pose.nose.y;
      console.log("nose x =" + Nose_X);
      console.log("nose y = " + Nose_Y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(45, 0, 45);
    stroke(45, 0, 35);
    circle(Nose_X, Nose_Y, 20);
    image(clown_nose, Nose_X, Nose_Y, 30, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}

