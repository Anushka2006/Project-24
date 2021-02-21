
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	hammer = new Hammer(100,200);
	stone= new Stone(200,300,70,70);
	stone2= new Stone(250,490,55,68);
	ground = new Ground(300,height,600,20);
	rubbers = new rubber(300,300);
	rubbers2 = new rubber(300,400);
	rubbers3 = new rubber(300,200);
	rubbers4 = new rubber(300,100);
	rubbers5 = new rubber(400,300);
	rubbers6 = new rubber(350,300);
	ball = new Ball(450,450);


}


function draw() {
  rectMode(CENTER);
  background("black");
  hammer.display();
  stone.display();
  ground.display();
  rubbers.display();
  stone2.display();
  rubbers2.display();
  rubbers3.display();
  rubbers4.display();
  rubbers5.display();
  ball.display();
  rubbers6.display();

  drawSprites();
 
}



