class Employee{
    constructor(name, age , department, salary, performance_score){
        this.name= name;
        this.age= age;
        this.department= department;
        this.salary= salary;
        this.performance_score= performance_score;
    }

    isEligibleForPromotion(){
        if(this.performance_score >= 70){
            console.log(`${this.name} (${this.department}) earns ${this.salary} naira - Eligible for Promotion`)
        }
        else if(this.performance_score >= 60 && this.performance_score <=69){
            console.log(`${this.name} (${this.department}) earns ${this.salary} naira - Promotion is being reviewed`)
        }
        else{
            console.log(`${this.name} (${this.department}) earns ${this.salary} naira - NO PROMOTION`)
        }
    }

    getSummary(){
        this.isEligibleForPromotion();
    }

    static averageSalary(employeesArray){
        // if(employeesArray.length ===0){
        //     return 0;
        // }

        var totalSalary = employeesArray.reduce((sum, emp) => sum + emp.salary, 0);
        return totalSalary / employeesArray.length;
    }

}

var Employees = [ 
    new Employee("Femi",35, "Sales", 100000, 45),
    new Employee("Victoria",19, "Intern", 150000, 50),
    new Employee("Simi",28,"Sales", 450000, 75),
    new Employee("Usman",24,"Audit", 500000, 76),
    new Employee("Loba",30,"HR", 1000000, 90),
    new Employee("Simisola",23,"Purchase", 200000, 67),
    new Employee("Bode",20,"IT", 100000, 65),
]

// Adding new employees
Employees.push(new Employee("Zera",27,"IT", 100000, 79))

// Getting Summary
Employees.forEach(Employee=>{
    Employee.getSummary();
});

//PROMOTION LIST
var promoEligble = Employees.filter(emp=> emp.performance_score >=70);
console.log("PROMOTION LIST")
promoEligble.forEach(emp => {
    console.log(`${emp.name}`)
})

//CALLING THE FUNCTION TO PRINT AVEVARGE SALARY
console.log("Average Salary:$",Employee.averageSalary(Employees))


