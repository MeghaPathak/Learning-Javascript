var obj ={
	a:2,
	foo:foo
}

a="Global";
function foo(){
console.log(this.a);
}


function doSomething ( fn){
fn();
}

doSomething(obj.foo)
