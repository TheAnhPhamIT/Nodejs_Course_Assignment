chalk = require('chalk');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


readline.question('What\'s your name? ', name => {
    readline.question('what\'s your year of birth? ', year => {
        readline.question('what\'s your home town? ', home =>{
            let d = new Date();
            let now = d.getFullYear();
            let age = now - year;
            console.log('Thank you! Hello ' + chalk.red(`${name}`) + ', so you are '+ chalk.blue(`${age}`) + ' year old and from ' + chalk.green(`${home}`));
            readline.close();
        });
    });
});



/*
let question = (quest, type) =>  {
    return new Promise((resolve,reject) => {
        readline.question(quest,data => {
            if(typeof data != type){
                readline.close();
                return reject(new Error("ban phai nhap dinh dang " + type));
            } 
            resolve(data);
            readline.close();
        });
    })
}


question('what\'s your name?','string')
.then(data => console.log(data) ,err => console.log(err+''));

question('what\'s your year born?','number')
.then(data => console.log(data), err => console.log(err+''));
*/

