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
else if (x + y > z || y + z > x || x + z > y){
alert ("SCALENE TRIANGLE");
}
else if (x + y <= z || y + z <= x || x + z <= y){
alert ("TRIANGLE CANNOT BE FORMED")
}
else if(isNaN(a) || isNaN(b) || isNaN(c)) {
     display.innerHTML = "<p class='display-text'>That is <span class='not'>NOT</span> a number</p>";
 }
 else {
   display.innerHTML = "<p class='display-text'>That is <span class='not'>NOT</span> a triangle</p><p>The sum of any two sides should be <span class='fill'>GREATER</span> than the third side</p>"
 }
}
identifyTriangle();
