//define a function (what is that?) named moveSquare that takes in one parameter (what is that?) called direction


function moveSquare(direction) {
	//This is a comment, there is no code in this comment

	/*
	This is
	a multi line comment! WOW!\

	foo bar
	*/

	//These are variables that we need for our program to run.
	var domHTMLenv="square_env"; //The name here corresponds to the id of the div element that holds the square
	var domHTMLdivID="square"; //Ths is the id of our square
	var speed = 5; //Try editng this number and see what happens!
	var env = document.getElementById(domHTMLenv); //Here we store a DOM element (HTML) by referencing the id
	var env_rec = env.getBoundingClientRect(); //Here we call the DOM element and ask for the positions of it's corners
	//Same for the square as above, we will be editing the position of the square to make it look like it's moving around.
	var square = document.getElementById(domHTMLdivID); 
	var square_rec = square.getBoundingClientRect(); 
	
	
	
	console.log("env", env_rec.top, env_rec.right, env_rec.bottom, env_rec.left);
	console.log("sq", square_rec.top, square_rec.right, square_rec.bottom, square_rec.left);
	
	//This is an if statement - it is your first example of a logic gate.
	//here is how it works;
	//Imagine a soccer game, and I am the referee
	//You are the captain of your team, and before the game we flip a coin to start the match.
	//You choose heads
	//An if statement built around this would look as follows:
	/*

	if (coin == "heads"){
		Your team starts the match with the ball
		This is wwhere you would put your code to execute if heads
	} else if (coin == "tails"{
		The opposing team starts with the ball
		This is where you would put your code to execute if tails
	} else {
		The coin landed on it's side
		code to retry the coin toss
	}


	*/
	
	

	//console.log("param : " + direction);
	square.style.position = "absolute";
	if (direction == "left" )
	{
		if (check_left(env_rec, square_rec)){
			square.style.left = parseInt(square_rec.left - speed)+'px';
		}
	}
	if (direction == "up" )
	{
		if (check_up(env_rec, square_rec)){
			square.style.top = parseInt(square_rec.top - speed)+'px';
		}
	}
	if (direction == "down" )
	{
		if (check_down(env_rec, square_rec)){
			square.style.top = parseInt(square_rec.top + speed)+'px';
		}
	}
	if (direction == "right" )
	{
		if (check_right(env_rec, square_rec)){
			square.style.left = parseInt(square_rec.left + speed)+'px';
		}
	}
}

function check_left(env_rec, square_rec){
	if (square_rec.left > env_rec.left){
		return true;
	}
	return false;
}

function check_up(env_rec, square_rec){
		if (square_rec.top > env_rec.top){
		return true;
	}
	return false;
}

function check_down(env_rec, square_rec){
		if (square_rec.bottom < env_rec.bottom){
		return true;
	}
	return false;
}

function check_right(env_rec, square_rec){
		if (square_rec.right < env_rec.right){
		return true;
	}
	return false;
}
    