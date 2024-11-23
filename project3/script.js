let menu=document.querySelector("#menu-bar");
let navbor=document.querySelector(".navbor");

menu.oneclick =() =>{
    menu.classList.toggle('fa-times');
    navbor.classList.toggle('active');
}

window.onscroll=()=>{
    if(window.scrollY>60){
        document.querySelector('#scroll-up').classList.add('active')
    }else{
        document.querySelector('#scroll-up').classList.remove('active')
    }
}