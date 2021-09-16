const _ = require("lodash")

// Shallow Copy of an Object

// let developer1 = { name: "Nilanjan" }

// let developer2 = developer1

// developer2.name = "Vishnu"

// console.log(developer1)

// console.log(developer2)

/* Deep Copy of an Object  -- Object.assign({}) */

// let developer1 = { name: "Nilanjan" }

// let developer2 = Object.assign({}, developer1)

// developer2.name = "Vishnu"

// console.log(developer1)

// console.log(developer2)

/* Deep Copy of an Object with {...variable}    */

// let developer1 = { name: "Nilanjan" }

// let developer2 = { ...developer1 }

// developer2.name = "Vishnu"

// console.log(developer1)

// console.log(developer2)

/* Deep Copy of an Object with {...variable}    */

// let developer1 = { name: "Nilanjan", skills: { primary: "Full Stack", secondary: "DevOps" } }

// let developer2 = { ...developer1 }

// developer2.name = "Vishnu"

// console.log(developer1)

// console.log(developer2)

/* Deep Copy of an Object with JSON.parse(JSON.stringify(developer1)) */

// let developer1 = { name: "Nilanjan", skills: { primary: "Full Stack", secondary: "DevOps" } }

// let developer2 = JSON.parse(JSON.stringify(developer1))

// developer2.name = "Vishnu"
// developer2.skills.primary = "DevSecOps Tests"

// console.log(developer1)

// console.log(developer2)

/* Deep Copy of an Object with JSON.parse(JSON.stringify(developer1)) */

// let developer1 = {
//   name: "Nilanjan",
//   skills: { primary: "Full Stack", secondary: "DevOps" },
//   calculateAge: function (params) {
//     return 30
//   },
//   joiningDate: new Date(),
// }

// let developer2 = JSON.parse(JSON.stringify(developer1))

// developer2.name = "Vishnu"
// developer2.skills.primary = "DevSecOps Tests"

// console.log(typeof developer1.joiningDate)

// console.log(typeof developer2.joiningDate)

/*  lodash object deep clone         */

// let developer1 = {
//   name: "Nilanjan",
//   skills: { primary: "Full Stack", secondary: "DevOps" },
//   calculateAge: function (params) {
//     return 30
//   },
//   joiningDate: new Date(),
// }

// let developer2 = _.cloneDeep(developer1)

// developer2.name = "Vishnu"
// developer2.skills.primary = "DevSecOps Tests"

// console.log(developer1)
// console.log(typeof developer1.joiningDate)
// console.log(developer2)
// console.log(typeof developer2.joiningDate)
