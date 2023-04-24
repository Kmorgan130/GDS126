// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var score = 0;
var ball;

//---------------Set Friction and Gravity-----------------
var frictionX = .97;	
var frictionY = .97;
var gravity = 1;
//--------------------------------------------------------



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
//
	player = new GameObject();
	player.x = canvas.width/2;
	player.y = canvas.height - 50;
	player.height = 40;
	player.width = 250;
	player.color= "#00ffff"
	player.force = 1;
//
	ball = new GameObject();
	ball.x = canvas.width/2;
	ball.y = canvas.height/2;
	radius: 40;
	ball.color = "#ff00ff"
	ball.force = 5;
//
	timer = setInterval(animate, interval);


function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

//player	-------------------------------------------------------------------------------------------------------------
	player.y += player.vy;

	if(player.x < player.width/2)// this the bounderies
	{
		player.x = player.width/2
		player.vx = -player.vx;
		//player.color = "yellow";
	}
	if(player.x > canvas.width - player.width/2)// this the bounderies
	{
		player.x = canvas.width - player.width/2
		player.vx = - player.vx;
		//player.color = "pink";
	}
//-------------------------------------------------------------------------------------------------------------------

//ball bonderaries----------------------------------------------------------------------------------------------------
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

//height boundary-----------------------------------------------------------------------------------------------------
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
		ball.vy = - ball.vy * .5;
		score = 0;
		ball.color = "pink";
	}
//ball bounderaries----------------------------------------------------------------------------------------------------


//player --------------------
	if(d)
	{	
		player.vx +=  player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	//---------------------------------------------------------------------------------------
	player.x += player.vx;
	player.y += player.vy;
	
//friction
	//--------------Apply friction to the Velocity X-----------------------------------------
	player.vx *= frictionX;
	//---------------------------------------------------------------------------------------
	player.x += player.vx;
//friction

//showbounce
player.vy *= frictionY;
player.vx *= frictionX;

ball.vy += gravity;

player.x += player.vx;
player.y += player.vy;
//showbounce

if (ball.hitTestObject(player))
{
		score = score + 1;

        ball.y = player.y - player.height/2 - ball.height/2
        ball.vy = -20;

		if(ball.x < player.x - player.width/6)
        {

          ball.vx = -ball.force 
        }

        if(ball.x > player.x + player.width/6)
        {

          ball.vx = ball.force 
        }


        if(ball.x < player.x - player.width/3)
        {

          ball.vx = -ball.force * 5
        }
        if(ball.x > player.x + player.width/3)
        {

          ball.vx = ball.force  * 5
        }
}

	//gravity
	//--------------Apply Gravity to the Velocity Y-----------------------------------------
	ball.vy += gravity;
	player.y += player.vy;
	//---------------------------------------------------------------------------------------
	
	player.vx *= frictionX;
	player.x += player.vx;
	//gravity
//showpixel
	player.vx *= frictionX;	
	player.vy *= frictionY;
	
	//------Round the velocity before applying it to the position.--------------------------
    //------This will keep the object from moving fractions of a pixel----------------------
	//------This might not be noticeable now, but will help alot when things get complex----
	player.y += Math.round(player.vy);
	player.x += Math.round(player.vx);
//showpixel

	//Call just one of the functions below to view acceleration, friction, gravity and pixel lock.
	
	
	context.fillStyle = "#555555"
    context.font = "16px Arial";
    context.fillText("Score:", 80, 25);

	context.fillStyle = "#555555"
    context.font = "16px Arial";
    context.fillText(score, 130, 25);

	context.save();
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(ball.x, ball.y);
	context.lineTo(player.x, player.y);
	context.closePath();
	context.lineWidth = 1;
	context.stroke();
	context.restore();

	
	player.drawRect();
	ball.drawCircle();
	score.fillText();
	line.drawLine();
}


/*IMPORTANT: Below are four functions that demonstrate the various elements we will use to simulating Game Physics.
each function is a copy of the previous with more functionality added. 
ONLY CALL ONE OF THESE FUNCTIONS AT A TIME!!!!!!!!*/



function showAcceleration()
{
	//--------------Use Velocity and Acceleration to move around----------------------
	if(d)
	{	
		player.vx +=  player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	//---------------------------------------------------------------------------------------
	player.x += player.vx;
	player.y += player.vy;
}

function showFriction()
{
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	//--------------Apply friction to the Velocity X-----------------------------------------
	player.vx *= frictionX;
	//---------------------------------------------------------------------------------------
	player.x += player.vx;
}

function showGravity()
{
	
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	//--------------Apply Gravity to the Velocity Y-----------------------------------------
	player.vy += gravity;
	player.y += player.vy;
	//---------------------------------------------------------------------------------------
	
	player.vx *= frictionX;
	player.x += player.vx;
}

function showPixelLock()
{
	
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	

	player.vx *= frictionX;	
	player.vy *= frictionY;
	
	//------Round the velocity before applying it to the position.--------------------------
    //------This will keep the object from moving fractions of a pixel----------------------
	//------This might not be noticeable now, but will help alot when things get complex----
	player.y += Math.round(player.vy);
	player.x += Math.round(player.vx);
	//--------------------------------------------------------------------------------------
}

function showBounce()
{
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	player.vy *= frictionY;
	player.vx *= frictionX;
	
	player.vy += gravity;
	
	player.x += player.vx;
	player.y += player.vy;
	
	//--------------------Check Collision------------------------------------------------------
	if(player.y > canvas.height - player.height/2)
	{
		
		//--------Bounce the Ball---------------------------------------------------------------
		player.y = canvas.height - player.height/2;
		//the decimal is how bouncy you want the object to be
		//It should be a number between 0 and 2;
		player.vy = -player.vy * .99;
	}
	
	


	




	//-----------------------------------------------------------------------------------------
}




