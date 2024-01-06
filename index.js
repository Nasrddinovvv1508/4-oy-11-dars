    // 1-MASALA
// function str(arg=`hello`) {
//     let arr = arg.split(``);
//     let str2 = arr.reverse().join();
//     return str2;
// };



    // 3-MASALA
// let str = `assalom`;
// let arr = str.split(``);
// let counter = 0;

// arr.forEach((v) => {
//     if (v == `a`) {
//         counter++;
//     };

//     if (v == `o`) {
//         counter++;
//     };

//     if (v == `u`) {
//         counter++;
//     };

//     if (v == `i`) {
//         counter++;
//     };

//     if (v == `e`) {
//         counter++;
//     };
// })

// console.log(counter);




    // 4-MASALA
// let str = `radar`;
// let arr = Array.from(str).reverse().join('');

// if (str == arr) {
//     console.log(`Bu so'z palindrom`);
// } else {
//     console.log(`Bu so'z palindrom emas`);
// }



    // 5-MASALA
// let str = `aaaabbbcdd`;
// let counterA = 0;
// let counterB = 0;
// let counterC = 0;
// let counterD = 0;
// let str_arr = str.split('');

// str_arr.forEach((v) => {
//     if (v == `a`) {
//         counterA++;
//     }

//     if (v == 'b') {
//         counterB++;
//     }

//     if (v == `c`) {
//         counterC++;
//     }

//     if (v == 'd') {
//         counterD++;
//     }
// })

// console.log('a', counterA, 'b', counterB, 'c', counterC, 'd', counterD);



    // 9-MASALA
// let arr = ['olma', 'behi', 'anor', 'shaftoli'];
// let arr2 = ['gilos', 'apelsin', 'mandarin'];

// arr.sort();
// arr2.sort();

// let arr3 = arr.concat(arr2);
// console.log(arr3);




    // 10-MASALA
// function areAnagrams(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
    
//     let count1 = {};
//     let count2 = {};
    
//     for (let char of str1) {
//         count1[char] = (count1[char] || 0) + 1;
//     }
    
//     for (let char of str2) {
//         count2[char] = (count2[char] || 0) + 1;
//     }
    
//     return JSON.stringify(count1) === JSON.stringify(count2);
 // }
    
// let string1 = "listen";
// let string2 = "silent";
    
// if (areAnagrams(string1, string2)) {
//     console.log(`${string1} va ${string2} bir-biriga anagrammalar.`);
// } else {
//     console.log(`${string1} va ${string2} bir-biriga anagrammalar emas.`);
// }