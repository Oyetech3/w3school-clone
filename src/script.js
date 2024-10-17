const back = document.getElementById("back")
const next = document.getElementById("next")
const container = document.getElementById("container")
const menuBar = document.getElementById("menu")
const topics = document.getElementById("topics")
const content = document.getElementById("content")
const backGround = document.getElementById("dark")
const all = document.getElementById("all")


const scrollAmount = container.offsetWidth / 10;  
const mediaScreen = 994

function checkScroll() {
    const maxScrollLeft = container.scrollWidth - container.clientWidth; // Maximum scroll distance
    const currenWidth = window.innerWidth

    if(currenWidth >= mediaScreen) {
        if (container.scrollLeft <= 0) {
            back.style.display = 'none';
            //back.classList.add("hidden");
            //back.classList.remove("block");
        }
        else {
            back.style.display = 'block';
            //back.classList.remove("hidden")
            //back.classList.add("block")
        }
    
        if (container.scrollLeft >= maxScrollLeft) {
            next.style.display = 'none';
            //next.classList.add("hidden")
            //next.classList.remove("block")
        } 
        else {
            next.style.display = 'block';
            //next.classList.remove("hidden")
            //next.classList.add("block")
        }
    }
    else {
        back.style.display = "none"
        next.style.display = "none"
        //back.classList.add('hidden');
        //next.classList.add('hidden');
    }
   
}

checkScroll();

backGround.addEventListener("click", () => {
    all.classList.toggle("dark")
})

menuBar.addEventListener("click", () => {
    topics.classList.toggle("hidden")
})

content.addEventListener("mouseover",() => {
    topics.classList.add("hidden")
})

next.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

back.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

window.addEventListener('resize', checkScroll);
container.addEventListener('scroll', checkScroll);