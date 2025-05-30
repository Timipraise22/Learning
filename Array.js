var employees=["tunde",true ,"funmi",7,"shade","hr"]  //array of 6 elements
console.log(employees)
console.log(employees[0])  // first on the list
console.log(employees[5])  //last on the list
console.log(employees.length)
employees[5] = "usman";  // assigning the value of the array to another
console.log(employees[5])


employees.pop(); // pop to remove the last set of the array
console.log(employees);

employees.shift(); // shift removes first set of the array
console.log(employees);

employees.unshift("2"); // adds a new element to the set from the front
console.log(employees)

employees.push("lamidi"); // adds a new element to the set from the bavck
console.log(employees)

console.log(employees.fill("Hello JS")); //fills the array with anything you want
console.log(employees.fill("Hello JS",1,4)) // specifying where to fill from

//using filter function
var age =  [2,3,22.26,14,25,10,12,45,19,18,26];

function checkAge(age){
    return age >=18;
}
console.log(age.filter(checkAge));

//I'll be trying other functions to use with array also, i already know how i can input them in a real data set