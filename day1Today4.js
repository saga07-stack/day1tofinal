/* function max (number){
if(number[0]>number[1]){
   console.log(number[0]);
}else{
    console.log(number[2]);
}
}

function e (input){
    if(input%5==0 && input%2==0){
        console.log(false);

    }else if (input%5==0){
        console.log(true);

    }else if (input%2==0){
        console.log(true);
    }else{
        console.log("invalid");
    }

}
function gradeChecker (grade){
   if(isNaN.grade){
     console.log("you can only enter numbers")
   }
   else if (grade>=90) {
        console.log("A+");
    } else if (grade>=80){
        console.log("b+")
    }else if (grade>=70){
        console.log("b");
    } else if (grade>=60){
        console.log("c+");
    } else if (grade >=50){
        console.log("c")
    } else if (grade>=40){
        console.log("d");
    }else{
        console.log("invalid input")
    }
}

let a = 10;
let b = 5;
let c = 8;
if(a+b>c && b+c>a){
    if (a==b && b==c){
    console.log("its an equilateral triangle");
    }else if (a==b || b==c) {
        console.log("its an isosceles triangle");

    }
else {
    console.log("its an scalene triangle");
}
} else {
    console.log("its not an triangle");
};

 
function garde (score){
 score >=90 ? grade = 'A ':
 score>=75 ? grade = " B ":
 score>=60 ? grade = " C ":
 garde = "F ";
};




  const input = 40;
    for (let i = 0; i <= input; i++) {
        
        if(i%3==0 && i%5==0){
         console.log("fizzBuzz");
        }else if (i%5==0){
            console.log("Buzz");
        }else if (i%3==0){
            console.log("Fizz");
        
        }else{
            console.log(i);
        };
        
 
}
*/
 
//     let input = 5;
//    let row = "";
//    let inner = "*";
//    for(let i =0; i<input; i++){
//     row += "*";
//     console.log(row);
//    }
   
//   let input = 12;
//    let x = input.toString();
   
//     let a = x.split("");
//     a.push("3");
//   let c =  a.pop();
//   c += a.pop();
//   c += a.pop();
//    console.log(c);
    
  /* function reverse (input){
   let  z = input.toString().split("") ;
   let v = [];
     while (z.length>0) {
        let f = z.pop()
         v.push(f)
     
     }
     console.log(v.join(""))
   }*/
//   let input = "MADaM".toLowerCase().split("");
  
//   let r = [];
  
//   for(let i = input.length-1; i>=0; i--){
   
//    r.push(input[i]);

// console.log(r);
//   }
//   let orginal = input.join("");
//   let reverse = r.join("");
//  if(orginal == reverse ){
//     console.log(true);
//  }else{
//     console.log(false);
//  };

// let  a = (1,2,3);
// let b = 0;
// if(a[0]>a[1]){
// console.log (a[1]);
// }else{
//     console.log(a[2]);
// }

// let z = [1,2,3,4,5];
// z.unshift(0);
// z.push(6);
// let res1 = z.reverse();
// console.log(z);


// let arr = [1,2,3,4,5]; //[6,5,4,3,2,1,0];
// arr.push(6);
// arr.unshift(0);
// let result =[];
// for(let x = arr.length; x>0; x--){
//  let a = arr.pop();
//     result.push(a);
    
// }
// console.log(result);


// // challenge2 
// let arr1 = [1,2,3,4,5];
// let arr2 = [5,6,7,8,9,10];
// // result = [12345678910]
// arr2.shift();
// //  let res = arr2.slice(0,1);
// let res = [...arr1 ,...arr2];
// console.log(res);

//  let class3 = {name:"sagar" , class:"12", age:"22"}
//  class3.email = "sagarmatha603@gmail.com";
//  class3["rollNo"]= 30;
//  console.log( class3);


// function square (number){
//   let new1 =   number*number;
//     return new1;
// }
// let number = [1,2,3,4,5].filter(n => n % 2 === 0);
// console.log(number);
// let x = 0;
// for (let i=0; i<=100; i++){
//   x =  x +i;
  
// }
  //console.log(x);
//   let x = 1;
 
// for (let i=1; i<=10; i++){
// console.log(`3 X ${i} = ${3*i}` )
// }
//   //console.log(x);

// const input = "airplane";
// for ( let i= input.length -1; i>=0; i--){
//      console.log(input[i]); 
// }
// let result = 1;
// for (let i = 12; i>0; i--){
// result = i*result;
// }
// console.log(result);
//  const num = [1,23,3,45,6];
//  let res = 0;
//  for(let i = 0; i<num.length; i++){
//  if(res<num[i]){
//     res = num[i];
//  }else;
//  }
//  console.log(res);

// let str = "sagar";
// for(let i =str.length-1; i>=0; i--){
//     console.log(str[i]);
// for(let i=1; i<=50; i++){
//     if(i%3 == 0){
//         console.log(i);
//     }else;
// }
// let result= 1;
// for(let i=1; i<=5; i++){
// result *= i;
// // console.log(result);
// }
// console.log(result);
//  let strings = "sagar";
//  for(let i = strings.length-1;i>=0; i--){
//     console.log(strings[i]);
//  }
// for (let i=0; i<=50; i++){
//     if(i %3 == 0){
//         console.log(i)
//     }else;
// }
// let result = 1;
// for(let i = 5; i>1; i--){
//  result *= i; 
// }
//  console.log(result);
// let sum = 0;
// for(let i=1; i<=100; i++){
//     if(i%2==0){
//        sum += i;
//     }else;
// }
// console.log(sum);
// let result = 0;
//  for (let i = 1; i<100; i++){
//     if(i % 7 == 0){
//         result++;

//     }
//  }
//  console.log(result);
//  let arry = [1,2,3,4,5,25,2,13];
//  let largest = 0;
//  for(let i =0; i<=arry.length; i++){
//     if(arry[i] > largest ){
//         largest = arry[i];
//     }
//  }
// console.log(largest);

// let result = 1;
// for(let i = 2; i<20; i+=2){
//   result = result *2;
//   console.log(result);
// }
// for (let i = 15; i<=25; i++){
//     console.log(i);
// }
// for (let i = 11; i<31; i++){
//     if (i%2== 1){
//         console.log(i);
//     }
// }
// for(let i = 40; i>=20; i--){
//     console.log(i);
// }
// for (let i = 6; i<=30; i++){
//  console.log(`3 X ${i} = ${3 * i }`);
// }
// for (let i = 14; i<=70; i++){
//     console.log(`7 X ${i} = ${7*i}`);
// }
// for(let i = 0; i<=20; i++){
//     if(i %4== 0){

//     }else{
//         console.log(i);
//     }
// }
// for(let i = 1; i<=15; i++){
// console.log(i);
// }
// for (let i =50; i>=30; i--){
//     console.log(i);
// }
//  for (let i = 1; i<=25; i+= 5){
//   console.log(i);
//  }
// let sum = 0;
// for(let i = 50; i<=100; i++){
//  sum +=  i;
// };
// console.log(sum);
// result = 0;
// for(let i = 1; i<=6; i++){
// result *= i; 
// }
// console.log(result);
// let result = 1;
// for (let i = 1; i<=7; i++){
//     result = i * i*i;
//     console.log(result);
// }
// let result = 0;
// for(let i=1; i<=50; i++){
//     if(i%2 == 1){
//         result += i;
//     }else;
// }
// console.log(result);
// let sum = 0;
// for(let i = 10; i<=100; i++){
//     if(i%5==0){
//         sum += i;
//     }
// }
// console.log(sum);
// let average = 0;
// let num =0;
// for(let i=1; i<=20; i++){
//     average += i;

// }
// num = average/20;
// console.log(num);
// let result = 0;
// for(let i = 1; i<=10; i++){
//     result += i*i;
// }
// console.log(result);
//  let result = 1;
//  for(let i = 1; i<=8; i++){
//     result *= 3;
//     console.log(result);
//  }
// let str = "htesasaeioudsa".toLowerCase();
// //let count = str.split("");
// let count1 = 0;
// for(let i of str){
//         if(i ==="a" || i ==="e" || i ==="i" || i==="o" || i==="u"){
//             count1++;
        
//         }
// }
// console.log(count1);

// let input = "dsfhkjla;oaioeruoeasj";
// let vowel = "aeiou";
// let count = 0;
// for(let i of input){
//     if(vowel.includes(i)){
//         count++;
//     }
// }
// console.log(count);
// let input = "sagar";
// for(let i = 0; i<input.length; i++){
//     console.log(input[i]);
// }
//  let str ="sagarSaGaR";
//  let count = 0;
//  for(let i of str){
//     if (i >='A' && i<='Z'){
//         count++;
//     }
//  }
//  console.log(count);
// let str = "sagar";
// let arr = "";
// for(let i=0; i<str.length; i++){
//     arr += str[i]+str[i];
  
    
// }
//   console.log(arr);
// ARRAY AND DATA PROCESSING
//  Find and print the smallest number in a given array
// let str = [11,23,4,5,6,7];
// let lowest = str[0];
// for (let i = 0; i<str.length; i++){
//     if(str[i]<lowest){
//         lowest = str[i];
//     }
// }
// console.log(lowest);
// let str = "asfhkjlasdfoiqw;sdoiiuyr";
// let vowel = "aeiou";
// let count =0;
// for(let i of str){
//     if(vowel.includes(i)){
//         count++;
//     }
// }
// console.log(count);
// Count how many positive and negative numbers are in an array
// let a = [1,2,3,4,5,-6,-7,3,-2,-4];
// let positive = 0;
// let negative = 0;
// for(let i=0; i<a.length; i++){
//     if (a[i]>=1){
//         positive++;
//     }else{
//         negative++;
//     }
// }
// console.log("there are "+ positive+"positive number in array");
// console.log("there are "+negative+ " negative numbers in array"); 



//Print all elements at even indices in an array
// let a = [1,2,3,6,4,5,6,43,7,5,8];
//  let even = [];
//  for(let i=0; i<a.length; i++){
//     if(a[i]%2== 0){
//         even.push(a[i]);
//     }
//  }
//  console.log(even);

// Find and print the second largest number in an array

// function basic
// function  greet () {
//     console.log("good evening")
// }
// function sub (num1,num2){
//     console.log(num1-num2);
// }
// function mult (num1,num2){
//     return num1*num2;
// }
// console.log(mult(5,5));
// // const result = mult(5,5);
// function greet (name){
//     console.log(`good evening ${name}` );
// }
// greet("saga");

// function fTd (f){
//    return (f-32)/1.8;

// }
//  const s = fTd(10);
// console.log(s);

// function interest (principle,time,rate){
//     return principle*time*rate/100;
// }
//  const outputInterest = interest(2000,10,12);
//  console.log(outputInterest);
// function findWeight (){
//     const age = 45;
//     const weight = 55;
//     console.log(`your age is  ${age} and weight is ${weight}  `);
// }
// findWeight();
// function findSquare(number){
//     const square = number*number;
//     console.log(square);
    //   return square;
// }
// findSquare(5);
// function findTrueOrFalse (number){
//     if(number%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// findTrueOrFalse (11);

// const findTheavrage = (sum1,sum2,sum3)=>{
//    return (sum1+sum2+sum3 ) /findTheavrage.length;
// }
// console.log(findTheavrage(10,20,30));
// const input = [1,2,3,4,1,44,3,22,22,25];

// let highest =input[0];
// let secondHighest = 0;
// for(let i = 1; i<input.length; i++){
//     if(input[i]>highest){
//         secondHighest = input.pop[i];
//     }else;
// }
// // let input1 = input.toString();

// console.log(secondHighest);
// // console.log(highest);


//  using arrow function ;
//  const areaOfRectangle = (length, breadth) => {
//  return length*breadth;
//  }
//  console.log(areaOfRectangle(10,20));

// const areaOfCircle = (radius)=>{
//  return 3.14 *radius;
// }
// console.log(areaOfCircle(10));


// const celsiusToFahrenheit = (celsius)=>{
//     return (celsius*9/5)+32;
// }
// console.log(celsiusToFahrenheit(36));

//  const greeting = (yourname,age)=>{
//     return ` Hi ${yourname} your age is ${age}.`;
//  }
//  console.log(greeting("sagar",20));

// const numberChecker = (input) =>{
//     if(input%5==0){
//         return true;
//     }else {
//         return false;
//     }
// } 
// console.log(numberChecker(20));

// const largestNumber = (input1, input2)=>{
//  if(input1<input2){
//     return input2;
//  }else{
//     return input1;
//  }
// }
// console.log(largestNumber(20,10));

// const largesetNumber = (input1, input2) => input1<input2 ? `${input2}`:`${input1}`; 
// console.log(largesetNumber(10,30));
// const cubeaOfNumber = (input) => {
//     return input**3;
// }
// console.log(cubeaOfNumber(3));
// const odd = (input) => input%2 == 0 ? 'odd':'even'; 
// console.log(odd(21));
// let positive = 0;
// const absolute  = (input) => {
//  if (input< 0){
//  return    -input;
//  }else if (input > 0){
//     return input
//  };
// }
//  console.log(absolute(-10));
// Make an arrow function that adds three numbers.
// const addNumbers = (one,two,three) => {
//     return one+two+three;
// }
// console.log(addNumbers(1,2,3));
// Write a function that reverses any string passed to it.
// let country = "nepali";
// let age = 20;
// if (country == "nepal " && age >= 16){
//     console.log("you can get citizenship");
// }else if (){
//     console.log(`you have to wait until`)
// }

//  let status = "VIP";
//  let property = 500000000;
//  if(status == "VIP"|| property>= 5000000){
//     console.log("you can get visa");
//  }else {
//     console.log("sorry you can't get ");
//  }

//  let gender = "female";
//  let age = 18;
//  if(gender == "female" || age <=18){
//     console.log("You can get a discount");
//  }else {
//     console.log("sorry");
//  }
 // let gender = "female";
//  let age = 18;
//  if(gender == "female" && age <=18){
//     console.log("You can get a discount");
//  }else if (gender == "female"){
//     console.log("sorry");
//  }
// Check if a number is divisible by 5.
// let number = 30;
// if(number %5 ==0 ){
//     console.log("it is ");
// }else {
//     console.log("can't divisible by 5 ");
// }
// Check if a student passed or failed (pass mark 40).
// let mark = 90;
// if (mark >=90){
//     console.log("congrats nigga you got a good mark");
// }else if (mark >=80){
//     console.log("you Can Get More If you push hard nigga ");
// }else if (mark >=70){
//     console.log("You better focus in book more then ass ");
// }else if (mark >=60){
//     console.log("you  have a good luck nigga");
// }else  if (mark >= 50){
//     console.log("you have to repeat this course in this vaccation ");

// }else if (mark >= 40){
//     console.log("you better join tuttion class and work hard ");
// }else {
//     console.log("You have to repeat this year again ");
// }

// Check if a character is a vowel or consonant.


//  let vowel = " a,e,i,o,u";
//  let input = "a"
//   for ( let i = 0; i<input.length; i++ ){
//     if (vowel[i]  === input[i] ){
//         console.log("vowel");
//     }else{
//         console.log("not");
//     }
//   }
// ternary  practice 

//    const age = 20;
//    const ageChecker = age >= 18 ? " Yes you can ": " No you cant";
//    console.log(ageChecker);
// Check if a number is positive or negative.
//  const number = -1;
//  const numberChecker = number <0 ? " Negative " : " postive ";
//  console.log(numberChecker); 

// Check if a number is odd or even.
// const num = 21;
// const numberChecker = num %2 == 0 ? " even " : " odd ";
// console.log(numberChecker);

// Check if a user has a premium account or not
// const isPremium = false;
// const accountChecker = isPremium == true ? " Your account is premium  " : " sorry your account is normal ";
// console.log(accountChecker);
// Return "Pass" if score ≥ 40, otherwise "Fail".
// const result = 40;
// const resultChecker = result >= 40 ?  " pass " : " fail " ;
// console.log(resultChecker);

// Check if a string is empty or not.
// const strings = "";
// const stringChecker = strings == "" ? "there is nothing " : strings;
// console.log(stringChecker);

// Set a discount based on price (price > 1000 ? 10% discount : 5% discount).
// const totalAmount = 1000;
//  const shopping = totalAmount >=1000 ? `you got 10% discount total amount is ${totalAmount * 0.1}  `    : `You got 5% discount ${totalAmount * 0.05}`;  ;
//  console.log(shopping);

// Show “In Stock” or “Out of Stock” based on quantity.
// const quantity = 10;
// const stockChecker = quantity>0 ? "In stock " : " out of stock ";
// console.log(stockChecker);
// Return "Login Successful" if username and password match, else "Access Denied".
// const userName = "sagar";
// const password = "sagar12";
// const login = userName === "sagar" && password === "sagar1" ? " login sucessfully " : " Access denied ";
// console.log(login);

//  NAsted ternary operator 
// Check if temperature is hot, cold, or normal using nested ternary.
//   const temp = 25;
//    const tempChecker = temp >= 30 ? "very hot " : temp >=15 ? "humidity " : temp >=5 ? " cold " : " freezing ";
//    console.log(tempChecker);

// Return good morning, afternoon or evening according to the time. 
// const time = 10;
// const timeChecker = time >= 5 ? " Good Night " : time >= 10 ? " Good Morning " : time >=17 ? " Good Afternoon " : time >=20 ? " Good Evening " : time >=24 ? " Good Night " : "invalid input ";
// console.log(timeChecker);
 
//  Make the grading system of Nepal with nested ternary.

// const mask = 20;
// const resultChecker = mask>=90 ? " A+ " : mask >=90 ? " A ":  mask  >=80  ? " B+ " : mask >=70 ? " B " : mask>=60 ? " C+ " : mask >=50 ? " C " : mask >= 40 ? "D+ " : " fail ";
//  console.log(resultChecker);
 
// const isLogged = true;
// const loggin = isLogged == true ? "Login sucessful " : " Please login again ";
// console.log(loggin);
//  const mode = false;
//  const mode1 = mode ? "Dark mode " : " light mode ";
//  console.log(mode1); 

// const comment = "Nice video ";
// const cmt = "Nice video "
// const commentChecker = cmt === comment ?  : " no comment ";
// console.log(commentChecker) 
//json
 
// const x = `hello`
// //js object notation
// const obj = `{
//    "name": "hello",
//     "age": 20,
// "boolean":true
// }`
// const obj2 = {
//     "name": "hello",
//     "age": 20,
 
// }
// const j = JSON.stringify(obj2) //json
// const jobj = JSON.parse(j)
// //json string . use garna namilney
 
//  const ob1 = JSON.parse("")
// console.log(jobj.age)
// console.log(obj2.name);
// console.log(typeof j);
 
// //nepal json(give and take)   china
 
// const objJson = {
//     "name": "hello",
//     "age": 20
// }
 
 
// async function getFl() { 
//     const hello = await fetch("https://api.github.com/users/amanchaudary")
//     const data = await hello.json()
//     return data.avatar_url;
// }
// getFl().then(a => document.getElementById("aman").src = a
// )

// let money = 1000;
//  let money2 = money;
//  money2 = 2000;
//  console.log(money);
//  console.log(money2);
//   const student1 = { name: "sagar"};
//   const student2 = student1;
//   student2.name = "sharma";
//   console.log(student1.name);
//   console.log(student2.name);
// const admin = "s";
// const user = "u";
// const guest = "g";
// const 
// let z = 5;
// for (let i= 1; i<=10; i++){
//     console.log(` 5 * ${i} = ${5*i} `);
// }
// for (let i = 1; i<=10; i++){
//     console.log("table of "+i)
//     for(let j =1; j<=10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);

//     }
// }

// for (let i = 1; i<=5; i++){
//    let add = '';
//     for(let j =1; j<=i; j++){
//       add  += " ";
//       if(add.length == 3 ||add.length == 4 ){
//         add += "*";
//       }else{
//       add += "**";
//       }
//     }
//     console.log(add);
// }
//  document.getElementById("button").addEventListener("hover", function(){
//     document.getElementById("button").innerHTML= 1
//  });

// some function with arrow function only ;
// Create an arrow function that returns "Good Morning".
// const greet = () => {
//     return "good morning ";
// }
// console.log(greet());


// Create an arrow function that returns your name.
// const yourName = "";
// const name = (yourName) => {
//     return `Good Morning ${yourName}`;
// }

// console.log(name("lamo"));

// Create an arrow function that adds two numbers.
// const addingTwoNumber = (one,two) => {
//     return `${one}+${two} = ${one+two}`
// }

// console.log(addingTwoNumber(12, 13));

// Create an arrow function that multiplies two numbers.
// const multiplies = (one,two) => {
//     return `${one} + ${two} * = ${one*two}`;
// };

// console.log(multiplies(12,10));

//Create an arrow function that calculates the square of a number.
// const square = (one) => {
//     return `square of a number of ${one} is ${one*one}`;
// };

// console.log(square(10));
// Create an arrow function that returns the first character of a string.
// const strings = "";
// const strng = (strings) => {
//     return ` the first character of a string of ${strings} is ${strings[0]}`

// };

// console.log(strng("sagar"));

// Create an arrow function that returns the last character of a string.
// const strings = "";
// const lastCharacter = (strings) => {
//     return `the last character of a string of ${strings} is ${strings[strings.length-1]}`;
// };

// console.log(lastCharacter("sagar"));

// Create an arrow function that converts minutes to seconds.
// const min = 0;
// const sec = 60;
// const minuteConverter = (min)=>{
//     return `the seconds of ${min}min is ${min*sec}sec`;
// }
// console.log(minuteConverter(20));

// Create an arrow function that calculates the volume of a cuboid (l * b * h).
// const volumeOfCuboid = (length,breath,height)=>{
//     return ` the volume of a cuboid is ${length*breath*height}`;
// };
// console.log(volumeOfCuboid(12,22,12));

// Create an arrow function that returns a greeting with the user's name.

// const greeting = (name) => {
//     return`Good morning ${name}`;
// };
// console.log(greeting("sagar"));

// Create an arrow function that checks if a number is greater than 100.
// const input = 220;
// const numChecker = input>100 ? "greater" : "notgreater";

// console.log(numChecker);
// const input = 110;
// const numChecker = input % 2 == 0 ? "Even" : "Odd";

// console.log(numChecker);

// Create an arrow function that returns the length of a string.
// const string = "sagar";
// let count = 0;
// const lengthOfaString = (string) =>{
// for(let i = 0; i<string.length; i++){
//     count++;
// }
// return ` the length of a ${string} is ${count}`;
// } ;

// console.log(lengthOfaString("sagar"));

// Create an arrow function that joins two words with a space.
// const nameConnecter = (a,b) => {
//     return ` ${a} ${b}`;
// };
// console.log(nameConnecter("sagar","sharma"));
 
// - Create an arrow function that adds three numbers.
// const addNumbers = (a,b,c)=>{
//     return `${a+b+c}`;
// };
// console.log(addNumbers(10,20,30));
        
// Create an arrow function that returns the type of the input.
// const a = "sagar";
// function lengths () {
// return `${a.length}`
// } 
// console.log(lengths());
// You bought 5kg of mangoes at rate of Rs. 150 per kg. Then show it in format - You bought 5 kg mangoes with total price Rs. 750 while price per kg is Rs. 150. Show fruit, kg, rate and total price as variables in template string.
// const fruit = "mango";
// const kg = 5;
// const totalPrice = perKgOfMango * kg;
// const perKgOfMango = 150;
// console.log(`you bought 5kg of mango with total price Rs. ${150*5} while price per kg is Rs.${perKgOfMango} `);
// event - React Class, Starting date - 5th August, mode - Online zoom, time 2 hours. You need to show it in format. You are invited to the {event} which starts from {starting date}. It will be {mode} class {time} daily.

//  const event = "React class "
//  const starting_date = "5-August";
//  const mode = "online-zoom";
//  const time = "2 hours";
//  console.log(`you are invited to the ${event} which starts from ${starting_date} . it will  be ${mode} class ${time} daily `);
// name - Ram, birthYear = 1995, currentYear = 2025. Show it in format - Ram is 30 yrs old. 
// const name = "ram";
// const birthYear = 1995;
// const currentYear = 2025;
// console.log(`${name} is ${currentYear-birthYear} yrs old`);

// name = Hari, age = 20, college = Trinity, isGraduated = true/false. Print - Hari is 20 yrs old and studies at Trinity college. (If isGraduated is true) Hari graduated from Trinity college. (note - Either use ternary or use && operator - this concept is vary useful in react).
// const name = "hari ";
// const age = 20;
// const collage = "trinity";
// const isGraduated = false;
// if(isGraduated == true){
//     console.log(`${name} is ${age} yrs old and studies at ${collage} ${name} is graduated from ${collage} `);
//     }else;
    
    // const age = 18;
    // age && console.log("you can vote ");

//  const greet = () => "good morning";
//  const isLogged = false;
//  isLogged && console.log(greet());

// const isLoggedIn = true;
// const isPremium = true;
// isLoggedIn && isPremium && console.log("wellcome to premium content ");

// const isVerified = true;
// const email = "ram@gmail.com";
// const userEmail = "ram@gmail.com"
// isVerified && email == userEmail && console.log("you  are a verified user ram ");
 

//  const country = "";
// const selectedCountry = country || "nepal";
// console.log(selectedCountry);

// const message = "";
// const newMessage = message || "no new message";
// console.log(newMessage); 

// const shortDescription = "";
// const longDescription = " ";
// const new1 = shortDescription || longDescription || "no description ";
// console.log(new1)
// day 7 STRINGS AND && AND || 
// You bought 5kg of mangoes at rate of Rs. 150 per kg. Then show it in format - You bought 5 kg mangoes with total price Rs. 750 while price per kg is Rs. 150. Show fruit, kg, rate and total price as variables in template string.
// const fruit = "Mango";
// const kg = 5;
// const rate = 150;
// const totalPrice = kg * rate;
// console.log(`You  bought ${kg} kg ${fruit} with total price Rs. ${totalPrice} while price per kg is Rs ${rate}`);

// event - React Class, Starting date - 5th August, mode - Online zoom, time 2 hours. You need to show it in format. You are invited to the {event} which starts from {starting date}. It will be {mode} class {time} daily.
// const event = "React Class ";
// const startingDate = "5th August";
// const mode = "online zoom ";
// const time = " 2 hours";
// console.log(`You are invited to the ${event} which starts from ${startingDate}. It will be ${mode} class ${time} daily`);

// name - Ram, birthYear = 1995, currentYear = 2025. Show it in format - Ram is 30 yrs old. 
// const name = "Ram";
// const birthYear = 1995;
// const currentYear = 2025;
// const age = currentYear - birthYear;
// console.log(`${name} is ${age} yrs old.`);

// name = Hari, age = 20, college = Trinity, isGraduated = true/false. Print - Hari is 20 yrs old and studies at Trinity college. 
// (If isGraduated is true) Hari graduated from Trinity college. (note - Either use ternary or use && operator - this concept is vary useful in react).

//  const name = "Hari";
//  const age = 20;
//  const collage = "Trinity";
//  const isGraduated = true;
//  console.log(`${name} is ${age} yrs old and studies at ${collage} collage. `);
//  isGraduated && console.log(`${name} is graduated from ${collage} collage.`);

//  const name = "Hari";
//  const age = 20;
//  const collage = "Trinity";
//  const isGraduated = false;
//  console.log(`${name} is ${age} yrs old and studies at ${collage} collage. `);
//   console.log (isGraduated ? `${name} is graduated from ${collage} collage.`: "");

//  Guard clause
// 1. Use && operator to show You can vote only if you are more than or equal to 18 yrs old.
//   const age = 22;
//    age >= 18 && console.log("You can vote"); 
 
//  Make a simple function to greet a person like Good Morning. 
//  Then run the function only if the user is logged in using &&. (Hint - You can create variable named isLoggedIn.)
//const isLoggedIn = false;
// function greet () {
//  return "good Morning ";
// }

// isLoggedIn && console.log(greet()); 

// Calculate discount and display it only if the total purchase is more than Rs. 3000. Lets say 10% discount. 
// const totalPrice = 3000;
// const discount = totalPrice *0.1;
// totalPrice >= 3000 && console.log(`You got 10% discount which is  ${discount}.`);

// Create two variables isLoggedIn and isPremiumUser and 
// if both are true then only show - Welcome to Premium Content. (hint - use && twice).

// const isPremiumUser = true;
// const isLoggedIn = true;
// isPremiumUser && isLoggedIn && console.log("wellcome to Premium content ");

// Send email if user isVerified as well as his email is ram@gmail.com. Then send him email saying - You are a verified user Ram.
//  const email = "ram@gmail.com";
//  const isVerified = false;
//  const input = "ram@gmail.com"
//  input === email && isVerified && console.log("YOu are a verified user Ram");

// What are Default Value pattern or fallback ?

// || is used. If left side is true then the same left side is used and if it is false, then only right side is used.
// If country is selected then its fine, if not show the default country Nepal. 
// let name = "usa";
// const username = name || "Nepal";
// console.log(username);

// Create a variable named selectedTheme and whether it is assigned or not, give default value of light theme.
// const selectedTheme = "brown theme";
// const theme = selectedTheme || "light theme";
// console.log(theme);

// If message is not empty return the message while if message is empty return No new messages. 
// const message = "";
// const reply = message || " No new message ";
// console.log(reply);

// Imagine a product has Short Description and Long description. Try to show short as far as possible than long. 
// If by chance both are not available then display No Description Available. (Hint - use two ||)
//  const shortDescription = "";
//  const longDescription = "";
//  const description = shortDescription || longDescription || "No Description ";
//  console.log(description);

// Lets say there are three variables called userColor, savedColor and systemDefault
//  as white. Now our first priority is userColor, if not savedColor and at last systemDefault.

//  const userColor = "";
//  const savedColor = "";
//  const systemDefault = "white";
//  const color = userColor || savedColor || systemDefault;
//  console.log(color);

// homeWorks 
// Template Literals & Basic Expressions (new examples)
// 1. Create arrow function `orderSummary` that takes `product`, `qty`, and `price` and returns:
    
    // `"You bought {qty} {product} for Rs. {qty * price}."`

    //  const orderSummary = (product, qty,price) => {
    //     return `You bought ${qty} ${product} for Rs. ${qty*price}`;

    //  }

    //  console.log(orderSummary());

    // 2. Create arrow function `meetingNotice` that takes `topic`, `date`, `duration` and returns:
    
    // `"Meeting on {topic} is scheduled for {date} and will last {duration} hours."`
 
    // const meetingNotice = (topic,date,duration ) =>{
    //  return ` Meeting on ${topic} is scheduled for ${date} and will last ${duration} hours `;

    // }
    // console.log(meetingNotice());

    // 3. Create arrow function `ageMessage` that takes `personName`, `birthYear`, and `currentYear` and returns:
    
    // `"{personName} is {currentYear - birthYear} years old."`
    // const ageMessage = (personName,birthYear,currentYear)=> {
    //     return `${personName} is ${currentYear-birthYear} years old`;
    // }
    // console.log(ageMessage("sagar",2002,2025));

    // 4. Create arrow function `studentStatus` that takes `name`, `age`, `school`, and `hasGraduated` and returns:   
    // `"{name} is {age} years old and studies at {school}."`
    // If `hasGraduated` is true, add `" {name} graduated from {school}."` (use ternary or `&&`).

 //const studentStatus = (name,age,school,hasGraduated) =>{
//         return `${name} is ${age} years old and studies at ${school}`+
//         (hasGraduated && `${name} graduated from ${school}`);
//     };

//    console.log(studentStatus("sagar",20,"school",true));
//     
//    using ternary operator
//    const studentStatus = (name,age,school,hasGraduated) =>{
//     return `${name} is ${age} years old and studies at ${school}` +
//    ( hasGraduated ? `${name} graduated from ${school}.`:"");
//    }
//    console.log(studentStatus("sagar",20,"school",false));

//  Create arrow function canDrive that takes age and logs "You can drive" only if age >= 18.
//  const canDrive = (age)=>{
//    return age >=18 ? "you can drive":"";
//  }
//  console.log(canDrive(10));

// Create arrow function greetUser that logs "Good evening" only if isUserLoggedIn is true.

// const greetUser = (isUserLoggedIn) =>{
// return isUserLoggedIn ? "Good Evening " : "";
// }
// console.log(greetUser(true));
// Create arrow function showDiscount that takes totalAmount and logs "10% discount applied" only if totalAmount > 5000.
//  const showDiscount = (totalAmount)=>{
//     return totalAmount>= 5000 ? `the discount you got from ${totalAmount} is ${totalAmount*0.1}`: "sorry";
//  }
//  console.log(showDiscount(20000));

// Create arrow function showAccess that logs "Access granted" only if both isLoggedIn and hasAccessRights are true.
// const showAccess = (isLoggedIn,hasAccessRights) =>{
//     return isLoggedIn && hasAccessRights ? "Access granted" : "sorry";
// }
// console.log(showAccess(false,false));

// Create arrow function sendNotification that logs "Notification sent" only if isVerified is true and email equals "user@example.com".

// const sendNotification = (isVerified,email)=>{
// //      isVerified && email=== "user@example.com" && console.log ( "Notification sent " );
// // };
// // (sendNotification(false,"user@example.com"));


// Default Values with || (new scenarios)
// Create arrow function getLanguage that takes language and returns it or "English" if falsy.
//  const getLanguage = (language)=>{
//     return language || "English";

//  }
//  console.log(getLanguage("japanese"));

// Create arrow function getBackgroundColor that returns userColor or defaultColor or "white".
// const getBackgroundColor = (userColor,defalultColor)=>{
//     return userColor || defalultColor|| "white";
// }
// console.log(getBackgroundColor());

// Create arrow function getStatusMessage that returns message or "No new notifications" if empty.
// const getStatusMessage = (message)=>{
//   return message || "no new notifications ";
// };
// console.log(getStatusMessage());

// Create arrow function getDescription that returns shortDesc || longDesc || "No description available".
// const getDescription = (shortDesc,longDesc)=>{
//     return shortDesc || longDesc || "No description available";
// };
// console.log(getDescription("hello"));

// Create arrow function getPriorityColor that returns primaryColor || secondaryColor || tertiaryColor || "black".
// const getPriorityColor = (primaryColor,secondaryColor,tertiaryColor) =>{
//     return primaryColor || secondaryColor|| tertiaryColor || "black";
// }
// console.log(getPriorityColor("yellow"));

// ==============STRINGS=============
// String Indexing & Slicing (fresh practice)
// Create arrow function secondChar that returns the second character of a string 
// const secondChar = (input)=> {
//   return input[1];
// }
// console.log(secondChar("sagar"));

// Create arrow function removeFirstChar that removes the first character of a string.
// const removeFirstChar = (input) =>{
//     let  input1 = input.slice(1);
//     return input1;
// }
//  console.log(removeFirstChar("sagar"));


// Create arrow function removeLastChar that removes the last character of a string.
// const removeLastChar = (input)=>{
//   let input1 =  input.slice(0,-1);
//   return input1;
// };
// console.log(removeLastChar("sagar"));


// Create arrow function sliceMiddle that returns characters from index 1 to 4 of a string.
// const sliceMiddle = (input) =>{
//     let input1 = input.slice(1,5);
//     return input1;
// }
// console.log(sliceMiddle("sagarsharma"));

// Create arrow function sliceLastThree that returns last 3 characters of a string (using negative index).
// const sliceLastThree = (input) =>{
//     let input1 = input.slice(-3);
//     return input1;
// }
// console.log(sliceLastThree("sagar"));

// String Methods (new uses)

// Create arrow function getLength that returns length of the string.
// const getLength = (str)=>{
// return str.length;
// }

// console.log(getLength("sagar"));

// Create arrow function toLowerCaseStr that converts string to lowercase.
// const toLowerCaseStr = (str)=>{
//     let lowercase = str.toLowerCase();
//     return lowercase;
// } 
// console.log(toLowerCaseStr("SAGAR"));
// Create arrow function toUpperCaseStr that converts string to uppercase.
// const toUpperCaseStr = (str)=>{

//    let a = str.toUpperCase();
//    return a ;

// }
// console.log(toUpperCaseStr("sagar"));
// Create arrow function includesWord that returns true if string includes given word.
// const includesWord = (str) =>{
//  let a = str.includes("s");
//  return a;
// }
// // console.log(includesWord("agar"));
// Create arrow function startsWithLetter
//  that returns true if string starts with given letter.
// const startsWithLetter = (str) =>{
//     let a = str.startsWith("a");
//     return a;
// }
// console.log(startsWithLetter("sagar"));
// Create arrow function endsWithLetter that returns true if string ends with given letter.
// const endsWithLetter = (str) => {
//     let a = str.endsWith("r");
//     return a;
// }
// console.log(endsWithLetter("sagar"));
// Create arrow function trimSpaces that trims leading and trailing spaces.
// const trimSpaces = (str) =>{
//     let str1 = str.trim();
//    return str;
// }
// console.log(trimSpaces("   safaesa  "));

// Create arrow function splitByComma that 
// splits a string by commas and returns array.
// const splitByComma = (str)=>{
//     let a = str.split(",");
//     return a;

// }
// console.log(splitByComma("sagar"));
// Create arrow function replaceWord that replaces 
// first occurrence of a word with another word.

// const replaceWord = (str)=>{
//     return str.replace("hello","hi");
// }
// console.log(replaceWord("hello how are you"));

// Create arrow function charAtIndex that returns character at given index.
// const charAtIndex = (str) =>{
//      let output1 = "sagar";
//      return output1[str];
// }
// console.log(charAtIndex(2));

// Arrays, for of, forEach
// Task - Create an array of 15 students in a class. and then print the student of index 3,8,12,14 each along with template string - 
// Congratulations, {name}. You are selected for the competition. (Dont use loop here as we are learning index).

// const class5Students = ["hary","ram","shyam","gita","basu","sagar","sharma","poudel","radha","krishna","gopal","parbati","radhika","kiran","ajay"];
    // console.log(`Congratulations, ${class5Students[3]}.You are selected for competition `);
    // console.log(`Congratulations, ${class5Students[8]}.You are selected for competition `);
    // console.log(`Congratulations, ${class5Students[12]}.You are selected for competition `);
    // console.log(`Congratulations, ${class5Students[14]}.You are selected for competition `);
// Task - Create an array of 10 items in a shop of Newroad. Then replace the 3rd ,
//  7th and 10th element with the item you wish. (note - replacing array[3] is not 3rd item, its 4th item.)

// const shopOfnewRoad = ["toy","sugar","salt","chocolate","tabacoo", "rice","pudding","greenTeaBag","lighter","chips"];
// shopOfnewRoad[3] = "dairyMilk";
// shopOfnewRoad[6] = "BlackTea";
// shopOfnewRoad[9] = "noodles";
// console.log(shopOfnewRoad);

// Task - Create any array with minimum length 8 and then apply push to add element at the end.
// const newRoad = ["toy","sugar","salt","chocolate","tabacoo", "rice","pudding","greenTeaBag","lighter","chips"];
// newRoad.push("noodles");
// console.log(newRoad);

// Task - Create an array with minimum length 8 and then apply pop to remove the last element. 
// const newRoad = ["toy","sugar","salt","chocolate","tabacoo", "rice","pudding","greenTeaBag","lighter","chips"];
// newRoad.pop();
// console.log(newRoad);

// ask - Create an array with minimum length 8 and then apply shift to remove the first element.
// const newRoad = ["toy","sugar","salt","chocolate","tabacoo", "rice","pudding","greenTeaBag","lighter","chips"];
// newRoad.shift();
// console.log(newRoad);

// It adds the element at the beginning without creating loophole

// const newRoad = ["toy","sugar","salt","chocolate","tabacoo", "rice","pudding","greenTeaBag","lighter","chips"];
// newRoad.unshift("fryOil");
// console.log(newRoad);

// Task - Create any array of min length 8 and use for loop to display each item
//  const newRoad = ["toy","sugar","salt","chocolate","tabacoo", "rice","pudding","greenTeaBag","lighter","chips"];
//  for(let i= 0; i<newRoad.length; i++){
//     console.log(newRoad[i]);
//  }

// Create an array of numbers and then display all the numbers.
// For same array display the numbers doubled.
// const nums = [1,2,3,4,5,6];
// for (let i = 1; i<nums.length; i++){
//     console.log(nums[i]*2);
// };
 
// For same array display the numbers doubled.
// const nums = [1,2,3,4,5,6,1];
// for (let i = 0; i<nums.length; i++){
//     console.log(nums[i]*3);
// }
// const names = ["s","a","g","a","r","p","o","u","d","e","l","l"];
// names.pop();
// console.log(names);

// const names = [ "sagar","sharma","mandip","dhakal","sanukaji","aayam","sudin","shrestha"];
// names.shift();
// console.log(names);
// const names = ["bibek","swastika","gajurel","kailash","kc","sagar","japan","china","USA"];
// names.unshift("nepal");
// console.log(names);

// const fruits = ["apple","banana","orange","mango","pineapple","lemon","gauva","watermelon"];
// for(let i =0; i< fruits.length; i++){
//     console.log(fruits[i]);
// }

// const numbers = [1,2,3,4,5,6,7,8,9];
// for(let number of numbers){
//     console.log(number);
// }

// const numbers = [2,4,6,8,10,2,3,4,51,12];
// numbers.forEach((number) => {
//     console.log(number);
// });

// const numbers = [2,4,6,8,10,2,3,4,51,12];
// numbers.forEach((number)=>{
//     console.log(number*2);
// });
// const numbers = [2,4,6,8,10,2,3,4,51,12];
// numbers.forEach((number)=>{
   
//     console.log(number**3);
// });

// Simple Combined Practice
// Create arrow function isValidName that returns true if trimmed name length > 0.
// const isValidName = (input)=>{
//     let input1 = input.trim();
//     return input1.length> 0 ? true: false;
// }
// console.log(isValidName("   "));


// Create arrow function countWords that counts number of words in a string (split by space).
// const countWords = (input) =>{
//      let splitedInput = input.trim().split(" ");
//  return splitedInput.length;
// }
// console.log(countWords("sagar is from nepal"));

// // Create arrow function capitalizeFirstChar that capitalizes only the first character of string.

// const capitalizeFirstChar = (input) =>{
//     let firstOne = input[0].toUpperCase();
//     let entireOne = input.slice(1);
//     return `${firstOne}${entireOne}`;
    
// }
//  console.log(capitalizeFirstChar("poudel"));
 

//  Create arrow function isEmail that returns true if string includes "@".
// const idEmail = (input) =>{
//    return input.includes("@") ? true: false;
// }
// console.log(idEmail("sagarmatha603@gmail.com"));

// Create arrow function getFirstWord that returns the first word from a sentence.

// const getFirstWord = (input) =>{
//     let splited = input.split(" ");
//     return splited[0];
// }
// console.log(getFirstWord("sagar is my best friend"));

// Create arrow function lastCharToUpper that returns last character in uppercase.
// const lastCharToUpper = (input) =>{
//     let lastChr = input.slice(-1).toUpperCase();
//     let firstNormal = input.slice(0,-1);
//     return `${firstNormal}${lastChr}`; 
// }
// console.log(lastCharToUpper("sagar"));

// Create arrow function replaceSpacesWithDash that replaces all spaces with .



// Create arrow function startsWithHello that returns true if string starts with "Hello".
// const startsWithHello = (input) =>{

//     let inputs = input.startsWith("hello") ;
//     return inputs;
// }
// console.log(startsWithHello("hello there "));


// Create arrow function endsWithDot that returns true if string ends with ".".
// const endsWithDot = (input)=>{
//   return input.endsWith(".") ? true: false;
// }
// console.log(endsWithDot("sagar"));


// ======================Multiline & Template Literal Practice==============
//  Create arrow function multiLineMessage that returns a 3-line multiline string using template literals.
// const multiLineMessage = ()=>{
//     return `sagar
//     sharma
//     is
//     from
//     nepal`;
// }
// console.log(multiLineMessage());


// Create arrow function inviteMessage that takes event and date and returns multiline invite message:
// const inviteMessage = ()=>{
//     const date = 2023;
//     const event = "greather ";
//     const months = "july"
//     return `hello sagar
//     you are invited to ${event} party
//     which is going to held in year ${date}-${months}-7th`;
// }
// console.log(inviteMessage());


// Create arrow function thirdChar that returns third character of a string.
// const thirdChar = (input)=>{
// return input[2];
// }
// console.log(thirdChar("sagar"));

// Create arrow function firstAndLastChar that returns a string with first and last characters joined.
// const firstAndLastChar = (input) =>{
//     let firstupper = input[0].toUpperCase();
//     let lastUpper = input.slice(-1).toUpperCase();
//     let middle = input.slice(1,-1);
//     return ` ${firstupper}${middle}${lastUpper}`
// }
// console.log(firstAndLastChar("sagar"));


// =============-More Replace & Split Practice==============
// # Day 9 Map & Filter (VIP)

// Find a new array which gives squares of this array [1,3,5,6,8,9,11,13,15,17,18]
// const numbers = [1,3,5,6,8,9,11,13,15,17,18];
// const number = numbers.map((number)=>{
//     return number * number;
// });
// console.log(number);

// Lets make an array of 6 people. Then use a map to create a new array where we are saying to each person - Congratulations ! {name}, You are selected. 
// const namesOfPeople = ["sagar","hari","ram","gita","shyam","shita"];
// namesOfPeoples = namesOfPeople.map((namesOfPeoples)=>{
// return `Congratulations ! ${namesOfPeoples} , you are selected`;

// });
// console.log(namesOfPeoples);

// convert prices from dollars to rupees [23,45,250,7.5,80,100,2500,75,88,990]
// const dollars = [23,45,250,7.5,80,100,2500,75,88,990];
// convertRupee = dollars.map((convertRupee)=>{
//  const oneDollar = 137;
//     return `The price of $${convertRupee} is ${convertRupee *130}nrp`;
// });
// console.log(convertRupee);

// These are the bike prices in Nepal. First convert it into indian rupees. 
// Just divide the money by 1.6 [259900, 334900, 299900, 359900, 349900, 379900, 564900, 635000, 534900, 624900];
// const bikesPriceInNepal = [259900, 334900, 299900, 359900, 349900, 379900, 564900, 635000, 534900, 624900];
// const convertIndianRupee = bikesPriceInNepal.map((convertIndianRupee)=>{
//     const indianRupee = 1.6;
//     return `The indian rupee of the bikes price in nepal is ${convertIndianRupee} which is ${indianRupee*convertIndianRupee}INR`;
// });
// console.log(convertIndianRupee);


// [0, 10, 20, 30, 35, 40] - Convert these temperatures from Celsius to Fahrenheit. F = (C * 9/5) + 32
// const temperatures = [0, 10, 20, 30, 35, 40];
// const celsiusToFahrenheit = temperatures.map((celsiusToFahrenheit=>{
//     let fahrenheit = (celsiusToFahrenheit * 9/5)+32;
//     return fahrenheit;
// }));
// console.log(celsiusToFahrenheit);

//Lets resee array of those bike prices, Find the final price after 15% discount on each. 
// const bikesPriceInNepal = [259900, 334900, 299900, 359900, 349900, 379900, 564900, 635000, 534900, 624900];
// const AfterDiscount = bikesPriceInNepal.map((AfterDiscount)=>{
//     const discount =  (AfterDiscount * 0.15);
//      return `the final price after 15% discount is  ${AfterDiscount-discount}`;
// });
// console.log(AfterDiscount);

// const numbers = [1,3,5,6,8,9,11,13,15,17,18];
// const newNumbers = numbers.map((number)=> number * number);
// console.log(newNumbers);

//Create an array of any 8 phone numbers in form “9841234567. Then use the map to 
//add the country code and display the number in the form +977 9841234567.
//  const numbers = ["981221122","98387744","2873748992","934793203","987327489","987345789","8735424679","983726469895","87624893453"];
//  const newnumbers = numbers.map((newnumbers)=> `+977${newnumbers}`);
//  console.log(newnumbers);
// Convert student marks into remarks - Pass or fail. 
// Create an array of students marks with at least 8 students. 
// Convert student marks into remarks - Pass or fail.
//  Create an array of students marks with at least 8 students. 
// const marks = [10,20,40,50,60,70,30,50];
// const result = marks.map((result)=> result>=50 ? "pass": "fail")
// console.log(result);
// 10. Convert the usernames into emails - ["Ram","Shyam","Krishna","Raghav","Mohan","Keshav"]
//  by adding @gmail.com at the end.
// const emails = ["Ram","Shyam","Krishna","Raghav","Mohan","Keshav"];
// const fullEmail = emails.map((fullEmail)=> `${fullEmail}@gmail.com`);
// console.log(fullEmail);

// const students = ["Ram","Shyam","Krishna","Raghav","Mohan","Keshav","Narayan","Vishnu","Mahesh","Ram", "Sita", "Gita", "Shyam", "Hari", "Krishna", "Anil"];
// const student = students.map((student,index)=> {
//     return `${index+1}.${student}`;
// } );
// console.log(student);
// Convert student marks into remarks - Pass or fail. 
// Create an array of students marks with at least 8 students. 
// Convert student marks into remarks - Pass or fail.
//  Create an array of students marks with at least 8 students. 
// const marks = [10,20,40,50,60,70,30,50];
// const result = marks.map((result)=> result>=50 ? "pass": "fail")
// console.log(result);
// 10. Convert the usernames into emails - ["Ram","Shyam","Krishna","Raghav","Mohan","Keshav"]
//  by adding @gmail.com at the end.
// const emails = ["Ram","Shyam","Krishna","Raghav","Mohan","Keshav"];
// const fullEmail = emails.map((fullEmail)=> `${fullEmail}@gmail.com`);
// console.log(fullEmail);

// const students = ["Ram","Shyam","Krishna","Raghav","Mohan","Keshav","Narayan","Vishnu","Mahesh","Ram", "Sita", "Gita", "Shyam", "Hari", "Krishna", "Anil"];
// const student = students.map((student,index)=> {
//     return ` roll no${index+1}.${student}`;
// } );
// console.log(student);


// What is filter ?
// It returns a new array but only the items that satisfied the given condition. 
// const numbers = [12, 45, 22, 37, 90, 33, 64, 11, 84];
// const evenNumber = numbers.filter((evenNumber)=> evenNumber%2==0 );
// console.log(evenNumber);
// 2. Filter passed marks (marks ≥ 40)
// const marks = [25, 80, 45, 30, 66, 42, 39, 18, 73, 51];
// const pass = marks.filter((passed)=> passed >=40);
// console.log(pass);
// . Filter prices greater than Rs. 1000
// const prices = [450, 1200, 800, 2500, 990, 1500, 600, 2000];
// const greater = prices.filter((greater)=> greater> 1000);
// console.log(greater);
// . Filter names with more than 4 characters
// const names = ["Ram", "Sita", "Gita", "Shyam", "Hari", "Krishna", "Anil"];
// const name = names.filter((name)=> name.length >= 4);
// console.log(name);
// Filter cities that start with "K"
// const cities = ["Kathmandu", "Pokhara", "Biratnagar", "Kohalpur", "Lalitpur", "Kirtipur", "Butwal"];
// const k = cities.filter((city)=> city.startsWith("K"));
// console.log(k);
// 7. Filter phone numbers that start with "98"
// const phoneNumbers = ["9812345678", "9765432100", "9823456789", "9745678901", "9867891234"];
// const start = phoneNumbers.filter((phone) => phone.startsWith("98"));
// console.log(start);

// Filter prices above 1000 and then add 13 % tax to it. [900, 1200, 800, 1500, 2200]
// const prices = [900, 1200, 800, 1500, 2200];
// const above = prices
// .filter(price => price > 1000)
// .map( price => Math.round( price*1.13));
// console.log(above);

// 3. Filter phone numbers starting with "98", then add country code
//  "+977 “   | ["9812345678", "9765432100", "9823456789", "9745678901"]
// const phones = ["9812345678", "9765432100", "9823456789", "9745678901"];
// const numbers = phones
//   .filter((phone)=> phone.startsWith("98"))
//     .map((phone)=>{
//          return `+977${phone}`
//     });
//     console.log(numbers);

// Homework Exercises for Map, Filter & Combination

//  MAP-only (15 exercises)
// Add 5 to each number in [2, 7, 15, 22, 30]
// const numbers = [2, 7, 15, 22, 30];
// const number = numbers.map(number => number+5);
// console.log(number);

// Convert [“red”, “green”, “blue”] to uppercase
// const colours = ["red","blue","green"];
// const colour = colours.map(color => color.toUpperCase());
// console.log(colour);

// Multiply each price by 1.5 in [100, 200, 300, 400]
// const numbers =[100, 200, 300, 400];
// const number = numbers.map(number => number *1.5);
// console.log(number);

// Add “USD ” prefix to [50, 70, 90]

// const numbers = [50,70,90];
// const number = numbers.map(number=>{
//     return `USD$${number}`;
// });
// console.log(number);

// Replace each vowel in [“apple”, “orange”, “grape”] with “*”
// const vowel = ["apple", "banana","orange","grape"];
// const fruit = vowel
//   .map((fruits)=> fruits.replace(/[a,e,i,o,u]/gi, "*"));
//   console.log(fruit);


// Extract first character from each word in [“cat”, “dog”, “bird”]
// const animals = ["cat","dog","bird"];
// const animal = animals.map((animal)=> {
// return animal[0];

// });
// console.log(animal);

// Add “th” suffix to numbers [1, 2, 3, 4, 5] → [“1th”, “2th”, …]
// const numbers = [1,2,3,4,5,6];
// const number = numbers.map(number => {
//  return `${number}th`});
//  console.log(number);

// Convert [“Nepal”, “India”, “China”] to lowercase
// const country = ["Nepal","India","China"];
// const lowercase = country.map(lowercase  =>{
// return lowercase.toLowerCase();
// });
// console.log(lowercase);

// Calculate length of each word in [“school”, “college”, “university”]
// const word = ["school","collage","university"];
// const words = word.map((word)=> word.length);
// console.log(words);

// Square each number in [2, 3, 4, 5, 6]
// const number = [2, 3, 4, 5, 6];
// const numbers = number.map((numberss)=>{
//    numbers =  numberss * 3;

// });
// console.log(numbers);

// Add 100 tax to each price in [1000, 2500, 4000, 5500]
// const price = [1000,2500,4000,5500];
// const withTax = price.map(withTax => withTax + 100);
// console.log(withTax);

// Add “Rs.” suffix to [500, 750, 1200]

// const price = [500,750,1200];
// const suffix = price.map(suffix => {  return `Rs.${suffix}`});
// console.log(suffix);



// Reverse each string in [“hello”, “world”]

// const str = ["hello","world"];
// const reversestr = str.map( word=> word.split('').reverse().join(''));
// console.log(reversestr);

// Add “day ” prefix to numbers [1, 2, 3, 4, 5]
// const numbers = [1,2,3,4,5,6];
// const prifix = numbers.map(prifix => `${prifix}day`);
// console.log(prifix);

// Convert each number to string in [10, 20, 30]
// const nummber = [10,20,30];
// const numbers = nummber.map(numbers => numbers.toString());
// console.log(numbers);

//  FILTER-only (15 exercises)
// Filter odd numbers from [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const oddNumbers = number.filter(oddNumbers => oddNumbers %2 == 0 );
// console.log(oddNumbers);

// Filter words that contain letter ‘a’ from [“cat”, “dog”, “bat”, “rat”]
//  const animals = ["cat","dog","bat","rat"];
//  const animal = animals.filter(animal=> animal.includes("a"));
//  console.log(animal);

// Filter prices less than 500 from [100, 400, 600, 900, 250]
 
//  const numbers = [100,200,600,900,250];
// const number = numbers.filter(number=> number <500 );
// console.log(number);

// // Filter names that start with ‘S’ from [“Ram”, “Sita”, “Hari”, “Suman”]
// const names = ["Ram","Sita","Hari","Suman"];
// const name = names.filter(name => name.startsWith("S"));
// console.log(name);

// Filter strings longer than 3 letters [“a”, “be”, “cat”, “door”]

// const letters = ["a","b","cat","dog","door","welcome"];
// const letter = letters.filter(letter => letter.trim().length >= 3);
// console.log(letter);

// // Filter numbers divisible by 5 [10, 11, 12, 15, 20, 22]
// const numbers = [10,20,30,12,15,22];
// const number = numbers.filter(number => number % 5 == 0);
// console.log(number);


// Filter words ending with ‘e’ [“apple”, “banana”, “grape”, “mango”]

// const fruits = ["apple","banana","grape","mango"];
// const fruit = fruits.filter( fruit => fruit.endsWith("e"));
// console.log(fruit);

// Filter phone numbers with length 10 [“9812345678”, “12345”, “9876543210”]

// const phoneNumbers = ["9812345678", "12345", "9876543210"];
// const number = phoneNumbers.filter ( number => number.length == 10);
// console.log(number);


// Filter ages less than 18 [12, 15, 20, 22, 16, 14]

// const ages = [12,13,15,22,16,14];
// const age = ages.filter(age => age<18);
// console.log(age); 

// Filter even prices [300, 500, 700, 800, 1200]

// const prices = [300,500,700,800,1200];
// const price = prices.filter(price => price % 2 == 0);
// console.log(price);

// Filter words with letter ‘r’ [“car”, “bus”, “train”, “bike”]
// const modems = ["vcar","bus","bike","train"];
// const modem = modems.filter(modem => modem.includes("r"));
// console.log(modem);

//  MAP + FILTER combined (20 exercises)

// Filter numbers greater than 10 and then subtract 5 from each [5, 12, 20, 3, 7]
// const numbers = [12,22,33,44,50,5,4,23];
// const number = numbers
//  .filter(number => number >10)
//  .map(number=> number - 5);
//  console.log(number); 

// Filter words shorter than 5 letters and convert to uppercase 

// const letters = ["apple", "dog", "cat", "banana"];
// const letter = letters
// .filter(letter => letter.length<5)
// .map(letter => letter.toUpperCase());
// console.log(letter);

// // Filter prices less than 1000 and add 100 tax [500, 1200, 800, 1500]

// const prices = [500,300,400,1200,1300,4000];
// const price = prices
// .filter(price => price <1000)
// .map(price=> price+100 );
// console.log(price);


// Filter names starting with ‘A’ and add “Hello ” prefix [“Anil”, “Ram”, “Asha”]
// const names = ["Anil","Ram","Hari","Arun"];
// const name = names
// .filter(name=> name.startsWith("A"))
// .map(name => `hello ${name}`);
// console.log(name);

// Filter odd numbers and square them [1, 2, 3, 4, 5]
// const numbers = [1,2,3,4,5];
// const number = numbers.filter(number => number % 2 == 0)
// .map(number => number * 2);
// console.log(number);


// Filter names longer than 3 letters and reverse the string 
// const names = ["ram","sagar","sharma","arun","bhandari"];
// const name = names
// .filter(name => name.length>3)
// .map(name => name.split('').reverse().join(''));
// console.log(name);


// Filter prices above 500 and convert to dollars by dividing by 120 [600, 400, 800, 1000]

// const prices = [600, 400, 800, 1000];
// const price = prices
// .filter(price => price >500)
// .map(price =>Math.round( price/120));
// console.log(price);


// Filter numbers divisible by 3 and add 10 [3, 6, 7, 9, 10]

// const numbers = [3,6,7,9,10];
// const number = numbers.filter(number => number %3 == 0 )
// .map(number => number+10);
// console.log(number);

// Filter phone numbers with length 10 and format as (xxx) xxx-xxxx [“9812345678”, “12345”, “9876543210”]

// const phoneNumbers = ["9812214820","9822112349","29384"];
// const phoneNumber = phoneNumbers.filter(phoneNumber=> phoneNumber.length == 10 )
// .map(phoneNumber=> `(xxx) xxx-xxxx`);
// console.log(phoneNumber);


// =======FIND()+++========
// it stop when it find the first match 

// Imagine you have a list of days of the month when you have to go to gym, 
// and you want to find the first even day when you have to
//  go to gym. gymDays = [3, 5, 8, 11, 14, 15, 21, 26, 29]. 

// const gymDays = [3,5,8,12,14,15,21,26,29];
// const gymDay = gymDays.find(num => num %2==0 );
// console.log(gymDay);

// Imagine you have a list of students’ exam scores, and you want to
//  find the first student who scored above 
// the passing mark so you can congratulate them. 

// const scores = [35, 42, 38, 50, 45, 30, 60];
// const score = scores.find(num => num>40);
// console.log(score);

// =========findIndex()=======

// Find the index of first negative

// const  numbers = [5, 3, 0, -2, -5];
// const number = numbers.findIndex(num => num<0);
// console.log(number);

// 2. Find index of first string longer than 5 characters.

// const names = ['Anna', 'John', 'Elizabeth', 'Tom'];
// const name = names.findIndex(num => num.length >5);
// console.log(name);

// =============includes('saga')=========

// 1. Check if mango exist in a list 

// const fruits = ['apple', 'banana', 'mango'];
// const fruit = fruits.includes("mango");
// console.log(fruit);

// Sum all numbers in this array using reduce():
// const numbers = [1,1,2,3,4,5,6,7,89,];
// const number = numbers.reduce((acc,number)=>{
//   return Math.floor((acc + number)/numbers.length);

// },0);

// console.log(number);

// Find the product of all numbers in this array using reduce():

// const numbers = [2,3,4,5];
// const number = numbers.reduce((acc,number)=>{
//     return acc * number;
// },1);
// console.log(number);

// Find the maximum number in this array using reduce()

// const numbers = [1,2,3,4,10,6];
// const maximum = numbers.reduce((accumulator,currentValue)=>{
// return currentValue>accumulator ? currentValue:accumulator;
// },0);
// console.log(maximum);

// Find the smallest number in this array using reduce:
//  const numbers = [15,8,20,3,12];
// const smallest = numbers.reduce((accumulator,currentValue)=>{
//     return currentValue < accumulator ? currentValue:accumulator;

// });
// console.log(smallest);

// Count the total number of characters in this array of strings using reduce():
// const characters = ["hello", "world"];
// const number = characters.reduce((accumulator, currentValue)=>{
//  return currentValue.length;
// });
// console.log(number);

// - Find the maximum number in this array using reduce:
    
    // const numbers = [5, 10, 2, 8];
    // const number = numbers.reduce((acc,maximum)=>{
 
    //     return acc > maximum ? acc: maximum;
    // });
    // console.log(number);

    // - Find the smallest number in this array using reduce:
    
    // const numbers = [15, 8, 20, 3, 12];
    // const number = numbers.reduce((acc,smallest)=>{
    //     return acc < smallest ? acc : smallest;
    // });
    // console.log(number);

    // - Count the total number of characters in this array of strings using reduce:
    
    // const words = ['hello', 'world'];
    // const word = words.reduce((acc,tNumber)=>{
    //     return acc+tNumber.length;
    // },0);
    // console.log(word);

    // - Count how many times the word 'apple' appears in this array using reduce:
    
    //  const fruits = ['apple',  'apple',"apple", 'orange', 'banana'];
    // const fruitCount = fruits.reduce((acc,fruit)=>{

    //     return fruit === "apple"? acc +1 : acc;
    // },0);

    // console.log(fruitCount);

    // Q1: Use reduce to find the total avrage of the numbers
// const numbers = [5, 10, 15, 20];
// const sum = numbers.reduce((acc,number)=>{
//  return Math.floor((acc + number)/numbers.length);
// });
// console.log(sum);


// Q2: Use reduce to count how many times "banana" appears in the array
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
// const fruitCount = fruits.reduce((acc,fruit)=>{
//  return fruit === "banana" ? acc+1 : acc;
// },0);

// console.log(fruitCount);

// Q3: Use reduce to build an object that counts how many times each fruit appears
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
// // Output should be: { apple: 2, banana: 3, orange: 1 }
// const fruitCount = fruits.reduce((acc,fruit)=>{
//   return fruit === "apple" ? `apple : ${acc+1}`: fruit === "banana" ? `banana: ${acc+1}` : fruit === "orange" ? `orange: ${acc+1}`: ""
// },0);

// console.log(fruitCount);

// -----===========-----==========--Object=============-------=======-----====
//  Create any two objects that you like, but dont make it very simple one
//  like {one: 1, two: 2}. Try to think as it it is useful in real world. 

// const sectionB = {
//     name : "sagar",
//     class : 12,
//     rollNo :20,
//     location : "gaindakot",


// };
// sectionB.weight = 45;

// console.log(sectionB.weight);
// delete sectionB.class;
// console.log(sectionB.class);

// Create a similar array of objects for a normal kirana shop in nepal at least 8 products. 
// const shopNearGaindakot = [ 
//  {id:1, name:"rabiKirana", location:"street2", phone:"9812214820",feature : "fast Home delivery"},
//  { id :2, name:"sabiKirana",location : "street2.1",phone:"9812214839", feature :"self service"},
//  {id : 3, name:"hariKirana", location : "street 5",phone:"9812212821",feature:"always 20% discount"},
//  {id : 4, name:"shyamKirana", location : "street9", phone:"982121213",feature:"cashBack upto  2k"},
//  {id :5 , name: "kaluKirana", location : "street8", phone:"9828383828", feature:"credit card can be used"},
//  {id :6 , name :"sanuKirana", location : "street7",phone:"9812214848", feature:"24hour open"},
//  {id : 7, name:"sagaKirana", location :"street2",phone:"988818288", feature:"business hour is 6am to 1am"},
// ];
// console.log(shopNearGaindakot[0].name);

// Create a similar array of objects for a normal bakery shop. 
// const nationalBakery = [
//  {id: 1, name:" bananaFlavour", price:"500 per pound", isAvailable : true},
//  {id: 2, name:" vanelaFlavour", price:"550 per pound", isAvailable:false},
//  {id: 3, name:" strawberryFlavour", price: "600 per pound", isAvailable : true},
//  {id: 4, name: "peachFlavour", price:"650 per pound", isAvailable: true},
//  {id: 5, name: "pineFlavour", price:"550 per pound", isAvailable: true},
// ];

// console.log(nationalBakery[3].name);

// Create a similar array for a restaurant. 
// const fastFood = [
//     {id:1, name:"chowmin", isSpicy:false, price:"150 perPlate",isAvailable:true},
//     {id:2, name:"momo", isSpicy:true, price:"200 per plates", isAvailable:false},
//     {id:3, name:"jholMomo" , isSpicy:true, price:"230 per plates", isAvailable:true}
     
// ];
// console.log(fastFood[2].price);

// this will give us undefine;
// const person = {
//     name:"shyam",
//     class : 12,
//     section:"A",
//     location:"chitwan",
//     greet : () =>{
//         return `Good morning ${this.name}`;
//     },
// };
// console.log(person.greet());


// Create a new array and add at least two methods from outside as well as call it. 

// person.sayName = function () {
//  return `${this.name} is ${this.age} yrs old`;

// };
// console.log(person.sayName());

// Create an array of 7 exercises. Each exercise has:

// - `id`
// - `name`
// - `duration` (in minutes)
// - `caloriesBurned`
// - `equipmentNeeded` (boolean)

// Print all exercises that do not require equipment.

// const books = [

//     {id:1, title: "computer", author:"ram", pages:150, isAvailable:true},
//     {id:2, title: "science" , author: "sagar", pages:250, isAvailable:false},
//     {id:3, title: "PTE", author:"shyam", pages:150, isAvailable:true},
//     {id:2, title: "biology" , author: "rita", pages:2150, isAvailable:false},
//     {id:1, title: "nepali", author:"hari", pages:150, isAvailable:true},
//     {id:2, title: "english" , author: "sita", pages:250, isAvailable:false},
    
// ];

// ### 4. Music Playlist

// Create an array of 6 songs. Each song has:

// - `id`
// - `title`
// - `artist`
// - `duration` (seconds)
// - `isFavorite` (boolean)

// Print all favorite songs and their durations.

// const anime = [
//     {
//         id:1, 
//         title:"youungSheldon",
//          artist:"hari", 
//          duration:`200sec`, 
//          isFavorite:false
//          },
//     {id:2,
//      title:"onePiece",
//       artist:"shyam",
//        durataion:"500sec",
//         isFavorite:true,
//         },
//     {id:3, 
//     title:"naruto", 
//     artist:"hari", 
//     duration: "10000sec",
//      isFavorite:false,
//      },
//     {id:4,
//      title:"boruto",
//       artist:"shyam", 
//       durataion:"500sec", 
//       isFavorite:true,
//       },
//     {id:5, 
//     title:"gugukaison", 
//     artist:"shyam", 
//     durataion:"500sec",
//      isFavorite:true,
//      },
// ];

// const person = {
//     name:"sagar",
//     location:"chitwan",
//     greet : functon () {
//         return "good "
//     }
// }

// const person1 = {
//     name : "poudel",
//     loction:"chitwan",
//     whatsUp : function () {
//         return "How are you";
//     },
// };
// console.log(person1.whatsUp());

// const fruit = {
//     price () {
//         return "hello how are you";
//     },
//   name: "mango",
// };
// console.log(fruit.price());

// const introduction = {
//     name: "sagar",
//     location: "chitwan",
//     greet () {
//         return ` Hi ${introduction.name} How are you?`;
//     },
// };

// const names = {
//     name: "saga",
//     location : "chitwan",
//     age : 23,
//     greet () {
//         return `Hi i am ${this.name} and i am from ${this.location} and i am ${this.age}`;
//     },

// };
// console.log(names.greet());

// const names = {
//     name : "poudel",
//     location : "chitwan",
//     saiHello () {
//         return `hello ${this.name}`;
//     },
//     yourLocation () {
//         return `your location is  ${this.location}`;
//     },
// };
// console.log(names.saiHello(), names.yourLocation());

// const fruits = ["apple","banana","mango"];
// console.log(fruits.includes("mango"));
// const lists = ["a","e","i","O","u"];
// console.log(lists.includes("f"));

// const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// const [firstDay,,,,,,lastday] = days;
// console.log(firstDay,lastday);
// const numbers = [1,2,3,4,5,6,7,8];
// const [firstNumber, , , , ,midDay, ,lastDay] = numbers;
// console.log(firstDay,midDay,lastDay);

//   const numbers = [1,2,3,4,5,6];
//   const sum = numbers.reduce((acc,number)=>{
//     return acc + number;
//   },0);
//   console.log(sum);

// const numbers = [1,2,3,4,5,6];
// const product = numbers.reduce((acc, number)=>{
//     return acc*number;
// },1);
// console.log(product);

// const numbers = [1,22,34,5,6,77];
// const max = numbers.reduce((acc,  number)=>{
//     return acc > number ? acc : number;
// },0);
// console.log(max);
// - Count how many words start with a vowel using reduce:
    
    // const words = ['apple', 'banana', 'orange', 'grape', 'umbrella'];
    // const vowel = ["a","e","i","o","u"];
    // const fruit = words.reduce((acc,word)=>{
    //     return word.startsWith(["a","e"]) ? acc+1:""; 
    // },0);

    // console.log(fruit);
    
// - Find the smallest odd number in this array using reduce:
    
    // const numbers = [11, 6, 3, 9, 14,5];
    // const smallest = numbers.reduce((acc,number)=>{
    //    return acc < number && acc %2 ==1 ? acc : number;
    // },0);
    // console.log(smallest);

    // - Find the smallest even number in this array using reduce:
    
    // const numbers = [11, 6, 3, 9, 14,2];
    // const even = numbers.reduce((acc, number)=>{
    //     return acc < number && acc %2 == 0 ? acc : number;
    // });
    // console.log(even);

    // - Count how many fruits contain the letter 'e' using reduce:
    
    // const fruits = ['apple', 'banana', 'grape', 'kiwi'];
    // const contain = fruits.reduce((acc, fruit)=>{
    //   return fruit.includes("e") ? acc+1 : acc;
    // },0);

    // console.log(contain);

    // - Count how many times the number 5 appears in this array using reduce:
    
    // const numbers = [5, 2, 5, 7, 5, 9];
    // const repeat = numbers.reduce((acc,number)=>{
    //     return number === 5 ? acc +1: acc;
    // },0);
    // console.log(repeat);

    // - Find the sum of only even numbers in this array using reduce:
    
    // const numbers = [4, 7, 10, 13, 16];
    // const number = numbers.reduce((acc, number)=>{
    //     return number % 2 == 0 ? acc + number : acc;
    // },0);
    // console.log(number);

    // Create an object with 2 properties and 1 method that returns a greeting message using this

    // const names = {
    //  name: "saga",
    //  surname: "poudel",
    //  from: "Gaindakot",
    //  greet () {
    //     return `Hello ${this.name} ${this.surname} you are from ${this.from} ${this.nice}`;
    //  },
    //  nice: "nice to meet you",
    // };
    // console.log(names.greet());

    // Create an object with 3 properties and 2 methods 
    // — one returns a greeting, one returns a message about the age/property.
    // const person = {
    //     name: "sagar",
    //     surname: "poudel",
    //     age: 23,
    //     greet (){
    //         return ` Hello ${this.name} ${this.surname}`;
    //     },
    //     yourAge (){
    //         return `As per information  your age is  ${this.age}`;
    //     },
    // };
    // console.log(person.greet(), person.yourAge());


    // Add a method from outside the object that returns a message using this. Call it and print.
    
    // const info = { 
    //     name: "saga",
    //     location: "gaindakot",
    //     age: 23,
    // };

    // info.greet = function (){
    //     return `Hello ${this.name} how you doing you are from ${this.location} isn't it `;
    // } ;
    // console.log(info.greet());


    // Create an object with a method and call that method to print a message.

    // const messages = {
    //     name: "saga",
    //     greet (){
    //       return  `hello ${this.name} how are you`;
    //     },
    // };

    // console.log(messages.greet());
// --------==========--------Dynamic Method Addition--------==========--------
//    Create an array and add two methods from outside: one that returns the length and one that returns a message.
//     const arry = [
//        {length: 250,
//         message: "hello how are you guys",
//        },

//     ];
//     arry.lengths = function (){
//         return ` ${arry[0].length}`
//     }
//     arry.greet = function (){
//    return `${arry[0].message}`
        
//     };
//   console.log(arry.lengths());
//   console.log(arry.greet());
 
// Create an object dynamically and add two methods from outside. Call both.
//   const dynamically = [

//   ]
//   dynamically.greet = function (){
//     return "i was created from outside ";
//   };

//   dynamically.howYp = function () {
//     return "hello i am also from the outside ";
//   };
//   console.log(dynamically.greet(),dynamically.howYp());

    // ---------==========-------=======----strings primitve vs string object ============-----=======-----
//    1 create a string primitive "hello ".prints its length property
//    const greet = "hello";
//    console.log(greet.length);
//   console.log(greet.toUpperCase());

    // ---------==========-------=======----property vs method concept ============-----=======-----
   

   
    // ---------==========-------=======----spread operator============-----=======-----
    
//     const person = {name: "Ram", age: 25};
//   console.log(person);
// const newPerson = {...person, location: "Kathmandu"};
// console.log(newPerson);

// =============----------============-----------sprade operator======-----=---=====
// const person = {
//     name: "sagar",
//     class: "poudel",

// };

// const newPerson = {
//     ...person,
//     location: "chitwan",

// };
// console.log(person);
// console.log(newPerson);

// const details  = {
//     name: "sagar",
//     age: 23,
//     location: "chitwan",

// };

// const newDetails = {
//     ...details,
//     occupation: "student",
//     collage: "xyz collage",
// };
// console.log(details);
// console.log(newDetails);

// ========================----------=====Destructure======---------====================

//  const about = {
//     user: "sagar",
//     location: "chitwan",
//      occupation: "student",
//     collage: "xyz collage",
//  };
//  const {user,location,occupation,collage} = about;
//  console.log(`${user} is from ${location} and he is ${occupation}`);

// ===================-----------=======---using map in object------======------======-------========----

// const products = [
//   {id: 1, name: "Laptop", price: 80000, isAvailable: true},
//   {id: 2, name: "TV", price: 50000, isAvailable: true},
//   {id: 3, name: "Watch", price: 5000, isAvailable: false},
//   {id: 4, name: "Phone", price: 40000, isAvailable: true},
// ];

// const newProducts = products.map(product => ({...product, newProduct: product.price >4000 ? "expensive":"economy"}));
// console.table(newProducts);


//  const category = products.map(product=> ({...product,category: product.price > 40000 ? "premium": "budget" }));
// console.table(category);

//  const names = products.map(product=>product.name);
//  console.log(names);
//  const prices = products.map(product=>product.price);
//  console.log( "35"+prices);
//  const uppercase = names.map(name=> name.toUpperCase());
//  console.log("37"+ uppercase);
// const newProducts = products.map(product=> ({newName: product.name, newPrice: product.price}));
// console.table("39" + newProducts);
// const newIdPrices = products.map(product => ({id: product.id, name: product.name}));
// console.log("41" + newIdPrices);

// Add a new property price after discount where discount is 10% of MP. (better use spread operator).

// const newProducts = products.map( product => ({...products}));
// console.log(newProducts);
// const newestProducts = products.map((product  =>({...product, afterdiscount: product.price *0.75})));
// console.log(newestProducts);

// const productAfterDiscount = products.map ( product => ({...product, afterDiscount: product.price *0.75 }))
// console.log(productAfterDiscount);
// Add a new property category and its value must be “budget” if it is less than or equal to 40000 and “premium” if more.  (spread operator)
// const  category = products.map(product => ({...product, category: product.price > 40000 ? "premium":"budget"}));
// console.log(category);

// Add an new property named inStock with its value equal to isAvailable (better use spread operator).

// const inStock = products.map(product => ({ ...product, inStock: product.isAvailable === true ? true: false}));
// console.log(inStock);

// Add a new property named priceWithTax whose value if 20% of MP. (spread operator)

// const priceWithTax = products.map(product => ({...product, priceWithTax: (product.price * 0.2) + product.price}));
// console.log(priceWithTax);

// Create at least 5 array of objects similar to above and then for each array of objects, solve at least 8 questions like above. 

// const production = [
//     {id: 1,
//      productName: "chowmen", 
//      productDate: 2025/10/20, 
//      sellsArea: 50, 
//      price: 250,
//      },
//      {
//         id: 2,
//         productName: "chilli momo",
//         productDate: 2025/5/25,
//         sellsArea: 100,
//         price: 350,
//      },
     
//      {
//         id: 3,
//         productName: "steam momo",
//         productDate: 2025/12/4,
//         sellsArea: 150,
//         price: 300,

//      },
//      {
//         id: 4,
//         productName: "chicken chowmen",

//         productDate: 2025/30/20,
//         sellsArea : 200,
//         price: 250, 
//      },
//      {
//         id: 5,
//         productName: "fry momo",
//         productDate: 2025/3/13,
//         sellsArea: 20,
//         price: 300,
//      },


// ];
// const afterDiscount = production.map(product=>({...product, afterDiscount: product.price*0.75}));
// console.table(afterDiscount);

// const products = [
//   {id: 1, name: "Laptop", price: 80000, isAvailable: true},
//   {id: 2, name: "TV", price: 50000, isAvailable: true},
//   {id: 3, name: "Watch", price: 5000, isAvailable: false},
//   {id: 4, name: "Phone", price: 40000, isAvailable: true},

// ];
// const priceBetween = products.filter(product => product.isAvailable == true&& product.price > 10000 && product.price <60000);
// console.table(priceBetween);

// const startWithP = products.filter(product => product.name.startsWith("P"));
// console.table(startWithP);

// const nameLengths = products.filter(product => product.name.length >= 5);
// console.table(nameLengths);

// const unavilable = products.filter(product => product.price >= 10000 && product.isAvailable === false);
// console.table(unavilable);


// const expensive = products.filter(product => product.price > 50000);
// console.table(expensive);

// const priceExectly = products.filter(product=> product.price === 50000);
// console.table(priceExectly);

// const cheaperProduct = products.filter(product => product.price < 50000);
// console.table(cheaperProduct);
// const UnavilableProducts = products.filter(product => product.isAvailable === false);
// console.table(UnavilableProducts);
// const availableProducts = products.filter(product => product.isAvailable === true);
// console.table(availableProducts);


// let a = "5";
// let  b = 10;
// let sum = parseInt (a)+b;
// console.log(sum);

// const compareNumbers = function (a, b){
//     if (a>b){
//         return "a is greater ";
//     }else if (b>a){
//         return "b is greater";

//     }else{
//         return "equal"
//     };
//     };
//     console.log(compareNumbers(10,10));


// const types = function (a){
//     return Object.prototype.toString.call(a)
// };
// console.log(types(10));


// const grade = function (score){
// return   score >= 90 ? "A": score >= 75 ? "B": "C";

// }
// console.log(grade(9));


// let input = prompt("number between 1- 10");
// let randoms =Math.floor (Math.random()*10);
// console.log(randoms);
// while (randoms === input) {
//     alert ("correct");
    
// }

// const name = function (first, second){
//     firstCap = first[0].toUpperCase();
//     secondCap = second[0].toUpperCase();
//     cutFirst = first.slice(1);
//     cutSecond = second.slice(1);
//     return firstCap+cutFirst+ " " +secondCap+cutSecond;
// };
// console.log(name("sagar", "sharma"));

// const input = function (email){
//     return email.includes("@") && email.includes(".com") ? "valid email": "invaild email";
// };
// console.log(input("sagarmatha603@gmail.com"));
// ===============--------------------===========================================-
// const output = function (input){
//     let even = 0;
//     let odd = 0;
    
//    input.map(output => (output% 2 === 0 ? `even: ${even+=output}` : `odd: ${odd += output}`)); 
//    return `even: ${even}  odd:${odd}`
// };

// console.log(output([1,2,3,4,5]));

// -----==============----==========----========-----========----=--=-=--=-=-=-=-=-=--

// const users = [
//   { name: "Ajay", age: 21 },
//   { name: "Sara", age: 17 },
//   { name: "Mina", age: 25 }
// ];
//  const elder = users.filter(elder => elder.age >= 18);
//  const returns = users.map(return1 => return1);
//  console.log(returns);

const products = [
  { id: 1, name: "MacBook Pro", category: "Laptop", price: 180000, isAvailable: true, rating: 4.8 },
  { id: 2, name: "Dell Inspiron", category: "Laptop", price: 90000, isAvailable: true, rating: 4.2 },
  { id: 3, name: "Samsung Galaxy S21", category: "Phone", price: 70000, isAvailable: false, rating: 4.5 },
  { id: 4, name: "iPhone 13", category: "Phone", price: 120000, isAvailable: true, rating: 4.7 },
  { id: 5, name: "Sony Bravia", category: "TV", price: 150000, isAvailable: true, rating: 4.6 },
  { id: 6, name: "LG OLED", category: "TV", price: 170000, isAvailable: false, rating: 4.4 },
  { id: 7, name: "Fossil Smartwatch", category: "Watch", price: 25000, isAvailable: true, rating: 4.1 },
  { id: 8, name: "Casio Digital", category: "Watch", price: 5000, isAvailable: true, rating: 4.0 },
  { id: 9, name: "HP Pavilion", category: "Laptop", price: 75000, isAvailable: true, rating: 4.3 },
  { id: 10, name: "Realme 11 Pro", category: "Phone", price: 33000, isAvailable: true, rating: 4.2 }
];

// Find the product with the highest rating - if its difficult lets find the highest rating first.
//  const higest = products.reduce((acc,product)=>{
//   return product.rating > product.rating ? product : acc;  
//  });
// console.log(higest);


// Find the product with the longest name
 
//  const longest = products.reduce((acc, product)=>{
//     return product.name.length > acc.name.length ? product: acc;
//  });
//  console.log(longest);

// find the product with the longest name 
// const longests  = products.reduce((longest,product)=>{
//     return product.name.length > product.name.length ? product : longest;
// });
// console.log(longests);


// count how many products have rating >=4.5

// const rating = products.reduce((acc, product)=>{
//     return product.rating >= 4.5  ? acc +1 : acc;
// },0);
// console.log(rating);




// total price of laptop products

// const laptopProducts = products.reduce((acc, product)=>{
//     return product.category === "Laptop" ? acc + product.price : acc;
// },0);
// console.log(laptopProducts);



// total number of available products

// const available = products.reduce((acc, product)=>{
//     return product.isAvailable === true?  acc + 1 : acc;
// },0);
// console.log(available);



// // Total number of unavailable products
// const unavailable = products.reduce((acc, product)=>{
//     return product.isAvailable === false ? acc + 1 : acc;
// },0);
// console.table(unavailable);



// Find the product with the highest rating - if its difficult lets find the highest rating first.
//  const highestRating = products.reduce((acc, product)=>{
//  let highestRating1 =  product.rating > acc ? product.rating: acc;
//   const productWithHighestRating = products.filter(product => product.rating.includes(highestRating1));
//   return productWithHighestRating;


//  },0);

// console.log(highestRating);


// Average rating of all products - total rating

// const highestRating = products.reduce((acc, product) =>{
//     let totalRating =  product.rating > acc  ? product.rating : acc;    
//     return totalRating;

// },0)
// let avrageRating = highestRating / products.length;
// console.log(avrageRating);




// const count = products.reduce((acc, product)=>{
//     acc[product.category] = acc[product.category]? acc[product.category]+1: 1;
//     return acc;
// },{});
// console.log(count);



// const highestProduct = products.reduce((acc, product)=>{
//     return product.price > acc ? acc = product.price : acc;
// },0)
// console.log(highestProduct);


// const onlyAvilable = products.reduce((acc, product )=>{
//     return product.isAvailable === true ? acc + product.price : acc;
// },0);
// console.table(onlyAvilable);

// const totalPrice =products.reduce((acc,product)=> {
//  return acc+ product.price ;
// },0);
// console.log(totalPrice);


// ==============--------=====-==-= SOME() methods===-=-=-==-=-=-==-=-==-=-====-=-==

// const numbers = [1,2,3,4,5,6];
// const even = numbers.some(number => number % 2 === 0);
// console.log(even);


// check if the array [10,20,30,40,50] has at least a number ,more then 40

// const numbers = [10,20,30,40,50];
// const moreThen = numbers.some(product => product > 40);
// console.log(moreThen);

// // check if the array ["apple","banana","mango"] has at least a string whose length is less then 4

// const arr = ["apple","banana","mango"];
// const lessThen = arr.some(product => product.length < 4 );
// console.log(lessThen);


// =======---============---====== eery method =======-====-=-==-=-==-=-=-====-
// check all the students are passed in exam or not [45,98,67,77,33,48,32] pass marks is 40

// const result = [45,98,67,77,33,48,32];
// const passed = result.every(pass => pass  > 40);
// console.log(passed);

// // check if the words are of length more then 4 or not ["apple","banana","mango"]

// const fruits = ["apple","banana","mango"];
// const fruit = fruits.every(fruit => fruit.length > 4);
// console.log(fruit);

// =======-----====araray ma spread operator =====----==========------====

// const number =  [1,3,4,5,56];
// const newNumber = [...number,36];
// console.log(newNumber);

// const numbers = [1,2,3,4,5];
// const numbers1 = [1,2,3,4,5,6];
// const newNumber = [...numbers, ...numbers1];
// console.log(newNumber);

// const apple = "apple";
// const newApple = [...apple];
// console.log(newApple);

// const ball = "ball";
// const newBall = [...ball];
// console.log(newBall);

// const numbers = [10,20,30,40,100];
// console.log(Math.max(...numbers));

// const number = [1,2,3,4,5,6,7,8];
// console.log(Math.max(...number));
// const newNumbers = [...number,...numbers];
// console.log(Math.max(...newNumbers));


