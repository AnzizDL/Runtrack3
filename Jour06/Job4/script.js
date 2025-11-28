const btn = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
    });