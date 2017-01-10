// Get the jelly

// Get the peanut butter

// Get the bread

// Spread peanut butter on one side and jelly on the other

// Combine the two sides

//Here's an example of an algorithm. What steps could we add before, after, or in between steps?

/* Breaking it down: Where is the jelly? Get the jelly from x, and bring it to the
table and place it on the table near your chair. Open The Jelly. Where is the peanut 
butter? Get the peanut butter from x and bring it to the table and place it near the 
chair on the table. Open the peanut butter. Where is the bread? Get the bread from x and 
bring it to the table and place it on the table next to the jelly. Where are the plates? 
Get a plate from x and bring it to the table and lay it in front of your chair on the table. 
Open the bread. Remove two slices from the top of the bag and place them flat and next to 
each other on the plate. Where is the knife? Get the knife from x and bring it to the 
table and hold it in one hand. Use the knife to scoop some jelly from the jelly jar, then
spread that jelly on one slice of bread on the side of the slice facing away from the
plate. Make sure the entire face of that slice of bread has jelly on it. Use the knife
to scoop some peanut butter out of the peanut butter jar and spread it on the other slice 
of bread on the plate on the side of the slice facing away from the plate. Lift the slice
of bread with jelly on it with your left hand without touching the jelly. Lift the slice
of bread with peanut butter on it with your right hand without touching the peanut
butter. Place the side of the slice of bread in your left hand on top of the slice of bread 
in your right such that the part of the slice with jelly is flat against the part of the
other slice with peanut butter such that all the edges of the two slices coincide with 
each other. Now the peanut butter and jelly sandwich is complete. */

//How do I make an image slide off the screen after 3 seconds?

// Delay the script by 3 seconds

// Select the image with a jQuery selector,

// Move the image across the screen somehow (positioning? margins?),
// by adding a certain amount of space every x milliseconds

//How can we break up the above algorithm even further?

/* Open a page with an image. Decide which direction the picture is going to slide off of
the screen. Decide how long it will take for image to be completely off the screen. Devise 
code that will accomplish the movement of the image in that direction in the chosen
amount of time. */

//Notes
/* The two key methods to use with JavaScript are:

setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.
setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.
http://www.w3schools.com/js/js_timing.asp 
window.setTimeout(function, milliseconds);

You might be interested in existing JavaScript based animation library: Script.Aculo.us

A tutorial for moving apicture to the right: https://www.tutorialspoint.com/javascript/javascript_animation.htm

From that page setTimeout( function, duration) − This function calls function after duration milliseconds from now.

setInterval(function, duration) − This function calls function after every duration milliseconds.

clearTimeout(setTimeout_variable) − This function calls clears any timer set by the setTimeout() functions.

Animation Code
JavaScript animations are done by programming gradual changes in an element's style.

The changes are called by a timer. When the timer interval is small, the animation looks continuous.
http://www.w3schools.com/js/js_htmldom_animate.asp

*/
//Notes


/* Ok, so it looks like the general method of moving an object across the screen with 
javascript is to create the item in the HTML code and give it an id. Then you create a 
variable in your script which calls on the id using document.getElementById("id"). Then 
you use the setTimeout(function, milliseconds) to say how long you want that object
to move in milliseconds. Then create a function that tells the object to move from 
position 0 (set by a variable) to another position or for a certain number of loop intervals
within that function, or optionally you can use clearTimeout(funtion, interval) to stop the
movment after a certain number of milliseconds. To delay the action of the move you
use setTimeout(function, milliseconds) to delay the action of the movement by a number
of milliseconds. Example can be found: http://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3
*/

//Activity 
/* Exercise

Write a pseudo-code algorithm (a list of steps in comments) that checks a form's fields for validity

Break the problem down into as many steps as possible

Begin researching the code behind each of the steps */

/* Assuming the form is already written into the html page, the algorithm would be to 
create a script that gets the name of the form and the value of the form and assigns
the value of that form to a variable. Then write a logic statement to test the value of
the variable ie the value assigned to the form in the HTML and if the value is null
or it lacks value, the script throws up an alert that that the form needs to be given
a value ie filled out by the user. It could also check to see if the value of the form 
is the right type, say if the person had to enter a number instead of a word.

examples and explanations
http://www.w3schools.com/js/js_validation.asp
http://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_js
*/


