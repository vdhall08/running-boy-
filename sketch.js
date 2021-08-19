var path, pathimage;
var boy,boyimage;
var boundry1,boundry2;
function preload(){
  pathimage=loadImage("path.png")
  boyimage=loadAnimation("Runner-1.png","Runner-2.png")
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200)
  path.addImage(pathimage)
  path.velocityY=4
  path.scale=1.2
  boy=createSprite(180,340,30,30)
  boy.addAnimation("running",boyimage)
  boy.scale=0.05
  boundry1=createSprite(0,0,100,800)
  boundry1.visible=false; 
  boundry2=createSprite(410,0,100,800)
  boundry2.visible=false;
  //create sprites here
}

function draw() {
  background(0);
  boy.x=mouseX
  if(path.y>400){
    path.y=200
  }
  boy.collide(boundry1)
  boy.collide(boundry2)
drawSprites()
}
