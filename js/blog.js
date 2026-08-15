let blogOrder = "newest"
let observer;

const setActiveChip=(filterValue)=> {
    document.querySelectorAll(".filter-chip").forEach((button) => {
            button.classList.toggle("active", button.dataset.filter === filterValue)
    })
}

const renderBlogs=()=> {
    const grid = document.getElementById("posts-grid")
    grid.innerHTML = ""

    if (blogOrder === "newest") {
        POSTS.sort((a,b) => {
            return new Date(b.date) - new Date(a.date)
        })
    } else {
        POSTS.sort((a,b) => {
            return new Date(a.date) - new Date(b.date)
        })
    }

    POSTS.forEach((post)=> {
        const blogCard = document.createElement("div")
        blogCard.classList.add("project-card")
        blogCard.setAttribute("data-reveal", "")
        blogCard.innerHTML = `
            <h3>${post.title}</h3>
            <span>${post.date}</span>
            <p>${post.excerpt}</p>
            <p><a href="post.html?slug=${post.id}">Full Post</a></p>
        `
        grid.appendChild(blogCard)
        observer.observe(blogCard)
    })
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



document.addEventListener("DOMContentLoaded", ()=>{
    fadeIn()
    renderBlogs()
    setActiveChip(blogOrder)

    document.querySelectorAll(".filter-chip").forEach((button) => {
        button.addEventListener("click", ()=> {
            blogOrder = button.dataset.filter
            setActiveChip(blogOrder)
            renderBlogs()
        })
    })
})