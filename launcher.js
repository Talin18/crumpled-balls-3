class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 70
        }
        this.bodyA=bodyA;
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
            strokeWeight(4);      
        if(this.sling.bodyA){
           line(this.pointB.x,this.pointB.y,this.bodyA.position.x,this.bodyA.position.y);    
        }
        
    }
    
}