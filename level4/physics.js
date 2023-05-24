// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var karen;


var bullet = [];
var canShoot = true;

//---------------Set Friction and Gravity-----------------
var frictionX = .90;	
var frictionY = .90;
var gravity = 1;
//--------------------------------------------------------
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
//
	player = new GameObject();
	player.x = canvas.width/2;
	player.y = canvas.height - 50;
	player.height = 40;
	player.width = 40;
	player.color= "#00ffff"
	player.force = 1;
//
	bullet = new GameObject();
	bullet.x = 10000;
	bullet.y = player.y;
	bullet.color = "red";
	bullet.height = 20;
	bullet.width = 20;
//

karen = new GameObject();
karen.x = canvas.width/2;
karen.y = canvas.height - 50;
karen.height = 40;
karen.width = 40;
karen.color= "blue"
karen.force = 1;


function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	if(spacebar && canShoot == true)
	{
		bullet.x = player.x;
		bullet.vx = 20;
	}

	if(bullet.x >= canvas.width)
	{
		bullet.x = 10000;
		bullet.vx = 0;
	}

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

	
//friction
	//--------------Apply friction to the Velocity X-----------------------------------------
	player.vx *= frictionX;
	//---------------------------------------------------------------------------------------
	player.x += player.vx;
//friction

//showbounce
player.vy *= frictionY;
player.vx *= frictionX;



player.x += player.vx;
player.y += player.vy;
//showbounce



	
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


	
	
	bullet.move();
	platform2.drawRect();
	bullet.drawCircle();
	player.drawRect();
	karen.drawRect();
	
	
	
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



