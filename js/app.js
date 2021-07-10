'use strict'

let userName = prompt('What is your name?');
let score = 0
alert('welcome ' + userName + ' Nice to meet you ^^');


function Q1(){
let name1 = prompt('Is my name Issa?');
name1 = name1.toLowerCase()

if (name1 === "yes" || name1 === "y") {
    alert('true my name is Issa')
    score++
}
else if (name1 === "no" || name1 === "n") {
    alert('You are wrong my name is Issa')
}
else {
    alert('please anwser with yes or no')
}
}
Q1();


function Q2(){
let age = prompt('Is my age 25?');
age = age.toLowerCase()

if (age === "yes" || age === "y") {
    alert('true my age is 25')
    score++
} else if (age === "no" || age === "n") {
    alert('You are wrong my age is 25')
}
else {
    alert('please anwser with yes or no')


}
}
Q2();


function Q3(){
let major = prompt('Am i an Engineer?');
major = major.toLowerCase()
if (major === "yes" || major === "y") {
    alert('true I am an Engineer')
    score++
} else if (major === "no" || major === "n") {
    alert('You are wrong I am engineer')
}
else {
    alert('please anwser with yes or no')



}
}
Q3();


function Q4(){
let car0 = prompt('Is my favourite car BMW??');
car0 = car0.toLowerCase()
if (car0 === "yes" || car0 === "y") {
    alert('true I like BMW So much')
    score++
} else if (car0 === "no" || car0 === "n") {
    alert('You are wrong I like BMW')
}

else {
    alert('please anwser with yes or no')


}
}
Q4();

 
 function Q5(){
let travel = prompt('Do I like to visit Dubai?');
travel = travel.toLowerCase()
if (travel === "yes" || travel === "y") {
    alert('true I visited it last year')
    score++
}
else if (travel === "no" || travel === "n") {
    alert('You are wrong I like to visit Dubai')
}
else {
    alert('please anwser with yes or no')

}
}
Q5();

alert('Bye Bye  ' + userName + ' Nice to meet you ^^');





function Q6(){
let myNumber = ""
for (let i = 3; i > -1; i--) {
     myNumber = prompt("Please guess a number between 1 and 10")

    if (myNumber === '7') {
        alert("Great job! u guessed the correct number ")
        score++

        break;
    } else if (myNumber < "7") {
        alert("Its too low please try again  you have " + i + " attepmts remaining")


    }
    else {
        alert("Its too high please try again  you have " + i + " attepmts remaining")

    }
    if(i===0){
        alert("Your attempts ended  The number is 7")
    }
}
}
Q6();







function Q7(){
let car1 = ["bmw", "ford", "mercedes", "kia"];
let car = prompt("Please guess which car I like the most")
car = car.toLowerCase()
let test1 = false
for (let i = 5; i > -1; i--) {
    
    for (let j = 0; j < car1.length; j++) {
        if (car === car1[j]     ) {
            alert("Great job! u guessed the correct car ")
            test1 = true
            score++
            break;
        }
    }

    if (test1 === true) {
        break;

    }else{
        car = prompt("Wrong Please guess more car names you have " + i + " attepmts remaining")
        car = car.toLowerCase()
    }
    if(i===0){
    alert("The correct asnwers are:  "+car1)
}
}

}
Q7();

alert("Your  score is "+score+ "/7")




