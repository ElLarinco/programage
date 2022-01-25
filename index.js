const burguer_btn = document.getElementById("burguer-btn")
const nav_links = document.getElementById("nav-links")

burguer_btn.addEventListener("click", () => {
    nav_links.classList.toggle("show-links")
})

const getFullYear = new Date().getFullYear()
const year = document.getElementById("year")
year.textContent = getFullYear