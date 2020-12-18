class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY},
           // stiffness:0.04,
            //length:10

        }
        this.chain=Constraint.create(options);
        
        
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(2);
        var anchorAx=pointA.x;
        var anchorAy=pointA.y;
        var anchorBx=pointB.x+this.offsetX;
        var anchorBy=pointB.y+this.offsetY;
        line(anchorAx,anchorAy,anchorBx,anchorBy);
    }
}