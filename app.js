const inquirer = require('inquirer')
const axios = require('axios')
const fs = require('fs')
const { writeFile, appendFile } = require('fs')
const { promisify } = require('util')
const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)
let username = ''
let name = ''
let data = 'Hello World'

// Prompt for Github Info
// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'username',
//     message:'Please enter your GitHub username'
//   }
// ])
// .then(username => {
//   console.log(username)
//   for (const name in username)
//    console.log(username[name])
//     axios.get(`https://api.github.com/users/${username[name]}`)
//     .then (({ data }) => {
//       console.log(data.avatar_url)
//       console.log(data.email)
//       writeFileSync('README.md', data)
//     })
//     .catch (err => 
//       console.log(err)
//     )
// })
// .catch (err => 
//   console.log(err))


// // 1 Prompt for each piece of info needed
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
    message: 'Tests?'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Questions?'
  }
])
  .then(data => {
    data2 = generateReadMe(data)
    // console.log(data)
    fs.writeFileSync('README.md', data2)
    // console.log(data2)
  })

// Template for generating the readme
const generateReadMe = inputData => {
  return ` ${inputData.title}
  ${inputData.description} ${inputData.contents} ${inputData.installation} ${inputData.usage} ${inputData.license} ${inputData.contributing} ${inputData.tests} ${inputData.questions} `
}

