document.getElementsByClassName("sidebar")[0];

function showSidebar() {
    let sidebar = document.getElementsByClassName("sidebar");
    sidebar[0].style.display = "flex";
}

function hideSidebar() {
    let sidebar = document.getElementsByClassName("sidebar");
    sidebar[0].style.display = "none";
} 