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
