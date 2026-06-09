let employees = [];

function addemployee() {
    let name = document.getElementById("name").value;
    let empID = document.getElementById("empID").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (name === "" || empID === "" || isNaN(salary) || dept === "") {
        alert("Please fill all fields properly");
        return;
    }

    let employee = {
        name: name,
        id: empID,
        salary: salary,
        department: dept
    };

    employees.push(employee);

    alert("Employee Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("empID").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayemployees() {
    let output = "<h3>All Employees</h3>";

    if (employees.length === 0) {
        output += "No employee records found.";
    } else {
        employees.forEach(emp => {
            output += `
            Name: ${emp.name} |
            ID: ${emp.id} |
            Salary: ${emp.salary} |
            Dept: ${emp.department}<br>`;
        });
    }

    document.getElementById("output").innerHTML = output;
}

function filtersalary() {
    let filtered = employees.filter(emp => emp.salary > 5000);

    let output = "<h3>Employees with Salary > 5000</h3>";

    if (filtered.length === 0) {
        output += "No employees found.";
    } else {
        filtered.forEach(emp => {
            output += `
            Name: ${emp.name} |
            Salary: ${emp.salary}<br>`;
        });
    }

    document.getElementById("output").innerHTML = output;
}

function totalsalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    document.getElementById("output").innerHTML =
        "<h3>Total Salary Payout: $" + total + "</h3>";
}

function averagesalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML =
            "<h3>No employee records available</h3>";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        "<h3>Average Salary: $" + avg.toFixed(2) + "</h3>";
}

function countdepartment() {
    let deptName = prompt("Enter department name:");

    let count = employees.filter(
        emp => emp.department.toLowerCase() === deptName.toLowerCase()
    ).length;

    document.getElementById("output").innerHTML =
        "<h3>Employees in " + deptName + " : " + count + "</h3>";
}