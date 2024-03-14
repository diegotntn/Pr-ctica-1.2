function booleanoaleatorio(){
    return Math.random() < 0.5; // Umbral de 0.5 para equilibrar las probabilidades entre true y false
}
function infiltracionDeAnnalyn(secuestradores, perroPresente, prisioneroDespierto) {
    let accionesDisponibles = [];

    if (prisioneroDespierto) {
        let caballeroDurmiendo = secuestradores.includes("caballero");
        let arqueroDurmiendo = secuestradores.includes("arquero");

        if (caballeroDurmiendo) {
            accionesDisponibles.push("Ataque rápido");
        }

        if (!caballeroDurmiendo || !arqueroDurmiendo) {
            accionesDisponibles.push("Espiar");
        }

        if (prisioneroDespierto && arqueroDurmiendo) {
            accionesDisponibles.push("Señalar al prisionero");
        }

        if ((perroPresente && arqueroDurmiendo) || (prisioneroDespierto && caballeroDurmiendo && arqueroDurmiendo)) {
            accionesDisponibles.push("Prisionero libre");
        }
    }

    return accionesDisponibles;
}

let caballeroDurmiendo = booleanoaleatorio();
let arqueroDurmiendo = booleanoaleatorio();

let secuestradores = [];
if (caballeroDurmiendo) {
    secuestradores.push("caballero");
}
if (arqueroDurmiendo) {
    secuestradores.push("arquero");
}

let perroPresente = booleanoaleatorio();
let prisioneroDespierto = booleanoaleatorio();


console.log("Caballero durmiendo:", caballeroDurmiendo);
console.log("Arquero durmiendo:", arqueroDurmiendo);
console.log("Secuestradores presentes:", secuestradores);
console.log("Perro presente:", perroPresente);
console.log("Prisionero despierto:", prisioneroDespierto);

let acciones = infiltracionDeAnnalyn(secuestradores, perroPresente, prisioneroDespierto);
console.log("Acciones disponibles para Annalyn:", acciones);
