
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var side1,sideB,side3;
var paper;
var launcher;
function preload()
{
	
}

function setup() {
	createCanvas(800, windowHeight );


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground(width/2,450,width,20);
	side3 = new Side(700,310,20,210);
	side1 = new Side(500,310,20,210);
	//bottom side
	sideB = new Bottom(600,430,240,20);
	paper = new Paper(200,200,35);
	launcher = new Launcher(paper.body,{x:200,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  paper.display();
  side1.display();
  side3.display();
  sideB.display();
  launcher.display();
  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
	launcher.fly();
}


