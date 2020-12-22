var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);


  car = createSprite(20, 200, 50, 50);
  wall = createSprite(1350, 200, 60, 200);

  speed = random(55, 90);
  weight = random(400, 1500);

  car.velocityX =  speed;
  wall.shapeColor = color(80, 80, 80);

  deformation = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background("black");  
  
  if(wall.x-car.x  < (car.width+wall.width)/2){
    car.velocityX  =  0;
    if(deformation<100){
      car.shapeColor = color(0, 255, 0);
    }
    if(deformation>100 && deformation<180){
      car.shapeColor = color(230, 230, 0);
    }

    if(deformation>180){
      car.shapeColor = color(255, 0, 0);
    }
  
    wall.visible = false;
  }

  drawSprites();
}