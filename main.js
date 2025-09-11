class EmployeeCard{
    constructor(name, age , department, salary, performance_score){
        this.name= name;
        this.age= age;
        this.department= department;
        this.salary= salary;
        this.performance_score= performance_score;
    }

    getBadgeClass(){
        if(this.performance_score >=75) return "green"
        if(this.performance_score >=75)  return "yellow"
        return red;
    }

    getbutton

    createElement(){
        var card = document.createElement("div");
        card.className = "card"

        var name = document.createElement("div");
        name.classname = "name"
        name.textContent = this.name

        var department = document.createElement("div");
        department.textContent = this.department + "Department"

        var Salary = document.createElement("div");
        Salary.textContent = "Salary" + this.salary.toLocaleString(`en-NG`,{style:`currency`,
            currency:`NGN`
        });

        var badgeSpan = document.createElement("span");
        badgeSpan.className = "badge" + this.getBadgeClass();
        badgeSpan.textContent = "Score: " + this.performance_score

        var performance = document.createElement("div")
        performance.appendChild(badgeSpan)

        card.appendChild(nameDiv);
        card.appendChild(department);
        card.appendChild(Salary);
        card.appendChild(performance);

        return card;
    }
}

var Employees = [ 
    new Employee("Femi Gbagada",35, "Sales", 100000, 45),
    new Employee("Victoria",19, "Intern", 150000, 50),
    new Employee("Simi",28,"Sales", 450000, 75),
    new Employee("Usman",24,"Audit", 500000, 76),
    new Employee("Ahmed",27,"Audit", 500000, 76),
    new Employee("Loba",30,"Purchase", 1000000, 90),
    new Employee("Simisola",23,"Purchase", 200000, 67),
    new Employee("Bode",20,"Sales", 100000, 65),
    new Employee("Blessing",20, "Intern", 150000, 50),
]

var dashboard = document.getElementById("dashboard")
var departmentfilter = document.getElementById("departmentfilter")
var employeeList = document.getElementById("employeeDetails")
var employeeListSection = document.getElementById("employeeList")

//render employee list with "View Card" button
departmentfilter.addEventListener("change", function(){
    var selected = departmentfilter.value;
    employeeList.innerHTML="";
    dashboard.innerHTML="";
    
    var filtered = Employees.filter(function(emp){
        return selected==="All"||emp.department===selected;
    })

    if(filtered.length>0){
        filtered.forEach(function(emp,index){
            var li = document.createElement("li");
            li.className = "employee-item"
            li.innerHTML = `<span>${emp.name} -${emp.department}-${emp.salary.toLocaleString(`en-NG`, 
                {style: `currency`, currency:`NGN`}
            )}</span>
            <button data-index="${index}>View Card</button>`

            employeeList.appendChild(li);
        })
        employeeListSection.style.display = "block"

        //Add event listener to each "View Card" button
        document.querySelectorAll("button[data-index]").forEach(function(button){
            button.addEventListener("click", function(){
                var index= parseInt(button.getAttribute("data-index"))
                var selectedEmployee=filtered[index];
                var card= new
                EmployeeCard(selectedEmployee)
                dashboard.appendChild(card.createElement())
            })
        })
    } else{
        employeeListSection.style.display= "none"
    }
})