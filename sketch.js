
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var rightwall;
var leftwall;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

   
	engine = Engine.create();
	world = engine.world;
    var ball_options=
	{
		isStatic:false,
		restitutuion:0.3,
		friction:0,
		density:1.2,
	}
	groundObj = new Ground(200,580,1200,20);
	rightwall = new Ground(650,550,10,50);
	leftwall = new Ground(520,550,10,50);
	//Create the Bodies Here.
    ball = Bodies.circle(150,40,20,ball_options);
   World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  rightwall.display();
  leftwall.display();
  ellipse(ball.position.x,ball.position.y,30);
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode=== UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0})
	}
}