var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  //movingRect.shapeColor = "green";
  movingRect.velocityX=5;


  fixedRect = createSprite(600,200,50,50);
  //fixedRect.shapeColor = "green";
  fixedRect.velocityX=-4;


}

function draw() {
  background(0,0,0);

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  bounceOff(movingRect,fixedRect);

  drawSprites();
}

function bounceOff(object1,object2) {
  if(object1.x-object2.x < object1.width/2+object2.width/2
    &&object2.x-object1.x < object1.width/2+object2.width/2) {
      object1.velocityX=-object1.velocityX;
      object2.velocityX=-object2.velocityX;
    }

  if(object1.y-object2.y < object1.height/2+object2.height/2
    &&object2.y-object1.y < object1.height/2+object2.height/2) {
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
    }
}