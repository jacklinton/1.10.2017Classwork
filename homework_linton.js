//Question 1
var num1 = 3
var num2 = 4
console.log(num1 + num2) //Defines two numerican variables, adds them together, and outputs them to the console

var firstName = "Jack"
var lastName = "Linton"
console.log(firstName + lastName)//Defines two string variables, adds them together, and outputs the result to the console

//Question 2
var annuals = ["marigold", "petunia", "vinca"] //creates two individual arrays
var perennials = ["allium", "aster", "lupin"]
var garden = [annuals, perennials] //Creates a multidimensional array by adding two arrays
console.log(garden[1][0]) //Outputs a value from each dimension of a multidimensional array
console.log(garden[0][0])

//Question 3
var numberPrompt = prompt("Please enter a number", numberPrompt) //Asks the user to enter a number

if (numberPrompt < 100) {										//Determines if that number is less than 100
	alert("That number is less than 100!")						//Produces an output accordingly
}
else{
	alert("Your number is " + numberPrompt + " and it is greater than 100!")
}

//Question 6
var theName = prompt("What's your name?", theName) //Prompts user to enter their name

function whatName(theName){						//Desclares a function whatName that can be called with the argument theName previously enterd by user
	return console.log("Your name is", theName)//When function is called with theName the name entered is output to the cons ole
}

//Question 7
function uselessFunction(){						//Declares a function with no argument
	return console.log("This function is nearly pointless.")//Shows an output when the function is called
}