const inquirer = require('inquirer');


    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "MAIN MENU",
      choices: [
        "view all departments",
        "view all roles",
        "View all employees",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role",
      ]
    })

