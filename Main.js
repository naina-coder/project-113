 
 function preload()
 {

}


 function setup()
 {
    canvas = createCanvas(1000,900);
    video = createCapture(VIDEO);
   canvas.position(150,200)
    video.hide();
    console.log("working");
 }
 

function draw()
{
    image(video,500,80,300,250);

    fill('#57472c');
    stroke('#57472c');
    rect(150, 100, 2, 118);

    fill('#ed325e');
    stroke('#ed325e');
    ellipse(150, 75, 85, 100);

    fill('#57472c');
    stroke('#57472c');
    rect(300, 140, 2, 118);

    fill('#ffa814');
    stroke('#ffa814');
    ellipse(300, 115, 80, 92);

    fill('#57472c');
    stroke('#57472c');
    rect(855, 100, 2, 180);

    fill('#0ddb8c');
    stroke('#41db0d');
    ellipse(855, 75, 85, 100);


    fill('#57472c');
    stroke('#57472c');
    rect(960, 100, 2, 118);

    fill('#4c147a');
    stroke('#4c147a');
    ellipse(960, 75, 85, 100);
}


function take_snapShot()
{
    save("Hbday.png");
}
