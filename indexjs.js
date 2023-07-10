const header=document.querySelector("header");
window.addEventListener("scroll",function(){
header.classList.toggle("sticky",window.scrollY>100);
});

let menu=document.querySelector('.fa-bars');
let navlist=document.querySelector('.navlist');

menu.onclick =()=>{

menu.classList.toggle('bx');
navlist.classList.toggle('open');

};

window.onscroll =()=>{

menu.classList.remove('bx');
navlist.classList.remove('open');

};