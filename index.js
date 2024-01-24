const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Tiangle} = require("./lib/shapes");


const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'What are the letters(3 letters or less)?',
      validate: function(input) {
        if (input.trim() ===""){
          return "Must enter at least 1 character";
        }
        if(input.length >3){
          return "Must be 3 or less characters";
        }
        return true;
      }
      
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be?'
    },
    {
      type: 'list',
      message: 'What shape would you like your logo to be?',
      name: 'shape',
      choices: ['Square', 'Circle', 'Triangle'],
    },
    {
      type: 'input',
      message: 'What color would you like your logo to be?',
      name: 'shapeColor'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //const contents ={Circle, Square, Tiangle}
    //writes the file
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;

});
console.log(Shape)
}


async function init() {

  //asking users the questions
    const answers = await inquirer.prompt(questions);
   
    writeToFile('./lib/logo.svg', answers);  
    
}


init()
