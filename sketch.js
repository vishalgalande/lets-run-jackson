var road, roadImg;
var player, playerImg;

function preload(){
  //pre-load ANIMATIONS
  playerImg = loadAnimation("Runner-1.png", "Runner-2.png");


  //pre-load IMAGES
  roadImg = loadImage("path.png");
}

function setup(){
  createCanvas(400, 400);
  
  //create player sprite
  player = createSprite(300, 300, 10, 40);
  player.addAnimation("running", playerImg);
  player.scale = 0.068;
  player.frameDelay = 6;

  //create road sprite
  road = createSprite(200, 200, 50, 50);
  road.addImage(roadImg);
  road.y = road.height / 3;  
}

function draw() {
  background(0);


  //making player move with mouse
  player.x = mouseX;

  //making road move
  road.velocityY = 3;

  //making road infinteeeee
  if (road.y > 461.8)
  {
    road.y = road.height / 3;
  }
  

  //making player not go out of road
  if (player.x >= 315)
  {
    player.x = 315;
  }

  if (player.x <= 85)
  {
    player.x = 85;
  }

  //messing with depth
  player.depth = road.height + 1;
  

  drawSprites();
}
