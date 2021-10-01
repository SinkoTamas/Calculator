let boxArr=document.querySelectorAll(".box")
boxArr.forEach(obj=> obj.addEventListener("click",myCalc))
function myCalc(){
    console.log(this.innerHTML)
    let x= this.innerHTML
    let box1= document.querySelector('.boxResult')
    if(x=='C')
    box1.innerHTML=''
    else if(x=='=')
    box1.innerHTML=eval(box1.innerHTML)
    else
    box1.innerHTML+=x
}