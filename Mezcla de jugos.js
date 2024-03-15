// Función para determinar cuánto tiempo lleva mezclar un jugo
function tiempoParaMezclarJugo(jugo) {
    switch (jugo) {
        case 'Puro Placer de Fresa':
            return 0.5;
        case 'Energizante':
        case 'Jardín Verde':
            return 1.5;
        case 'Isla Tropical':
            return 3;
        case 'Todo o Nada':
            return 5;
        default:
            return 2.5; // Para otras bebidas
    }
}

// Función para reponer el suministro de rodajas de lima
function limasACortar(cantidadNecesaria, suministroLimas) {
    let limasARecortar = 0;
    let indiceLima = 0;
    
    do {
        const lima = suministroLimas[indiceLima];
        let gajosDeLima;
        
        switch (lima) {
            case 'pequeña':
                gajosDeLima = 6;
                break;
            case 'mediana':
                gajosDeLima = 8;
                break;
            case 'grande':
                gajosDeLima = 10;
                break;
            default:
                gajosDeLima = 0;
                break;
        }
        
        limasARecortar++;
        cantidadNecesaria -= gajosDeLima;
        indiceLima++;
    } while (cantidadNecesaria > 0 && indiceLima < suministroLimas.length);
    
    return limasARecortar;
}

// Función para determinar los pedidos restantes al final del turno
function pedidosRestantes(minutosRestantes, pedidos) {
    let restantes = [];
    let tiempoRestante = minutosRestantes;
    let i = 0;

    do {
        const jugo = pedidos[i];
        const tiempoParaMezclar = tiempoParaMezclarJugo(jugo);
        
        if (tiempoParaMezclar <= tiempoRestante) {
            tiempoRestante -= tiempoParaMezclar;
        } else {
            restantes = pedidos.slice(i);
            break;
        }
        i++;
    } while (i < pedidos.length);
    
    if (restantes.length === 0) {
        return `Pedidos restantes al final del turno: (0) []`;
    } else {
        return restantes;
    }
}

// Ejemplo de uso
const pedidosDeJugos = ['Puro Placer de Fresa', 'Jardín Verde', 'Energizante', 'Isla Tropical'];
const limasDisponibles = ['pequeña', 'mediana', 'grande', 'mediana', 'mediana'];
const tiempoRestanteEnTurno = 120; 

console.log("Tiempo necesario para mezclar 'Jardín Verde':", tiempoParaMezclarJugo('Jardín Verde'), "minutos");
console.log("Cantidad de limas a cortar:", limasACortar(24, limasDisponibles), "limas");
console.log("Pedidos restantes al final del turno:", pedidosRestantes(tiempoRestanteEnTurno, pedidosDeJugos));
