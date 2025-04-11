const accountId = 1445656; // no change of the Value
let accountEmail = "keshav@gmail.com";
var accountPassword = "12345"
accountCity = "Surat";

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);

/*
Prefer not to use var
because of issue in block scope and functional scope

{  scope  }
*/
let aaa;

//aaa is undefined