

// var x = 10
// console.log(x)

// var x 
// x = 10 

// var i = 20     //global scope

// for (var i = 0; i < 10; i++){
//     console.log(i)
// }   //block scope

// console.log(i)
// console.log(i)


// console.log(global.i)  //undefined

// let i = 20     

// for (let i = 0; i < 10; i++){
//     console.log(i)
// }   
// console.log(i)
// console.log(i)



// const PI = 22/7
// console.log(PI)



// let user = {
//     name: "Ahmed",
//     age: 20
// }
// console.log(user.name)
// console.log(user.age)



// object destructuring
// let { name, age } = user
// console.log(name)
// console.log(age)


//array destructuring
// let colors = ["red", "green", "blue"]  
// let [fcolor, scolor, tcolor] = colors
// console.log(scolor)
// console.log(colors[0])


// string destructuring
// let text = "hi mohab"
// let [c1 , c2] = text
// console.log(c2)


// let fname = "mohab"
// let lname = "Nayel"
// console.log("my first name is : " + fname + " and my last name is : " + lname)
// console.log(`my f name is : ${fname} and my l name is : ${lname}`)


// task make loop for this none interable data by using for in loop and without it
// let user = {
//     name: "Ahmed",
//     age: 20,
// }
// for(let u in user){
//     console.log(user[u])
// }

//another way

// for (let key in user){
//     console.log(user[key])
// }

//another way

// for(var i=0; i<Object.keys(user).length; i++){
//     console.log(Object.keys(user)[i])
//     console.log(Object.values(user)[i]) 
// }



// let colors = ["red", "green", "blue"]

// for (let c of colors){
//     console.log(c)   //value
// }


// example for forEach
// let colors = ["red", "green", "blue"]

// colors.forEach(function(value){
//     console.log(value)
// })



// example for map
// let colors = ["red", "green", "blue"]

// let result = colors.map(function(value){
//     return `<li>${value}</li>`
// })
// console.log(result)



// example for filter
// let salary = [1000, 2000, 3000, 4000, 5000 , 8000]

// let result = salary.filter(function(value){
//     return value > 2500
// })
// console.log(result)



// what is the difference between map and forEach and filter
// map return new array with same length
// forEach not return anything
// filter return new array with different length

// let sayhi = (name)=>{ console.log(`hi ${name}`)} //we can remove the {} if we have one statement
// sayhi("mohab")

function user(n , a){
    this.name = n
    this.age = a
    this.getname = function(){
        console.log(this.name)
    }
    this.getage = function(){
        console.log(this.age)
    }
}
let u = new user('mohab', 20)

u.getname()
u.getage()