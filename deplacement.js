//Quand on click sur le bouton "Bouger!"
$('#move').on('click', () => {
    var requete = $('#channeldescription').val();
    var url = 'http://163.172.152.211:8080/cmd';

    //jQuery.post( url [, data ] [, success ] [, dataType ] )
    // jQuery == $


    $.ajax({
        type: "POST",
        url: url,
        data: {cmd: 'join ' + requete},
        success: () => {
            alert('C\'EST BON');
        }
      });

      
      // success c'est une fonction
      // parce que le serveur attent un objet dont l'un des membre est 'cmd'
      // ex: {cmd: 'maCOMMANDE'}

      /**
       * J'aurai pu aussi écrire:
       * 
       * success: function() {
       *    alert('C\'EST BON');
       * }
       */

});
