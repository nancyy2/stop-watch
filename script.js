let currDate=new Date()
let h3tag=document.querySelector(".date")
h3tag.innerHTML=`${currDate.getDate()}/${currDate.getMonth()+1}/${currDate.getFullYear()}`

let sec=0;
let min=0;
let hours=0;
let h1tag=document.querySelector(".time")
h1tag.innerHTML=`${hours.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`

const stopWatch=function(){
    sec+=1;
    if(sec===60){
        min+=1;
        sec=0;
    }
    if(min===60){
        min=0;
        sec=0;
        hours+=1;
    }
    
h1tag.innerHTML=`${hours.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
}
let startbtn=document.querySelector('.btn1');
let stopbtn=document.querySelector('.btn2');
let resetbtn=document.querySelector('.btn3');
let clockRef;
startbtn.addEventListener('click',()=>{
    clockRef = setInterval(stopWatch,1000)
});

stopbtn.addEventListener('click',()=>{
    clearInterval(clockRef)
});

resetbtn.addEventListener('click',()=>{
    clearInterval(clockRef)
     sec=0;
     min=0;
     hours=0;
h1tag.innerHTML=`${hours.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
});