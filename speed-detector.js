// TODO: Challenge 2: Speed Detector
//
//Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
//For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

const prompt = require('prompt-sync')();

function detect(speed){
    //standard limit
   let limit = 70;
   //checks how many demerit points are there per 5km/h
   let difference = (speed-limit)/5
   let demerit = 0;
   //calculates total number of demerit points
    if(speed < limit){
        console.log("Ok")
    } else if (speed > limit){
            for(let i =1; i<=difference;i++){
                demerit++;
            }
            console.log(`Your demerit points are : ${demerit}.`)
    }
    //checks if demerit points are greater than 12
    if (demerit > 12){
        console.log("License suspended.")
    }

}

//takes user input and checks total number of demerit points
let input = prompt("Speed: ")
detect(input)

