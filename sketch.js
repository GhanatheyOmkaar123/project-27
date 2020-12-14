const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1;
var rope,rope,rope,rope,rope;
 
function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;
  //Create the Bodies Here.
  roof1 = new Roof(750,100,800,70);
	bobObject1 = new Bob(500,600,130);
	rope = new Rope(bobObject1,{x:500,y:100});
	bobObject2 = new Bob(630,600,130);
	rope = new Rope(bobObject2,{x:630,y:100});
	bobObject3 = new Bob(760,600,130);
	rope = new Rope(bobObject3,{x:760,y:100});
	bobObject4 = new Bob(890,600,130);
	rope = new Rope(bobObject4,{x:890,y:100});
	bobObject5 = new Bob(1020,600,130);
  rope = new Rope(bobObject5,{x:1020,y:100});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(180);
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



