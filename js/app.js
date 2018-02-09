$("h2").hide();
$("div").hide();
$("#chance2").hide();
$("#chance3").hide();
var chiffre_mystere = Math.floor(Math.random()*11);
console.log(chiffre_mystere);
$(".resultat").replaceWith("",chiffre_mystere);
var i =1;
var winner = false;


$("#verify").click (function play() {
    var value_champ =$("#number").val();

    $("h2").hide();
    $("div").hide();
    if (value_champ<chiffre_mystere){
        $("#plus").show();
        i++;
    }
    else if (value_champ>chiffre_mystere){
        $("#moins").show();
        i++;
    }
    else {
        $("#winner").show();
        $("#chance1").hide();
    }


    if(i==2){
        $("#chance1").hide();
        $("#chance2").show();
    }
    if(i==3){
        $("#chance3").show();
        $("#chance2").hide();
    }
    if (i>3){
        $("#chance3").hide();
        $("div").hide();
        $("#loser").show();
        $(".resultat").show();
    }

});

$(".rejouer").click(function rechargement(){
    location.reload();
});
