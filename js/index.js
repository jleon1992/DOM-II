// Your code goes here




// Destination
let choose = document.querySelector('.content-destination h2');
let destinations = document.querySelector('.off.destination');
// Selects Container
let container = document.querySelector('.container.home');
// Fun Bus
let logo = document.querySelector('.logo-heading');
// img
let image = document.querySelector('img');
// paragraphs
let paragraph = document.querySelector('p');

// Hover event for nav items 1
let nav = document.querySelectorAll(".nav a").forEach(item => {
    item.addEventListener("mouseenter", function(event){
        event.target.style.fontSize = "2rem";
        event.target.style.color = "pink";

        event.target.preventDefault();

    setTimeout(function(){
        event.target.style.fontSize = "";
    }, 500)
    } )
})

// Opens a list of choices 2
choose.addEventListener('click', function(event){
    console.log('clicked');
    openList();
})

// closes list 3
document.addEventListener('keydown', function(event){
    closeList();
})


// changes color when scrolling 4
document.addEventListener('wheel', function(event){
    if(event.target.style.backgroundColor === "white"){
    event.target.style.backgroundColor = "blue";
} else {
    event.target.style.backgroundColor = "white";
}});

// Resize max-width == 100% 5
window.addEventListener('resize', function(event){
    container.style.maxWidth = '100%';
})

// Double-Click 6
logo.addEventListener('dblclick', function(event){
    console.log('clicked');
    logo.style.color = "red";
})

// Load listener 7
window.addEventListener('load', function(e){
    image.style.border = "20px dashed grey";
});


// right click 8
logo.addEventListener('contextmenu', function(e){
    alert('dont copy')
});

// Mouse leave remove image 9
image.addEventListener('mouseleave', function(e){
    image.style.display = "none";
})

// Select paragraph
paragraph.addEventListener('copy', function(e){
    paragraph.style.color = "yellow";
    console.log('copy');
})

// List functions
function openList(event){
    destinations.classList.remove('off');
}
function closeList(event){
    destinations.classList.add('off')
}