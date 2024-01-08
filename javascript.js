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
var score2=0
var score1 = 0
function selection1() {
    const selecteur = document.getElementById("choix1");
    const monChoix = selecteur[selecteur.selectedIndex];
    if (monChoix.value == "0") {
        score1 = score1 + 1;
    }
}
function selection2() {
    const selecteur = document.getElementById("choix2");
    const monChoix2 = selecteur[selecteur.selectedIndex];
    if ((monChoix2.value == "0") || (monChoix2.value == "1")) {
        score1 = score1 + 1;
    }

}
function selection3() {
    var reponse = document.getElementById("Id_Reponse").value;
    if (reponse == "1991") {
        score1 = score1 + 1;
    }
 }
 function selection4() {
    const selecteur = document.getElementById("choix4");
    const monChoix4 = selecteur[selecteur.selectedIndex];
    if (monChoix4.value == "0") {
        score2 = score2 + 1;
    }
}

function selection5() {
    const selecteur = document.getElementById("choix5");
    const monChoix5 = selecteur[selecteur.selectedIndex];
    if ((monChoix5.value == "0") || (monChoix5.value == "1")) {
        score2 = score2 + 1;
    }
}

function selection6() {
    var reponse = document.getElementById("Id_Reponse6").value;
    if (reponse == "Minecraft") {
        score2 = score2 + 1;
    }
 }
function resultat1() {
    alert("Votre résultat est de " + score1 + " points sur la partie sur l'informatique !")
}

function resultat2() {
    alert("Votre résultat est de " + score2 + " points sur la partie sur le gaming !")
}

