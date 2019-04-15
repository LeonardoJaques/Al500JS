const root = document.createElement("div")
root.innerHTML = "<p>"+doLesson()+"</p>"
document.body.appendChild(root)


function doLesson(){
    return algoritmo19();
    //algoritmo18();
    //algoritmo17();
    //algoritmo16();
    //algoritmo15();
    //algoritmo14();
    //algoritmo13();
    //algoritmo12();
    //algoritmo11();
    //algoritmo00();
}

function algoritmo00() {
       let text = "";
        for (let i = 19; i <= 40; i++) {
            text += "<br> - [ ] Exercício " + i + ", Realizado!!!\n</br>";
        }
    return text
}

function algoritmo11() {
    let text = "Aprendendo Algoritmo";
    return text
}

function algoritmo12() {
    let text1 = "Aprendendo Algoritmo!!!";
    let text2 = " Com Anita e Guto";
    return text1 + text2
}

function algoritmo13() {
    let text1 = "Aprendendo Algoritmo!!!";
    let text2 = "<p><br><br>Com Anita e Guto</p>";
    return text1 +  text2
}

function algoritmo14() {
    let text1 = "Aprendendo Algoritmo ! !!\n ";
    let text2 = "Com Anita e Guto";
    return text1 +  text2
}

function algoritmo15() {
    let text = "Aprendendo Algoritmo <br>Com Anita e Guto<br><br> E implementando no JavaScript<br> Fica muito mais fácil!! ";
    return text
}

function algoritmo16() {
    let x: number;
    x = 10
    return x
}

function algoritmo17(){
    let x: number;
    x = 10;
    let text: string = "Valor de x = ";
    return text + x
}

function algoritmo18(){
    let x: number;
    x = 10;
    x += 1;
    let text: string = "Valor de x = ";
    return text + x
}
function algoritmo19() {
    let text1 = "<br>Agoritmo - 19";
    let sqr = Math.sqrt(64);
    //print 3 e 4
    let valor2ln3 = Math.log(64);
    let valor1ln3 = Math.exp(1/2*valor2ln3);

    let realint = Math.round(valor1ln3);
    let srealint = valor1ln3;


    let format = [];

    let valor1ln5 = format[1] = Math.sin(45 * Math.PI / 180) + 0.000013;
    let valor2ln6 = format[2] = Math.exp(3 * Math.log(8)) + 0.00013;
    let valor3ln7 = format[3] = Math.exp(3 * Math.log(8));
    let valor4ln8 = format[4] = Math.pow(8,3);

    let valor5ln9 = Math.exp(1 / 3 * Math.log(8));

    let valor6ln10 = Math.abs(-8);
    let valor7ln11 = Math.abs(8);


    let valor8ln12  = Math.round(5.5);
    let valor9ln13  = Math.round(6.5);
    let valor10ln14 = Math.round(6.5+0.0001);
    let valor11ln15 = Math.round(5.45);
    let valor12ln16 = Math.round(5.51);
    let valor13ln17 = parseInt('87');
    let valor14ln18 = Math.round(3/4);



    let print1 = text1;
    let print2 = "<br><br>Raiz: " + sqr;
    let print3 = "<br><br> Raiz com exp e log e realint: " + realint;
    let print4 = "<br><br> Raiz com exp e log sem realint: " + srealint;
    let print5 = "<br><br> Formatar(sen(45*pi/180)+0.0001,3): " + valor1ln5.toFixed(3);
    let print6 = "<br><br> Potencia com exp e log e formatar: " + valor2ln6.toFixed(3);
    let print7 = "<br><br> Potencia com exp e log sem formatar: " + valor3ln7;
    let print8 = "<br><br> Potencia com operador** e formatar: " + valor4ln8.toFixed(3);
    let print9 = "<br><br> Raiz cubica: " + valor5ln9;
    let print10 = "<br><br> Absoluto: " + valor6ln10;
    let print11 = "<br><br> Absoluto: " + valor7ln11;
    let print12 = "<br><br> Convertendo para inteiro 5.5: " + valor8ln12;
    let print13 = "<br><br> Convertendo para inteiro 6.5: " + valor9ln13;
    let print14 = "<br><br> Convertendo para inteiro 6.5 + 0.0001: " + valor10ln14;
    let print15 = "<br><br> Convertendo para inteiro 5.45: " + valor11ln15;
    let print16 = "<br><br> Convertendo para inteiro 5.51: " + valor12ln16;
    let print17 = "<br><br> Convertendo para real 87: " + valor13ln17.toFixed(1);
    let print18 = "<br><br> Convertendo para int 3/4: " + valor14ln18;

    let tela =
         print1 + print2 + print3 +
         print4 + print5 + print6 +
         print7 + print8 + print9 +
        print10 + print11 + print12 +
        print13 + print14 + print15 +
        print16 + print17 + print18

    return tela
}