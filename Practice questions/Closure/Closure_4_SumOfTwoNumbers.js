function foo(){
	var a=4;
	var fn = function(b){
 	console.log(a+b);
	}

	return fn;
}

var a = foo();
a(5);