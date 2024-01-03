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
var x = 0
function selection() {
    const selecteur = document.getElementById("choix");
    const monChoix = selecteur[selecteur.selectedIndex];
    if (x==1){
        return alert("Vous avez déjà répondu!");
    } else {
        x = 1
        if (monChoix.value == "0") {
        alert("Bravo ! C'est la bonne réponse");
        score1 = score1 + 1;
        }
        else {
        alert("Ce n'est pas la bonne réponse !");
        }
    }
}

var y = 0
function selection2() {
    const selecteur = document.getElementById("choix2");
    const monChoix2 = selecteur[selecteur.selectedIndex];
    if (y==1){
        return alert("Vous avez déjà répondu!");
    } else {
        y = 1
        if ((monChoix2.value == "0") || (monChoix2.value == "1")) {
        alert("Bravo ! C'est la bonne réponse");
        score1 = score1 + 1;
        }
        else {
        alert("Ce n'est pas la bonne réponse !");
        }
    }
}

var z = 0
function selection3() {
    var reponse = document.getElementById("Id_Reponse").value;
    if (z==1){
        return alert("Vous avez déjà répondu!");
    } else {
        z = 1
        if (reponse == "1991") {
        alert("Bravo ! C'est la bonne réponse !")
        score1 = score1 + 1;
        }
        else {
        alert("Ce n'est pas la bonne réponse. Vous êtes sûr de l'avoir bien écrit ?")
        }
    }
}
function resultat1() {
    alert("Votre résultat est de " + score1 + " points !")
}