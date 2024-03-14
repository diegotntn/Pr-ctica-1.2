// Con esta función los valores booleanos serán aleatorios
function randomBoolean (){
    return Math.random() < 0.5;
}

let secuestradores = ["caballero", "arquero"];
let perroPresente = randomBoolean();
let prisioneroDespierto = randomBoolean();

console.log("Perro presente:", perroPresente);
console.log("Prisionero despierto:", prisioneroDespierto);

