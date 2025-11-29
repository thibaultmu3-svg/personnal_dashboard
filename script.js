const navbarElements = document.querySelectorAll(".class")
let navbar_active = document.querySelector(".class.active")
const highlight = document.querySelector(".nav-highlight")

moveHighlight(navbar_active)

navbarElements.forEach((el) => {
    el.addEventListener("click", () => { // on verra si ajout pour la tablette car ca avait fonctionné a un moment

        if (el === navbar_active) return;// verifie si deja actif
        //partie navbar
        navbar_active.classList.remove("active")

        moveHighlight(el)

        const onTransitionEnd = (event) => {
            // Vérifie que c’est la pastille qui a fini sa transition
            if (event.target !== highlight) return

            el.classList.add("active")               // ajouter active au nouveau bouton
            highlight.removeEventListener("transitionend", onTransitionEnd)
        }

        highlight.addEventListener("transitionend", onTransitionEnd)// écoute lorsque transition est finie

        //partie content
        const new_content = document.querySelector(`.${el.id}`)
        new_content.classList.add("active")

        const old_content = document.querySelector(`.${navbar_active.id}`)
        old_content.classList.remove("active")

        navbar_active = el
    })
})


function moveHighlight(el) {
    highlight.style.width  = `${el.offsetWidth}px`
    highlight.style.left   = `${el.offsetLeft}px`
}