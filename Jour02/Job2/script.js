let bouton = document.getElementById("button");

function showHide () {
let article = document.querySelector("article");
if (!article){
    let newArticle = document.createElement("article");
newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
document.body.insertBefore(newArticle, button);
} else { 

article.remove();    
}
}

bouton.addEventListener("click" , showHide);