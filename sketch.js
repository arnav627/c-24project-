
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
    
   

	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	ball1= new Paper(30,670,50,50);
	ground=new Ground(600,690,1200,20);
	wall1=new Dustbin(1075,670,140,10);
	wall2=new Dustbin(1150,670,10,150);
	wall3=new Dustbin(1000,670,10,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
ball1.display();
ground.display();
wall1.display();
wall2.display();
wall3.display();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	
	}
}



