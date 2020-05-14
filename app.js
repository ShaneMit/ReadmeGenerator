const inquirer = require('inquirer')
const axios = require('axios')
const fs = require('fs')

// 1 Prompt for each piece of info needed
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your application?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your app.'
  },
  {
    type: 'input',
    name: 'contents',
    message: 'Enter your table of contents.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is your app used for?'
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please input your license info',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who is contributing to this app?'
  },
  {
    type: 'input',
    name: 'tests',
    message:'Tests?'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Questions?'
  }
])
// Template for the readme