// Object Oriented Programming

var obj = {};

var obj = new Object();
	obj.prop1 = 'value 1';
	obj.prop2 = 'value 2';

{
		prop1 : 'value 1',
		prop2 : 'value 2'
}

var shape1 = new Object();
	shape1.sides = 4;
	shape1.name = "rectangle";
	shape1.color = "red";

//Constructor (custom object constructors or classes)

function Rectangle(color){
	this.sides = 4;
	this.name = "rectangle";
	this.color = color;
	this.announce = function(){
		console.log(this.name)
	}
}

var shape1 = new Rectangle('blue');
	shape1.announce();
var shape2 = new Rectangle('red');
var shape3 = new Rectangle('green');

{
	sides : 4,
	name : 'rectangle',
	color : 'blue'
}

{
	sides : 4,
	name : 'rectangle',
	color : 'red'
}

{
	sides : 4,
	name : 'rectangle',
	color : 'green'
}


var announce = function(obj){
	console.log(obj.name);
}

announce(shape1);
// Rectangle




