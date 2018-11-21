// $([SELECTEUR_CSS]) te donne un ou les X éléments qui match le sélecteur CSS donné, ici je choppe l'élément avec l'id connexion

//1. Connexion


//Quand on click sur le bouton "connexion"
$('#connexion').on('click', () => {
    // $(...).on('nomDeLEvenement', function) => ajouter un "event handler". On réagit à un événement (click, keypress, mouseenter etc etc)

    // On récupère les informations
    const login = $('#login').val();
    const mdp = $('#password').val();

    //comparaison de l'input avec les bon credentials
    if (login === 'admin' && mdp === 'admin') {

        // Pour gérer le 'remember me', il faut utiliser sois le localStorage (pas de péremption) soit le sessionStorage (tout est effacé quand le mec quitte le site)
        if ($('#remember').is(':checked')) {
            localStorage.setItem("username", login);
            localStorage.setItem("password", mdp);
            
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("password");
            
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");

            sessionStorage.setItem("username", login);
            sessionStorage.setItem("password", mdp);

        }
        window.location.href = "deplacement.html";
    }
    else {
        $('.alert.alert-danger').removeClass('d-none');
    }
});

// Si on les infos dans le localStorage OU dans le sessionStorage
if (localStorage.getItem("username") != null || sessionStorage.getItem("username") != null) {
    window.location.href = "hub.html";        
}

