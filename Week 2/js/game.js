//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;
var prevX;
var opponent;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.x = 15;
	player.height = 150;
	player.width = 15;
// player2
opponent = new GameObject();
opponent.x = 1010;
opponent.height = 150;
opponent.width = 15;

	

	ball = new GameObject();
	ball.vx =-5; 
	ball.vy =0;
	ball.width = 35;
	ball.height = ball.width;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	if(w)
	{
		console.log("Moving Up");
		player.y += -5;
	}
	if(s)
	{
		console.log("Moving Down");
		player.y += 5;
	}
// opponent

	if(up)
	{
		console.log("Moving Up");
		opponent.y += -5;
	}
	if(down)
	{
		console.log("Moving Down");
		opponent.y += 5;
	}

	//boarders
// player1
	player.y += player.vy;

	if(player.y < player.height/2)// this the bounderies
	{
		player.y = player.height/2
		player.vy = -player.vy;
		player.color = "yellow";
	}
	if(player.y > canvas.height - player.height/2)// this the bounderies
	{
		player.y = canvas.height - player.height/2
		player.vy = - player.vy;
		player.color = "pink";
	}
// player2
opponent.y += opponent.vy;

if(opponent.y < opponent.height/2)// this the bounderies
{
	opponent.y = opponent.height/2
	opponent.vy = -opponent.vy;
	opponent.color = "yellow";
}
if(opponent.y > canvas.height - opponent.height/2)// this the bounderies
{
	opponent.y = canvas.height - opponent.height/2
	opponent.vy = - opponent.vy;
	opponent.color = "pink";
}

	//ball function
	ball.x += ball.vx;


	if(ball.x + ball.width + 10 < ball.width/2)// this the bounderies
	{
		ball.x = canvas.width/2
		ball.y = canvas.height/2
		ball.vx = ball.vx
	
	}

	if(ball.x - ball.width > canvas.width)// this the bounderies
	
	{
		//ball.x = canvas.width - ball.width/2
		ball.x = canvas.width/2
		ball.y = canvas.height/2
		//ball.vx = - ball.vx;
		ball.vx = ball.vx
	}
	
	//
	//height
	ball.y += ball.vy;

	if(ball.y < ball.height/2)// this the bounderies
	{
		ball.y = ball.height/2
		ball.vy = -ball.vy;
		ball.color = "yellow";
	}
	if(ball.y > canvas.height - ball.height/2)// this the bounderies
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = - ball.vy;
		ball.color = "pink";
	}
//collid


if(ball.hitTestObject(player))
{
	//draw bounding boxes
	context.strokeRect(ball.x- ball.width/2, ball.y - ball.height/2, ball.width, ball.height)
	context.strokeRect(player.x- player.width/2, player.y - player.height/2, player.width, player.height)
}

	if(ball.hitTestObject(player))
	{
		ball.x = player.x + player.width/2 + ball.width/2
		ball.vx = -ball.vx
		console.log("colliding");

		if(ball.y < player.y - player.height/6)
        {
          ball.vx = 5;
          ball.vy = -5;
        }
	}
// opponent

if(ball.hitTestObject(opponent))
	{
		ball.x = opponent.x + opponent.width/2 - ball.width
		ball.vx = -ball.vx
		console.log("colliding");

		if(ball.y < opponent.y - opponent.height/6)
        {
          ball.vy = -5;
        }
	}

//
	
	


	//Update the Screen
	player.drawRect();
	ball.drawCircle();
	opponent.drawRect();
}

