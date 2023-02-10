// login form
let userName= document.getElementById('name')
let email= document.getElementById('email')
let password= document.getElementById('password')
let btnLogin =document.getElementById('btnLogin')
let users =[]

btnLogin.addEventListener('click',function(){
    if(correctName()==true && correctEmail()==true && correctPassword() ==true){
        let userData = {
            userName:userName.value,
            email:email.value,
            password:password.value,
        }
        users.push({userName , email , password}=userData)
        localStorage.setItem('data',JSON.stringify(users))
        location.href="../page2/home.html";
        // document.getElementById('error').innerHTML = ``//
    }
})



function correctName(){
    let entercode = /^[A-Za-z]+$/
    if(entercode.test(userName.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML = `<div class="alert alert-danger">Name Invalid...!</div>`
    }
}
function correctEmail(){
    let entercode =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(entercode.test(email.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML = `<div class="alert alert-danger">Email Invalid...!</div>`
    }
}
function correctPassword(){
    let entercode = /^[0-9]*$/
    if(entercode.test(password.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML = `<div class="alert alert-danger">Password Invalid...!</div>`
    }
}




// alert 

let alert = document.getElementById('alert')

alert.addEventListener('click' , function(){
    swal({
        title: "مــــعــــلــــــش هه",
        timer: 4000
      });
})




