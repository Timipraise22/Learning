var food = new Map();
food.set(1, "beans");
food.set(2, "rice");
food.set(3, "fries");
food.set(4, "ries");
food.set(5, "peas");

console.log(food);

//to print only the keys
for(var key of food.keys()){
    console.log(`key is ${key}`);
}
//to print only the values 
for(var value of food.values()){
    console.log(`value is ${value}`);
}

//to print both the key and value 
for(var [key , value] of food){
    console.log(`${key} : ${value}`)
}


//calling the key to print out the value 
console.log(food.get(1));