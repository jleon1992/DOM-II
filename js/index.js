// Your code goes here

// Hover event for nav items 1
let nav = document.querySelectorAll(".nav a").forEach(item => {
    item.addEventListener("mouseenter", function(event){
        event.target.style.fontSize = "2rem";
        event.target.style.color = "pink";


    setTimeout(function(){
        event.target.style.fontSize = "";
    }, 500)
    } )
})


// Destination
let choose = document.querySelector('.content-destination h2');
let destinations = document.querySelector('.off.destination');

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

// Resize


// List functions
function openList(event){
    destinations.classList.remove('off');
}
function closeList(event){
    destinations.classList.add('off')
}