//1
const check50 = function(n1,n2) {
    if (n1 === 50 || n2 === 50 || n1+n2 === 50) {
        console.log(true);
    } else {
        console.log(false);
    }
}

check50(49, 1)

//2
const rimuoviDaStringa = function(str, n) {
    let stringa = str.split("")
    stringa.splice(n,n-1)
    console.log(stringa.join(''))
}

rimuoviDaStringa("ciao", 3)

//3
let checkNumeri = function(n1, n2) {
    if ((n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) || (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkNumeri(41, 60)

//4
let checkNomeCitta = function (nome) {
    nome.split("")
    if (nome[0] === "L" &&  nome[1] === "o" && nome[2] === "s" || nome[0] === "N" && nome[1] === "e" && nome[2] === "w") {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkNomeCitta("New York")

//5
let sommaArray = function(arr) {
    let somma = 0
    for(let i = 0; i < arr.length; i++) {
        somma += arr[i]
    }
    console.log(somma);
}

sommaArray([1,2,3])

//6
let check1o3 = function(arr) {
        if (arr.includes(1) || arr.includes(3)) {
            console.log(false);
        } else {
            console.log(true);
        }
}   

check1o3([1,4,6])

//7
let tipoDiAngolo = function(gradi) {
    if(gradi < 90) {
        console.log('angolo acuto');
    } else if (gradi >90 && gradi < 180) {
        console.log('angolo ottuso');
    } else if (gradi === 90) {
        console.log('retto');
    } else if (gradi === 180) {
        console.log('piatto');
    }
}

tipoDiAngolo(180)

//8
let creaAcronimo = function (str) {
    let acronimo = ""
    for (let i = 0; i < str.split(" ").length; i++) {
        acronimo += str.split(" ")[i][0]
    }
    console.log(acronimo);
}

creaAcronimo("Fabbrica Italiana Automobili Torino")