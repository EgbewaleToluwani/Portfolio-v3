let activeFilter = "all";

const modeSwitch=()=> {    
    let mode = document.documentElement.getAttribute("data-mode")
    let modeLabel = document.getElementById("mode-label")
    mode==="studio"
    ?(document.documentElement.setAttribute("data-mode", "ops"), renderRoles("ops"), renderCopy("ops"), modeLabel.textContent="ops")
    :(document.documentElement.setAttribute("data-mode", "studio"), renderRoles("studio"), renderCopy("studio"), modeLabel.textContent="studio");
}


const renderRoles=(mode)=> {
    const grid = document.getElementById("roles-grid")
    grid.innerHTML = ""
    
    ROLES[mode].forEach(element => {
        const roleCard = document.createElement("div")
        roleCard.className="role-card"
        roleCard.innerHTML=`<h2>${element.title}</h2><p>${element.body}</p>`
        grid.appendChild(roleCard)
    })
}

const renderProjects=()=> {
    const grid = document.getElementById("projects-grid")
    grid.innerHTML = ""
    const shownCards = PROJECTS.filter((card)=> card.category === activeFilter)
    const listToRender = activeFilter === "all" ? PROJECTS : shownCards
    listToRender.forEach(element => {
        const projectCard = document.createElement("div")
        projectCard.className="project-card"
        projectCard.innerHTML=`<h3>${element.name}</h3><p>${element.tagline}</p><div>${element.tags.map((tag)=> `<span>#${tag} </span>`).join("")}</div>`
        grid.appendChild(projectCard)
    })
}

const renderCopy=(mode)=> {
    const eyebrow = document.getElementById("hero-eyebrow")
    const heroLine = document.getElementById("hero-line")
    const heroLead = document.getElementById("hero-lead")
    const bio = document.getElementById("about-bio")
    const bringH = document.getElementById("bring-heading")
    eyebrow.innerText = COPY[mode].kicker
    heroLine.innerText = COPY[mode].heroLine
    heroLead.innerText = COPY[mode].lead
    bio.innerText = COPY[mode].bio
    bringH.innerText = COPY[mode].bringHeading
}



document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("switchMode").addEventListener('click', modeSwitch)
    renderRoles("studio")
    renderProjects()
    document.querySelectorAll(".filter-chip").forEach((button) => {
        button.addEventListener("click", ()=> {
            document.querySelectorAll(".filter-chip").forEach((btn) => {
                btn.classList.remove("active")
            })
            button.classList.add("active")
            activeFilter = button.dataset.filter
            renderProjects()
        })
    })
    renderCopy("studio")
})