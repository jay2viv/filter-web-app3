noseX = 0
noseY = 0

function preload()
{
    clown_nose = loadImage("m.png")
}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelready);
    posenet.on('pose',gotposes);
    
}

function draw()
{
    image(video,0,0,500,500);
    image(clown_nose, noseX -100, noseY +16, 30, 30)
}

function modelready()
{
    console.log("yay it worked")
}

function save1()
{
    save("mypicture.png")
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    }
}

function take_snapshot()
{
    save('myfilterImage.png')
}