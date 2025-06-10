var CEO= {
    firstname:"timi",
    Age:29,
    lastname:"praise",
    skill:"employed",
    Status:true, 
}

console.log(CEO)
console.log(CEO.Age) // to print out a single object
console.table(CEO) //to print out in table

 //ways to get info using a template
var student = {
    name:"",
    Age:"",
    lastname:"",
    schoolfees:"",
    class:"",
    getStudentInfo: function(){
        console.log(`Student name is ${this.name}`);
    }
}

var stu1= Object.create(student);
stu1.name="Timi praise"
stu1.getStudentInfo();


var stu2= Object.create(student);
stu2.name = "funmi";
stu2.age = 15;
stu2.lastname = "atanda";
stu2.schoolfees = 150000;
stu2.class = "jss one";

// stu2.getStudentInfo();
console.log(stu2)


var student = function(name, age, lastname, schoolfees, grade){
    this.name= name;
    this.age= age;
    this.lastname= lastname;
    this.schoolfees= schoolfees;
    this.grade= grade;
    this.getStudentInfo=function(){
        console.log(`Student name is ${this.name}`)
        console.log(`Student age is ${this.age}`)
        console.log(`Student lastname is ${this.lastname}`)
        console.log(`Student schoolfees is ${this.schoolfees}`)
        console.log(`Student grade is ${this.grade}`)
    }
}

var stu1= new student("Timi", 15, "atanda", 3500, "grade 5");
var stu2= new student("praise", 15, "atanda", 8500, "grade 3");

console.log(stu2);
stu2.getStudentInfo();
student.prototype.getGrade=function(){
    console.log(`You are in ${this.grade}`)
}
stu2.getGrade();