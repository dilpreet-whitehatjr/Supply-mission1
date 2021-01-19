const Engine=Matter.Engine;
const Bodies= Matter.Bodies;
const World = Matter.World;
const Body= Matter.Body;
var engine,world;

function preload(){
helicopterImg= loadImage("helicopter.png");
packageImg= loadImage("package.png");
}

function setup(){
	createCanvas(800,600);
	rectMode(CENTER);

	package = createSprite(width/2, 150,20,20);
	package.addImage(packageImg);
	package.scale=0.3;


	helicopter = createSprite(width/2, 150, 20,20 );
	helicopter.addImage(helicopterImg);
	helicopter.scale=0.8;
	
	ground= createSprite(width/2, 600, width, 25);
	ground.shapeColor="brown";
	

	
	engine= Engine.create();
	world=engine.world;
	
	var option={
		isStatic:true
	}
	groundBody= Bodies.rectangle(width/2,575,width,10,option);
	World.add(world,groundBody);


	var options={
		'restitution':0,
		'isStatic':true,
		'friction':1
	}
	packageBody= Bodies.circle(width/2,150,10,options);
	World.add(world,packageBody);


	Engine.run(engine);
}

function draw(){
	background("cyan");
	Engine.update(engine);
	
	strokeWeight(35);
	stroke("black");
	text("PRESS DOWN ARROW KEY TO THROW THE PACKAGE",60,40);
	rectMode(CENTER);
	package.x= packageBody.position.x;
	package.y= packageBody.position.y;
	
drawSprites();
}
function keyPressed(){
	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false);
	
	}
}