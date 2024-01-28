const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shapes");

class SVG{
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render(){
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
  setTextElement(text, color) {
   this.textElement =  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(text, color) {
    this.shapeElement = shape.render();
  }
}

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
    
    //writes the file
    fs.writeFile(fileName, data,'utf8',  (err) => {
        if (err) throw err;

});
}


async function init() {

  var svgString = "";
  var svgFile = shape1.svg;

  //asking users the questions
    const answers = await inquirer.prompt(questions);


    var shape1Text = "";

    if (answers.text.length > 0 && answers.text.length < 4) {
      shape1Text = answers.text;
    } else {
        console.log("You didnt enter the correct number of characters!");

        return;
    }

    //user font color
    let shape1TextColor = answers["textColor"];

    //user shape color
    let shape1ShapeColor = answers.shapeColor;

    //user shape type
    let shape1ShapeType = answers["shape"];

    let shape1;

    if (shape1ShapeType === "Square") {
        shape1 = new Square();
        console.log("You have selected Square!");
    } else if (shape1ShapeType === "Triangle") {
        shape1 = new Triangle();
        console.log("You haveselected Triangle!");
    } else if (flynnShapeType === "Circle") {
        shape1 = new Circle();
        console.log("You have selected Circle!");
    } else {
        console.log("You must pick a shape");
    }
    shape1.setColor(shape1ShapeColor);

    var svg = new Svg();

    svg.setTextElement(shape1Text, shape1TextColor);
    svg.setShapeElement(shape1);
    svgString = svg.render();

   
   
    writeToFile('./logo.svg', shape1());  
    
}


init()



