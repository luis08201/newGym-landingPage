let hamburgerBtn = document.getElementById("hamburgerBtn");
let headerTop = document.getElementById("headerTop");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");

    let nav = document.getElementById("nav");
    nav.classList.toggle("sticky");

    if(hamburgerBtn.classList.contains("active")){
         nav.classList.add("dark");
         headerTop.classList.add("dark");
    }else{
        nav.classList.remove("dark");
        headerTop.classList.remove("dark");
    }
})