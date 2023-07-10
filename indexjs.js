const header=document.querySelector("header");
window.addEventListener("scroll",function(){
header.classList.toggle("sticky",window.scrollY>100);
});



let menu = document.querySelector('.fa-bars');
let navlist = document.querySelector('.navlist');
let closeBar = document.querySelector('.close-bar');

menu.onclick = () => {
  menu.classList.toggle('bx');
  navlist.classList.toggle('open');
  
  if (menu.classList.contains('bx')) {
    menu.classList.remove('fa-bars');
    menu.classList.add('fa-bars-staggered','fa-fade');
    navlist.classList.add('mobile-navlist','shadow-lg');
  } else {
    menu.classList.remove('fa-bars-staggered','fa-fade');
    menu.classList.add('fa-bars');
    navlist.classList.remove('mobile-navlist','shadow-lg');
  }
};

window.addEventListener('resize', () => {
    if (window.innerWidth > 890) {
      navlist.classList.remove('mobile-navlist','shadow-lg');
      menu.classList.remove('fa-bars-staggered','fa-fade');
      menu.classList.add('fa-bars');
    }
  });





window.onscroll =()=>{

menu.classList.remove('bx');
navlist.classList.remove('open');

};