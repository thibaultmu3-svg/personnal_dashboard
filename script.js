const navbarElements = document.querySelectorAll(".class")
let navbar_active = document.querySelector(".class.active")

navbarElements.forEach((el) => {
    el.addEventListener("click", () => {

        //partie navbar
        el.classList.add("active")
        navbar_active.classList.remove("active")

        //partie content
        const new_content = document.querySelector(".content.active")
        console.log(new_content)

        const old_content = document.getElementById(navbar_active.id)
        old_content.classList.remove("active")

        navbar_active = el
    })
})
// pas tres correct je pense
