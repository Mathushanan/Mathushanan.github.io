const header=document.querySelector("header");
window.addEventListener("scroll",function(){
header.classList.toggle("sticky",window.scrollY>100);
});

const navItems = document.querySelectorAll('.nav-item');

// Add event listener to each navigation item
navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    // Remove active class from all navigation items
    navItems.forEach(item => item.classList.remove('active'));

    // Add active class to clicked navigation item
    navItem.classList.add('active');
  });
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


  const typedElement = document.querySelector('.typed-out');

  function restartAnimation() {
    typedElement.style.animation = 'none';
    typedElement.offsetHeight; // Trigger reflow to restart animation
    typedElement.style.animation = null;
  }
  
  // Listen for animationend event and restart the animation after 3 seconds
  typedElement.addEventListener('animationend', () => {
    setTimeout(restartAnimation, 3000);
  });

  const TypedElement = document.querySelector('.Typed-out');

  function RestartAnimation() {
    TypedElement.style.animation = 'none';
    TypedElement.offsetHeight; // Trigger reflow to restart animation
    TypedElement.style.animation = null;
  }
  
  // Listen for animationend event and restart the animation after 3 seconds
  TypedElement.addEventListener('animationend', () => {
    setTimeout(RestartAnimation, 3000);
  });


window.onscroll =()=>{

menu.classList.remove('bx');
navlist.classList.remove('open');
menu.classList.remove('fa-bars-staggered','fa-fade');
menu.classList.add('fa-bars');
};


