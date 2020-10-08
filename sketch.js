var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(400,400);
	rectMode(CENTER);
	var options={
		isStatic:true
	}
var factors={
	restitution:1
}
ground=Bodies.rectangle(200,380,400,20,options);
	ground.shapeColor=color(255)
	packageSprite=Bodies.circle(200,100,10,10,factors);
	packageSprite.addImage(packageIMG)
	

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	

	


	engine = Engine.create();
	world = engine.world;

	World.add(world);
	

	//Create a Ground
	
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  rect()
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}


lo
