
//loops
//functions

// var age = 30


//data type
// var fname = "mohamed"
// var age=30
// var mstatues = true
// var color =['red', 'green', 'blue']


// console.log(typeof fname)
// console.log(typeof age)
// console.log(typeof mstatues)
// console.log(typeof color)


//operators

// console.log(20 == 20)
// var = 5 --->  = mean assign operator

//conditions

//if 
//switch

// if(5>10)
// {
//     console.log("hossam");
// }

// var age = prompt("How old are you?")
// if (age>= 21){
//     console.log("admit")
// }
// else if(age>= 10 && age< 21){
//     console.log("teenager")
// })
// else{
//     console.log("not allowed")
// }

//0-> 100
//0-> 50 f
//50-> 65 c
//65-> 75 b
//80-> 85 a
//85-> 100 a++

// var grade = prompt("What is Your grade?")
// if (grade >= 0 && grade < 50) {
//     console.log("F");
// } else if (grade >= 50 && grade < 65) {
//     console.log("C");
// } else if (grade >= 65 && grade < 75) {
//     console.log("B");
// } else if (grade >= 80 && grade < 85) {
//     console.log("A");
// } else if (grade >= 85 && grade <= 100) {
//     console.log("A++");
// }
// else{
//     console.log("Invalid grade");
// }

// var i=0

// while(i<=30)
// {
    
//     if(i==10){
//         console.log("ronaldo better than messi");
//     }
//     else{
//         console.log(i);
//     }
//     i++;

// }


//fizz buzz
//3-> fizz
//5-> buzz
//3,5-> fizzbuzz
//var i=1
// while(i<=30)

// {
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("fizzbuzz");
//     }
//     else if(i % 3 == 0){
//         console.log("fizz");
//     }
//     else if(i % 5 == 0){
//         console.log("buzz");
//     }
//     else{
//         console.log(i);
//     }
//     i++;
// }

// var colors=["red", "green", "blue"]
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// var colors=["red", "green", "blue"]
// for(var i=0; i<colors.length; i++){
//     console.log(colors[i]);
// }

// var colors=["red", "green", "blue"]
// while(colors.length>0){
//     console.log(colors[0]);
//     colors.shift();
// }


//find the max of the index in array
// var numbers = [10, 5, 8, 12, 3];
// var maxIndex = 0;

// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > numbers[maxIndex]) {
//         maxIndex = i;
//     }
// }

// console.log("Max value is " + numbers[maxIndex] + " at index " + maxIndex);

// given an IP address, find the index of the IP

// var ip = "11.2.55.89";
// var ipParts = ip.split(".");
// var ipIndex = 0;

// for (var i = 0; i < ipParts.length; i++) {
//     if (ipParts[i] === "55") {
//         ipIndex = i;
//         break;
//     }
// }

//another solution
// var ip = "11.2.55.89";
// var ipParts = ip.split(".");
// var ipIndex = ipParts.indexOf("55");

//another solution

// for (var i = 0; i < input.length; i++) {
//     if (input[i] === ".") {
//         output += "/";
//     } else {
//         output += input[i];
//     }
// }

// console.log(output);


// make the word reflects

// var username="mohamed amr";
// var reflectedUsername = "";

// for (var i = username.length - 1; i >= 0; i--) {
//     reflectedUsername += username[i];
// }

// console.log(reflectedUsername);


//you have an array give me a sum of that array

// var numbers = [16, 92, 23, 45, 45];
// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// console.log("Sum is: " + sum);


// dom

// var btn = document.getElementsByTagName("btn")
// var btn = document.querySelectorAll("div")


// var btn = document.getElementById("btn");
// var password = document.getElementById("password");

// var data = document.querySelector(".data");

// data.innerHTML = "<h1>Hello World</h1>"

// btn.onclick = function() {
//     if(password.type === "password"){
//         password.type = "text";
//         btn.innerText = "Hide Password";
//     } else {
//         password.type = "password";
//         btn.innerText = "Show Password";
//     }
// }


// task 2 make the password visible when the button is clicked and a counter that counts the number of alphabetic characters in the btn

// var btn = document.getElementById("btn");
// var password = document.getElementById("password");
// var counter = 0;

// btn.onclick = function() {
//     if(password.type === "password"){
//         password.type = "text";
//         btn.innerText = "Hide Password";
//     } else {
//         password.type = "password";
//         btn.innerText = "Show Password";
//     }
// }
// document.getElementById("counter").innerText = "Number of alphabetic characters: " + counter;

    
// password.onkeyup = function() {
//     counter = 0;
//     for(var i = 0; i < password.value.length; i++) {
//         var char = password.value[i];
//         if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
//             counter++;
//         }
//     }
//     document.getElementById("counter").innerText = "Number of alphabetic characters: " + counter;
// }

// password.onkeyup = function() {
    //     counter = 0;
    //     for(var i = 0; i < password.value.length; i++) {
    //         var char = password.value[i];
    //         if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
    //             counter++;
    //         }
    //     }
    //     console.log("Number of alphabetic characters: " + counter);
        
    // }

    // onKeyUp
    var text = document.querySelector("#textarea")
    var result = document.querySelector("#result")
    text.onkeyup = function(){
        // result.innerText = "count is : " + text.value.length
        // console.log(text.value.length)
        if(text.value.length > 10){
            // text.style.border = "2px solid red"
            // text.style.outline = "1px solid red"
            text.style.cssText ="border: 1px solid red; outline: 1px solid red;"
            text.classList.add("red");
        }
        else{
            // text.style.border = "2px solid green"
            // text.style.outline = "1px solid green"
            text.style.cssText ="border: 1px solid green; outline: 1px solid green;"
            text.classList.remove("red");
        }

        result.innerText = "count is : " + text.value.length
    }

    // when the number of alphabetic characters is less than 10 the textarea should be green else red

    // text.onkeyup = function() {
    //     var counter = 0;
    //     for(var i = 0; i < text.value.length; i++) {
    //         var char = text.value[i];
    //         if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
    //             counter++;
    //         }
    //     }
    //     if(counter < 10) {
    //         text.style.backgroundColor = "green";
    //     } else {
    //         text.style.backgroundColor = "red";
    //     }
    // }

    // task 4 when i click the button the photo should change to this photo photos/business-main-700x680.jpg

    // const images ={
    //     "business-2.jpg": "photos/business-2.jpg",
    //     "business-main-700x680.jpg": "photos/business-main-700x680.jpg"
    // }
    // let current = 0;
    // const slide = document.getElementById("slide");
    // const nextbtn = document.getElementById("changePhoto");

    var images = {
        "business-2.jpg": "photos/business-2.jpg",
        "business-main-700x680.jpg": "photos/business-main-700x680.jpg",
        "business-3.jpg": "photos/business-3.jpg",
        "img": "photos/img.jpg"
    };

    var cover = document.getElementById("cover");
    var next = document.getElementById("next");

    next.onclick = function() {
        // cover.src = images[index];
        // index++

        console.log(index%images.length);
        

    cover.src = images[index];
    index++;
    }