const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var eng,wld;
var ball;

function setup() {
  var canvas = createCanvas(400,400);

  eng = Engine.create();
  wld = eng.world;

  var  ground_options ={
    isStatic: true
  }

  var  ball_options ={
    restitution: 1.0
  }

  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(wld,ground);
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(wld,ball);
  
}

function draw() {
  background(0);  
  Engine.update(eng);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}