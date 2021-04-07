
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1,roof2,roof3,roof4,roof5,ball1,ball2,ball3,ball4,ball5,chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
  roof1=new Roof(400,150,500,50);
  
  ball1=new Ball(400,500,50);
  ball2=new Ball(500,500,50);
  ball3=new Ball(600,500,50);
  ball4=new Ball(300,500,50);
  ball5=new Ball(200,500,50);
  
  chain=new Chain(ball1.body,{x:400,y:150});
  chain2=new Chain(ball2.body,{x:500,y:150});
  chain3=new Chain(ball3.body,{x:600,y:150});
  chain4=new Chain(ball4.body,{x:300,y:150});
  chain5=new Chain(ball5.body,{x:200,y:150});

  

	Engine.run(engine);
  
}


function draw() {
  
  background("indigo");

 roof1.display();
 
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();

 chain.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();

}

function keyPressed(){

if (keyCode===37){
  Matter.Body.applyForce(ball5.body,{x:200,y:500},{x:-0.5,y:0});
  
}

}

