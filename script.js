let newsletterEmail = document.getElementById('signup-input');

function clearNewsletterInput() {
    newsletterEmail.attr("value", '');
};

newsletterEmail.onfocus = clearNewsletterInput;

// newsletterEmail.addEventListener('focus', clearNewsletterInput);