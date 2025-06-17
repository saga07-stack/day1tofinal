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
