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

var arr5=[1,2,3,4,5,6,7]
let para=document.getElementById('para')
// let del=document.getElementById('del')
// function del(){
//     console.log('Hi')
// }
 const del=()=>{
    arr5.slice(0,-1)
    para.innerHTML=arr5
    console.log(arr5)
}