let usuario = {
    nombre: '',
    telefono: '',
    contrasenia: '',
    hobbies: '',
    nacionalidad: ''
}
const form = document.querySelector('form');

const nombre = document.getElementById('nombre');
const pass = document.querySelector('#pass');
const tel = document.querySelector('#tel');

const checkboxes = document.getElementsByName('hobbies');
const radioButtons = document.getElementsByName('nacionalidad');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    console.log(`NOMBRE: ${nombre.value}`);
    usuario.nombre = nombre.value;
    console.log(`CONTRASEÑA: ${pass.value}`);
    usuario.contrasenia = pass.value;
    console.log(`TELEFONO: ${tel.value}`);
    usuario.telefono = tel.value;
    let arrays = [];
    checkboxes.forEach(hobbie => {
        if (hobbie.checked) {
            console.log(hobbie.value);
            arrays.push(hobbie.value);
            /* usuario.hobbies +=  hobbie.value +", "; */
        }
    })
    usuario.hobbies = arrays;


    radioButtons.forEach(opcion => {
        if (opcion.checked) {
            console.log(opcion.value);
            usuario.nacionalidad = opcion.value;
        }
    })

    if (nombre.value.length < 1) {
        nombre.classList.add('error')
    }


})