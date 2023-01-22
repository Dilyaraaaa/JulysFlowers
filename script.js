let condition = true
let start = 0
let end = 0
function forwards(){
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })

    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    condition = false
}

function backwards(){
    anime({
        targets: '.menu-small',
        translateX: ['0' , '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })

    anime({
        targets: '.stick',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })

    condition = true
}


$('.menu_small_icon').click(function(){
    if (condition){
        forwards() 
    }else{
        backwards()
    }
})

$('.container').on('touchstart', function(even){
    start = even.originalEvent.touches[0].pageX;

})
$('.container').on('touchend', function(even){
    end = even.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition){
        forwards()
    }else if(start - end >= 100 && !condition){
        backwards()
    }
})

let links = document.querySelectorAll('.scroll')
let targetID
links.forEach(function(element){
    element.addEventListener('click',function(event){
        event.preventDefault()
        targetID = element.getAttribute('href')
        document.querySelector(targetID).scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    })
})


document.querySelector("#sub").onclick = function(){

    let catalog_more = document.querySelector('.catalog_more')
    catalog_more.innerHTML += '<div class="lern_more_img"><a href="/description.html"> <img class="img-catalog" src="/img/image 40.png"> </a><a href="/description.html"> <img class="img-catalog" src="/img/image 41.png"> </a><a href="/description.html"> <img class="img-catalog" src="/img/image 42.png"> </a><a href="/description.html"> <img class="img-catalog" src="/img/image 43.png"> </a><a href="/description.html"> <img class="img-catalog" src="/img/image 44.png"> </a><a href="/description.html"> <img class="img-catalog" src="/img/image 45.png"> </a><a href="/description.html"> <img class="img-catalog" src="/img/image 46.png"> </a><a href="/description.html"> <img class="img-catalog" src="/img/image 47.png"> </a><a href="/description.html"> <img class="img-catalog" src="/img/image 48.png"> </a><a href="/description.html"> <img class="img-catalog" src="/img/image 49.png"> </a><a href="/description.html"> <img class="img-catalog" src="/img/image 50.png"> </a><a href="/description.html"> <img class="img-catalog" src="/img/image 51.png"> </a></div>'
    
    let btn = document.querySelector(".btn")
    btn.remove()
}



$(document).ready(function(){
    $('.slider').bxSlider();
  });