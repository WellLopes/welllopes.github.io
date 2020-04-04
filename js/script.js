function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("show")

    document    
        .addEventListener("click",(e) => {
        if(e.target.id == 'modal'){
            document
                .querySelector("#modal")
                .classList
                .remove("show")
        }
    })
}

// Reponsive Menu
let show = true

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const menuButton = menuSection.querySelector(".contact-header")

menuToggle.addEventListener("click", () => {
    
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)

    // Function when menu hamburger shows up. Click contact button, and menu hamburger close and contact box comes up.
    menuButton.addEventListener("click", () => {
        menuSection.classList.toggle("on", show)
        document.body.style.overflow = show ? "hidden" : "initial"
    })

    
    show = !show
})