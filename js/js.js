const btns = document.querySelectorAll(".btn");
const showe = document.querySelector(".showe");
const hidden = document.querySelector(".hidden");


btns.forEach((btn, index)=>{
    showe.addEventListener("click" , ()=>{
        btn.classList.add("hidden")
        showe.classList.add("hidden")
        hidden.classList.remove("hidden")
    })
    hidden.addEventListener("click" , ()=>{
        btn.classList.remove("hidden")
        showe.classList.remove("hidden")
        hidden.classList.add("hidden")
    })
})




