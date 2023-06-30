// console.log();     numbers
// var no1 = 1;
// var no2 = 2;
// var sum = no1 + no2;
// console.log(typeof (0 / 0));
// console.log(0 / 5);
// console.log(3 * "a");
// console.log("a" * 3);
// console.log(5 - "c");
// console.log(5 + "v");
// console.log("v" + 5);
// console.log(sum);
// var num1 = 10;
// var num2='10'
// var num3='11.1'
// var num4=11.1
// var num5='abc'
// console.log(num1.toString())
// console.log(parseInt(num2))
// console.log(parseFloat(num3))
// console.log(parseInt(num3))
// console.log(num3.toString())
// console.log(parseInt(num5))
// var strFloat=87.9870456
// console.log(strFloat.toFixed())
// console.log(strFloat.toFixed(2))
// console.log(strFloat.toFixed(6))
// console.log(strFloat.toFixed(7))

// strings
// var str1='i love js'
// console.log(typeof(str1))
// var str2='i \'love\' js'
// console.log(str2)
// var str3="i \"love\" js"
// console.log(str3)
// var str4='i "love" js'
// var str5="i 'love' js"
// console.log(str4)
// console.log(str5)

// string function

// var str1='i love js '
// console.log(str1.length)
// console.log(str1.indexOf('i'))
// console.log(str1.lastIndexOf('i'))
// console.log(str1.slice(0,5));
// console.log(str1.slice(-5));
// console.log(str1.slice(6));

// console.log(str1.substr(2,5));
// console.log(str1.toLocaleLowerCase());
// console.log(str1.toLocaleUpperCase());

// concat

// var str1='java'
// var str2='script'
// console.log(str1.concat(" "+str2));
// console.log(str1+" "+str2);

// trim
// var str1 = "    ,java script,    ";
// console.log(str1.trim());

// charat
// console.log(str1.charAt(6));

// split
// console.log(str1.split(" "));
// console.log(str1.split(","));

console.clear();

// var string = "thisiscalledjavascript";
// 'console.log(string.substring(0, 3));
// console.log(string.slice(4, 12));'

// var myvar;
// console.log(myvar);
// myvar = null;
// console.log(myvar);

// var ch = 10;
// if (ch > 12) {
//   console.log(true);
// } else if (ch > 20) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// var time = 0;
// switch (time) {
//   case 4:
//     console.log("sleep");
//     break;
//   case 5:
//     console.log("sleep");
//     break;
//   case 6:
//     console.log("sleep");
//     break;
//   case 7:
//     console.log("wakeup");
//     break;
//   default:
//     console.log("bye");
// }
// console.log(false + false);
// console.log(12 - "6");
// console.log(1+2+"hello"+5)
// console.log(undefined===null)
// console.log('hello'+ +'guys');
// console.log(true=='true');
// console.log(null==" ");
// console.log(!!'false',!!'true',!!'false'===!!'true');
// console.log(!!'true'==!!'true');
// console.log(!!'true');

// if (true) {
//   console.log(true);
// } else {
//   console.log("false");
// }

// console.log(typeof String(true));
// console.log(typeof String(false));
// console.log(typeof String(1));
// console.log(typeof String(-1.5));
// console.log(typeof String("hello"));
// console.log(typeof String("true"));
// console.log(typeof String(" "));
// console.log(typeof String(undefined));
// console.log(typeof String(null));

// console.log(typeof(Boolean(" ")));
// console.log(typeof(Boolean(0)));
// console.log(typeof(Boolean(-0)));
// console.log(typeof(Boolean(500)));
// console.log(typeof(Boolean('hi')));
// console.log(typeof(Boolean("Hello")));
// console.log(typeof(Boolean(NaN)));
// console.log(typeof(Boolean(undefined)));
// console.log(typeof(Boolean(null)));
// console.log(typeof(Boolean(-100)));
// console.log(typeof(Boolean(false)));

// console.log(typeof(Number(null)));
// console.log(typeof(Number(undefined)));
// console.log(typeof(Number(true)));
// console.log(typeof(Number(false)));
// console.log(typeof(Number(12)));
// console.log(typeof(Number('hello')));
// console.log(typeof(Number("-12.00")));
// console.log(typeof(Number('\n')));
// console.log(typeof(Number('12s')));
// console.log(typeof(Number()));

// var arr = ["asdf", "sd", "something", "right", "position"];
// var max = " ";
// for (var i in arr) {
//   if (arr[i].length > max.length) {
//     max = arr[i];
//     // console.log(arr[i]);
//   }
// }
// console.log(max);

// var a = [NaN, 0, 15, false, -22, "", undefined, 47, null, 94];
// for (var i in a) {
//   //   console.log("type", typeof a[i], a[i]);
//   if (
//     !isNaN(a[i]) &&
//     a[i] != false &&
//     a[i] != undefined &&
//     a[i] != null &&
//     a[i] != ""
//   ) {
//     console.log(a[i]);
//   }
// }
// var b = [NaN, 0, 15, false, -22, "", undefined, 47, null, 94];
// for (var i in b) {
//   if (typeof(b[i]) ==typeof(1)) {
//     console.log(b[i]);
//   }
// }
// var num1 = 0;
// var num2 = 0;
// var c = [1, 3, 6, 2, 5, 10];
// for (i in c) {
//   if ((i % 2) == 0) {
//     num1 += c[i];
//   } else {
//     num2 += c[i];
//   }
// }
// var d = [];
// d[0]=num1
// d[1]=num2

// console.log(d);

// var arr1 = [1,2,3];
// var arr2 = [3,4,5];
// for( var i in arr1){
//     for(var j in arr2){
//         if(arr1[i]==arr2[j]){
//             console.log(arr2[j]);
//         }
//     }
// }

// var arr1 = [1, 2, 3];
// var arr2 = [100, 2, 1, 10];
// var arr3=arr1.concat(arr2)
// console.log(arr3);
// // let set1=new Set(arr3)
// // console.log(set1);
// for(var i=0; i<arr3.length; i++){
//     for(var j=i+1; j<arr3.length; j++){
//         if(arr3[i]===arr3[j]){
//             arr3[i]=" "
//             arr3[j]=" "
//         }
//         console.log(arr3);
//     }
// }

// const student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// var count = 0;
// for (var i in student) {
//   count++;
// }
// console.log(count);

// var student =  {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
// }
// delete(student.rollno)
// console.log(student);

// for(var i in student){
//     console.log(i);
// }

// const library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// for (var i in library) {
//   var obj = library[i];
//   if (obj.readingStatus == true)
//     console.log("You still read " + obj.author + " by " + obj.title);
// }
// var customers_data = {
//   Ben10: [22, 30, 11, 17, 15, 52, 27, 12],
//   Sameer: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
//   Zeeshan: [22, 30, 11, 5, 17, 30, 6, 57],
// };
// var count = 0;
// for (var i in customers_data) {
//   var obj2 = customers_data[i];
//   console.log(obj2);
//   for (var j in obj2) {
//     if (obj2[j] > 20) {
//       console.log(obj2[j]);
//       count++;
//       if (count == 5) {
//         console.log(i + "winner");
//       }
//     }
//   }
//   // console.log(num);
// }
// var customers_data = {
//   Ben10: [22, 30, 11, 17, 15, 52, 27, 12],
//   Sameer: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
//   Zeeshan: [22, 30, 11, 5, 17, 30, 6, 57],
// };

// var { ben, ...rest } = customers_data;
// console.log(rest);

// var no1 = (name) => console.log(name);
// no1("gv");

// // note
// // person?.name?.firstname

// var arr = [1, 2, 3, 4, 5];
// var arr2 = [6, 7, 8, 9];
// var arr3 = arr.concat(arr2);
// console.log(toString(arr3));

// var a = "hello";
// console.log(arr3.splice(1, 5, 10, 11));
// console.log(arr3);
// var arr4 = [1, 5, 7, 8, 3, 5, 4];
// console.log(arr4.sort());
// // console.log('reverse ${a}');

// console.log(arr4.reverse());
// console.log(arr3.splice(2, 1));

// console.log(arr3.splice(0, 1));

// for (var i in arr) {
//   if (i % 2 != 0) continue;
//   console.log(" odd numbers are " + arr[i]);
// }

// // arr-prob-1
// arr = [1, "a", 2, "b", 3, "c", 6, "d", 7, "e", 8, "f"];
// console.log(arr.reverse());

// var ar1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];
// var ar2 = [7, 13, 25, 46, 58, 70, 84];

// var count = 0;
// for (let i = 0; i < ar1.length; i++) {
//   for (let j = 0; j < ar2.length; j++) {
//     if (ar1[i] == ar2[j]) {
//       count++;
//     }
//     if (count >= 1) console.log("element found: yes");
//   }
// }

// var no1 = [34,23,45,55,67,77];
//   for (var j = 0; j < no1.length-1; j++) {
//     if (no1[j] < no1[j+1]) {
//       console.log("true strictly increasing");
      
//     }
//     else if(no1[j] > no1[j+1]){
//       console.log("TRUE  strictly decreasing");
//       break
//     }else{
//         console.log("False");
//     }
//   }

//   var no=[22,8, 301, 404, 35, 99]
//   for (let i = 0; i < no.length; i++) {
//     const element = no[i]%10;
//     if(element==2){
//         no[i]+='nd'
//     }
//     else if(element==8){
//         no[i]+='th'
//     }
//     else if(element==1){
//         no[i]+='st'
//     }
//     else if(element==4){
//         no[i]+='th'
//     }
//     else if(element==5){
//         no[i]+='th'
//     }
//     else if(element==9){
//         no[i]+='th'
//     }
//     console.log(no);
//   }
// var sum
// var four=46
//  var r=[25, 10, 5, 2, 1]
//  for(var i in r){
//     sum+=r[i]
//     if(four==sum){
//         console.log(r[i]);
//     }
//     else{
//         if(four!=sum){
//             sum+=r[i]
//         }
//     }
// }

// var str="javascript is cool" 
// var str1=str.split('')
// for(var i in str1){
//     if(str1[i]=='a'){
//         str1[i]=4;
//     }
//     else if(str1[i]=='e'){
//         str1[i]=3;
//     }
//     else if(str1[i]=='i'){
//         str1[i]=1;
//     }
//     else if(str1[i]=='o'){
//         str1[i]=0;
//     }
//     else if(str1[i]=='s'){
//         str1[i]=5;
//     }
// }
// console.log(str1.join(''));

// var ch='Good, better, best. Never let it rest. "Til your good is better and your better is" best.'
// var count=0
// var ch1=ch.split('')
// for(i in ch){
    
//     if(ch1[i]=='a'||ch1[i]=='e'||ch1[i]=='i'||ch1[i]=='o'||ch1[i]=='u'){
//         count++
//     }
// }
// console.log(count);

// var name=prompt('enter val')
// var caser='The Quick Brown Fox'
// var caser1=caser.split('')
// for(var i in caser1){
//     if(/[A-Z]/.test(caser1[i])){
//         caser1[i]=caser1[i].toLowerCase()
//     }

//     else if(/[a-z]/.test(caser1[i])){
//         caser1[i]=caser1[i].toUpperCase()
//     }
// }
// console.log(caser1.join(''));

// for(var i=0; i<=10; i++){
//     if(i%2==0){
//         console.log(i+'is even');
//     }
//     else{
//         console.log(i+'is odd');
//     }
// }

var v="There is exactly one space between each word and no punctuation is used."
console.log(v);
    var v1=v.split(' ')
    console.log(v1);
    for(var i in v1){
        if((v1[i].length)%2==0){
            v1[i].reverse()
        }
    }
    console.log(v1);


