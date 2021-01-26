var car, carImage;
var line1, line2, line3, line4, line5;

function preload(){
    carImage = loadImage ("images/car.png");
}

function setup(){
    createCanvas(500, 500);

    car = createSprite (245,450);
    car.addImage (carImage);
    car.scale = 0.2;

    line1 = createSprite (245,405,110,3);
    line1.shapeColor = 255,255,255;
}

function draw(){
    background (194,225,247);

    drawSprites();

    textSize (10);
    fill(0);
    text("Use Arrow Keys to Park the Vehicle",170,20);
}