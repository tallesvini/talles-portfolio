const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        var content = $("#show-menu");
        content.toggleClass("active").css("transition", ".3s ease-in-out");
        icon.classList.toggle("open");
    });
});

function writeName() {
    var element = document.getElementById("nome");

    const text = element.innerHTML.split("");
    element.innerHTML = "";

    text.forEach((letter, i) => {
        setTimeout(() => (element.innerHTML += letter), 115 * i)
    });
}

writeName();

