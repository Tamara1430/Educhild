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