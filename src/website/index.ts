const root = document.createElement("div")
root.innerHTML = "<p>"+algoritmo19()+"</p>"
document.body.appendChild(root)


function algoritmo19() {
       let text = "";
        for (let i = 19; i <= 40; i++) {
            text += "<br> - [ ] Exercício " + i + ", Realizado!!!\n</br>";
        }
    return text
}
