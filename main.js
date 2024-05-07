#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\n\t\t_______________________________");
console.log("\t\t\t ATM Machine");
console.log("\t\t_______________________________\n\n");
let myBalance = 10000;
let pinCode = 9049;
const answer = await inquirer.prompt([
    {
        name: "pinCode",
        message: "Enter Your Pin Number",
        type: "number",
    },
]);
if (answer.pinCode == pinCode) {
    console.log("Correct Pin Code!!\n You Further may Proceed.......\n");
    let ans = await inquirer.prompt([
        {
            name: "operation",
            message: "Choose Your Option\nWhat Do you Want",
            type: "list",
            choices: ["WithDraw", "CheckBalance", "FastPayment"],
        },
    ]);
    if (ans.operation == "CheckBalance") {
        console.log("\n______________________________________");
        console.log("   Your Total Balance is : " + myBalance);
        console.log("______________________________________");
    }
    if (ans.operation == "FastPayment") {
        let amt = await inquirer.prompt([
            {
                name: "amount",
                message: "How much money you want to withdraw\nEnter Your Amount =  ",
                type: "list",
                choices: [100, 500, 1000, 5000]
            },
        ]);
        let totalAmount = myBalance - amt.amount;
        console.log("__________________________________________________");
        console.log(`Your remaining Balance is =  ${totalAmount}`);
        console.log("__________________________________________________");
    }
    if (ans.operation == "WithDraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "How much money you want to withdraw\nEnter Your Amount =  ",
                type: "number",
            },
        ]);
        if (amountAns.amount < myBalance) {
            let totalAmount = myBalance - amountAns.amount;
            console.log("__________________________________________________");
            console.log(`Your remaining Balance is =  ${totalAmount}`);
            console.log("__________________________________________________");
        }
        else {
            console.log("__________________________________________________");
            console.log(`\tInsufficient Balance`);
            console.log("__________________________________________________");
        }
    }
}
else {
    console.log("__________________________________");
    console.log("      Incorrect Pin Number");
    console.log("__________________________________");
}
