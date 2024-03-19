// TODO:  Challenge 1: Student Grade Generator
//
//Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:
//
//- A > 79
//- B - 60 to 79
//- C - 59 to 49
//- D - 40 to 49
//- E - less than 40.
const prompt = require('prompt-sync')();

//function to check grade
function  generateGrade(score) {
    let grade;
        //assign grades
        if (score > 79)
            {grade = 'A';}
        else if (score >=60 && score <=79)
            {grade =  'B';}
        else if (score <=59 && score >=49){
            grade = 'C';}
        else if(score <49 && score >=40)
            {grade = 'D';}
        else{
            grade = 'E';
        }          
    //displays the grade
    return (`Your grade is : ${grade}`);
}

//takes user input and returns grade
let grade = parseInt(prompt("Add your score: "))
console.log(generateGrade(grade));
