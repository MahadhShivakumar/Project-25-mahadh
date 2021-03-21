const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var ground1;
var paper;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  dustbin = new Dustbin();  
  ground1 = new Ground();
  paper = new Paper();
  dustbin.debug=true;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  paper.display();
  ground1.display();
  dustbin.display();  

  if(keyDown("up")) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:7, y:-9})
  }

  drawSprites();
}



