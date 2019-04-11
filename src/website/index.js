"use strict";
var root = document.getElementById("idButton");
root.innerHTML = "<p>" + algoritmo19() + "</p>";
document.body.appendChild(root);
function algoritmo19() {
    var text = "";
    for (var i = 19; i <= 40; i++) {
        text += "<br> - [ ] Exercício " + i + ", Realizado!!!\n</br>";
    }
    return text;
}
