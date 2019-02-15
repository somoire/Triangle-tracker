function identifyTriangle () {
var x = parseInt (prompt('X'))
var y = parseInt (prompt('Y'))
var z = parseInt (prompt('Z'))
if (x === y && x === z && y === z) {
alert ("EQUILATERAL TRIANGLE");
} else if (x === y || y === z || x === z) {
alert ("ISOSCELES TRIANGLE")
} else if (x + y <= z || y + z <= x || x + z <= y){
alert ("TRIANGLE CANNOT BE FORMED")
} else {
alert ("SCALENE")
}
}
identifyTriangle();
