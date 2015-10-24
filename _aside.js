//Dependency Injection: giving a function an object. 

//Rather than creating an object inside a function, you pass it to the function

var Person = function(firstname, lastname) {
    
    this.firstname = firstname;
    this.lastname = lastname;
}

//logPerson() is dependent upon the variable john. if something were to change about john, you would have to change it inside this function. this makes for complex code. instead, we'll rewrite it with Dependency Injection below
function logPerson()
{
    var john = new Person('John', 'Doe');
    console.log(john);
}

logPerson();

// refactored with Dependency Injection. We are passing the object to the function instead of creating the object inside the function.
function logPersonDI(person) {
    console.log(person);
}

var john = new Person('John', 'Doe');
logPersonDI(john);