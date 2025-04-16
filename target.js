//Take a peek at the button in your maze.html file
//the onclick="aim_target();"

function aim_target() 
{
	var target_coord = find_target();
	var target_x_pos = target_coord.charAt(0);
	var target_y_pos = target_coord.charAt(target_coord.length - 1);

	var main_coord = find_main();
	var main_x_pos = main_coord.charAt(0);
	var main_y_pos = main_coord.charAt(main_coord.length - 1);
	//step();
	/*
	console.log("target_coord" + target_coord);
	console.log("target_x_pos" + target_x_pos);
	console.log("target_y_pos" + target_y_pos);

	console.log("main_coord" + main_coord);
	console.log("main_x_pos" + main_x_pos);
	console.log("main_y_pos" + main_y_pos);
	*/
	//Notice the coordinates of the html square
	//0-0 0-1 0-2... 9-7 9-8 9-9 ...etc
	//A square can be in one of three states.
	
	//1. Empty  class: grid-item
	//2. Target class: grid-item-target
	//3. Main   class: grid-item-main
	
	//The placement of the 
	/*
	//move_left(main_coord);
	//move_down(main_coord);
	//move_right(main_coord);
	//move_up(main_coord);
	*/
	
	/*
	deltaY = Math.abs(main_x_pos - target_x_pos);
	deltaX = Math.abs(target_y_pos - main_y_pos);

	if (deltaX < deltaY ){
		//either move up or down
		if (target_x_pos - main_x_pos > 0 ){
			move_down(main_coord);
		} else {
			move_up(main_coord);
		}
	} else {
		//either left up or right
		if (target_y_pos - main_y_pos > 0 ){
			move_right(main_coord);
		} else {
			move_left(main_coord);
		}
	}
	*/
}















//returns true if there is only one square on the map aka call this function like this to see if your algorithm has been completed
/*
if (is_end()) {
	//code to execute if you're at the ends 
} else {
	//still need to target
}
*/

function is_end(){
	var count = 0;
	for(var i = 0; i < 10; i++)
	{
		for(var j = 0; j < 10; j++){
			var temp_cord = i + "-" + j;
			if (document.getElementById(temp_cord).className == "grid-item-target")
			{
				count++;
			} else if (document.getElementById(temp_cord).className == "grid-item-main") {
				count++;
			}
		}
	}
	if (count != 1)  return false; 
}


//ask this function to find the coordinate position of target
function find_target()
{
	for(var i = 0; i < 10; i++)
	{
		for(var j = 0; j < 10; j++){
			var temp_cord = j + "-" + i;
			if (document.getElementById(temp_cord).className == "grid-item-target")
			{
				return temp_cord;
			}
		}
	}
}

//ask this function to find the coordinate position of main
function find_main()
{
	for(var i = 0; i < 10; i++)
	{
		for(var j = 0; j <10; j++){
			var temp_cord = j + "-" + i;
			if (document.getElementById(temp_cord).className == "grid-item-main")
			{
				return temp_cord;
			}
		}
	}
}

function move_right(current_coord) 
{
	var x_pos = current_coord.charAt(0);
	var y_pos = current_coord.charAt(current_coord.length - 1);
	var old_coords = x_pos + "-" + y_pos;
	var new_y_pos = y_pos;
	if (y_pos != 9) new_y_pos++;
	var new_coords =  x_pos + "-" + new_y_pos;
	document.getElementById(old_coords).className = "grid-item"	
	document.getElementById(new_coords).className = "grid-item-main"
}

function move_left(current_coord) 
{
	var x_pos = current_coord.charAt(0);
	var y_pos = current_coord.charAt(current_coord.length - 1);
	var old_coords = x_pos + "-" + y_pos;
	var new_y_pos = y_pos;
	if (y_pos != 0) new_y_pos--;
	var new_coords =  x_pos + "-" + new_y_pos;
	document.getElementById(old_coords).className = "grid-item"	
	document.getElementById(new_coords).className = "grid-item-main"
}

function move_up(current_coord) 
{
	var x_pos = current_coord.charAt(0);
	var y_pos = current_coord.charAt(current_coord.length - 1);
	var old_coords = x_pos + "-" + y_pos;
	var new_x_pos = x_pos;
	if (x_pos != 0) new_x_pos--;
	var new_coords =  new_x_pos + "-" + y_pos;
	document.getElementById(old_coords).className = "grid-item"	
	document.getElementById(new_coords).className = "grid-item-main"
}

function move_down(current_coord) 
{
	var x_pos = current_coord.charAt(0);
	var y_pos = current_coord.charAt(current_coord.length - 1);
	var old_coords = x_pos + "-" + y_pos;
	var new_x_pos = x_pos;
	if (x_pos != 9) new_x_pos++;
	var new_coords =  new_x_pos + "-" + y_pos;
	document.getElementById(old_coords).className = "grid-item"	
	document.getElementById(new_coords).className = "grid-item-main"
}

function reset_maze() {
	for(var i = 0; i < 10; i++)
	{
		for(var j = 0; j < 10; j++){
			var temp_cord = i + "-" + j;
			document.getElementById(temp_cord).className = "grid-item";
		}
	}
	var targ_x_axis = (Math.floor(Math.random() * 9));
	var targ_y_axis = (Math.floor(Math.random() * 9));
	var rand_coord = targ_x_axis + "-" + targ_y_axis;
	document.getElementById(rand_coord).className = "grid-item-target";
	
	var main_x_axis = (Math.floor(Math.random() * 9));
	var main_y_axis = (Math.floor(Math.random() * 9));
	var main__coord = main_x_axis + "-" + main_y_axis;
	document.getElementById(main__coord).className = "grid-item-main";
}

function step ()
{	
	var target_coord = find_target();
	var target_x_pos = target_coord.charAt(0);
	var target_y_pos = target_coord.charAt(target_coord.length - 1);

	var main_coord = find_main();
	var main_x_pos = main_coord.charAt(0);
	var main_y_pos = main_coord.charAt(main_coord.length - 1);
	deltaY = Math.abs(main_x_pos - target_x_pos);
	deltaX = Math.abs(target_y_pos - main_y_pos);

	if (deltaX < deltaY ){
		//either move up or down
		if (target_x_pos - main_x_pos > 0 ){
			move_down(main_coord);
		} else {
			move_up(main_coord);
		}
	} else {
		//either left up or right
		if (target_y_pos - main_y_pos > 0 ){
			move_right(main_coord);
		} else {
			move_left(main_coord);
		}
	}
}







