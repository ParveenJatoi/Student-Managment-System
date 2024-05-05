#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber:number=Math.floor(  1000+Math.random()*90000 )
let myBalance:number=0

const answer= await inquirer.prompt([
    {
     name:"students",
     type:"input",
     message:"Enter the student name",
     validate:function(value){
        if (value.trim() !==""){
            return true;
        }
        return "Please enter a non empty value"
     }


},
{
    name:"courses",
    type:"list",
    message:"Select the course to enrolled",
    choices:["HTML","CSS","JAVASCRIPT","TYPESCRIPT","PYTHON"]
        
    },

  

]);

const tutionFee:{[key:string]:number}={
    "HTML":2000,
    "CSS" :2500,
    "JAVASCRIPT":3000,
    "TYPESCRIPT":4000,
    "PYTHON"    :5000,

    
};

console.log(`\n Course Fees: ${tutionFee[answer.courses]}`);
console.log(`Balance:${myBalance}`);


let paymentType= await inquirer.prompt([
    {
        name:"payment",
        type:"list",
        message:"Select payment method",
        choices:["Bank Transfer","Easy Paisa","Cash"]
    },
    {
        name:"amount",
        type:"input",
        message:"Transfer Money",
        validate:function(value){
            if (value.trim() !==""){
                return true;
            }
            return "Please enter a non empty value"
         }
    
    }


])
console.log(`\nYou select payment method ${paymentType.payment}.\n`);

const tutionFees = tutionFee[answer.courses];
const paymentAmount=parseFloat(paymentType.amount)

if (tutionFees ===paymentAmount) {

    console.log(`Congratulations, You have successfully enrolled in ${answer.courses}.\n`);

    let ans =await inquirer.prompt([
        {
            name:"select",
            type:"list",
            message:"What would you like to do next",
            choices:["view status","exist"]
        }
    ])
    if (ans.select==="view status"){
        console.log("\n*************Status***********\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student Id:${randomNumber}`);
        console.log(`Course:${answer.courses}`);
        console.log(`Tution Fee Paid:${paymentAmount}`);
        console.log(`Balance:${myBalance += paymentAmount}`);
        
         }else{
            console.log("\n Exiting Student Management System");
            
         }
    
}else{
    console.log("Invalid Amount for this Course");
    
}