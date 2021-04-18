const navbar = document.querySelector('#navbar');
const menu1 = document.querySelector('#menu1');
const menu2 = document.querySelector('#menu2');
const hamburger = document.querySelector('#hamburger');

function checkWidth(){

    if(window.innerWidth <= 500){

        navbar.style.width = 50 + 'px';

        menu1.style.transform = 'translateY(-500px)';

        navbar.style.borderRadius = '0 0 10px 0';

        hamburger.classList.remove('hide');

        hamburger.style.transform = 'translateX(-65px)';




    } else {

        navbar.style.width = 100 + '%';

        hamburger.classList.add('hide');

        menu1.style.transform = 'translateY(0)';

        navbar.style.borderRadius = '0 0 0 0';

        hamburger.style.transform = 'translateX(0)';


    }

}

function openSidebar(){

    hamburger.removeEventListener('click', openSidebar);

    hamburger.addEventListener('click', closeSidebar);

    hamburger.style.color = 'black';

    hamburger.innerText = 'X';

    menu2.style.left = 0;


}

function closeSidebar(){

    hamburger.addEventListener('click', openSidebar);

    hamburger.removeEventListener('click', closeSidebar);

    hamburger.style.color = 'white';

    hamburger.innerHTML = '&#9776;';

    menu2.style.left = '-1000px';


}

function defaultCloseSideBar(){

    menu2.style.left = '-1000px';

}

hamburger.addEventListener('click', openSidebar);

let repeat = setInterval(checkWidth, 100);

defaultCloseSideBar();

