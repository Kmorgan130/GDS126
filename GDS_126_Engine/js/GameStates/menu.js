/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:200});
//startButton.img.src="images/mrt.jpg"

console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/mrt.jpg"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play(`bgMusic`,1)
		}

		//Hover Effect Graffic
		startButton.color = `yellow`
	}
	else
	{
		//Default Button Graphic
		startButton.color = `red`
	}
	
	menuBackground.drawStaticImage();
	startButton.render()
}
	
	
