import inquirer from "inquirer";

let userBalance:number = 10000;
let myPin:number = 1234;

let user = await inquirer.prompt([
    {
        type : "number",
        name : "pin",
        message : "please enter your pin: hint(1234)"
    }
]);
if(user.pin === myPin){
    console.log("your password is correct");
    
    let userOperation = await inquirer.prompt([
        {
            type : "list",
            name : "operation",
            message : "What operation you can do with your account!",
            choices : ["withdraw","currentBalance"]
        }
    ]);

    if(userOperation.operation === "withdraw"){
        let userWithdrw = await inquirer.prompt([
            {
                type : "number",
                name : "moneyWithdrw",
                message : "how much money you can withdraw from your account"
            }
        ]);
        userBalance -= userWithdrw.moneyWithdrw;
        console.log(`your remaining balance is ${userBalance}`);
    }else if(userOperation.operation === "currentBalance"){
        console.log(`your current balance is ${userBalance}`);
    }
}else{
    console.log("your password is incorrect! please try again");
}