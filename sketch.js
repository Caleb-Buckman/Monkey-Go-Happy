
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(50,350,1,1);
  monkey.addAnimation("monkeyr",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  foodGroup= new Group();
  obstacleGroup = new Group();
}


function draw() {
background("white");
  
  if(ground.x<0){
    ground.x=400;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY= monkey.velocityY +0.8;
  
  spawnObstacles();
  food();
  
  monkey.collide(ground);
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
     foodGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
     foodGroup.setLifetimeEach(-1);
  }
  
  drawSprites();
  textSize(20);
  score=Math.round(frameCount/frameRate());
  text("survival time: "+score, 100,50);
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(600,250,1,1);
    banana.y=Math.round(random(120,200));
    banana.velocityX=-5;
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.lifetime=120;
    
    foodGroup.add(banana);
  }
  
  
}

function spawnObstacles(){
   if(frameCount%300===0){
  obstacle=createSprite(600,300,1,1);
     obstacle.addImage(obstacleImage);
  obstacle.scale=0.15;
     obstacle.velocityX=-6;
     obstacle.lifetime=70;
     obstacleGroup.add(obstacle);
   }
}


