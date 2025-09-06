document.getElementsByClassName("sidebar")[0];

function showSidebar() {
    let sidebar = document.getElementsByClassName("sidebar");
    sidebar[0].style.display = "flex";
}

function hideSidebar() {
    let sidebar = document.getElementsByClassName("sidebar");
    sidebar[0].style.display = "none";
} 

document.getElementById("year").innerText = new Date().getFullYear();

document.querySelectorAll(".clickable").forEach(img => {
    img.addEventListener("click", () => {
        window.location.href = img.getAttribute("data-url");
    });
});