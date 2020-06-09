const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");

const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const employees = [];

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your manager's name? "
    },
    {
        type: "input",
        name: "id",
        message: "What is your manager's id? "
    },
    {
        type: "input",
        name: "email",
        message: "What is your manager's email? "
    },
    {
        type: "input",
        name: "number",
        message: "What is your manager's office number? "
    },
    {
        type: "list",
        name: "employee",
        message: "Which type of team member would you like to add? ",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."]
    }
]).then(function({name, id, email, number, employee}){
    const manager = new Manager(name, id, email, number);
// Pushing manager to AllEmployess array
    employees.push(manager);

// Engineer prompt ---------------------------------------------------------------------------------------    
function EngineerPrompt(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name? "  
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's id? "
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email? "
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's github? "
        },
        {
            type: "list",
            name: "employee",
            message: "Which type of team member would you like to add? ",
            choices: ["Engineer", "Intern", "I don't want to add any more team members."]
        }
        ]).then(function({name, id, email, github, employee}){

            const engineer = new Engineer(name, id, email, github);
        // Push engineer to AllEmployees    
            employees.push(engineer);

            if(employee === "Engineer"){
                EngineerPrompt();
            }
            if(employee === "Intern"){
                InternPrompt();
            }
            if(employee === "I don't want to add any more team members."){
                fs.writeFileSync(outputPath, render(employees), "utf-8");
            }
        });
}
//Intern prompt -------------------------------------------------------------------------------------------------
function InternPrompt(){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your intern's name? "  
            },
            {
                type: "input",
                name: "id",
                message: "What is your intern's id? "
            },
            {
                type: "input",
                name: "email",
                message: "What is your intern's email? "
            },
            {
                type: "input",
                name: "school",
                message: "What is your intern's school? "
            },
            {
                type: "list",
                name: "employee",
                message: "Which type of team member would you like to add? ",
                choices: ["Engineer", "Intern", "I don't want to add any more team members."]
            }
            ]).then(function({name, id, email, school, employee}){

                const intern = new Intern(name, id, email, school);
            // Push intern to AllEmployees 
                employees.push(intern);

                if(employee === "Engineer"){
                    EngineerPrompt();
                }
                if(employee === "Intern"){
                    InternPrompt();
                }
                if(employee === "I don't want to add any more team members."){
                    fs.writeFileSync(outputPath, render(employees), "utf-8");
                }
            });
}

    if(employee === "Engineer"){
        EngineerPrompt();
    }
    if(employee === "Intern"){
        InternPrompt();
    }
    if(employee === "I don't want to add any more team members."){
        fs.writeFileSync(outputPath, render(employees), "utf-8");
    }
});