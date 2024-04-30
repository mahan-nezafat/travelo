const menu = document.querySelector("#menu");
const listItems = document.querySelectorAll("#list-item");
const list = document.querySelector("#list");
menu.addEventListener("click", () =>{

    if(menu.classList == "menu-btn d-flex"){
        menu.classList.add("open")
        for(listItem of listItems){
        listItem.className = "visible";

        }
        list.className = "untranslate";
    }else if(menu.classList == "menu-btn d-flex open"){
        menu.classList = "menu-btn d-flex"
        for(listItem of listItems){
            listItem.className = ""
    
            }

        // list.className = "translate";

    }

});
