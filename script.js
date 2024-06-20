const open = document.querySelector(".burger");
const close = document.querySelector(".mark");
const menu = document.getElementById("menu");

open.addEventListener("click", ()=>{
    close.style.display = "flex"
    open.style.display = "none";
    menu.style.display = "flex"
})

close.addEventListener("click", ()=>{
    close.style.display = ""
    open.style.display = "";
    menu.style.display = ""
})