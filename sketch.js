const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var pig1,pig2;
var ground1;
var bird1,birdimg;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
ground1 = new ground(600,10,1200,20);

       
     box1 = new apple(200,300,50,50);
    box2 = new apple(240,100,50,100);


    pig1=new pig(810,220,100,100);
    pig2= new pig(810,350,100,100);

    bird1=new bird(510,120);
    
}

function draw(){
    background(0);
    Engine.update(engine);
       
        box2.display();
    box1.display();
    box2.display();
    pig1.display();
    pig2.display();
    ground1.display();
    console.log(pig1);
    console.log(ground1);
   bird1.display();
}
