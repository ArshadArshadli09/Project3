

const pitcure = document.querySelector("#pitcure")
const bars = document.querySelector(".header-wrapper-menu-bars")



pitcure.addEventListener("click",()=>{
    if(pitcure.getAttribute("class")=="fa-solid fa-bars"){
        pitcure.setAttribute("class","fa fa-close")
        bars.classList.add("higher")
    }
    else{
        pitcure.setAttribute("class","fa-solid fa-bars")
        bars.classList.remove("higher")
    }
})

const div = document.querySelector(".header-wrapper-menu-search")
const icon = document.querySelector("#icon")  
const ul = document.querySelector(".link")
const forIn = document.querySelector(".forin")



icon.addEventListener("click",()=>{
    
    if(   ul.getAttribute("class")=="link"){
        ul.setAttribute("class","ulLi")
        
        forIn.classList.add("block")

    }
    else{
        ul.setAttribute("class","link")
        
        forIn.classList.remove("block")
    }
        
    
})





const swiperWrapper = document.querySelector(".myteam-wrapper");

let counter = 0

fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>{
    for(let user of data){
        counter++
        swiperWrapper.innerHTML += `
        <div class="swiper-slide">
        <a href="#" target="_blank" rel="noopener noreferrer">
            <div class="team-container-boxes-box">
                <div class="team-container-boxes-box-image">
                    <img src="assets/image/cover${counter}.jpg" alt="">
                </div>
                <div class="team-container-boxes-box-content">
                    <h5>${user.name}</h5>
                    <p>${user.company.name}</p>
                    <div class="team-container-boxes-box-content-photo">
                       <a href="https://www.facebook.com/"> <img src="assets/image/icon/facebook.png" alt=""></a>
                       <a href="https://www.instagram.com/"> <img src="assets/image/icon/instagram.png" alt=""></a>
                       <a href="https://www.twitter.com/"> <img src="assets/image/icon/twitter.png" alt=""></a>
                    </div>
                </div>
            </div>
        </a>
      </div>
        
        `
    }
    
}).catch(error=>console.log(error))


