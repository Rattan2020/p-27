class Chain{

constructor(bodyA,pointB){
    var options={
        bodyA: bodyA,
        pointB: pointB,
        stiffness:0.4

        
    }


    
    this.chain=Constraint.create(options);
    
    World.add(world,this.chain);
    this.pointB=pointB;
  
}
display(){

var pointA=this.chain.bodyA.position;
var pointB=this.pointB;

strokeWeight(5);
stroke("silver");
line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}