// EK foo parent 
// bar inherits foo by Object.create()

// 1st example by Object delegation.

var Foo = {
	init : function(name){
		this.me = name;
	},
	identify : function(){
		return ("I am" + this.me);
	}
};

var Bar = Object.create(Foo);
Bar.speak = function(){
	alert("Hello" + this.identify() + ".")
    }
    
var b1 = Object.create(Bar)
var b2 = Object.create(Bar)
b1.init("b1")  //Foo ka function
b2.init("b2")

b1.speak();  // indirectly foo ka function
b2.speak(); 



// 2nd example by Class func

function Foo(name){
    this.name = name;
    }
    Foo.prototype.identify = function(){
    return ("Hello" + this.name);
    }
    
    function Bar(who){
    Foo.call(this, who); //explicitly call the constructor of Foo
    }

    Bar.prototype = Object.create(Foo.prototype) 
    Bar.prototype.speak = function(){
     alert("Hi" + this.identify());
    }
    var b1 = new Bar("b1")
    b1.speak()
    
