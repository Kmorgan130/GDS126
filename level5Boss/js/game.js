//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
    //Set Up the Canvas
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");  

    var debugPoint = new GameObject();
debugPoint.width = 10;
debugPoint.height = 10;
debugPoint.color = `black`
    
    //Instantiate the Player
    player = new GameObject();
    player.x = 500;
    player.y = 100;
    player.height = 50;
    player.width = 50;

        platform0 = new GameObject();
        platform0.width = 1000;
        platform0.x <= canvas.width;
        platform0.y = 780
        platform0.color = "#66ff33";

        platform1 = new GameObject();
        platform1.width = 100;
        platform1.x = 980;
        platform1.y = 230;
        platform1.height= 1000
        platform1.color = "blue";   

        platform2 = new GameObject();
        platform2.width = 100;
        platform2.x = 500;
        platform2.y = 300;
        platform2.height= 50
        platform2.color = "red";   

    var fX = .85;
    var fY = .97;
    
    var key = false;
    var gravity = 1;

    //Set the Animation Timer
    interval = 1000/60;
    timer = setInterval(animate, interval);

function animate()
{
    //Erase the Screen
    context.clearRect(0,0,canvas.width, canvas.height); 
    
    
    //Move the Player to the right

    if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

    if(a && !platform1.hitTestPoint(player.left()))
    {
        console.log("Moving left");
        player.x += -5;
    }
    if(d && !platform1.hitTestPoint(player.right()))
    {
        console.log("Moving right");
        player.x += 5;
    }
    
    player.vx *= fX;
    player.vy *= fY;
    
    player.vy += gravity;
    
    
    player.x += Math.round(player.vx);
    player.y += Math.round(player.vy);

// player1
    player.y += player.vy;

    if(player.x < player.width/2)// this the bounderies
    {
        player.x = player.width/2
        player.vx = -player.vx;
        player.color = "yellow";
    }
    if(player.x > canvas.width - player.width/2)// this the bounderies
    {
        player.x = canvas.width - player.width/2
        player.vx = - player.vx;
        player.color = "pink";
    }
    //
    
///
    while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
    {
        player.y--;
        player.vy = 0;
        player.canJump = true;
    }
    //// need to jump on
    while(platform1.hitTestPoint(player.right()) && player.vx >=0)
    {
        player.x --;
    
    }
    //
    
    // need to jump on higher platform
    while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
    {
        player.y--;
        player.vy = 0;
        player.canJump = true;
    }
    //
      debugPoint.color = `black;`
    if(platform1.hitTestPoint(player.right1()))
    {
        debugPoint.color = `yellow`

        if(w)
        {
        player.vx = -95;
        player.vy = -15
       
        }
    }
   
    debugPoint.x = player.right1().x;
    debugPoint.y = player.right1().y;

    //Update the Screen
    player.drawRect();
    platform0.drawRect();
    platform1.drawRect();
    platform2.drawRect();
    debugPoint.drawRect();

}
