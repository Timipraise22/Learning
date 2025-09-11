const employees = [
    { name: "Johnson Newton", department: "Engineering", salary: 95000, performanceScore: 88 },
    { name: "Mike Ajibade", department: "Purchase", salary: 72000, performanceScore: 76 },
    { name: "Smith David", department: "Sales", salary: 68000, performanceScore: 92 },
    { name: "John Paul", department: "Engineering", salary: 102000, performanceScore: 45 },
    { name: "Samuel Pablo", department: "IT", salary: 65000, performanceScore: 82 },
    { name: "David Kim", department: "Audit", salary: 78000, performanceScore: 67 },
    { name: "Anna Wilson", department: "Purchase", salary: 71000, performanceScore: 89 },
    { name: "Chris Brown", department: "Sales", salary: 74000, performanceScore: 58 },
    { name: "Amadu Usman", department: "Engineering", salary: 98000, performanceScore: 91 },
    { name: "Simi Sola", department: "Audit", salary: 82000, performanceScore: 73 },
    { name: "Grace Blessing", department: "IT", salary: 69000, performanceScore: 85 },
   
];

function getPerformanceBadge(score) {
    if (score >= 75) {
        return { class: 'badge-excellent', text: 'Excellent' };
    } else if (score >= 50) {
        return { class: 'badge-good', text: 'Good' };
    } else {
        return { class: 'badge-needs-improvement', text: 'Needs Improvement' };
    }
}
 
function formatSalary(salary) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0
    }).format(salary);

}

function createEmployeeCard(employee) {
    const badge = getPerformanceBadge(employee.performanceScore);
    
    return `
        <div class="employee-card" data-department="${employee.department}">
            <div class="employee-name">${employee.name}</div>
            <div class="employee-info">
                <div class="info-row">
                    <span class="info-label">Department</span>
                    <span class="info-value">${employee.department}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Salary</span>
                    <span class="info-value salary">${formatSalary(employee.salary)}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Performance</span>
                    <span class="info-value">
                        <span class="performance-badge ${badge.class}">
                            ${badge.text} (${employee.performanceScore})
                        </span>
                    </span>
                </div>
            </div>
        </div>
    `;
}

function displayEmployees(employeesToShow = employees) {
    const grid = document.getElementById('employeeGrid');
    const noResults = document.getElementById('noResults');
    
    if (employeesToShow.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
    } else {
        grid.innerHTML = employeesToShow.map(createEmployeeCard).join('');
        noResults.style.display = 'none';
    }
}

function filterEmployees() {
    const selectedDepartment = document.getElementById('departmentFilter').value;
    
    if (selectedDepartment === 'all') {
        displayEmployees(employees);
    } else {
        const filtered = employees.filter(emp => emp.department === selectedDepartment);
        displayEmployees(filtered);
    }
}

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    displayEmployees();
    
    // Add event listener for department filter
    document.getElementById('departmentFilter').addEventListener('change', filterEmployees);
});