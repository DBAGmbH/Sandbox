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

function mu (Zahl1, Zahl2) {
    console.log(Zahl1*Zahl2);
}

function mi (Zahl1, Zahl2) {
    console.log(Zahl1-Zahl2);
}

function pl (Zahl1, Zahl2) {
    console.log(Zahl1+Zahl2);
}

function di (Zahl1, Zahl2) {
    console.log(Zahl1/Zahl2);
}