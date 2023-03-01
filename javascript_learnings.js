function myFunction() {
    document.getElementById('demo').innerHTML='welcome back';
}


function myFunctionForNum(p1, p2) {
    document.getElementById('demo').innerHTML =  p1 * p2;
  }


const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };


  function myFunctionForObject() {
    document.getElementById('demo').innerHTML =  person.fullName();
  }

  function myFunctionForRandomNumber() {
    document.getElementById("demo").innerHTML =
    Math.floor(Math.random() * 100);
  }

  const fruits = ["Banana", "Orange", "Apple", "Mango"];

        let text = "<ul>";
        fruits.forEach(myFunctionForArrays);
        text += "</ul>";
        document.getElementById("demo").innerHTML = text;

        function myFunctionForArrays(value) {
              text += "<li>" + value + "</li>";
            } 