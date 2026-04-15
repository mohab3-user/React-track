// xmlhttprequest 

// fetch  ecma next
// axios react 
// jquery ajax

// api -> application programming interface

// json -> javascript object notation
// XML -> extensible markup language

// var colors = ["red", "green", "blue",55,true]

// var person = ["Mohab", "Nayel", 30, true]

// var person ={fname:"Mohab", lname:"Nayel", age:30, isMarried:true}

// console.log(person['fname']);
// console.log(person.fname);

// var users=[
//     {name:"Mohab", age:30, isMarried:true},
//     {name:"Nayel", age:25, isMarried:false},
// ]

// rest api -> is an api that follows the rest architecture constraints
// REST (Representational State Transfer) refers to a group of software architecture design constraints that bring about efficient, reliable and scalable distributed systems.
// The basic idea of REST is that a resource, e.g., a document, is transferred via well-recognized, language-agnostic, and reliably standardized client/server interactions. Services are deemed RESTful when they adhere to these constraints.
// HTTP APIs in general are sometimes colloquially referred to as RESTful APIs, RESTful services, or REST services, although they don't necessarily adhere to all REST constraints. Beginners can assume a REST API means an HTTP service that can be called using standard web libraries and tools.
// 

// restful api
// restful api -> is an api that follows the rest architecture constraints
// restful api -> is an api that uses http protocol and methods (get, post, put, delete)


// users
// (all users)
// create user
// 



// products
// (all users)
// create users
// find user
// update user
// delete user




// 1
// var ajax = new XMLHttpRequest


// // 2
// ajax.open("GET", "https://jsonplaceholder.typicode.com/users");


// // 3
// ajax.send();


// 4
// ajax.onreadystatechange = function() {
//     if(this.readyState == 4 ) {
//         var data = JSON.parse(ajax.response);
//         // console.log(data[1].name);
        
//         // result.innerText = data[3].name;
//         for(var i=0; i<data.length; i++) {
//             var li = document.createElement("li");
//             li.textContent = data[i].name;
//             userList.appendChild(li);
//         }
//     }
// }


// var btn = document.getElementById("searchBtn");
// var search = document.getElementById("search");

// btn.addEventListener("click", function() {
//     var query = search.value;
//     // Perform search using AJAX
//     var ajax = new XMLHttpRequest();
//     ajax.open("GET", "https://jsonplaceholder.typicode.com/users");
//     ajax.send();
//     ajax.onreadystatechange = function() {
//         var ajax = new XMLHttpRequest();
//         ajax.open("GET", "https://jsonplaceholder.typicode.com/users" + search.value);
//         ajax.send()
//         ajax.onreadystatechange = function() {
//             if(ajax.readyState == 4 ) {
//                 var user = JSON.parse(ajax.response);
//                 // Display user information
//                 console.log(user);
//             }
//         };
//     };
// });

var search = document.getElementById("search");
var btn = document.getElementById("btn");
var tempresult = document.getElementById("temp");
var iconresult = document.getElementById("icon");
btn.addEventListener("click", function() {
    var ajax = new XMLHttpRequest
    ajax.open("GET","https://api.weatherapi.com/v1/current.json?key=b627adc120ca4636ad0162946243008&q="+search.value,true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            var data = JSON.parse(ajax.response);
            var temp = data.current.temp_c
            var icon = data.current.condition.icon
            icon = "http:"+icon;
            console.log(temp,icon);
            tempresult.innerText = temp;
            iconresult.src = icon;

        }


    }

});