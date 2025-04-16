// Primitive DataType
// 7 type: String ,Number,Boolean,null,undefined,Symbol, BigInt
// Reference Type(Non Primitive)
  //  Array,Objects,Functions,
  // const score = 100;
  // const scoreValue = 100.3

  // const id = Symbol('123')
  // const anotherID = Symbol('123');

  //   const myFunction =   function(){
  //   console.log("SKK");

  // }

  // console.log(myFunction());
  // console.log(typeof myFunction);

// Memory///
//Stack(Primitive), Heap(Non-Primitive)
//stack me copy milta hai
//Heap me ref milta hai
let myWork = "skk";

let anotherName = myWork;
anotherName = "vkk"
//console.log(myWork);
console.log(myWork);
console.log(anotherName);

  let userOne = {
      email : "sk@gmail.com",
      upi: "sk@upi"
  }
  let userTwo = userOne;

  userTwo.email = "vk@gmail.com"

  console.log(userOne.email);
  console.log(userTwo.email);