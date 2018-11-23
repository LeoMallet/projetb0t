//Quand on click sur le bouton "Bouger!"
$('#move').on('click', () => {
    var requete = $('#channeldescription').val();
    var url = 'http://163.172.152.211:8080/cmd';

    //jQuery.post( url [, data ] [, success ] [, dataType ] )
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
//Quand on click sur le bouton "Je crache!"
$('#crache').on('click', () => {
    var requete = $('#blabla').val();
    var url = 'http://163.172.152.211:8080/tts';

    //jQuery.post( url [, data ] [, success ] [, dataType ] )
    $.ajax({
        type: "POST",
        url: url,
        data: {msg: requete},
        success: () => {
            alert('JE PARLE FORT');
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
