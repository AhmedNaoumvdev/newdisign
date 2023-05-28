const icon = document.getElementById("humbergerr");
const menu = document.getElementById("ull");

icon.addEventListener("click" , dropmenu);
function dropmenu(){
    if(menu.style.display == 'flex'){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "flex";
    }
}

