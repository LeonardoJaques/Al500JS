"use strict";
var root = document.createElement("div");
root.innerHTML = "<p>" + doLesson() + "</p>";
document.body.appendChild(root);
function doLesson() {
    return algoritimo23();
    // algoritimo22();
    // algoritmo21();
    // algoritmo20();
    // algoritmo19();
    // algoritmo18();
    // algoritmo17();
    // algoritmo16();
    // algoritmo15();
    // algoritmo14();
    // algoritmo13();
    // algoritmo12();
    // algoritmo11();
    // algoritmo00();
}
/*
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

    let valor8ln12 = Math.round(5.5);
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
function algoritmo20() {

        let println0 = (() => {
            let phrase1 = "\ndigite palavra 1: ";
            let c = prompt(phrase1);
            return c
        })();

        let println1 = (() => {
            let phrase2 = "\ndigite palavra 2: ";
            let c1 = prompt(phrase2);
            return c1
        })();

        let println2 = (() => {
            if (println0 === null) {
                let tamChar = "erro";
                return tamChar;
            } else {
                let tamChar = println0.length
                return tamChar;
            }
        })();

    let println3 = (() => {
        if (println0 === null) {
            let copyChar = "erro";
            return copyChar;
        } else {
            let copyChar = println0.slice()
            return copyChar;
        }
    })();

    let d1 = println0;
    let println4 = d1;

    let tomador = <string> println0;
    let println5 = tomador.concat(<string> println1);

    let println6 = println5.substring(0,1);
    let println7 = println5.substring(println5.length - 1, println5.length);
    let println8 = println5.slice(1);
    let println9 = println5.substring(2, 3);
    let println10 = println5.substring(0,println5.length-8);
    let println11 = println5.substring(8,println5.length);

    let tela = "<br>" + "\nPalavra 1 digitada: " + println0 + "<br>" +
        "<br>" + "\nPalavra 2 digitada: " + println1 + "<br>" +
        "<br>" + "\nTamanho da 1ª palavra: " + println2 + "<br>" +
        "<br>" + "\nConcatenando sem armazenar: " + println0 + println1 + "<br>" +
        "<br>" + "\no conteudo de d(variavel que teve valor copiado de c: " + println3 + "<br>" +
        "<br>" + "\no conteudo de d1(variavel que teve valor copiado de c: " + println4 + "<br>" +
        "<br>" + "\nConcatenando com armazenamento: " + println5 + "<br>" +
        "<br>" + "\nPrimeiro caractere: " + println6 + "<br>" +
        "<br>" + "\nUltimo caractere: " + println7 + "<br>" +
        "<br>" + "\nTodos menos o primeiro: " + println8 + "<br>" +
        "<br>" + "\nO terceiro elemento: " + println9 + "<br>" +
        "<br>" + "\nOs tres primeiros elementos: " + println10 + "<br>" +
        "<br>" + "\nOs tres ultimos elementos:  " + println11 + "<br>";

        return tela
}

function algoritmo21() {

    let calc1 = 12 + 5 / 2;
    let calc2 = (12 + 5) / 2;
    let calc3 = 64**1 / 4;
    let calc4 = 64 ** (1 / 4);
    let calc5 = 3* (7 % 5);
    let calc6 = (3 * 7) % 5;
    let calc7 = 3 * 7 / 5;

    let print1 = "<br>" + "\nTestando Hierarquias\n" + "<br>";
    let print2 = "<br>" + "\n12 + 5 /2 é igual a: " + calc1 + "<br>";
    let print3 = "<br>" + "\nÉ Diferente de ( 12 + 5 ) /2 que é igual a: " + calc2 + "<br>" + "\nlogo / tem hierarquia maior que + ou -  " + "<br>";
    let print4 = "<br>" + "\n 64**14 é igual a: " + calc3 + "<br>";
    let print5 = "<br>" + "\n É DIFERENTE de 64**(1/4) que é igual a: " + calc4 + "<br>" + " logo ** tem HIERARQUIA MAIOR do que * ou /" + "<br>";
    let print6 = "<br>" + "\n 3 * (7 % 5) é igual a: " + calc5 + "<br>";
    let print7 = "<br>" + "\n É DIFERENTE de ( 3 * 7 ) % 5 que é igual a: " + calc6 + "<br>" + " logo * tem HIERARQUIA MAIOR do que %" + "<br>";
    let print8 = "<br>" + "\n É DIFERENTE de  3 * 7  / 5 que é igual a: " + calc7 + "<br>" + " logo / tem HIERARQUIA MAIOR do que *" + "<br>";

    let tela = print1 + print2
        + print3 + print4
        + print5 + print6
        + print7 + print8;

    return tela;

}

function algoritimo22() {
    let logica01: number = Math.round(18 / 6 % 2);
    let logica02: number = Math.round(20 / 2 / 2);
    let logica03: number = Math.round((20 / 4) / 2);
    let logica04: number = Math.round(30 / 4 / 2);
    let logica05: number = Math.round((30 / 4) / 2);
    let logica06: number = Math.round(7. / 4);
    let logica07: number = Math.round(7 / 4);
    let logica08: number = Math.ceil(6. / 4);
    let logica09: number = Math.round(6 / 4);


    let print01 = "<br>" + "\nTestando a Hierarquia" + "<br><br>";
    let print02 = "<br>" + "\n18 / 6 % 2 é igual a: " + logica01 + "<br>";
    let print03 = "<br>" + "\nUma operação de divisão fora de parênteses não pode ser um dos operandos de uma expressão com %." + "<br>";
    let print04 = "<br>" + "\n\n 20 / 2 div 2 é igual a: " + logica02 + "<br>";
    let print05 = "<br>" + "\nÉ igual a ( 20 / 4 ) div 2: " + logica03 + " \nLogo div tem a MESMA HERAQUIA da /" + "<br>";
    let print06 = "<br>" + "\n\n30/4 div 2 é igual a: "+ logica04 + "<br>";
    let print07 = "<br>" + "\nÉ igual a ( 30 / 4 ) div 2: " + logica05 + " \nLogo div tem a MESMA HERAQUIA da /" + "<br>";
    let print08 = "<br>" + "\n7. div 4: " + logica06 + "<br>";
    let print09 = "<br>" + "\n7  div 4: " + logica07 + "<br>";
    let print10 = "<br>" + "\n6. div 4: " + logica08 + "<br>";
    let print11 = "<br>" + "\n6  div 4: " + logica09 + "<br>";
    let print12 = "<br>" + "\n" + "<br>";

    let tela = print01 + print02 +
               print03 + print04 +
               print05 + print06 +
               print07 + print08 +
               print09 + print10 +
               print11 + print12 ;



               return tela

}*/
function algoritimo23() {
    var a = 135;
    var b = a % 100 / 10;
    var logica01 = Math.floor(b);
    var print01 = "<br>" + "\nDigite número de tres casas: " + "<br>";
    var print02 = "<br>" + "\nAlgarismo da casa das dezenas: " + a + "<br>";
    var print03 = "<br>" + "\nAlgarismo da casa das dezenas: " + logica01 + "<br>";
    var tela = print01 + print02 + print03;
    return tela;
}
