//  ➡️ This is 1st code  [Understanding to Print the value on Screen]
// console.log("Hello There Sam here");

//  ➡️ This is 2nd code [Understanding var let and const]
// let firstName = 'Sambhav'
// let age = 20
// let isPursuiningDegree = false
// console.log("This persons name is " + firstName + " and thier age is " + age + " and pursuining Degree " + isPursuiningDegree)

//  ➡️ This is 3rd code [Understanding if else statement]
// let firstName = "Sambhav"
// let isPursuiningDegree = false
// let age = 20

// if (isPursuiningDegree == true) {
//     console.log(firstName + " is pursuining Degree" )

// }else(
//     console.log(firstName + " is not pursuining Degree" )
// )

//  ➡️ This is 4th code [Understanding For Loops in JS]
// let answer = 0

// for(let i = 0; i<=100; i++ ){
//     answer = answer + i;
// }

// console.log(answer);

//  ➡️ This is 5th code [Understanding Arrays in JS]
// const ages = [21,22, 23, 24, 25, 26, 27, 28, 29]
// for (let i = 0; i< ages.length; i++){
//     if (ages[i] % 2 == 0){
//         console.log(ages[i]);
//     }
// }

//  ➡️ This is 6th code [Understanding Objects in JS]
// const personArray = ["Iron Man", "Captain America", "Black Widow"]
// const genderArray = ["Male", "Male", "Female"]

// for (let i = 0; i<personArray.length; i++) {
//     if (genderArray[i]  == "Male"){
//         console.log(personArray[i]);
//     }
// } This can be done but we have better code instead of this!

// const allUsers = [{
//     firstName: "Iron Man",
//     gender: "Male"
// },
// {
//     firstName: "Captain America",
//     gender: "Male"
// },
// {
//     firstName: "Black Widow",
//     gender: "Female"
// }
// ]
// for (let i=0; i<allUsers.length; i++){
//     if (allUsers[i].gender == "Male"){
//         console.log(allUsers[i].firstName);
//     }
// }

//  ➡️ This is 7th code [Understanding Functions in JS]
// function sum(a,b){
//     //do things with the input and return the output
//     return a+b;
// }
// const value = sum(1,3)
// const value2 = sum(4,3)
// console.log(value);
// console.log(value2);


//  ➡️ This is 8th code [Understanding Function CallBack in JS]
// function sum(num1, num2, fnToCall){
//     let result = num1 + num2
//     fnToCall(result)
// }

// function displayResult (data){
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data){
//     console.log("Sum's result is : "+ data);
// }

// // You are only allowed to call one funciton after this
// // How will you displayResult of a sum
// const ans = sum(1,2 , displayResult)
// console.log(ans);

// function calculatedArithmatic(a, b, callBackFunc){
//     const ans = callBackFunc(a,b)
//     return ans
// }
// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }

// const value = calculatedArithmatic(1,2, sum)
// console.log(value);

// //Passing Function inside a function is called callback.