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
// SVGDefsElement