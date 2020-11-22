
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500) 
  
  monkey = createSprite(55,415,40,40)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.2
  
  ground = createSprite(600,480,700,20)
  ground.x = ground.width /2
  ground.velocityX = -4

  

}


function draw() {
  
 
  background("white") 
text("x:"+mouseX+", y:"+mouseY,mouseX,mouseY)
  
  stroke("white")
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50)
  
  
 if (ground.x < 555) {
      ground.x = ground.width / 2;
  }
  monkey.collide(ground);
  drawSprites();
  
  if(keyDown("space")&& monkey.y >= 278){
    monkey.velocityY = -15
    
  }
  //adds gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  //monkey.collide(spawnRocks)
  spawnRocks();
  
  food();
}

function spawnRocks(){
  if (frameCount % 300 === 0){
  var obstacle = createSprite(280,413,40,40)
  obstacle.addImage("hit",obstacleImage)
  obstacle.velocityX = -4
    obstacle.scale= 0.3
    obstacle.lifetime = 150
}
}

function food(){
  if(frameCount % 80 ===0){
  var banana = createSprite(265,220,40,40)
  banana.addImage("eat",bananaImage);
    banana.velocityX = -4
  banana.scale=0.1 
    banana.lifetime = 150
  }
}


