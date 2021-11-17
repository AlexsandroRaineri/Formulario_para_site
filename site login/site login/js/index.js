function showPassword() {
const eye = document.getElementById('eye');
const eyeSlash = document.getElementById('eye-slash');
const fieldPassword = document.getElementById('field-password');

// metodo de senha visivel 
if(eye.style.display === 'none') {
    eye.style.display = 'block';
    eyeSlash.style.display = 'none';
    fieldPassword.type = 'text';
// metodo de senha nao visivel 
}else{
    eye.style.display = 'none';
    eyeSlash.style.display = 'block';
    fieldPassword.type = 'password';
}






};

document.getElementById('btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert("Você esta Logado!");
});