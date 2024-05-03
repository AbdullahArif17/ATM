import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js";
import chalk from 'chalk';

let myBalance =  10000;

let pinCode = 1234;

let pinAnswer = await inquirer.prompt(
    [
    {
 name: "pin",
 message: "Enter your pin",
 type: "number"
    }
]
);

if(pinAnswer.pin === pinCode){
    console.log(chalk.green('\t Correct pin code!'))
    console.log(chalk.greenBright('\t Your current balance is :' + myBalance ))

    let operationAns = await inquirer.prompt(
        [
            {
                name: 'operation',
                message: 'Please select an option',
                type: "list",
                choices: ['Withdraw', 'Check Balance', 'Fast Cash']
            }
        ]
    );
    
    if(operationAns.operation === 'Withdraw'){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:'amount',
                    message:'Enter your amount',
                    type: 'number'
                }
            ]
        );
    if(amountAns.amount <= myBalance){
       let newBalance = myBalance -= amountAns.amount 
        console.log(chalk.green('Your remaining balance is: ' +  newBalance));
    }else{
        console.log(chalk.red('ERROR, Enter valid amount please'))
    }
    
    }
else if(operationAns.operation === 'Check Balance'){
    console.log(chalk.green('Your account balance is:  ' +  myBalance))
}
else if(operationAns.operation === 'Fast Cash'){
    let fastCash = await inquirer.prompt(
        [
            {
               name:'fast',
               message:'Select Amount',
               type: "list",
               choices: [1000, 2000 , 5000 , 10000]
            }
        ]
    );
    myBalance -= fastCash.fast
    console.log(chalk.green(`Your remaining balance is: ${myBalance}`));

}
}else{
    console.log(chalk.redBright('Not vaild pin code'))
};



