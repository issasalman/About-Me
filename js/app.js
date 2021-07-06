'use strict'

// let userName=prompt('What is your name?');
// alert('welcome ' +userName + ' Nice to meet you ^^' );


// let name1=prompt('Is my name Issa?');
// name1=name1.toLowerCase()

// if (name1==="yes" || name1==="y" ) {
//     console.log( name1+"  my name is Issa");
//     alert('true my name is Issa')
    
// } else {
//     alert('You are wrong my name is Issa')
    
// }



// let age=prompt('Is my age 25?');
// age=age.toLowerCase()

// if (age==="yes" || age==="y") {
//     console.log(age+"   my age is 25");
//     alert('true my age is 25')
    
// } else {
//     alert('You are wrong my age is 25')

    
// }

// let major=prompt('Am i an Engineer?');
// major=major.toLowerCase()
// if (major==="yes" || major==="y") {
//     console.log(major+" I am an Engineer");
//     alert('true I am an Engineer')
    
// } else {
//     alert('You are wrong I am engineer')

    
    
// }



// let car=prompt('Is my favourite car BMW??');
// car=car.toLowerCase()
// if (car==="yes" || car=== "y") {
//     console.log(car+" I like BMW So much");
//     alert('true I like BMW So much')
    
// } else {
//     alert('You are wrong I like BMW')

    
// }

// let travel=prompt('Do I like to visit Dubai?');
// travel=travel.toLowerCase()
// if (travel==="yes" || travel ==="y") {
//     console.log(travel+" I visited it last year");
//     alert('true I visited it last year')
    
// } else {
//     alert('You are wrong I like to visit Dubai')
    
// }


// alert('Bye Bye  ' +userName + ' Nice to meet you ^^' );







// for (let i = 3; i >-1; i--) {
//     let myNumber=prompt("Please guess a number between 1 and 10")
    
//     if (myNumber==='7') {
//         alert("Great job! u guessed the correct number ")
//         break;
//     } else if (myNumber<"7") {
//         alert("Its too low please try again  you have "+i+" attepmts remaining")
        
        
//     }
//     else{
//         alert("Its too high please try again  you have "+i+" attepmts remaining")
        
//     }
    
// }

// alert("The number is 7")
let car1=["bmw","ford","mercedes","kia"];
let car=prompt("Please guess which car I like the most")

for (let i = 0; i<6; i++) 
{
    
    for (let j = 0; j<car1.length; j++) 
    { 
    
     if (car === car1[j] || car === car1[1-j]||car === car1[2-j]|| car === car1[3-j])
     {
        alert("Great job! u guessed the correct car ")
        break;

       
        
    }
     else
       { 
        alert("Wrong Answer")
        car=prompt("Please guess which car I like the most")
    }
    
}
         
        break;
     


}
alert("helllooo")



