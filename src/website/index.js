"use strict";
var root = document.createElement("div");
root.innerHTML = "<p>" + doLesson() + "</p>";
document.body.appendChild(root);
function doLesson() {
    return algoritmo20();
    //algoritmo19();
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
    var text = "";
    for (var i = 19; i <= 40; i++) {
        text += "<br> - [ ] Exercício " + i + ", Realizado!!!\n</br>";
    }
    return text;
}
function algoritmo11() {
    var text = "Aprendendo Algoritmo";
    return text;
}
function algoritmo12() {
    var text1 = "Aprendendo Algoritmo!!!";
    var text2 = " Com Anita e Guto";
    return text1 + text2;
}
function algoritmo13() {
    var text1 = "Aprendendo Algoritmo!!!";
    var text2 = "<p><br><br>Com Anita e Guto</p>";
    return text1 + text2;
}
function algoritmo14() {
    var text1 = "Aprendendo Algoritmo ! !!\n ";
    var text2 = "Com Anita e Guto";
    return text1 + text2;
}
function algoritmo15() {
    var text = "Aprendendo Algoritmo <br>Com Anita e Guto<br><br> E implementando no JavaScript<br> Fica muito mais fácil!! ";
    return text;
}
function algoritmo16() {
    var x;
    x = 10;
    return x;
}
function algoritmo17() {
    var x;
    x = 10;
    var text = "Valor de x = ";
    return text + x;
}
function algoritmo18() {
    var x;
    x = 10;
    x += 1;
    var text = "Valor de x = ";
    return text + x;
}
function algoritmo19() {
    var text1 = "<br>Agoritmo - 19";
    var sqr = Math.sqrt(64);
    //print 3 e 4
    var valor2ln3 = Math.log(64);
    var valor1ln3 = Math.exp(1 / 2 * valor2ln3);
    var realint = Math.round(valor1ln3);
    var srealint = valor1ln3;
    var format = [];
    var valor1ln5 = format[1] = Math.sin(45 * Math.PI / 180) + 0.000013;
    var valor2ln6 = format[2] = Math.exp(3 * Math.log(8)) + 0.00013;
    var valor3ln7 = format[3] = Math.exp(3 * Math.log(8));
    var valor4ln8 = format[4] = Math.pow(8, 3);
    var valor5ln9 = Math.exp(1 / 3 * Math.log(8));
    var valor6ln10 = Math.abs(-8);
    var valor7ln11 = Math.abs(8);
    var valor8ln12 = Math.round(5.5);
    var valor9ln13 = Math.round(6.5);
    var valor10ln14 = Math.round(6.5 + 0.0001);
    var valor11ln15 = Math.round(5.45);
    var valor12ln16 = Math.round(5.51);
    var valor13ln17 = parseInt('87');
    var valor14ln18 = Math.round(3 / 4);
    var print1 = text1;
    var print2 = "<br><br>Raiz: " + sqr;
    var print3 = "<br><br> Raiz com exp e log e realint: " + realint;
    var print4 = "<br><br> Raiz com exp e log sem realint: " + srealint;
    var print5 = "<br><br> Formatar(sen(45*pi/180)+0.0001,3): " + valor1ln5.toFixed(3);
    var print6 = "<br><br> Potencia com exp e log e formatar: " + valor2ln6.toFixed(3);
    var print7 = "<br><br> Potencia com exp e log sem formatar: " + valor3ln7;
    var print8 = "<br><br> Potencia com operador** e formatar: " + valor4ln8.toFixed(3);
    var print9 = "<br><br> Raiz cubica: " + valor5ln9;
    var print10 = "<br><br> Absoluto: " + valor6ln10;
    var print11 = "<br><br> Absoluto: " + valor7ln11;
    var print12 = "<br><br> Convertendo para inteiro 5.5: " + valor8ln12;
    var print13 = "<br><br> Convertendo para inteiro 6.5: " + valor9ln13;
    var print14 = "<br><br> Convertendo para inteiro 6.5 + 0.0001: " + valor10ln14;
    var print15 = "<br><br> Convertendo para inteiro 5.45: " + valor11ln15;
    var print16 = "<br><br> Convertendo para inteiro 5.51: " + valor12ln16;
    var print17 = "<br><br> Convertendo para real 87: " + valor13ln17.toFixed(1);
    var print18 = "<br><br> Convertendo para int 3/4: " + valor14ln18;
    var tela = print1 + print2 + print3 +
        print4 + print5 + print6 +
        print7 + print8 + print9 +
        print10 + print11 + print12 +
        print13 + print14 + print15 +
        print16 + print17 + print18;
    return tela;
}
function algoritmo20() {
    var println0 = (function () {
        var phrase1 = "\ndigite palavra 1: ";
        var c = prompt(phrase1);
        return c;
    })();
    var println1 = (function () {
        var phrase2 = "\ndigite palavra 2: ";
        var c1 = prompt(phrase2);
        return c1;
    })();
    var println2 = (function () {
        if (println0 === null) {
            var tamChar = "erro";
            return tamChar;
        }
        else {
            var tamChar = println0.length;
            return tamChar;
        }
    })();
    var println3 = (function () {
        if (println0 === null) {
            var copyChar = "erro";
            return copyChar;
        }
        else {
            var copyChar = println0.slice();
            return copyChar;
        }
    })();
    var d1 = println0;
    var println4 = d1;
    var tomador = println0;
    var println5 = tomador.concat(println1);
    var println6 = println5.substring(0, 1);
    var println7 = println5.substring(println5.length - 1, println5.length);
    var println8 = println5.slice(1);
    var println9 = println5.substring(2, 3);
    var println10 = println5.substring(0, println5.length - 8);
    var println11 = println5.substring(8, println5.length);
    var tela = "<br>" + "\nPalavra 1 digitada: " + println0 + "<br>" +
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
    return tela;
}
