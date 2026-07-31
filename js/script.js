const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        btnTopo.classList.add("show");

    }else{

        btnTopo.classList.remove("show");

    }

});

btnTopo.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const track = document.querySelector(".carousel-track");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

function cardWidth(){

    return document.querySelector(".member-card").offsetWidth + 25;

}

next.addEventListener("click",()=>{

    track.scrollBy({

        left:cardWidth(),

        behavior:"smooth"

    });

});

prev.addEventListener("click",()=>{

    track.scrollBy({

        left:-cardWidth(),

        behavior:"smooth"

    });

});