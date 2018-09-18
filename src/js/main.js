console.log(`Hello World from app.js!`)

document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.desktop-nav').classList.toggle('show');
    document.querySelector('.burger').classList.toggle('open');
})


// var tl = new TimelineMax();
// tl.fromTo('.footer-text', 1, {opacity: 0, left: -2000});