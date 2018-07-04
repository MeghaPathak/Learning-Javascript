function foo(a,b){
	this.a =a;
	this.b =b;
	console.log (this);
}
var bar = {};
var baz = foo.bind(bar,1);
baz(2);