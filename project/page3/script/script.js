let userData = JSON.parse(localStorage.getItem('data'))
let userlogin
userData.forEach(user => {
    userlogin =user.userName
});

document.getElementById('login').innerHTML =`Hi ${userlogin}`



//navbar
window.addEventListener('scroll',function(){
    let windowScroll =window.scrollY
    if(windowScroll > 100){
        $('.navbar').animate({'top':'0px' , 'width':'100%'})
        $('.to-up').css('display', 'flex')
     
    }
    else if (windowScroll < 100)
    {
        $('.navbar').animate({'top':'50px','width':'70%'})
        $('.to-up').css('display', 'none')
    }
    $('.to-up').click(()=>window.scrollTo(0,0)  )
})


// random
let random = document.querySelectorAll('#review-random')

function randomReviews(){
    for (let i = 0; i < random.length; i++) {
        random[i].innerHTML =  Math.round(Math.random()*5000)+`K`
        
    }
}

setInterval( randomReviews , 2000)

// logout 
let logOutBtn = document.getElementById('logOutBtn')
logOutBtn.addEventListener('click',function(){
    localStorage.clear(userData)
    location.href="../page1/index.html";
})



// startpage
$(document).ready(()=>{
     $('#startpage img').fadeOut(2000 ,()=>{
        $('#startpage').slideUp(2000 ,()=>{
            $('#startpage').remove()
            $('body').css('overflow','auto')
        })
     })
    })



//homee
let homee =document.getElementById("homee")
homee.addEventListener("click",function(){


location.href="../page2/home.html#home"
})



//aboutt
let aboutt  =document.getElementById("aboutt")
aboutt .addEventListener("click",function(){


location.href="../page2/home.html#about"
})


//categoryy
let categoryy  =document.getElementById("categoryy")
categoryy .addEventListener("click",function(){


location.href="../page2/home.html#category"
})