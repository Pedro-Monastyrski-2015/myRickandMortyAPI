const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


const regexPassword=/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/
// Check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character

export function validation(userData){
let errors={};
if (!regexEmail.test(userData.username)) {
    errors.username="El usuario debe ser un email valido"
}
else if(!userData.username){
    errors.username="El usuario no puede estar vacio"
}
else if(userData.username.length > 35 ){
    errors.username ="El nombre de usuario no puede ser mayor a 35 caracteres";
}

if (!regexPassword.test(userData.password)) {
    errors.password="La contraseña debe tener al menos un numero, una letra mayúscula y un caracter especial (#,*,_,etc)"
}
else if (userData.password.length < 8 || userData.password.length>15) {
    errors.password="Password debe tener entre 8 y 15 caracteres"
}
}