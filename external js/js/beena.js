var myObj, x;
myObj = {"Employee name":"Eram", "Salary":400000, "Phone":9833800041};
for (x in myObj) {
  document.getElementById("demo").innerHTML += x + "<br>";
}
