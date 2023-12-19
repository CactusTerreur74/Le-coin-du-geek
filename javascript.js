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

/*Partie du Quiz*/
var score1 = 0
function selection() {
    const selecteur = document.getElementById("choix");
    const monChoix = selecteur[selecteur.selectedIndex];
    if (monChoix.value == "0") {
        alert("Bravo ! C'est la bonne réponse");
        score1 = score1 + 1;
    }
    else {
        alert("Ce n'est pas la bonne réponse !");
    }
}
function selection2() {
    const selecteur = document.getElementById("choix2");
    const monChoix2 = selecteur[selecteur.selectedIndex];
    if ((monChoix2.value == "0") || (monChoix2.value == "1")) {
        alert("Bravo ! C'est la bonne réponse");
        score1 = score1 + 1;
    }
    else {
        alert("Ce n'est pas la bonne réponse !");
    }
}
function selection3() {
    var reponse = document.getElementById("Id_Reponse").value;
    if (reponse == "1991") {
        alert("Bravo ! C'est la bonne réponse !")
        score1 = score1 + 1;
    }
    else {
        alert("Ce n'est pas la bonne réponse. Vous êtes sûr de l'avoir bien écrit ?")
    }
}
function resultat1() {
    alert("Votre résultat est de " + score1 + " points !")
}