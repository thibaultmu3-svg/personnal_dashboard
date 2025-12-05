const navbarElements = document.querySelectorAll(".class")
let navbar_active = document.querySelector(".class.active")
const highlight = document.querySelector(".nav-highlight")
const days_stats = document.querySelectorAll(".progress")
const datum = document.getElementById("datum")
const date_jour_nbr = new Date()
objectif_card = document.querySelector(".objectifs.card")
todo_list = document.querySelector(".todo-list")

const months = ["january", "february", "march", "april", "mai", "june", "july", "augustus", "september", "october", "november", "december"]

adapt_progress_circle()

//pour la date 
datum.innerHTML = date_jour_nbr.getDate() + " " + months[date_jour_nbr.getMonth()]

// partie navbar 
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


        adapt_progress_circle()
    })
})


function moveHighlight(el) {
    highlight.style.width = `${el.offsetWidth}px`
    highlight.style.left = `${el.offsetLeft}px`
}


// pour le graph
days_stats.forEach((day) => {
    const nombre_heures = Math.floor(Math.random() * 10);
    const pourcentage = nombre_heures * 10;

    day.style.height = pourcentage + "%";
})


function adapt_progress_circle() {
    const day_circle = document.getElementById("day");
    const week_circle = document.getElementById("week");

    //recupérer la quantité de taches accomplies sur le nombre de tache totales 
    // faire ca avec du json

    day_circle.style.strokeDashoffset = 500;
    week_circle.style.strokeDashoffset = 500;

    setTimeout(() => {
        day_circle.style.strokeDashoffset = 400;
        week_circle.style.strokeDashoffset = 150;
    }, 20);
}


