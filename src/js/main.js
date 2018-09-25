console.log(`Hello World from app.js!`)

document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.desktop-nav').classList.toggle('show');
    document.querySelector('.burger').classList.toggle('open');
    
    TweenMax.staggerFrom('.desktop-nav ul li a', 1, {opacity: 0, top: -2000, ease:Power4.easeOut}, 0.1);
})

window.onload = function() {
    TweenMax.staggerFrom(".icons", 2, {scale:0.5, opacity:0, delay:0.5, ease:Power4.easeOut}, 1);
    TweenMax.staggerFrom(".cast-grid", 2, {opacity:0, xPercent: -100, delay:0.5, ease:Power4.easeOut}, 1);

}


let grid = document.querySelectorAll('.cast-grid div');

for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('click', function() {
        document.querySelectorAll('cast-grid div').classList.toggle('showHoverContent');
    })
    
}

