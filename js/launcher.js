class Launcher{
    constructor(body1, point2){
        var options={
            bodyA:body1,
            pointB:point2,
            stiffness:0.004,
            length:8
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    display(){
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.launch.pointB;
            strokeWeight(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
    }

    fly(){
        this.launch.bodyA = null;
    }

    attach(body){
        this.launch.bodyA = body;
    }
}