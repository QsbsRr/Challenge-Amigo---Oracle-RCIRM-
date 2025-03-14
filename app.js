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
     amigosSecretos.push(input);

     //Limpiando el campo de entrada
    document.getElementById('amigo').value = '';
}

