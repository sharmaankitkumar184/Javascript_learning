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