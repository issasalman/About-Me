'use strict'

let userName=prompt('What is your name?');
alert('welcome ' +userName + ' Nice to meet you ^^' );


let name1=prompt('Is my name Issa?');
name1=name1.toLowerCase()

if (name1==="yes" || name1==="y" ) {
    console.log( name1+"  my name is Issa");
    alert('true my name is Issa')
    
} else {
    alert('You are wrong my name is Issa')
    
}



let age=prompt('Is my age 25?');
age=age.toLowerCase()

if (age==="yes" || age==="y") {
    console.log(age+"   my age is 25");
    alert('true my age is 25')
    
} else {
    alert('You are wrong my age is 25')

    
}

let major=prompt('Am i an Engineer?');
major=major.toLowerCase()
if (major==="yes" || major==="y") {
    console.log(major+" I am an Engineer");
    alert('true I am an Engineer')
    
} else {
    alert('You are wrong I am engineer')

    
    
}



let car=prompt('Is my favourite car BMW??');
car=car.toLowerCase()
if (car==="yes" || car=== "y") {
    console.log(car+" I like BMW So much");
    alert('true I like BMW So much')
    
} else {
    alert('You are wrong I like BMW')

    
}

let travel=prompt('Do I like to visit Dubai?');
travel=travel.toLowerCase()
if (travel==="yes" || travel ==="y") {
    console.log(travel+" I visited it last year");
    alert('true I visited it last year')
    
} else {
    alert('You are wrong I like to visit Dubai')
    
}


alert('Bye Bye  ' +userName + ' Nice to meet you ^^' );
