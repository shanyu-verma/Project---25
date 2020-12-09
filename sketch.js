
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var dust,dust2,dust3;
var pillar,pillar2;
function preload()
{
	ballI = loadImage("download.jpg");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(200,450,40);
	ground = new Ground(800,690,1600,30);
	dust = new Dustbin(1200,580,20,120);
	pillar = new Pillar(1200,580,20,150);
	pillar2 = new Pillar(1400,580,20,150);
	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background("lightblue");
  
		
	ball.display();
	ground.display();
	dust.display();
	//pillar.display();
	//pillar2.display();

	drawSprites();
	  
	

	//dust2.display();
	//dust3.display();
	
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:123,y:-116});
	}
}

