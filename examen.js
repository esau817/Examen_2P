/*
Simular una carrera entre dos corredores cuyo avance es de acuerdo a lo siguiente:

20% de las veces avanzaran 1 paso
20% retrocederan 1 paso
40% avanzarán 2 pasos
20% avanzarán 3 pasos

En la interfaz el usuario pondra los nombres de ambos corredores y con un botón comenzará la simulación,.

Ir mostrando en donde se encuentran en todo momento cada corredor en una pista de 100 pasos y al final decir quien gano o si hubo empate, analizar las posibilidades del empate.

"corr1 en 1
corr2 en 3
corr1 en 4
corr2 en 5
//Gano Corr1"
*/

var player = {
    Nombre: "P1 ",
    Pasos: ' ',
    progreso_Jugador: function () {
        return this.Nombre + " Avanza " + this.Pasos + "Pasos";
    }
}


for(let x = 0; player.Pasos < 100; x++)
{
    player.Pasos = Math.floor(Math.random() * 10) + 1;

    if(player.Pasos == 1 
        || player.Pasos == 2)
    {
        console.log(player.Nombre, "avanza 1 pasos!" )
        player.Pasos += 1;
    }
    else if(player.Pasos == 3 
        || player.Pasos == 4)
    {
        console.log(player.Nombre, "retrocede 1 pasos!")
        player.Pasos -= 1;
    }
    else if(player.Pasos == 5 
        || player.Pasos == 6 
        || player.Pasos == 7 
        || player.Pasos == 8)
    {  
        console.log(player.Nombre, "avanza 2 pasos!")
        player.Pasos += 2;
    }
    else
    {
        console.log(jugaplayer.Nombredor, "avanza 3 pasos!")
        player.Pasos += 3;
    }
}
console.log(player.progreso_Jugador());

