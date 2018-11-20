
/*document.getElementById("connect").onclick = function () {
// récupération de l'input de l'utilisateur
var login = document.getElementById("login");
var mdp = document.getElementById("password");

//comparaison de l'input avec les bon credentials
if (login == 'admin' && mdp == 'admin') {
    return window.location.href = "http://www.kana.fr/top-15-des-waifus/";;
}
else {
    return window.alert("NAN C'EST PAS CA");;
}
// si vrai alors je me connecte


};*/



// Pas mal mais en utilisant JQuery, tu peux aller plus vite :

// $([SELECTEUR_CSS]) te donne un ou les X éléments qui match le sélecteur CSS donné, ici je choppe l'élément avec l'id connexion
//Quand on click sur le bouton "connexion"
$('#connexion').on('click', () => {
    // $(...).on('nomDeLEvenement', function) => ajouter un "event handler". On réagit à un événement (click, keypress, mouseenter etc etc)

    // On récupère les informations
    const login = $('#login').val();
    const mdp = $('#password').val();

    console.log('login', login);
    console.log('mdp', mdp);

    //comparaison de l'input avec les bon credentials
    if (login === 'admin' && mdp === 'admin') {
        window.location.href = "http://www.kana.fr/top-15-des-waifus/"; //lol
    }
    else {
        window.alert("NAN C'EST PAS CA");;
    }
});