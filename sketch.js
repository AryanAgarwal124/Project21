var canvas;
var music;
var surfaceBox1,surfaceBox2,surfaceBox3,surfaceBox4
var box
var edges

function preload(){
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surfaceBox1=createSprite(700,585,190,20);
    surfaceBox1.shapeColor =" blue"

    surfaceBox2=createSprite(500,585,190,20);
    surfaceBox2.shapeColor ="orange"

    surfaceBox3=createSprite(300,585,190,20);
    surfaceBox3.shapeColor ="red"

    surfaceBox4=createSprite(100,585,190,20);
    surfaceBox4.shapeColor ="green"

    //create box sprite and give velocity
     box=createSprite(random(20,750),20,30,30)
     box.shapeColor="white"
     box.velocityX=4
     box.velocityY=4

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

   
    if(surfaceBox1.isTouching(box)&&box.bounceOff(surfaceBox1)){
        box.shapeColor =" blue"
        music.play();

    }

    if(surfaceBox2.isTouching(box)&&box.bounceOff(surfaceBox2)){
        box.shapeColor =" orange"
        music.play();
    }

    if(surfaceBox4.isTouching(box)&&box.bounceOff(surfaceBox4)){
        box.shapeColor =" green"
        music.play();

    }
     
    if(surfaceBox3.isTouching(box))
    {
      box.shapeColor ="red"
      box.velocityX=0;
      box.velocityY=0
      music.stop();

    }


    

    //add condition to check if box touching surface and make it box
    drawSprites()
}
