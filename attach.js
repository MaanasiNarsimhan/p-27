class Chain {
    constructor (bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB : bodyB,
            stiffness: 0.04,
            
        }
        this.chain = Matter.Constraint.create (options)
        World.add(world, this.chain)
    }
        attach(body){
            this.sling.bodyA = body;
        }
        
        fly(){
            this.sling.bodyA = null;
        }
    
    display (){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
     strokeWeight(4);
     line (pointA.x, pointA.y, pointB.x, pointB.y)
    }
    }