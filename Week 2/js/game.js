//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.x = 100;
	player.height = 150;
	player.width = 35;

	ball = new GameObject();
	ball.vx =2; 
	ball.vy =2;
	ball.width = 45;
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
		player.y += -2;
	}
	if(s)
	{
		console.log("Moving Down");
		player.y += 2;
	}

	//boarders

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


	//ball function
	ball.x += ball.vx;

	if(ball.x < ball.width/2)// this the bounderies
	
	{
		ball.x = ball.width/2
		ball.vx = -ball.vx;
		ball.color = "red";
	}
	if(ball.x > canvas.width - ball.width/2)// this the bounderies
	
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = - ball.vx;
		ball.color = "green";
	}

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

	//if(ball.hitTestObject(player))


	//Update the Screen
	player.drawRect();
	ball.drawCircle();
}

