//Conditional Statements
//if else Statements
var temperature = 20
if (temperature <= 20 ){
    console.log("Don't come out to play cos it's very cold")
}
else{
    console.log("You can go out to play")
}


// Another Exxample : Cbecking 
var userIdVerified = true;
var emailVerified = false;
var loginVerified = true;
var validCardInfo = false;

if(userIdVerified){
    console.log("Welcome to our website")
}
else{
    console.log("Your details are not found")
}

if(emailVerified){
    console.log("Your email has been successfully linked to your account")
}
else{
    console.log("Email not verified")
}

if(loginVerified){
    console.log("You have successfully logged in")
}
else{
    console.log("Wrong details")
}
 
if(validCardInfo){
    console.log("Your card detailes has been saved")
}
else{
    console.log("Card not found")
}

// when they are various options to login in a site 
var loginGoogle = false;
var loginEmail = true;
var loginPhonenumber = false;

if(loginEmail || loginGoogle || loginPhonenumber){
    console.log("You have successfully logged in and have access")
}
else{
    console.log("you dont' have access ")
}