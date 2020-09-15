const backtotop = document.querySelector("#topBtn");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        backtotop.classList.add("btnEntrance");
        backtotop.style.display = "block";
    } else {
        backtotop.classList.add("btnExit");
        backtotop.style.display = "none";
    }
}

backtotop.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}