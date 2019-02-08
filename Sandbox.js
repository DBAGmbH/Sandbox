/*

// Das Nerv System

for (var Nerv = 0;Nerv < 10; Nerv++ ) {
    alert("Nerv");
     if (Nerv == 4) {
         var weiternerven = confirm("Willste weiter genervt werden?");
         if (weiternerven == false) {
             break;
         }
     }
     if (Nerv == 6) {
         var weiternerven1 = confirm("Weiter nerven xD?");
         if (weiternerven1 == false) {
            break;
        }
     }
}
*/

/* Funtkionierender Rechner */

function mu(Zahl1, Zahl2) {
    if (typeof Zahl1 === "number" && typeof Zahl2 === "number") {
    return Zahl1*Zahl2;
    }
    else {
        console.log("Eingabe Ungültig");
    }
}

function mi(Zahl1, Zahl2) {
    if (typeof Zahl1 === "number" && typeof Zahl2 === "number") {
        return Zahl1-Zahl2;
        }
        else {
            console.log("Eingabe Ungültig");
        }
}

function pl(Zahl1, Zahl2) {
    if (typeof Zahl1 === "number" && typeof Zahl2 === "number") {
        return Zahl1+Zahl2;
        }
        else {
            console.log("Eingabe Ungültig");
        }
}

function di(Zahl1, Zahl2) {
    if (typeof Zahl1 === "number" && typeof Zahl2 === "number") {
        return Zahl1/Zahl2;
        }
        else {
            console.log("Eingabe Ungültig");
        }
}