function Triangles() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  var z = document.getElementById("z").value;

if (x === y && x === z && y === z) {
alert ("EQUILATERAL TRIANGLE");
}
else if (x === y || y === z || x === z) {
alert ("ISOSCELES TRIANGLE");
}
else if (x + y <= z || y + z <= x || x + z <= y){
alert ("TRIANGLE CANNOT BE FORMED");
}
else {
alert ("SCALENE")
}
}
identifyTriangle();
