function Person(first, last, age){
	this.first = first;
	this.last = last;
	this.age = age;
}

Person.prototype = {
	getfullName : function (){
		alert(this.first + this.last);
	},
	greet : function(other){
		alert("This" + " " + this.first + "other" + " " + other.first);
	}

	
};

var p1 = new Person("Megha","Pathak",24);
var p2 = new Person("Aman", "Pathak", 19)
//p1.getfullName();
//xp1.greet(p2);

function customWrapper(object, fn){
		var f = function(){
			fn.apply(object);
		}
		return f;
	}

 var greet = customWrapper(p1, p1.greet)
 p2.greet(p);
