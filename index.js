//Required packages/files
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generatehtml.js')
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Team array
const team = [];

//Prompt for manager
const manPrompts = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the manager's name."
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID number."
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email."
        },
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        team.push(manager);
        console.log(manager);
    })
};

const newEmpPrompts = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the specific role for this employee.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter this employee's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter this employee's ID number."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter this employee's email."
        },
        {
            type: 'input',
            name: 'github',
            message: "please enter this employee's GitHub username.",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter this employee's school.",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirmation',
            name: 'addMore',
            message: "Do you want to add more team members?",
            choices:['Yes', 'No'],
            default: false
        }
    ])

    .then(employeeInput => {
        let {name, id, email, role, github , school, addMore} = employeeInput
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        }
        else {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        team.push(employee);

        if (addMore) {
            return newEmpPrompts(team);
        }
        else {
            return team;
        }
    })
};

// Generation of HTML file function
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Success! Your team profile has been generated!')
        }
    })
};

manPrompts()
.then(newEmpPrompts)
.then(team => {
    return  generateHTML (team);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});