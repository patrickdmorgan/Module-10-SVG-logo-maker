const fs = require("fs");
const inquirer = require("inquirer");

// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(answers) {
  let svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>';
  svg += `${answers.shape}`;

  let shapeChoice;
  switch(answers.shape) {
    case 'Triangle':
      svg += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
      break;
    case 'Square':
      svg += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
      break;
    case 'Circle':
      svg += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text></g></svg>`;

  fs.writeFile("logo.svg", svg, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}