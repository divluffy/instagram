let inUser = document.querySelector('.username')
let labelUser = document.querySelector('.labeluser')
let inPass = document.querySelector('.password')
let labelPass = document.querySelector('.labelpass')
let showPass =  document.querySelector('.show-pass')
let btnLogin =  document.querySelector('.btn-login')


inUser.addEventListener('keypress',()=>{
    labelUser.classList.add('on')
})

inPass.addEventListener('keypress',()=>{
    labelPass.classList.add('on')
    showPass.classList.add("active")
})


showPass.addEventListener('click',()=>{
    showPass.classList.toggle('on')
    if(inPass.type == "text"){
        inPass.type = "password"
    }else{
        inPass.type = "text"

    }

})


btnLogin.onclick = ()=>{

    location.assign('/home.html')
}