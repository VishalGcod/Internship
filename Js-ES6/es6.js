// var p = document.getElementById("para");
// data = 10;
// console.log(`the data is = ${data}`);
// var data = 20;
// p.innerHTML = data;
// p.style.fontSize = "50px";

// let sum = 0;
// function thdata(...hel) {
//   for (var i in hel) {
//     sum += hel[i];
//   }
//   return `the data is = ${sum}`;
// }
// console.log(thdata(1, 2, 3, 4, 5));
// p.innerHTML = thdata(1, 2, 3, 4, 5);

// let prod = 1;
// var prodele = (a, b, c, ...rest) => {
//   prod = a * b * c;
//   console.log(prod);
//   for (var i in rest) {
//     prod *= rest[i];
//   }
//   console.log(`the product is = ${prod}`);
// };
// prodele(1, 2, 3, 4, 5);

// var prod1 = 1;
// var eleprod = (a, b = 0, ...rest) => {
//   console.log(a, b);
//   prod1 = a * b;
//   console.log(rest);
//   for (var i in rest) {
//     prod1 *= rest[i];
//     console.log(prod1);
//   }
//   console.log(`product is ${prod1}`);
// };
// eleprod(...[1, 2, 3, 4]);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9];
// let arr3 = [0, ...arr1, ...arr2, 10];
// let arr4 = arr1.concat(arr2);
// console.log([...arr1]);
// console.log([...arr2]);
// console.log(arr3);
// console.log(arr4);

// let obj1 = {
//   name: "john",
// };
// let obj2 = {
//   name2: "wick",
// };
// let obj3 = {
//   ...obj1,
//   ...obj2,
// };
// console.log(obj3);

// const { hello, ...next } = {
//   hello: "hi",
//   name: "gv",
//   time: "notime",
// };

// console.log(hello);
// console.log(next);

// var imp = "vishal";
// var con = (...attach) => {
//   console.log(attach.join(""));
// };
// con("hi", " my name is ", `${imp}`);

// let obj1 = {
//   v1: "hello",
//   v2: "bye",
//   v3: "hi",
//   v4: "what",
//   v5: "are",
// };

// let { v1, v2, v3, v4, v5} = obj1;
// console.log(v1);
// console.log(v2);
// console.log(v5);

// let [t1, t2, t3, t4, t5] = ["hello", "bye", "hi", "what", "are"];
// console.log(t1);
// console.log(t5);
// console.log(t3);

// let fun=(city, state)=>{
//     let obj={city,state}
//     console.log(obj);
// }
// fun('chennai','tamilnadu')

// let func2 = (add) => {
//   let obj2 = {
//     city: add.city,
//     state: add.state,
//     country: "usa"
//   };
//   let { city, state, country } = obj2;
//   console.log("from " + city, `${state} ${country}`);
// };
// func2({ city: "chennai", state: "tamilnadu" });

// let str='hello wonderland from disneyland'
// for(let s of str){
//         console.log(s);
// }

// let arr5=[10000,20000,15000]
// let sum=0
// for(let i of arr5){
//     sum=i+5000
//     console.log(sum);
//     // sum=0
// }

// let spr1={name:'gv'}
// let spr2={
//     ...spr1
// }
// console.log(spr2);

// let arg=(...nums)=>{
//     console.log(nums);
// }
// arg(1,2,3,4,5)

// arr5=[...arr5,50000,30000]
// console.log(arr5);

// var arr1=[1,2,3]
// var arr2=arr1
// arr2.push(4)
// console.log(arr1);
// console.log(arr2);

// var arr5=[1,2,3,4,5,6,7]
// let para=document.getElementById('para')
// // let del=document.getElementById('del')
// // function del(){
// //     console.log('Hi')
// // }
//  const del=()=>{
//     arr5.slice(0,-1)
//     para.innerHTML=arr5
//     console.log(arr5)
// }

// let object = {
//   fname: "john",
//   mname: "constantine",
//   lname: "wick",
//   age: 30,
//   p1: "assassin",
//   p2: "magician",
// };

// let { fname, ...rest } = object;

// console.log(fname);
// console.log(rest);

// const name = "this is ezio auditore";
// const name1 = name.split(" ");
// const [word, fword, sword, tword] = name1;
// console.log(word + ` ${fword} ${sword} ${tword}`);

// let fn = "harry";
// let ln = "potter";
// let age = 28;

// const object2 = {
//   fn,
//   ln,
//   age,
// };

// console.log(object2);

// console.log(fn, "", ln);

// let {}

// const object3 = [
//   { id: 1, title: "dev", plat: "react", sal:300000 },
//   { id: 2, title: "te", plat: "jira", sal:200000 },
//   { id: 3, title: "sup", plat: "py", sal:100000 },
// ];
// const arr = [1, 2, 3, 4, 5, 6, 7];

// let sum=object3.filter(e=>e.id<3)
// .map(e=>e.sal-1000)
// .reduce((a,b)=>a+b)
// console.log(sum);
// let sum2=object3.filter(e=>e.sal==100000)
// console.log(sum2);

// let arr2=arr.map(e=>{
//     e+=5
//     // console.log(e);
//     return e
// })
// console.log(arr2);
// // console.log(arr2);

// arr.map(e=>{
//   if (arr[e] == 4) {
//     let arr6 = arr.slice(arr[e],-1);
//     console.log(arr6);
//   }
// })

// let arr3=arr.map(e=>{
//     return e*5
// })
// console.log(arr3);

// let arr4=object3.map(e=>{
//     return` id is${e.id},
//     platform is ${e.plat},
//     title is ${e.title}`
// })
// console.log(arr4);

// let arr5 = [2, 3, 5, 7]

// let newvar=arr5.map(function(element, index, array){
//     // console.log(element);
//     // console.log(index);
//     // console.log(array);
//     return element;
// }, 80);
// console.log(newvar);

// var arr7=arr.filter(e=>{
//     console.log(e);
//     return e%2==0
// })
// arr7.map(f=>{
//     return f*2
// })
// console.log(arr7);

// var arr8=arr.filter(e=>e%2!=0)
// console.log(arr8);
// let arr9=arr8.map(e=>e*e)
// console.log(arr9);
// let arr10=arr9.reduce((a,b)=>a+b)
// console.log(arr10);

// function fiveAndGreaterOnly(arr) {
//     let arr1=arr.filter(e=>e%2==0)
//     return arr1
//   }
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//   function fiveCharactersOrFewerOnly(arr) {
//     let arr2=arr.filter(e=>e.length<=5)
//     return arr2
//   }
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

//   function peopleWhoBelongToTheIlluminati(arr){

//     var arr3=arr.filter(e=>e.member==true)
//     return arr3
//   }
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));

// function ofAge(arr){
//     var arr4=arr.filter(e=>e.age>18)
//     return arr4
//   }
//   console.log(ofAge([
//       { name: "Angelina Jolie", age: 80 },
//       { name: "Eric Jones", age: 2 },
//       { name: "Paris Hilton", age: 5 },
//       { name: "Kayne West", age: 16 },
//       { name: "Bob Ziroll", age: 100 }
//   ]));

// function doubleNumbers(arr){
//     let arr5=arr.map(e=>e*2)
//     return arr5
//   }

//   console.log(doubleNumbers([2, 5, 100]));

// function stringItUp(arr){
//     var arr6=arr.map(e=>String(e))
//     return arr6
//   }

//   console.log(stringItUp([2, 5, 100]));

// function capitalizeNames(arr){
//     var arr7=arr.map(e=>e.charAt(0).toUpperCase()+e.slice(1))
//     // console.log(arr7);
//     return arr7
//   }

//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// function namesOnly(arr){
//     let arr8=arr.map(e=>e.name)
//     return arr8
//   }

//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));

//   function makeStrings(arr){
//     let arr9=arr.map(e=>{
//         if(e.age>18){
//             console.log(`${e.name} can go to the movie`);
//         }else{
//             console.log(`${e.name} is underaged`);
//         }
//     })
//     // return arr9
// }

//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));

// function readyToPutInTheDOM(arr) {
//   let arr9 = arr.map((e) =>{

//    let a= `<h1>${e.name}</h1><h2>${e.age}</h2>`
//   });
//   return arr9;
// }
// console.log(
//   readyToPutInTheDOM([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// function total(arr) {
//     let arr10=arr.reduce((a,b)=>a+b)
//     console.log(arr10);
//  }
 
//  console.log(total([1,2,3])); 

const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 100] }
  ]


  let stu0=students.map(e=>{
    var score=e.scores
    let avg=0
    let tot=0
    let arr=[]
    for(let i in score){
        tot+=score[i]
        avg=tot/3
        if(avg>=90){
            var v=`{name:${e.name},score:${[e.scores]},average:${avg}}`
            // console.log(v);
            arr.push(v)
            console.log(arr);
        }
    }
//     const stud={}
// stud.name=students.name
// stud.scores=students.score
// stud.average=avg
// console.log(stud);
})



