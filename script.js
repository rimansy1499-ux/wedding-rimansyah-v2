document.addEventListener("DOMContentLoaded", function () {

    const btn = document.querySelector(".btn");

    if (btn) {
        btn.addEventListener("click", function () {

            document.body.classList.add("opened");

        });
    }

});
