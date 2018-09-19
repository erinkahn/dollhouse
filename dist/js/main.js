console.log(`Hello World from app.js!`);

document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.desktop-nav').classList.toggle('show');
    document.querySelector('.burger').classList.toggle('open');

    TweenMax.staggerFrom('.desktop-nav ul li a', 1, { opacity: 0, top: -2000, ease: Power4.easeOut }, 0.1);
});
//# sourceMappingURL=main.js.map
