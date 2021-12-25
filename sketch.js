var bg , sleep ,brush ,gym ,bath ,eat ,drink ,move;
var astronaut;
 


function preload(){
 bg = loadImage("images/iss.png");
 sleep = loadAnimation("images/sleep.png");
 brush = loadAnimation("images/brush.png");
 gym = loadAnimation("images/gym1.png","images/gym2.png");
 bath = loadAnimation("images/bath1.png" ,"images/bath2.png" )
 eat = loadAnimation("images/eat1.png" , "images/eat2.png");
 drink = loadAnimation("images/drink1.png","images/drink2.png");
 move = loadAnimation("images/move1.png","images/move2.png")
 
}

function setup() {
 createCanvas(windowWidth, windowHeight);
  
  
  astronaut = createSprite(200,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  
  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Right Arrow = Bathing",20, 85);
  text("Left Arrow = Eating",20, 100);
  text("d key = Drinking",20,115);
  text("m key = Moving",20, 130);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
   if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.x = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
   }
  
   if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
   }
  
   if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 190;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
   }
  
   if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 220;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
   }
   if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 250;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
   }
  
  if(keyDown("d")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 200;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
   }
  
 
  
  
  
 drawSprites();
  
  }