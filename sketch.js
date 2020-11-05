var movingRect,fixedRect;





function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(800,400,50,50);
  fixedRect=createSprite(800,400,50,50);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  movingRect.velocityY=-5;
  fixedRect.velocityY= +5;



}

function draw() {

  
  background(0,0,0);  
 


bounceoff(movingRect,fixedRect);
  drawSprites();
}
function isTouching(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
return true;

}
else {
return false;



}

}
function bounceoff (object1,object2){
  if (object1.x - object2.x < object2.width/2+object1.width/2
    && object2.x - object1.x < object2.width/2+object1.width/2){
    object1.velocityX=object1.velocityX*(-1);
   object2.velocityX=object2.velocityX*(-1);



    }
  if (object1.y - object2.y < object2.height/2+object1.height/2
    && object2.y - object1.y < object2.height/2+object1.height/2){
   
object1.velocityY=object1.velocityY*(-1);
object2.velocityX=object2.velocityX*(-1);
    }

         

}




