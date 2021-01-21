
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,680,1200,20)
	
	wall1 = new Dustbin(920,570,20,100);
    wall2 = new Dustbin(1020,600,20,100);
    wall3 = new Dustbin(910,660,240,20);

	ball  = new Ball(200,450,40);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  
  ground.display();
  ball.display();
  wall1.display();
  //wall2.display();
  //wall3.display();

 


  drawSprites();
 
}


function keyPressed() {

if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-85});
}}
