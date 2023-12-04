// 1- Write a program that allow to user enter number then printit

// let input = prompt("Enter your Number ", 5);
// let testElment = document.getElementById("test");
// testElment.innerHTML = +input;
// console.log(+input);

/////////// Test Case
// Input: 5
// Output: 5

// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// let input = prompt("Enter your Number ", 9);

// if (input % 3 == 0)
//     console.log(input + ' Yes' );
// else
//     console.log(input + ' No' );


// Example1
// Input: 12 Output Yes
// Example 2
// Input: 9 Output No

// 3- Write a program that allows the user to insert 2 integers then print the max
// let input1 = prompt("Enter your Number ", 5);
// let input2 = prompt("Enter your Number ", 9);

// if (input1 > input2)
//     console.log(input1 + ' is max');
// else
//     console.log(input2 + ' is max');

//4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// let input = +prompt("Enter your Number ", 4);
// if( !NaN){
//     if (input >= 0)
//         console.log( input + ' positive number');
//     else
//         console.log(input +  ' negative');
// }


// 5- Write a program that take 3 integers from user then print the max element and the min element.

// let input1 = +prompt("Enter your frist Number ", 5);
// let input2 = +prompt("Enter your secend Number ", 10);
// let input3 = +prompt("Enter your thered Number ", 9);
// // // Max
// if (input1 > input2 && input1 > input3)
//     console.log(input1 + ' is max');
// else if(input2 > input1 && input2 > input3)
//     console.log(input2 + ' is max');
// else
//     console.log(input3 + ' is max');

// // // Min
// if (input1 < input2 && input1 < input3)
//     console.log(input1 + ' is min');
// else if(input2 < input1 && input2 < input3)
//     console.log(input2 + ' is min');
// else
//     console.log(input3 + ' is min');


// 7,6- Write a program that allows the user to insert integer number then check If a number is oven or odd

// let input = +prompt("Enter your Number ", 9);

// if (input % 2 == 0)
//     console.log(input + ' Even' );
// else
//     console.log(input + ' Odd' );

//8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// let input = prompt("Enter your vowel chars (a,e,I,o,u) ", );

// if (input == ( 'a' || 'e' || 'i' || 'o' || 'u'))
//     console.log(input + ' it is vowel chars' );
// else
//     console.log(input + ' Not vowel chars' );


// 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to that’s number

// let input = +prompt("Enter your Number ", 5);

// if (input >= 1) {
//     for (let i = 1; i <= input; i++){
//         console.log(i);
//     }
// }

// 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.

// let input = +prompt("Enter your Number ", 5);
// let mult = 0;
// if (input >= 1) {
//     for (let i = 1; i <= 12; i++){
//         mult = i * input;
//         console.log(mult);
//     }
// }

//  11 - Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers between 1 to this number

// let input = +prompt("Enter your Number ", 5);

// for (let i = 1; i <= input; i++){
//     if (i % 2 == 0)
//         console.log(i);
// }

// 12 -

// let input1 = +prompt("Enter your Number ", 4);
// let input2 = +prompt("Enter your power ", 3);
// let pow = input1 ;
// for (let i = 1; i < input2; i++){
//     pow *= input1;
// }
// console.log(pow);

// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.

//  //let input1 = +prompt("Enter your Number ", 95);
//  //let input2 = +prompt("Enter your power ", 75);
// //let input3 = +prompt("Enter your Number ", 58);
// //let input4 = +prompt("Enter your power ", 90);
// //let input5 = +prompt("Enter your power ", 89);

// let input1 = 95, input2 = 75, input3 = 58, input4 = 90, input5 = 98;
// let sum = ave = per = 0;

// sum = input1 + input2 + input3 + input4 + input5;
// ave = sum / 5;
// per = ave;
    
// console.log(sum , ave , per);


// 13-Write a program to input month number and print number of days in that month

// let mon = +prompt("Enter your Number ", 1);

// if (mon == (1 || 3 || 6 || 10 || 12))
//     console.log('Days in Month: 31');
// else if (mon == (4 || 5 || 7 || 8 || 11))
//     console.log('Days in Month: 30');
// else if (mon == 2)
//     console.log('Days in Month: 29');
// else
//     console.log('write right answer !');



// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F

// let input1 = +prompt("Enter your Physics ", 95);
// let input2 = +prompt("Enter your Chemistry ", 75);
// let input3 = +prompt("Enter your Biology ", 58);
// let input4 = +prompt("Enter your Mathematics ", 90);
// let input5 = +prompt("Enter your Computer ", 89);

// let sum = input1 + input2 + input3 + input4 + input5;

// let Percentage = sum / 500 * 100;
// console.log("your Percentage is  "+ Percentage + ' %');
// if (Percentage >= 90)
//     console.log('Grad A');
// else if (Percentage >= 80)
//     console.log('Grad B');
// else if (Percentage >= 70)
//     console.log('Grad C');
// else if (Percentage >= 60)
//     console.log('Grad D');
// else if (Percentage >= 40)
//     console.log('Grad E');
// else
//     console.log('Grad F');


// 15- Write a program to print total number of days in month

// let input = +prompt("Enter your Number of month ", 5);

// switch (input) {
//     case 1:
//         case 3:
//     case 6:
//     case 8:
//     case 9:
//     case 11:
//         console.log("30 days in month");
//         break;
    
//     case 2:
//         console.log('29 days in month');
//         break;
    
//         case 4 :
//             case 5 :
//     case 8 :
//         case 10 :
//             case 12:
//                 console.log('31 days in month');
//         break;
    
//     default :
//         console.log('Write not ritht try again');
        
// }
    


// 16- Write a program to check whether an alphabet is vowel or consonant

// let input = prompt("Enter an alphabet ", 'o');
    
// switch (input) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             console.log(input + ' is a vowel.');
//             break;
//         default:
//             console.log(input + ' is a consonant.');
//             break;
// }

// 17- Write a program to find maximum between two numbers

// let input1 = +prompt("Enter your Number ", 3);
// let input2 = +prompt("Enter your Number ", 6);

// switch (true) {
//     case input1 > input2:
//         console.log(input1 + ' is maximim ');
//         break;
//     case input1 < input2:
//         console.log(input2 + ' is maximim ');
//         break;
//     default:
//         console.log("Enter Number only");
    
// }

// 18- Write a program to check whether a number is even or odd

// let input = +prompt("Enter your Number ", 3);

// switch (true) {
//     case input % 2 == 0:
//         console.log(input + ' is Even ');
//         break;
//     case input % 1 ==  0 :
//         console.log(input + ' is Odd ');
//         break;
//     default:
//         console.log("Enter Number only");
    
// }

// 19- Write a program to check whether a number is positive or negative or zero

// let input = +prompt("Enter your Number ", 3);

// switch (true) {
//     case input == 0:
//         console.log(input + ' is Zero ');
//         break;
//     case input > 0 :
//         console.log(input + ' is Pos');
//         break;
//     case input < 0 :
//         console.log(input + ' is Neg');
//         break;
//     default:
//         console.log("Enter Number only");
    
// }

// 20- Write a program to create Simple Calculator

// let input1 = +prompt("Enter your frist Number ", 6);
// let input2 = +prompt("Enter your secend Number ", 6);
// let opp = prompt("Enter your Oppertion (/ , * , + , -)", '+');
// let res = 0; 

// switch (opp) {
//     case '+':
//         res = input1 + input2;
//         console.log(input1 + ' + ' + input2 + ' = ' + res);
//         break;

//     case '-':
//         res = input1 - input2;
//         console.log(input2 + ' - ' + input2 + ' = ' + res);
//         break;
        
//     case '*':
//         res = input1 * input2;
//         console.log(input2 + ' * ' + input2 + ' = ' + res);
//         break;
        
//     case '/':
//         if (input2 !== 0) {
            
//             res = input1 / input2; 
//             console.log(input2 + '/' + input2 + ' =' + res);
//         }
//         break; 
//     default:
//         console.log("Invalid operation.");

    
// }