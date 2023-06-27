
var img=document.querySelectorAll(".image-1");
var right=document.getElementById("right");
var left=document.getElementById("left");

let a=1;
 Slide(a);

right.addEventListener("click",function(){
        Slide((a+=1));
})
left.addEventListener("click",function(){
    Slide((a-=1));
})

function Slide(element){
    if(element>img.length){
        a=1;
    }
    if(element<1){
        a=img.length;
    }
    for(let l=0; l<img.length; l++){
        img[l].style.display="none";
    }
    img[a-1].style.display="block";
}