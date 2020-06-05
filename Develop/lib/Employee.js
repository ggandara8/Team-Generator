// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
       let EmployeeName = this.name;
       return EmployeeName; 
    }

    getId(){
        let EmployeeId = this.id;
        return EmployeeId;
    }

    getEmail(){
        let EmployeeEmail = this.email;
        return EmployeeEmail;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;