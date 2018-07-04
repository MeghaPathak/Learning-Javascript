function foo(message) {
	console.log(this.a + message );
}

function bind(foo,obj){
	return function(){
		foo.apply(obj,arguments);
	}
}

obj={
	a:2
};

var baz = bind(foo,obj);
baz("Hello");