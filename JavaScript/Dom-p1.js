// var bik=document.getElementsByClassName('image')
// console.log(bik)

// var bik1=document.getElementById('heading')
// console.log(bik1)

// var bik2=document.getElementsByTagName('image img')
// console.log(bik2)

// var bik3=document.getElementsByTagName('img')
// console.log(bik3)

// var bik4=document.querySelector('.image')
// console.log(bik4);

// var bik5=document.querySelectorAll('p')
// console.log(bik5);

var cdn = document.getElementById('countDown');
// var bgImg=document.getElementsByTagName('body')
var inicdn = cdn.innerHTML;

// function click1(){
//     var cdn=document.getElementById('btn')
//     var cdnupdate=Number(cdn.innerHTML)
//     cdnupdate+=1
//     cdn.innerHTML=cdnupdate

// }

var btn=document.getElementById('btn')
btn.onclick=function(){
    alert('button clicked')
    var interval=setInterval(() => {
        if(inicdn==9||inicdn==5){
            document.body.style.backgroundImage="url('/Internship/src/images/skyrim.jpeg')"
            document.body.style.color= 'orange'
        }
        else if(inicdn==8||inicdn==3){
            document.body.style.backgroundImage= "url('/Internship/src/images/daysgone.jpeg')"
            document.body.style.color= 'red'   
        }
        else if(inicdn==7||inicdn==2){
            document.body.style.backgroundImage= "url('/Internship/src/images/Assassinpirate.webp')"
            document.body.style.color= 'purple'      
        }
        else if(inicdn==6||inicdn==1){
            document.body.style.backgroundImage= "url('/Internship/src/images/farcry5.jpeg')"  
            document.body.style.color= 'green'    
        }else{
            document.body.style.backgroundImage= "url('/Internship/src/images/gtav.jpeg')" 
            document.body.style.color= 'hotpink' 
            // cdn.innerHTML='THANK YOU' 
        }
        if(inicdn>0){
        inicdn-=1
        cdn.style.fontSize=inicdn*1 +'rem'
        cdn.innerHTML=inicdn
    }
    }, 1000);
    function stop() {
        clearInterval(interval);
      }
}

