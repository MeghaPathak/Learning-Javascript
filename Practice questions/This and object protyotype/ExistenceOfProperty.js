var myObject = {
	a: 2
};

("a" in myObject);				// true
("b" in myObject);				// false

myObject.hasOwnProperty( "a" );	// true
myObject.hasOwnProperty( "b" );	// false


// The `in` operator will check to see if the property is *in* the object, or if it exists at any higher level of the `[[Prototype]]` chain object
// traversal (see Chapter 5). By contrast, `hasOwnProperty(..)` checks to see if *only* `myObject` has the property or not,
// and will *not* consult the `[[Prototype]]` chain
