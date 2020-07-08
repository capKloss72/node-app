const fs = require('fs')

const planetBuffer = fs.readFileSync('1-json.json')
const planetData = JSON.parse(planetBuffer.toString())
console.log(planetData.name + " " + planetData.planet + " " + planetData.age)
planetData.name = 'Tym'
planetData.age = 48
fs.writeFileSync('1-json.json', JSON.stringify(planetData))
console.log(planetData.name + " " + planetData.planet + " " + planetData.age)



