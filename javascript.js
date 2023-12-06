function panel_click() {
    const button = document.getElementById("left-tab");

    if (button.style.display == "flex") {
        button.style.display="none";
        document.getElementById("content").style.display="block";
        document.getElementById("content").style.paddingRight=0;
    }
    else {
        button.style.display="flex";
        document.getElementById("content").style.display="flex";
        document.getElementById("content").style.paddingRight = document.getElementById("content")?.style.paddingTop
    }

}

function theme_choice() {
    const data_theme = document.documentElement.getAttribute("data-theme");
    const button = document.getElementById("theme-img");

    if (data_theme == "light") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}
