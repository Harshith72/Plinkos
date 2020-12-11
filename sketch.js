//Declare variables for game objects and behaviour indicators(FLAGS)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var userEngine,userWorld;
var bg;
var ground;

var particles =[];
var plinkos =[];
var divisions =[];
var divisionHeight = 300;

//Create Media library and load to use it during the course of the software 
//executed only once at the start of the program 
function preload() {

}

function setup() {
  createCanvas(480, 800);

  userEngine = Engine.create();
  userWorld = userEngine.world;

  ground = new Ground(600,800,1200,20);


  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
}


function draw(){
    background("black");
    Engine.update(userEngine);

    if(frameCount % 60 === 0){
      particle = new Particle(random(130, 400), 10, 7, random(0, 360));
      particles.push(particle);
    }

    for(var i = 0; i < particles.length; i++){
      particles[i].display();
    }
  
   
    for(var k = 0; k<divisions.length;k++){
      divisions[k].display();
   }
  
  
    for(var j = 0; j<plinkos.length;j++){
      plinkos[j].display();
   }
  
  ground.display();

}