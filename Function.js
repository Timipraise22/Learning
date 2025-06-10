function age(){
    console.log(7);
}
age();

// ways of calling function when you want to add another data types
function name(firstname){
    console.log(`my name is ${firstname} and i do web programming`)
}

name("yamal")

//getting values with functions 
function getAverage(a,b){
    var average = (a + b) / 5;
    console.log(average);
}

getAverage(10,25);

//using functions to return value from the previous example 
function getAverage(a,b,c,d,e){
    var average = (a + b + c + d + e) / 5;
    console.log(average);
    return average;
}

var grade = getAverage(10,20,18,16,9);
console.log(`Your grade is ${grade}`)