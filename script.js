document.addEventListener("DOMContentLoaded", function () {

    const btn = document.querySelector(".btn");

    if (btn) {
        btn.addEventListener("click", function () {

            document.body.classList.add("opened");

        });
    }
    const targetDate = new Date("September 6, 2026 08:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

    const seconds = Math.floor((distance % (1000*60))/1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);

});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight-120){

section.classList.add("show");

}

});

});
