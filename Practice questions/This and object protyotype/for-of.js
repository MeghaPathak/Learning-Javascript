//for..of` loop syntax for iterating over arrays (and objects, if the object defines its own custom iterator):

// Objects k liye custom iterator try karo


var myArray = [ 1, 2, 3 ];

for (var v of myArray) {
	console.log( v );
}
// 1
// 2
// 3

//es6 mein kuch Symbol mein iterator hain. Not sure whatzzz thizzzz.