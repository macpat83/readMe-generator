const inquirer = require('inquirer');
const generateReadme = require('./page-template');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter title of project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: "install",
        message: "What command should be run to install dependencies?",
        default: "npm i"
      },
      {
        type: 'input',
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
      },
      {
        type: 'input',
        name: 'deployedlink',
        message: 'Please enter your deployed project link.',
        validate: deployedlinkInput => {
          if (deployedlinkInput) {
            return true;
          } else {
            console.log('Please enter your deployed project link!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'repolink',
        message: 'Please enter the repository link to your project.',
        validate: repolinkInput => {
          if (repolinkInput) {
            return true;
          } else {
            console.log('Please enter your repository link!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a detailed description of your project.',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'CSS Framework', 'Node']
      },
      {
        type: 'input',
        name: 'development',
        message: 'Please describe any future development for the project',
        validate: developmentInput => {
          if (developmentInput) {
            return true;
          } else {
            console.log('Please enter future development!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Please add all contributors to the project',
        validate: contributorsInput => {
          if (contributorsInput) {
            return true;
          } else {
            console.log('Please add a contributor(s)!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'image',
        message: 'Please provide a screenshot or video of the project',
        validate: imageInput => {
          if (imageInput) {
            return true;
          } else {
            console.log('Please enter a screenshot or video!');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'credits',
        message: 'Please provide any necessary credits to the project',
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "MPL 2.0", "None"]
      },

    ])
      .then(function (data){
        console.log(data);
        //convert data into a string(readme)
        let result = generateReadme(data);
        console.log(result);


        //write file
        fs.writeFile("readme.md", result, function(err){
          if (err) throw err;
        })
      })
};
promptUser();

