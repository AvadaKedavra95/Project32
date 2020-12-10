const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var ball, slingShot;

function preload() {
    
    Press = loadImage("Press.png");
    getBackgroundImage()

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(600,150,200,20);
    ground3 = new Ground(900,150,200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(510,130,20,30);
    box2 = new Box(530,130,20,30);
    box3 = new Box(550,130,20,30);
    box4 = new Box(570,130,20,30);
    box5 = new Box(590,130,20,30);
    box6 = new Box(610,130,20,30);
    box7 = new Box(630,130,20,30);
    box8 = new Box(650,130,20,30);
    box9 = new Box(670,130,20,30);
    box10 = new Box(690,130,20,30);
    box11 = new Box(550,115,20,30);
    box12 = new Box(570,115,20,30);
    box13 = new Box(590,115,20,30);
    box14 = new Box(610,115,20,30);
    box15 = new Box(630,115,20,30);
    box16 = new Box(650,115,20,30);
    box17 = new Box(590,100,20,30);
    box18 = new Box(610,100,20,30);

    boxx1 = new Box(810,130,20,30);
    boxx2 = new Box(830,130,20,30);
    boxx3 = new Box(850,130,20,30);
    boxx4 = new Box(870,130,20,30);
    boxx5 = new Box(890,130,20,30);
    boxx6 = new Box(910,130,20,30);
    boxx7 = new Box(930,130,20,30);
    boxx8 = new Box(950,130,20,30);
    boxx9 = new Box(970,130,20,30);
    boxx10 = new Box(990,130,20,30);
    boxx11 = new Box(850,115,20,30);
    boxx12 = new Box(870,115,20,30);
    boxx13 = new Box(890,115,20,30);
    boxx14 = new Box(910,115,20,30);
    boxx15 = new Box(930,115,20,30);
    boxx16 = new Box(950,115,20,30);
    boxx17 = new Box(890,100,20,30);
    boxx18 = new Box(910,100,20,30);
 
    ball = new Ball(100,100);
    

   
    slingshot = new SlingShot(ball.body,{x:190, y:50});
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
}
    push();
    imageMode(CENTER);
    image(Press,width/2,50,450,50)
    pop();
    Engine.update(engine);
    strokeWeight(4);
    ground1.display();
    ground2.display();
    ground3.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    boxx1.display();
    boxx2.display();
    boxx3.display();
    boxx4.display();
    boxx5.display();
    boxx6.display();
    boxx7.display();
    boxx8.display();
    boxx9.display();
    boxx10.display();
    boxx11.display();
    boxx12.display();
    boxx13.display();
    boxx14.display();
    boxx15.display();
    boxx16.display();
    boxx17.display();
    boxx18.display();

    ball.display();
    platform.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
 if(keyCode===32)
    slingshot.attach(ball.body);
    Matter.Body.setPosition(ball.body,{x:190,y:100});
}


async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var dateTime=responseJSON.datetime;
    var hour=dateTime.slice(11,13);
    console.log(hour);

    if(hour>=6 && hour<=19){
        bg="bg.jpg";
    }

    else{
        bg="bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    
}