const accountId = 14402
// we use const key word to declare constant variable.
let accountEmail = "vishwas@gmail.com"
// let is proper key word to declare variable than var key word.
var accountPassword = "login@123"
//we should not use var key word for declaring variable beacuse it allows the same variable to declared multiple times it will leads to accidental overwrites.
accountCity="Nanded"
// we can define variable without useing key word but we should not use without declaring key word to variable.
let accountStatus;

console.log(accountId);
// we use console.log(); command to print output on the terminal

console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus]);
// we use console.table([]); command to print output in tabler form on terminal

