const navbarElements = document.querySelectorAll(".class")
let navbar_active = document.querySelector(".class.active")

navbarElements.forEach((el) => {
    el.addEventListener("click", () => {

        //partie navbar
        el.classList.add("active")
        navbar_active.classList.remove("active")

        //partie content
        const new_content = document.querySelector(`.${el.id}`)
        new_content.classList.add("active")

        const old_content = document.querySelector(`.${navbar_active.id}`)
        console.log(old_content)
        old_content.classList.remove("active")

        navbar_active = el
    })
})



navbarElements.forEach((el) => {
    el.addEventListener("onClick", () => {

        //partie navbar
        el.classList.add("active")
        navbar_active.classList.remove("active")

        //partie content
        const new_content = document.querySelector(`.${el.id}`)
        new_content.classList.add("active")

        const old_content = document.querySelector(`.${navbar_active.id}`)
        console.log(old_content)
        old_content.classList.remove("active")

        navbar_active = el
    })
})
