const contactForm = document.querySelector('#contact-form');
const sAlert = document.querySelector('#alert-success');
const eAlert = document.querySelector('#alert-error');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    emailjs.send('service_dfmubsp', 'template_wftq6ym', {
        email: email,
        message: message
    })
        .then(() => {
            console.log('SUCCESS!');
            sAlert.style.display = 'block';
            setTimeout(() => {
                sAlert.style.display = 'none';
            }, 5000);
        }, (error) => {
            console.log('FAILED...', error);
            eAlert.style.display = 'block';
            console.log(eAlert)
            setTimeout(() => {
                eAlert.style.display = 'none';
            }, 5000);
        });
})


