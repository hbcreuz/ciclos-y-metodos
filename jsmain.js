//Ejercicio 1
function ejercicio1() {

    do {
        var num = parseInt(prompt('ingresa número del 0 al 100'));

        if (num < 0 || num > 100) {
            check = true;


        } else {
            for (var i = 0; i <= num; i++) {
                console.log(i)
            }
            check = false;

        }

    } while (check)

}

//Ejercicio 2
function ejercicio2() {
    var color = '';
    while (color != 'blanco') {
        color = prompt('Que color es el caballo blanco de Napoleón?').toLowerCase();

    }
}



//Ejercicio 3
function ejercicio3() {
    var matematicas = parseFloat(prompt('Ingrese Nota 1'));
    var fisica = parseFloat(prompt('Ingrese Nota 2'));
    var ciencias = parseFloat(prompt('Ingrese Nota 3'));
    var pro = (matematicas + fisica + ciencias) / 3;
    alert('Su promedio es : ' + parseInt(pro));
    //Math.round(valor)
}


//Ejercicio 4
function ejercicio4() {
    frutas = [];
    frutas[0] = prompt('Ingrese una Fruta 1').toLowerCase();
    frutas[1] = prompt('Ingrese una Fruta 2').toLowerCase();
    frutas[2] = prompt('Ingrese una Fruta 3').toLowerCase();

    for (var i = 0; i < frutas.length; i++) {
        if (frutas[i] != 'manzana') { //elemento de array en posición i distinto a string manzana
            console.log(frutas[i]); //imprime elemento de array en posición i
        } else { //si no, imprime vacio, tiene que ir con espacio entre comillas.
            console.log(" ");
        }
    }
}



//Ejercicio 5
function ejercicio5() {
    var nombre = prompt('Ingrese su nombre').toLowerCase();
    letras = nombre.split("");
    var vocales = 0;
    var consonantes = 0;
    for (var i = 0; i < letras.length; i++) {
        console.log(letras[i]); // imprime cada letra a medida que recorre el array
        switch (letras[i]) {
            case 'a':
            case 'á':
                vocales++
                break;
            case 'e':
            case 'é':
                vocales++
                break;
            case 'i':
            case 'í':
                vocales++
                break;
            case 'o':
            case 'ó':
                vocales++
                break;
            case 'u':
            case 'ú':
                vocales++
                break;
            default:
                consonantes++
        }

    }
    console.log('la cantidad de vocales es: ' + vocales);
    console.log('la cantidad de consonantes es: ' + consonantes);
    alert('la cantidad de vocales es: ' + vocales + '\nla cantidad de consonantes es: ' + consonantes); // \n es un salto de linea */
}

//INICIO

var validador = true;
do {
    var inicio = parseInt(prompt('Ingrese un número del 1 al 5 para elegir ejercicio (cualquier otro valor para salir)'));

    switch (inicio) {
        case 1:
            ejercicio1();

            var seguir = prompt('desea seguir? ingrese "S" para seguir').toLowerCase();
            if (seguir != 's') {
                validador = false;
                break;
            } else {
                break;
            }

        case 2:
            ejercicio2();
            var seguir = prompt('desea seguir? ingrese "S" para seguir').toLowerCase();
            if (seguir != 's') {
                validador = false;
                break;
            } else {
                break;
            }
        case 3:
            ejercicio3();
            var seguir = prompt('desea seguir? ingrese "S" para seguir').toLowerCase();
            if (seguir != 's') {
                validador = false;
                break;
            } else {
                break;
            }
        case 4:
            ejercicio4();
            var seguir = prompt('desea seguir? ingrese "S" para seguir').toLowerCase();
            if (seguir != 's') {
                validador = false;
                break;
            } else {
                break;
            }
        case 5:
            ejercicio5();
            var seguir = prompt('desea seguir? ingrese "S" para seguir').toLowerCase();
            if (seguir != 's') {
                validador = false;
                break;
            } else {
                break;
            }
        default:
            validador = false;

    }
} while (validador);