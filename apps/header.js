


let imgUser = './Assets/user/me.png'

let header = document.createElement('header')
let body = document.querySelector('body')
body.insertBefore(header,body.firstElementChild)
header.innerHTML = 
`
<div class="container">
    <div class="logo">
        <img src="./Assets/image/1b47f9d0e595.png" >
    </div>
    <div class="search">
        <div class="svg-search">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </div>
        <div class="input">
            <input type="search" placeholder="Search..">
        </div>
    </div>
    <div class="menu">
        <div class="svg home"  data-tab-target="#home" >
            <svg   fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
        </div>
        <div class="svg messenger"  data-tab-target="#messenger" >
            <svg  fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
        </div>
        <div class="svg findpeople"  data-tab-target="#findpeople" >
            <svg   fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fill-rule="evenodd"></path></svg>
        </div>
        <div class="svg notifications"  data-tab-target="#notifications" >
            <svg   fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
        </div>
        <div class="svg profileimg"  >
            <img src="${imgUser}" >
        </div>
    </div>
</div>

<div class="header-img-profile">
    <div class="content-pop">
        <div class="option"  data-tab-target="#profileimg">
            <div class="svg-option">
                <svg aria-label="Profile" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 32 32" width="16"><path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path></svg>
            </div>
            <span > Profile</span>
        </div>
        <div class="option"">
            <div class="svg-option">
                <svg aria-label="Saved" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 32 32" width="16"><path d="M28.7 32c-.4 0-.8-.2-1.1-.4L16 19.9 4.4 31.6c-.4.4-1.1.6-1.6.3-.6-.2-.9-.8-.9-1.4v-29C1.8.7 2.5 0 3.3 0h25.4c.8 0 1.5.7 1.5 1.5v29c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM4.8 3v23.9l9.4-9.4c.9-.9 2.6-.9 3.5 0l9.4 9.4V3H4.8z"></path></svg>
            </div>
            <span>Saved</span>
        </div>
        <div class="option">
            <div class="svg-option">
                <svg aria-label="Settings" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 32 32" width="16"><path d="M31.2 13.4l-1.4-.7c-.1 0-.2-.1-.2-.2v-.2c-.3-1.1-.7-2.1-1.3-3.1v-.1l-.2-.1v-.3l.5-1.5c.2-.5 0-1.1-.4-1.5l-1.9-1.9c-.4-.4-1-.5-1.5-.4l-1.5.5H23l-.1-.1h-.1c-1-.5-2-1-3.1-1.3h-.2c-.1 0-.1-.1-.2-.2L18.6.9c-.2-.5-.7-.9-1.2-.9h-2.7c-.5 0-1 .3-1.3.8l-.7 1.4c0 .1-.1.2-.2.2h-.2c-1.1.3-2.1.7-3.1 1.3h-.1l-.1.2h-.3l-1.5-.5c-.5-.2-1.1 0-1.5.4L3.8 5.7c-.4.4-.5 1-.4 1.5l.5 1.5v.5c-.5 1-1 2-1.3 3.1v.2c0 .1-.1.1-.2.2l-1.4.7c-.6.2-1 .7-1 1.2v2.7c0 .5.3 1 .8 1.3l1.4.7c.1 0 .2.1.2.2v.2c.3 1.1.7 2.1 1.3 3.1v.1l.2.1v.3l-.5 1.5c-.2.5 0 1.1.4 1.5l1.9 1.9c.3.3.6.4 1 .4.2 0 .3 0 .5-.1l1.5-.5H9l.1.1h.1c1 .5 2 1 3.1 1.3h.2c.1 0 .1.1.2.2l.7 1.4c.2.5.7.8 1.3.8h2.7c.5 0 1-.3 1.3-.8l.7-1.4c0-.1.1-.2.2-.2h.2c1.1-.3 2.1-.7 3.1-1.3h.1l.1-.1h.3l1.5.5c.1 0 .3.1.5.1.4 0 .7-.1 1-.4l1.9-1.9c.4-.4.5-1 .4-1.5l-.5-1.5V23l.1-.1v-.1c.5-1 1-2 1.3-3.1v-.2c0-.1.1-.1.2-.2l1.4-.7c.5-.2.8-.7.8-1.3v-2.7c0-.5-.4-1-.8-1.2zM16 27.1c-6.1 0-11.1-5-11.1-11.1S9.9 4.9 16 4.9s11.1 5 11.1 11.1-5 11.1-11.1 11.1z"></path></svg>
            </div>
            <span>Settings</span>
        </div>
        <div class="option">
            <div class="svg-option">
                <svg aria-label="Switch Accounts" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 32 32" width="16"><path d="M10.3 10.7c0-.8-.7-1.5-1.5-1.5H4.9C7.2 5.4 11.4 3 16 3c3.6 0 7 1.5 9.5 4.1.5.6 1.5.6 2.1.1.6-.6.6-1.5.1-2.1-3-3.2-7.3-5-11.7-5C10.7 0 6 2.5 3 6.7V3.5C3 2.7 2.3 2 1.5 2S0 2.7 0 3.5v7.2c0 .8.7 1.5 1.5 1.5h7.3c.8 0 1.5-.6 1.5-1.5zm20.2 9.1h-7.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3.8C24.8 26.6 20.6 29 16 29c-3.6 0-7-1.5-9.5-4.1-.5-.6-1.5-.6-2.1-.1-.6.6-.6 1.5-.1 2.1 3 3.2 7.3 5 11.7 5 5.3 0 10-2.5 13-6.7v3.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7.2c0-.8-.7-1.4-1.5-1.4z"></path></svg>
            </div>
            <span>Switch Accounts</span>
        </div>
        <hr>
        <div class="option log-out" >
            <div class="svg-option ">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="16px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g></svg>
            </div>
            <span>Log Out</span>
        </div>
    </div>
</div>

<div class="header-overlay"></div>


`

// show and hide pop
let headerImgProfile = document.querySelector('.header-img-profile')
let profileimg = document.querySelector('.profileimg')
let headerOverlay = document.querySelector('.header-overlay')

profileimg.addEventListener('click',()=>{
    headerImgProfile.classList.toggle('active')
    headerOverlay.classList.toggle('active')
})

headerOverlay.addEventListener('click',()=>{
    headerImgProfile.classList.toggle('active')
    headerOverlay.classList.toggle('active')
})







// main-user ---------------------------------------------------------------------------------------



 let mainMser = document.querySelector('.main-user')
 mainMser.innerHTML = `

    <div class="content">
        <!--  -->
        <div class="my-profile" >
            <div class="my-img" data-tab-target="#profileimg" >
                <img src="${imgUser}">
            </div>

            <div class="content-us">
                <div class="username-profile"  data-tab-target="#profileimg">
                    <span >divluffy</span>
                </div>
                <div class="my-name">
                    <span>ibrahim jomaa</span>
                </div>
            </div>

            <div class="btn-last-card">
                <span>Switch</span>
            </div>
        </div>

        <!--  -->
        <div class="sugg-users">
            <div class="head-sugg">
                <span>Suggestions For You</span>
                <span style="cursor: pointer;">See All</span>
            </div>

            <div class="content-sugg">

                <div class="card-sugg">
                    <div class="sugg-img">
                        <img src="./Assets/user/699.jpg" alt="">
                    </div>

                    <div class="info-sugg">
                        <div class="username-profile">
                            <span>divluffy</span>
                        </div>
                        <div class="my-name">
                            <span>ibrahim jomaa</span>
                        </div>
                    </div>

                    <div class="sugg-btn-last-card">
                        Follow
                    </div>
                </div>

                
                <div class="card-sugg">
                    <div class="sugg-img">
                        <img src="./Assets/user/43678.jpg" alt="">
                    </div>
            <div class="info-sugg">
                <div class="username-profile">
                    <span>divluffy</span>
                </div>
                <div class="my-name">
                    <span>ibrahim jomaa</span>
                </div>
            </div>

                    <div class="sugg-btn-last-card">
                        Follow
                    </div>
                </div>

                
                <div class="card-sugg">
                    <div class="sugg-img">
                        <img src="./Assets/user/4533.jpg" alt="">
                    </div>
            <div class="info-sugg">
                <div class="username-profile">
                    <span>divluffy</span>
                </div>
                <div class="my-name">
                    <span>ibrahim jomaa</span>
                </div>
            </div>

                    <div class="sugg-btn-last-card">
                        Follow
                    </div>
                </div>

                
                <div class="card-sugg">
                    <div class="sugg-img">
                        <img src="./Assets/user/3235.jpg" alt="">
                    </div>
            <div class="info-sugg">
                <div class="username-profile">
                    <span>divluffy</span>
                </div>
                <div class="my-name">
                    <span>ibrahim jomaa</span>
                </div>
            </div>

                    <div class="sugg-btn-last-card">
                        Follow
                    </div>
                </div>

                
                <div class="card-sugg">
                    <div class="sugg-img">
                        <img src="./Assets/user/3743.jpg" alt="">
                    </div>
                <div class="info-sugg">
                    <div class="username-profile">
                        <span>divluffy</span>
                    </div>
                    <div class="my-name">
                        <span>ibrahim jomaa</span>
                    </div>
                </div>

                <div class="sugg-btn-last-card"> Follow</div>

                </div>
            </div>
        </div> 
    </div>

    <div class="company-info">
        <div class="company-help">
            <a href="">About</a>
            <a href="">Help</a>
            <a href="">Press</a>
            <a href="">API</a>
            <a href=""> Jobs</a>
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a href="">Locations</a>
            <a href="">Top Accounts</a>
            <a href="">Hashtags</a>
            <a href="">Language</a>
            <a href="">Terms</a>
        </div>
        <div class="c">© 2021 INSTAGRAM FROM FACEBOOK</div>
    </div>




`


// for-user ---------------------------------------------------------------------------------------


let userInfo = [
    {username:"divluffy",fname:"ibrahim jomaa",followers:456,following:15,postsNumber:14, 'imgProfile':imgUser},
    {username:"cleverqazi",fname:"Rafeh Qazi",followers:580,following:546,postsNumber:23, 'imgProfile':'./Assets/user/3235.jpg'},
    {username:"eraricamehra",fname:"Erarica Mehra",followers:460,following:76,postsNumber:11,'imgProfile':'./Assets/user/3743.jpg'},
    {username:"pablothecoder",fname:"Pablo the coder",followers:1673,following:76,postsNumber:4,'imgProfile':'./Assets/user/43678.jpg'},
    {username:"technology.hub",fname:"Technology HUB",followers:4536,following:54,postsNumber:25,'imgProfile':'./Assets/user/453.jpg'},
    {username:"poster_creatr",fname:"poster maker",followers:45678,following:56,postsNumber:55,'imgProfile':'./Assets/user/4533.jpg'},
    {username:"chrisagnew.codes",fname:"Chris Agnew",followers:76354,following:14,postsNumber:6,'imgProfile':'./Assets/user/453453.jpg'},
    {username:"vickyknutsen",fname:"Vicky Knutsen",followers:456,following:456,postsNumber:2,'imgProfile':'./Assets/user/45373.jpg'},
    {username:"kallehallden",fname:"Kalle Hallden",followers:98950,following:14,postsNumber:9,'imgProfile':'./Assets/user/4563.jpg'},
    {username:"mikeohearn",fname:"Mike O'Hearn",followers:456,following:456,postsNumber:3,'imgProfile':'./Assets/user/5463453.jpg'},
    {username:"_its_moe_21",fname:"Moe Hamner",followers:45678,following:14,postsNumber:10,'imgProfile':'./Assets/user/69.jpg'},
    {username:"jyse",fname:"Jessy",followers:456,following:456,postsNumber:0,'imgProfile':'./Assets/user/699.jpg'},
    {username:"drbradysalcido",fname:"Dr. Brady Salcido",followers:54637,following:14,postsNumber:1,'imgProfile':'./Assets/user/873.jpg'},
    {username:"divluffy",fname:"ibrahim jomaa",followers:456,following:15,postsNumber:14, 'imgProfile':imgUser},
    {username:"cleverqazi",fname:"Rafeh Qazi",followers:580,following:546,postsNumber:23, 'imgProfile':'./Assets/user/3235.jpg'},
    {username:"eraricamehra",fname:"Erarica Mehra",followers:460,following:76,postsNumber:11,'imgProfile':'./Assets/user/3743.jpg'},
    {username:"pablothecoder",fname:"Pablo the coder",followers:1673,following:76,postsNumber:4,'imgProfile':'./Assets/user/43678.jpg'},
    {username:"technology.hub",fname:"Technology HUB",followers:4536,following:54,postsNumber:25,'imgProfile':'./Assets/user/453.jpg'},
    {username:"poster_creatr",fname:"poster maker",followers:45678,following:56,postsNumber:55,'imgProfile':'./Assets/user/4533.jpg'},
    {username:"chrisagnew.codes",fname:"Chris Agnew",followers:76354,following:14,postsNumber:6,'imgProfile':'./Assets/user/453453.jpg'},
    {username:"vickyknutsen",fname:"Vicky Knutsen",followers:456,following:456,postsNumber:2,'imgProfile':'./Assets/user/45373.jpg'},
    {username:"kallehallden",fname:"Kalle Hallden",followers:98950,following:14,postsNumber:9,'imgProfile':'./Assets/user/4563.jpg'},
    {username:"mikeohearn",fname:"Mike O'Hearn",followers:456,following:456,postsNumber:3,'imgProfile':'./Assets/user/5463453.jpg'},
    {username:"_its_moe_21",fname:"Moe Hamner",followers:45678,following:14,postsNumber:10,'imgProfile':'./Assets/user/69.jpg'},
    {username:"jyse",fname:"Jessy",followers:456,following:456,postsNumber:0,'imgProfile':'./Assets/user/699.jpg'},
    {username:"drbradysalcido",fname:"Dr. Brady Salcido",followers:54637,following:14,postsNumber:1,'imgProfile':'./Assets/user/873.jpg'}
]




let userPosts = [
    {numberpost:0  ,content:'./Assets/posts/3235.jpg', likes:254,  likes2:254},
    {numberpost:1  ,content:'./Assets/posts/3743.jpg', likes:786,  likes2:786},
    {numberpost:2  ,content:'./Assets/posts/43678.jpg', likes:76,  likes2:76},
    {numberpost:3  ,content:'./Assets/posts/453.jpg', likes:456,  likes2:456},
    {numberpost:4  ,content:'./Assets/posts/4533.jpg', likes:876,  likes:876},
    {numberpost:5  ,content:'./Assets/posts/453453.jpg', likes:456,  likes2:4563},
    {numberpost:6  ,content:'./Assets/posts/45373.jpg', likes:5, likes2:5},
    {numberpost:7  ,content:'./Assets/posts/4563.jpg', likes:456, likes2:456},
    {numberpost:8  ,content:'./Assets/posts/5463453.jpg', likes:4563, likes2:4563},
    {numberpost:9  ,content:'./Assets/posts/69.jpg', likes:546,  likes2:546},
    {numberpost:10  ,content:'./Assets/posts/699.jpg', likes:0, likes2:0},
    {numberpost:11   ,content:'./Assets/posts/873.jpg', likes:45,  likes2:45},
    {numberpost:12  ,content:'./Assets/posts/3453.jpg', likes:456, likes2:456},
    {numberpost:13  ,content:'./Assets/posts/3235.jpg', likes:254,  likes2:254},
    {numberpost:14  ,content:'./Assets/posts/3743.jpg', likes:786,  likes2:786},
    {numberpost:15  ,content:'./Assets/posts/43678.jpg', likes:76,  likes2:76},
    {numberpost:16  ,content:'./Assets/posts/453.jpg', likes:456,  likes2:456},
    {numberpost:17  ,content:'./Assets/posts/4533.jpg', likes:876,  likes:876},
    {numberpost:18  ,content:'./Assets/posts/453453.jpg', likes:456,  likes2:4563},
    {numberpost:19  ,content:'./Assets/posts/45373.jpg', likes:5, likes2:5},
    {numberpost:20  ,content:'./Assets/posts/4563.jpg', likes:456, likes2:456},
    {numberpost:21  ,content:'./Assets/posts/5463453.jpg', likes:4563, likes2:4563},
    {numberpost:22  ,content:'./Assets/posts/69.jpg', likes:546,  likes2:546},
    {numberpost:23  ,content:'./Assets/posts/699.jpg', likes:0, likes2:0},
    {numberpost:24   ,content:'./Assets/posts/873.jpg', likes:45,  likes2:45},
    {numberpost:25  ,content:'./Assets/posts/3453.jpg', likes:456, likes2:456}
]



//add storys
let storyContent = document.querySelector('.story-content')

for (let i = 0; i < userInfo.length; i++) {

    

storyContent.innerHTML += `
<div class="story-user">
    <div class="img-user">
        <img src="${userInfo[i].imgProfile}" alt="">
    </div>
    <div class="username-user">
        <span>${userInfo[i].username}</span>
    </div>
    </div>
    
`

}

//add posts


let posts = document.querySelector('.posts')



for (let x = 0; x < userPosts.length; x++) {


posts.innerHTML += 
`
<div class="post-user">
<div class="post-head">
    <div class="img-user">
        <img src="${userInfo[x].imgProfile}" alt="">
    </div>
    <div class="user-info">
        <span>${userInfo[x].username}</span>
    </div>
    <div class="post-option">
        <svg aria-label="More options" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
    </div>
</div>

<div class="post-content" >
    <img src="${userPosts[x].content}" class-"pop-photos">
</div>

<div class="react-post">
    <div class="event-post">
        <div class="svg-event event-love" onclick="plusLikes(${x})">
            <svg aria-label="Like" class="no" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
            <svg aria-label="Unlike" class="yes" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
        </div>

        <div class="svg-event event-comment"><svg aria-label="Comment" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg></div>
        <div class="svg-event event-send"><svg aria-label="Share Post" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg></div>
    </div>
    <div class="save-post">
        <svg aria-label="Save" class="off" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
        <svg aria-label="Remove" class="on" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path></svg>
    </div>
</div>

<div class="number-love-post">
    <span class="event-add-like">${userPosts[x].likes}</span> likes
</div>

<div class="add-comment-post">
    <div class="content-comment">
        <div class="emojis">
            <svg aria-label="Emoji" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
        </div>
        <div class="text-comment">
            <textarea placeholder="Add a comment.."></textarea>
        </div>
        <div class="post-comment">
            Post
        </div>
    </div>
</div>
    `
}

//for save post or no
let savePost =document.querySelectorAll('.save-post')

savePost.forEach(e=> {
    e.addEventListener('click',()=>{
        e.classList.toggle('active')
    })
 });


//for add love post or no

let eventLove =document.querySelectorAll('.event-love')
eventLove.forEach(love=>{
    love.addEventListener('click',()=>{  
        love.classList.toggle('active')

        
  
    })
 });


// add numbers likes  - edit soon
let numberLovePost = document.querySelectorAll('.number-love-post')

function plusLikes(index){
    let n1 = userPosts[index].likes
     numberLovePost[index].innerHTML =  (n1+1)+ " likes"
}













// profileimg ------------------------------------------------------------------------------------------------------------------------

//head-profile  


let headProfile =document.querySelector('.head-profile')
headProfile.innerHTML =
`
<div class="img">
<img src="${imgUser}" alt="">
</div>
<div class="profile-info">
<div class="colu colu-1">
    <div class="username">
        <span>${userInfo[0].username}</span>
    </div>
    <div class="edit-profile-btn">
        <button>Edit Profile</button>
    </div>
    <div class="options">
        <svg aria-label="Options" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fill-rule="evenodd"></path></svg>
    </div>
</div>

<div class="colu colu-2">
    <div class="posts-all">
        <span>8 posts</span>
    </div>
    <div class="followers-all">
        <span>5342 followers
        </span>
    </div>
    <div class="following-all">
        <span>548 following</span>
    </div>
</div>
<div class="colu colu-3">

    <textarea class="description" disabled>sONU
i'm ibrahim from gaza🎉🎉
i love programing and anime🎉🎉
😍😍❤️💯👏🔥🔥🔥🔥😇
best anime for me <<
talk me any time🙏
🚩🚩🚩div.jo2022@gmail.com🚩🚩🚩
    </textarea>
</div>
</div>
`





//posts-profile  




let cellsPosts =document.querySelector('.cells-posts')

for (let p = 0; p < userPosts.length; p++) {
 
cellsPosts.innerHTML += `
<div class="cell">
<div class="background-post">
    <img src="${userPosts[p].content}">
</div>
<div class="reacts">
    <div class="react-loved">
        <div class="svg">
            <svg aria-label="Unlike" class="_8-yf5 " fill="#fff" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
        </div>
        <span>457</span>
    </div>
    <div class="react-comments">
        <div class="svg">
            <svg aria-label="Comment" class="_8-yf5 " fill="#fff" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>  
        </div>
        <span>0</span>
    </div>
</div>
</div>
`
}






// for notifications
let notificationsPage =document.querySelector('.notifications-content')
for (let n = 0; n < userInfo.length; n++) {

notificationsPage.innerHTML +=
`
<div class="cell-notice">
<div class="img-user">
    <img src="${userInfo[n].imgProfile}" alt="">
</div>
<div class="event-notice">
    <span class="user">${userInfo[n].username}</span>
    <span class="ret">liked your photo.</span>
    <span class="times">1h</span>
</div>
<div class="img-notice">
    <img src="${userPosts[n].content}" alt="">
</div>
</div>
`

}




// explore --------------------------------------------------------------------------------------------------------------------------



let exploreContent =document.querySelector('.explore-content')

for (let f = 0; f < userInfo.length; f++) {
  
exploreContent.innerHTML += `
<div class="cell-explore">
<div class="background-post">
    <img src="${userPosts[f].content}">
</div>
<div class="reacts">
    <div class="react-loved">
        <div class="svg">
            <svg aria-label="Unlike" class="_8-yf5 " fill="#fff" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
        </div>
        <span>457</span>
    </div>
    <div class="react-comments">
        <div class="svg">
            <svg aria-label="Comment" class="_8-yf5 " fill="#fff" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>  
        </div>
        <span>0</span>
    </div>
</div>
</div>

`
}

// messenger --------------------------------------------------------------------------------------------------------------------------
































// log out
let logOut = document.querySelector('.log-out')
logOut.addEventListener('click', ()=>{
    location.assign('../index.html')
})


//for tabs movis ****************************************************************************
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('[data-tab-content]')



tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContent.forEach(tabcont =>{
            tabcont.classList.remove('active')
        })
        target.classList.add('active')

    })
})



