class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1=loadImage("sling1.png");
        this.sling2=loadImage("sling2.png");
        this.sling3=loadImage("sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA=body;
    
    }

    display(){

        image(this.sling1,200,20);
        image(this.sling2,173,17);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
              stroke(48,22,8)
              strokeWeight(7);
              line(pointA.x-15, pointA.y, pointB.x, pointB.y+15);
              line(pointA.x-15,pointA.y,pointB.x+40,pointB.y-7);
              image(this.sling3,pointA.x-24,pointA.y-4,14,20); 
            } 
            if(pointA.x>220){
                stroke(48,22,8)
                strokeWeight(3);
                line(pointA.x+15, pointA.y, pointB.x, pointB.y);
                line(pointA.x+15,pointA.y,pointB.x+40,pointB.y-5);
                image(this.sling3,pointA.x+24,pointA.y+10,-14,-20); 
              } 
        }
    }
    
}