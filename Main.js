 
 function preload()
 {

}


 function setup()
 {
    createCanvas(900,900);
    video = createCapture(VIDEO);
    video.hide();
    console.log("working")
 }
 

function draw()
{
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
    rect(800, 100, 2, 180);

    fill('#0ddb8c');
    stroke('#41db0d');
    ellipse(800, 75, 85, 100);


    fill('#57472c');
    stroke('#57472c');
    rect(700, 100, 2, 118);

    fill('#4c147a');
    stroke('#4c147a');
    ellipse(700, 75, 85, 100);
}