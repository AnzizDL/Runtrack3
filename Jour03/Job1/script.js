// On attend que le HTML soit chargé
$(document).ready(function () {

    const citation = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.";

    
    $("#show").click(function () {
        // → jQuery met la citation dans le paragraphe
        $("#citation").text(citation);
    });
    
    $("#hide").click(function () {
        // → jQuery vide le texte du paragraphe
        $("#citation").text("");
    });

});
