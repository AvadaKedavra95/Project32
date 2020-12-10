class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("wood1.png");
    this.visiblity=255
    this.posY=140
    
  }

  

    display(){
      if(this.body.position.y<140){
        super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visiblity-=3
        this.posY+=3
        tint(255,this.visiblity);
       
        image(this.image,this.body.position.x,this.posY,20,30);
        pop();
      }

  }

};
