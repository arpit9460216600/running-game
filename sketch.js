  
var skyImg,sky;
var starImg, star, starGroup;
var rockImg, rock,rockGroup;
var rocket, rocketImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  skyImg = loadImage("sky.png");
  starImg = loadImage("star.jpg");
  rockImg = loadImage("rock.jpg");
  rocketImg = loadImage("rocket.png");
  

function setup() {
  createCanvas(600,600);
  sky= createSprite(300,300);
  sky.addImage("sky",skyImg);
  sky.velocityY = 1;
  
  starGroup = new Group();
  rockGroup = new Group();
  invisibleBlockGroup = new Group();
  
  rocket = createSprite(200,200,50,50);
  rocket.scale = 0.3;
  rocket.addImage("rocket", rocketImg);
}


function draw() {
  background(255);
 if(sky.y > 400){
      sky.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("LEFT_ARROW")){
        rocket.x = rocket.x - 3;

      // write a code to move left when left arrow is pressed
    }
    if(keyDown("RIGHT_ARROW")){
        rocket.x = rocket.x + 3;

      // write a code to move left when right arrow is pressed
    }
    }
    if(keyDown("SPACE")){
  
        rocket.velocityY = -10;

      // write a code to move up when space arrow is pressed
      
    }
  
    rocket.velocityY = rocket.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
    
      spawnrock();

  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
     if(rockGroup.isTouching(rocket)){
        rocket.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(rocket) || ghost.y > 600){
        rocket.destroy();
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnrock()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var rock = createSprite(200, -50);
    var star = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    rock.x=Math.round(random(50,550))
    rock.addImage(rockImg);
    star.addImage(starImg);
    
    rock.velocityY = 1;
    star.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the ghost and door
    star.x=rock.x
    invisibleBlock.x=rock.x
rocket.depth = rock.depth;
    rocket.depth +=1;
    
    //assign lifetime for the  door, climber and invisible block

 rock.lifetime = 800;
 star.lifetime = 800;
 invisibleBlock .lifetime = 800;
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    
     rockGroup.add(rock);
    invisibleBlock.debug = true;
    starGroup.add(star);
    invisibleBlockGroup.add(invisibleBlock);
  }

}


