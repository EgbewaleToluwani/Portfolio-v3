let activeFilter = "webdev";
let observer;

const changeFilterOps=()=> {
        activeFilter = "cyber"
        setActiveChip(activeFilter)
}

const changeFilterStudio=()=> {
        activeFilter = "webdev"
        setActiveChip(activeFilter)
}

const modeSwitch=()=> {    
    let mode = document.documentElement.getAttribute("data-mode")
    let modeLabel = document.getElementById("mode-label")
    window.scrollTo({top: 0, behavior: "auto"})
    mode==="studio"
    ?(document.documentElement.setAttribute("data-mode", "ops"), renderRoles("ops"), renderCopy("ops"), modeLabel.textContent="ops", changeFilterOps(), renderProjects())
    :(document.documentElement.setAttribute("data-mode", "studio"), renderRoles("studio"), renderCopy("studio"), modeLabel.textContent="studio", changeFilterStudio(), renderProjects());
}


const renderRoles=(mode)=> {
    const grid = document.getElementById("roles-grid")
    grid.innerHTML = ""
    
    ROLES[mode].forEach(element => {
        const roleCard = document.createElement("div")
        roleCard.className="role-card"
        roleCard.setAttribute("data-reveal", "")
        roleCard.innerHTML=`<h2>${element.title}</h2><p>${element.body}</p>`
        grid.appendChild(roleCard)
        observer.observe(roleCard)
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
        projectCard.setAttribute("data-reveal", "")
        const demoButton = element.link.demo
            ? `<a target="_blank" href="${element.link.demo}">Live Project</a>`
            : "";
        const githubButton = element.link.github
            ? `<a target="_blank" href="${element.link.github}">Github</a>`
            : "";
        const imagePreview = element.image
            ? `<img class="image-preview" src="${element.image}" alt="">`
            : "";
        projectCard.innerHTML=`<div class="projectImage">${imagePreview}</div><h3>${element.name}</h3><p>${element.tagline}</p><div class="projectTags">${element.tags.map((tag)=> `<span>#${tag} </span>`).join("")}</div><div class="projectLinks" style="display: flex; gap: 10px; justify-content: right;">${demoButton} ${githubButton}</div>`
        grid.appendChild(projectCard)
        observer.observe(projectCard)
    })
}

const setActiveChip=(filterValue)=> {
    document.querySelectorAll(".filter-chip").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.filter === filterValue)
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

const fadeIn=()=> {
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed")
                observer.unobserve(entry.target)
            }
        })
    })

    const elements = document.querySelectorAll("[data-reveal]")
    elements.forEach((element) => {
        observer.observe(element)
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("switchMode").addEventListener('click', modeSwitch)

    fadeIn()

    renderRoles("studio")

    setActiveChip("webdev")

    renderProjects()

    document.querySelectorAll(".filter-chip").forEach((button) => {
        button.addEventListener("click", ()=> {
            activeFilter = button.dataset.filter
            setActiveChip(activeFilter)
            renderProjects()
        })
    })

    renderCopy("studio")

    const form = document.getElementById("form")
    form.addEventListener("submit", async (event)=> {
        event.preventDefault()
        const formData = new FormData(form)
        formData.append("access_key", "3205c44f-0670-4131-8bc7-d12fe4f31d15");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
        const result = await response.json()
        const formSent = document.getElementById("formSent")
        
        
        if (result.success) {
            formSent.style.color="green"
            formSent.textContent="Your message has been sent successfully."
            form.reset()
        } else {
            formSent.style.color="red"
            formSent.textContent="Your message was not sent. Please try again."
        } 
    })

})