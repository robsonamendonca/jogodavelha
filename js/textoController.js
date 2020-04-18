
var txt = new Textos();

$(document).ready(function(){
  
  txt.verificaLingua();
  
  txt.setTextos();

TrocarIdioma('#tselecao'); //select somente de textos

});

var TrocarIdioma = function(idelemento){
  $(''+idelemento).change(function() {
    var valueSelect = $(''+idelemento+' option:selected').val();
    txt.TrocaLingua(valueSelect);
    txt.setTextos();
  });


}

