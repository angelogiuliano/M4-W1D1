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