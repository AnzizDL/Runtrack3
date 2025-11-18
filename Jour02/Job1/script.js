function citation () {
    let element = document.getElementById("citation"); // pour chercher l'id dans le doc html 
    let texte = element.innerText;
    console.log(texte);
}

document.getElementById("button").addEventListener("click", citation);