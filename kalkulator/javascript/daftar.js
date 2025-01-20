const togglePasswordButton = document.getElementById('togglePasswordButton');
const passwordInput = document.getElementById('passwordInput');

togglePasswordButton.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Ubah input ke teks (password terlihat)
        togglePasswordButton.classList.remove('show-password');
        togglePasswordButton.classList.add('hide-password');
        togglePasswordButton.setAttribute('aria-label', 'Hide password'); // Aksesibilitas
    } else {
        passwordInput.type = 'password'; // Kembali ke mode tersembunyi
        togglePasswordButton.classList.remove('hide-password');
        togglePasswordButton.classList.add('show-password');
        togglePasswordButton.setAttribute('aria-label', 'Show password'); // Aksesibilitas
    }
});

const Confirm = document.getElementById('Confirm');
const ConfirmPasswordinput = document.getElementById('ConfirmPasswordinput');

Confirm.addEventListener('click', function () {
    if (ConfirmPasswordinput.type === 'password') {
        ConfirmPasswordinput.type = 'text'; // Ubah input ke teks (password terlihat)
        Confirm.classList.remove('show-password');
        Confirm.classList.add('hide-password');
        Confirm.setAttribute('aria-label', 'Hide password'); // Aksesibilitas
    } else {
        ConfirmPasswordinput.type = 'password'; // Kembali ke mode tersembunyi
        Confirm.classList.remove('hide-password');
        Confirm.classList.add('show-password');
        Confirm.setAttribute('aria-label', 'Show password'); // Aksesibilitas
    }
});