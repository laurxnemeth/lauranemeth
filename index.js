function addActiveClass(clickedId){
    const topnav = document.getElementById("topnav")
    for (let i = 0; i < topnav.children.length; i++){
        topnav.children[i].classList.remove("active")
    }
    const element = document.getElementById(clickedId);
    element.classList.add("active")
}