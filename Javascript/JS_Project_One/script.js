var fname = prompt("What is your first name?");
var lname = prompt("What is your last name?");
var age = prompt("What is your age?");
var height = prompt("How tall are you?");
var petName = prompt("What is your pet's name?");


// if (fname[0] === lname[0]) {
//   if (age > 20 && age < 30) {
//            if (height > 170) {
//         if (petName.slice(-1) === "y") {
//           console.log("Welcome Comrade");
//         } 
//       }
//      }
//     }
//     else{
//       console.log("Welcome");
//    }


if (fname[0] === lname[0] &&
    age > 20 && age < 30 &&
    height > 170 &&
    petName.slice(-1) === "y"){
   console.log("Welcome Comrade");
} 
  else{
    console.log("Welcome");
}
