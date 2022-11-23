//Manager profile
const generateManager = function (manager) {
    return `
    <div class="col-4 mb-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <i class="material-icons">manage_accounts</i><h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

//Engineer profile

const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mb-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <i class="material-icons">design</i><h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub:<a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

//Intern profile

const generateIntern = function (intern) {
    return `
    <div class="col-4 mb-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <i class="material-icons">supervised</i><h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};

generateHTML = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const manCard = generateManager(employee);
            
            pageArray.push(manCard);
        }
        if (role === 'Engineer') {
            const engCard = generateEngineer(employee);
            
            pageArray.push(engCard);
        }
    }
    if (role === 'Intern') {
        const intCard = generateIntern(employee);
        
        pageArray.push(intCard);
    }
};

const employeeCards = pageArray.join('')

const generateGroup = generateTP(employeeCards);
return generateGroup;

const generateTP = function (employeeCards) {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    ${employeeCards}

    `;
};
module.exports = generateHTML;