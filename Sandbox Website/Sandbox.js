var namenSpeichern = confirm("Willste du Deinen Namen speichern")
    if (namenSpeichern === true) {
        var deinName = prompt("Gebe Hier deinen Namen ein");
        window.alert("Herzlich Willkommen " + deinName);
    }   
    else {
        stop;
    }
    


/* Nerv System

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
        return Zahl1 * Zahl2;
    } else {
        console.log("Eingabe Ungültig");
    }
}

function mi(Zahl1, Zahl2) {
    if (typeof Zahl1 === "number" && typeof Zahl2 === "number") {
        return Zahl1 - Zahl2;
    } else {
        console.log("Eingabe Ungültig");
    }
}

function pl(Zahl1, Zahl2) {
    if (typeof Zahl1 === "number" && typeof Zahl2 === "number") {
        return Zahl1 + Zahl2;
    } else {
        console.log("Eingabe Ungültig");
    }
}

function di(Zahl1, Zahl2) {
    if (typeof Zahl1 === "number" && typeof Zahl2 === "number") {
        return Zahl1 / Zahl2;
    } else {
        console.log("Eingabe Ungültig");
    }
}

/* Personen Objekte mit einer Vorstell funktion */

var Denis = new Object();
Denis.name = "Denis";
Denis.alter = 15;
Denis.hobby = "Websiten programmieren";
Denis.vorstellen = pvorstellen;

var Ole = new Object();
Ole.name = "Ole";
Ole.alter = 14;
Ole.hobby = "Denis noten verschlechtern";
Ole.vorstellen = pvorstellen;

var Lehrer = new Object();
Lehrer.name = "Lehrer";
Lehrer.alter = 60;
Lehrer.hobby = "Kinder nerven";
Lehrer.vorstellen = pvorstellen;

var Charlotte = new Object();
Charlotte.name = "Charlotte";
Charlotte.alter = 12;
Charlotte.hobby = "Pferde Streicheln";
Charlotte.vorstellen = pvorstellen;

var Patter_Paul = new Object();
Patter_Paul.name = "Patter Paul (Info Gott)";
Patter_Paul.alter = 9000;
Patter_Paul.hobby = "Welten Erschaffen";
Patter_Paul.vorstellen = pvorstellen;


function pvorstellen() {
    consoleadasdasd
function vorstellen(person) {
    console.log("ich bin", person.name, "und ich bin", person.alter, "Jahre alt, Mein Hobby ist", person.hobby);
}