class Student{
    constructor(name, grade){
        this.name= name;
        this.grade = grade;
    }

    hasPassed(){
        var passed = this.grade >= 100;
        // console.log(`${this.name} has ${passed ? 'passed': 'failed'}`);

        if(passed >= 70){
            console.log(`${this.name} has passed`)
        }

        else{
           console.log(`${this.name} has failed`) 
        }
    }
    getResult(){
        this.hasPassed();
    }
}

var Students = [ 
    new Student("Femi",65),
    new Student("Victoria",90),
    new Student("Simi",75),
    new Student("Usman",76),
    new Student("Loba",90),
    new Student("Simisola",57),
    new Student("Bode",32),

];

Students.forEach(Student => {
    Student.getResult();
});