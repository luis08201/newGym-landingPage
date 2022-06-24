window.addEventListener("scroll", () => {
    let headerTop = document.getElementById("headerTop");
    headerTop.classList.toggle("sticky", window.scrollY > 0);
})