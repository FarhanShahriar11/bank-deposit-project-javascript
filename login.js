
document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
   if(userEmail === 'farhan@gmail.com' && userPassword ==='secret'){
    window.location.href='bank.html'
   }
   else{
    alert('WRONG-PASSWORD')
   }
})