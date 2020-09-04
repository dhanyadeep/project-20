var car,wall;
var speed,weight;






function setup() {
  createCanvas(1600,400);
 car= createSprite(50, 200, 50, 50);
 car.velocityX=speed;
 wall=createSprite(1500,200,60,height/2);
  speed=rand(55,90);
  weight=rand(400,1500);
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(defprmation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}