//Declare my variables
// goal is to shoot karen "Yellow". only got it to function to shoot on the right hand side.
var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var score = 0;
var circle;
var square;

    //Set Up the Canvas
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");  

    //Instantiate the Player
        player = new GameObject();
        player.height = 50;
        player.width = 50;
        player.x = 500;
        player.y = 750;

        circle = new GameObject();
        circle.height = 30;
        circle.width = 30;
        circle.x = 500;
        circle.y = 100;
        circle.color = "green";

        square = new GameObject();
        square.height = 50;
        square.width = 50;
        square.x = 600;
        square.y = 100;


    

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

    if(a)
    {
        console.log("Moving left");
        player.x += -5;
    }
    if(d)
    {
        console.log("Moving right");
        player.x += 5;
    }
    
    player.vx *= fX;
    player.vy *= fY;

    //circle.vx *= fX;
    //circle.vy *= fY;
    
    //square.vx *= fX;
    //square.vy *= fY;
    circle.vy += gravity;
    square.vy += gravity;
    
    
    player.x += Math.round(player.vx);
    player.y += Math.round(player.vy);
    circle.x += Math.round(circle.vx);
    circle.y += Math.round(circle.vy);
    square.x += Math.round(square.vx);
    square.y += Math.round(square.vy);

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
    

    if(circle.hitTestObject(player))
	{
		circle.x = player.x + player.width/2 + circle.width/2
		circle.vx = -circle.vx
		console.log("colliding");

		if(circle.y < player.y - player.height/6)
        {
          
          circle.vy = -5;
        }
    }
// Text
    context.fillStyle = "blue"
    context.font = "15px Georgia";
    context.fillText("Score: ", canvas.width/2 - 350, 50);

	context.fillStyle = "blue"
    context.font = "15px Georgia";
    context.fillText(score, canvas.width/2 - 300, 50);

    //Update the Screen
    player.drawRect();
    //score.fillText();
    circle.drawCircle();
    square.drawRect();

}