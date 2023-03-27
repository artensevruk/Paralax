"use strict"

window.onload = function () {
    const paralax = document.querySelector(".paralax");

    if(paralax) {
        const content = document.querySelector('.paralax_container');
        const clouds = document.querySelector('.clauds');
        const mountains = document.querySelector('.mountains');
        const human = document.querySelector('.people');

        const forClounds = 40;
        const forMountains = 20;
        const forHuman = 10;

        const speed =0.05;


        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParalaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);


            clouds.style.cssText= `transform: translate(${positionX / forClounds}%,${positionY / forClounds}%);`;
            mountains.style.cssText= `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`;
            human.style.cssText= `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;

            requestAnimationFrame(setMouseParalaxStyle);
        }
        setMouseParalaxStyle();


        paralax.addEventListener('mousemove', function (e) {

            const paralaxWidth = paralax.offsetWidth;
            const paralaxHeight = paralax.offsetHeight;


            const coordX = e.pageX - paralaxWidth / 2;
            const coordY = e.pageY - paralaxHeight / 2;


            coordXprocent = coordX / paralaxWidth * 100;
            coordYprocent = coordY / paralaxHeight * 100;
        });
    }

}