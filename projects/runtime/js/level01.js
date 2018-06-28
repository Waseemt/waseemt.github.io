var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: 0,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

// BEGIN EDITING YOUR CODE HERE
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
    myObstacle.x = 100;
    myObstacle.y = 100;
    game.addGameItem(myObstacle);
    var obstacleImage = draw.bitmap('img/sawblade.png');
    myObstacle.addChild(obstacleImage);
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    
    
   function createEnemy(x,y){
       var enemy =  game.createGameItem('enemy',25);
       var redSquare = draw.rect(50,50,'red');
       redSquare.x = -25;
       redSquare.y = -25;
       enemy.addChild(redSquare);
       enemy.x = x;
       enemy.y = y;
       game.addGameItem(enemy);
       enemy.velocityX = -2;
       enemy.rotationalVelocity =20;
     
       enemy.onPlayerCollision = function() {
           
       game.changeIntegrity(-100);
       enemy.fadeOut();
           
           };
               enemy.onProjectileCollision = function() {
                 game.changeIntegrity(100);  
                 enemy.fadeOut();
                   
       };
   }
     createEnemy(400,groundY-10);
     createEnemy(800,groundY-100);
     createEnemy(1200,groundY-50);
     
function createSawBlade(x,y){
    //your code goes here
    obstacleImage = draw.bitmap('img/sawblade.png');
    myObstacle.addChild(obstacleImage);
    obstacleImage.x = x;
    obstacleImage.y = y;
}
        createSawBlade(100,0);
        createSawBlade(0,0);
        createSawBlade(0,0);
        createSawBlade(0,0);

        
        
    var reward = game.createGameItem("reward", 25);
function createReward(x,y){
    var goldenCircle = draw.circle(25,"#ddb62a");
    goldenCircle.x = 0;
    goldenCircle.y= 0;
    reward.addChild(goldenCircle);
    reward.x = x;
    reward.y = y;
    reward.velocityX = -1;
    game.addGameItem(reward);
    reward.onPlayerCollision = function (){
        game.increaseScore(1000);
        reward.fadeOut();
};
}    
        createReward(500, 300);
    };
    
    
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
    }