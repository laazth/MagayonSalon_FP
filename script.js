document.addEventListener("scroll", function () {
    var bookNowButton = document.getElementById("bookNowButton");
    var anotherButton = document.getElementById("anotherButton");

    if (window.scrollY > 200) {
        bookNowButton.classList.add("hidden");
        anotherButton.classList.add("hidden");
    } else {
        bookNowButton.classList.remove("hidden");
        anotherButton.classList.remove("hidden");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function handleAnotherButtonClick() {
    console.log('Another button clicked!');
}
