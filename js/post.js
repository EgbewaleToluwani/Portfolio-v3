const renderPost=()=> {
    const params = new URLSearchParams(window.location.search)
    const slug = params.get("slug")    
    const post = POSTS.find(p => p.id === slug)

    if (post === undefined) {
        const pnf = document.getElementById("page-not-found")
        pnf.innerHTML=`
            <h2>Page Not Found</h2>
            <p>Check the URL spelling and try again. Or go back to all posts.</p>
        `
        return
    }
    
    const title = document.getElementById("post-title")
    const date = document.getElementById("post-date")
    const body = document.getElementById("post-body")

    title.textContent = post.title
    date.textContent = post.date
    body.innerHTML = post.body
    
}


document.addEventListener("DOMContentLoaded", ()=> {
    renderPost()
})