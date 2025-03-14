// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSecretos = [];

function agregarAmigo() 
{
    //Capturar el valor de campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

     //Validando el Campo vacío
     if (!nombre) {
        alert('Por favor, inserte un nombre.');
        return;
     }
    //Agregar la entrada del usuario a la lista de amigos
     amigosSecretos.push(input.value);

     //Limpiando el campo de entrada
    document.getElementById('amigo').value = '';

    //Obteniendo la lista de amigos desde el HTML
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(let i = 0; i < amigosSecretos.length; i++){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(amigosSecretos[i]));
        listaAmigos.appendChild(li);
    }
}












//function sortearAmigo() {
    // Verificar amigos registrados
    //if (amigos.length === 0) {

// //Obteniendo la lista de amigos desde el HTML
//let listaAmigos = document.getElementById('listaAmigos');
//listaAmigos.innerHTML = '';
//listaAmigos.innerHTML = amigos.map(nombre => 
//    `<li>${nombre}</li>`
//).join('');