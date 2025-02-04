// Challenge Amigo Secreto Creado Por : Oscar Alejandro Medina.
// Fecha: 04/02/2025

let listadoAmigos = [];
let amigosSecretos = [];
let numeroAmigos = 0;

//Funcion para agregar elementos a una lista UL en el HTML.

function agregarAlistaUL(listaid, texto){                        
    let lista = document.getElementById(listaid);                   
    let elemento = document.createElement('li');            //Crea nuevos elementos li en la lista, para cada nuevo nombre.  
    elemento.textContent = texto;                                   
    lista.appendChild(elemento);                                                    
}

//Funcion para agregar un amigo a la lista de amigos y comprobar que no se repitan nombres.

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;   //Obtiene el nombre del input

    if(nombreAmigo.trim() !== '' & !listadoAmigos.includes(nombreAmigo) ) {  //Comprueba que no se inserten nombres repetidos.
                                                                               // o nombres vacios en el input. 
        listadoAmigos.push(nombreAmigo);                        //Agrega el nombre al Array de amigos.
        agregarAlistaUL('listaAmigos', nombreAmigo);            //Agrega el nombre a la lista de amigos en el HTML.

        document.getElementById('amigo').value = '';           //Limpia el input despues de agregar un nombre.
        numeroAmigos = listadoAmigos.length;                   //Cuenta el numero de amigos en la lista.

        let parrafo = document.getElementById("numAmigos");
        parrafo.textContent = `Listado de ${numeroAmigos} ${(numeroAmigos == 1) ? 'Amigo:':'Amigos:'}`;

       // console.log(listadoAmigos);
        console.log(numeroAmigos);

    } else {
        
        if(listadoAmigos.includes(nombreAmigo)) {  //Si el nombre insertado ya se encuentra en la lista, pide otro nombre.

            alert('El nombre que intentas agregar ya fue agregado a la lista. Intenta con otro nombre.');   
            document.getElementById('amigo').value = '';
         } else {

             alert('No se pueden agregar nombres vacios. Intenta con otro nombre.');   //Avisa de no insertar nombres vacios.      
             document.getElementById('amigo').value = '';

             }
        }    
}

//Funcion para sortear un amigo de la lista de amigos.
 
function sortearAmigo() {

    if (listadoAmigos.length === amigosSecretos.length) {  // Comparación para saber si ya se sortearon todos los amigos.
        alert('Ya no quedan amigos por sortear.');
        return;
    }

    let amigoSorteado;

    do {
        amigoSorteado = listadoAmigos[Math.floor(Math.random() * listadoAmigos.length)];   //Sortea un amigo de la lista al azar.
    } while (amigosSecretos.includes(amigoSorteado));                            // Repite el sorteo si el amigo ya fue sorteado.

    amigosSecretos.push(amigoSorteado);                                         // Agrega el amigo sorteado a la lista de sorteados.
    agregarAlistaUL('resultado', amigoSorteado);                                          // Muestra el resultado en la lista HTML.
    console.log(amigosSecretos);

    // Adecua el párrafo según la cantidad de amigos sorteados.
    let parrafo = document.getElementById("amigoSorteados");
    parrafo.textContent = `${amigosSecretos.length === 1 ? 'Tu Amigo Secreto Es:' : 'Tus Amigos Secretos Son:'}`;
}

//Funcion para borrar solo la lista de amigos, conservando el resultado del sorteo previo.

function borrarListaAmigos() {         
    listadoAmigos = [];
    numeroAmigos = 0;
    let parrafo = document.getElementById("numAmigos");
    parrafo.textContent = `Listado de Amigos:`;
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = '';
}
   
 //Funcion para dejar todo en blanco y comenzar de nuevo. 

function nuevoSorteo() {         
    //Inicializa Arrays y Variables      
    listadoAmigos = [];
    amigosSecretos = [];
    numeroAmigos = 0;

    //Adecua los parrafos Para un nuevo sorteo.
    let parrafoAmigos = document.getElementById("numAmigos");
    parrafoAmigos.textContent = `Listado de Amigos:`;
    let parrafoSorteados = document.getElementById("amigoSorteados");
    parrafoSorteados.textContent = `Tu Amigo Secreto Es:`;

    //Inicializa las Listas en el HTML
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = ''; // Limpia el Input.

}







