// ID   N   Q
// 1    a   5
// 2    b   10
// 3    c   15
// 4    d   20

// araay of objects

// [
//     {
//         ID : 1,
//         Name : 'a',
//         Quantity : 5
//     },
//     {
//         ID : 2,
//         Name : 'b',
//         Quantity : 10
//     },
//     {
//         ID : 3,
//         Name : 'c',
//         Quantity : 15
//     },
//     {
//         ID : 4,
//         Name : 'd',
//         Quantity : 20
//     }
// ]

// json

// AJAX ==>onreadystatechange  ==> true
//      ==> readyState  ==> 4
//      ==> status      ==> 200
//      ==> status      ==> 200
//      ==> responseText==> string

//  Sync  التزامن 

// Async  عدم التزامن 

// function getApi(){
//     var xttp = new XMLHttpRequest

//     xttp.onreadystatechange = function(){

//         if(this.readyState == 4 && this.status == 200){
//             var result = this.responseText
//             var mohamed = JSON.parse(result)
//             console.log(result);
//         }
//     }
//     xttp.open("GET","https://jsonplaceholder.typicode.com/posts",true)
//     xttp.send()
// }   


// new secion

// var search = document.getElementById("search");
// var btn = document.getElementById("btn");
// var tempresult = document.getElementById("temp");
// var iconresult = document.getElementById("icon");

// btn.addEventListener("click", function(){
//     var ajax = new XMLHttpRequest
//     ajax.open("GET","https://api.weatherapi.com/v1/current.json?key=b627adc120ca4636ad0162946243008&q="+search.value+"&aqi=no",true);
//     ajax.send();
//     ajax.onreadystatechange = function() {
//         if (ajax.readyState == 4) {
//             var data = JSON.parse(ajax.response);
//             var temp = data.current.temp_c
//             var icon = data.current.condition.icon
//             icon = "http:"+icon;
//             console.log(temp,icon);
//             tempresult.innerText = temp;
//             iconresult.src = icon;

//         }
//     }
// })

// window.alert("hello")
// window.prompt("")


// console.log(this)


// var navbar = document.getElementById("navbar")
// var about = document.querySelector(".about")
// var circle = document.getElementById("circle")
// onscroll=function(){
//     if(window.scrollY >= 100){
//         navbar.classList.add("navbar-blue")
//         navbar.classList.remove("navbar")
//     }else{
//         navbar.classList.add("navbar")
//         navbar.classList.remove("navbar-blue")
//     }
//     if(window.scrollY >= about.offsetTop - 500){
//         about.classList.add("about-show")
//         about.classList.remove("about")
//     }else{
//         about.classList.remove("about-show")
//         about.classList.add("about")
//     }


    
//     if(window.scrollY >= circle.offsetTop - 500){
//         circle.classList.add("circle-show")
//         circle.classList.remove("circle")
//     }else{
//         circle.classList.remove("circle-show")
//         circle.classList.add("circle")
//     }

// }




// seccionstorage
// 