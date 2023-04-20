const arrowScroll = document.getElementById('arrow')

const events = ['touchstart', 'click'];

events.forEach((userEvent) => {
arrowScroll.addEventListener(userEvent, scrollTop)
   
})


function scrollTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}



// scroll animation //


const sections = document.querySelectorAll('[data-anima="scroll"]');

if(sections.length){
 
    const windowHalf = window.innerHeight * 0.6;

    function animationScroll(){
        sections.forEach((section) => {
            const sectionsTop = section.getBoundingClientRect().top;
            if(sectionsTop - windowHalf < 0){
                section.classList.add('anima')
            }else if(section.classList.contains('anima')){
                section.classList.remove('anima')
            }
        })

    }



    window.addEventListener('scroll', animationScroll);

}


// menu mobile


const menuHamburguer = document.getElementById('menu-hamburguer')
const ulMenuMobile = document.getElementById('mobile')


menuHamburguer.addEventListener('click', showMenu)

function showMenu(){
    if(ulMenuMobile.classList.contains('hide')){
        ulMenuMobile.classList.remove('hide')
        ulMenuMobile.classList.add('show')
    }else if(ulMenuMobile.classList.contains('show')){
        ulMenuMobile.classList.remove('show')
        ulMenuMobile.classList.add('hide')
    }
}

