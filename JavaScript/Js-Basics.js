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
var customers_data = {
  Ben10: [22, 30, 11, 17, 15, 52, 27, 12],
  Sameer: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
  Zeeshan: [22, 30, 11, 5, 17, 30, 6, 57],
};
var count=0
for(var i in customers_data){
  var obj=customers_data[i]
  for(var j in obj){
    if(obj[i]>20){
      count++
    }
  }
  if(count==5){
    console.log('winner is'+i);
  }
}