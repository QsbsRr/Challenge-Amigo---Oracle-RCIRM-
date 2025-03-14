// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSecretos = [];

function agregarAmigo() 
{
    const input = document.getElementById('amigo'); //Capturar el valor de campo de entrada
    if (input.length == 0) //Validando que el campo no esté vacío
        {
        alert('Introduce el nombre de tu amigo');
        return;
        }
    amigosSecretos.push(input); //Agregar la entrada del usuario a la lista de amigos
    document.getElementById('amigo').value = ''; //Limpiando el campo de entrada
}

