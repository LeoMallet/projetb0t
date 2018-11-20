
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
$('#connexion').on('click', () => {
    alert('JE SUIS CLICKE LOL');
});