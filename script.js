const navbarElements = document.querySelectorAll(".class")
let navbar_active = document.querySelector(".class.active")


navbarElements.forEach((el) => {
    const activate = () => {
        el.classList.add("active")
        navbar_active.classList.remove("active")

        //partie content
        const new_content = document.querySelector(`.${el.id}`)
        new_content.classList.add("active")

        const old_content = document.querySelector(`.${navbar_active.id}`)
        console.log(old_content)
        old_content.classList.remove("active")

        navbar_active = el
    }

    el.addEventListener("touchstart", activate, { passive: true })  
    el.addEventListener("pointerdown", activate)
    el.addEventListener("click", activate)
})