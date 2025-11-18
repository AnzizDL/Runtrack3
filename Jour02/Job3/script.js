let count = "0";

function addone () {
    count ++;
    document.getElementById("compteur").innerText = count;

}

document.getElementById("button").addEventListener("click", addone);
