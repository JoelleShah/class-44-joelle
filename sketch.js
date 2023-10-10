var rocketShip;
var rocket
var Asteriod;
var obstacle
var blackBg;
var bkground;
var wrench;
var lifeSaver;
var life = 200;

function preload(){
  rocketShip= loadImage("./rocketShip.png")
  Asteriod= loadImage("./asteroid.png")
  blackBg= loadImage("./bg.jpeg")
  wrench= loadImage("./wrench.png")
}

function setup() {
  createCanvas(800, 800);

  bkground = createSprite(400,300)
  bkground.addImage(blackBg)
  bkground.scale = 1.5
  
  rocket = createSprite (50,700,200,200);
  rocket.addImage("rocketShip", rocketShip)
  rocket.scale = 0.6

  obstacleGroup = new Group()
}

function draw() {
 background("black")
start();
    drawSprites();
  fill ("white")
 rect (100,50,200,10)
 fill ("red")
 rect (100,50,life,10)
  }
 
  function obstacles(){
    if (frameCount%50==0){
      obstacle = createSprite (random(50,750),random(50,500),500,400)
      obstacle.addImage("asteriod", Asteriod)
      obstacle.scale = 0.2
      obstacle.velocityY =+3
      obstacleGroup.add(obstacle)
    }
  }

  function lifeSavers(){
    if (frameCount%100==0){
      lifeSaver = createSprite (random(50,750),random(50,500),300,300)
      lifeSaver.addImage("wrench", wrench)
      lifeSaver.scale = 0.2
      lifeSaver.velocityY =+3
    }
  }
  
  function gameOver(){
    obstacleGroup.setVelocityYEach(0)
    bkground.velocityY = 0
    textSize(30)
  fill ("white")
    text("Game Over",200,200)
    restart = createButton("restart")
    restart.position(350,350)
    restart.size(50,50)
    restart.mousePressed(start)
  }

  function start(){
    rocket.x = mouseX

    bkground.velocityY = 2
   
    if (bkground.y>=700){
     bkground.y=500
    }
   obstacles();
   lifeSavers();
   
   if (rocket.isTouching(obstacleGroup)){
     life -= 2
   }
   if (life<=0){
     gameOver()
     life = 0
   }
  }


