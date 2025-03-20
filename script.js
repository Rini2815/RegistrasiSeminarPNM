// script.js

const form = document.getElementById('registrasiForm');
const submitButton = document.getElementById('submitButton');

// Fungsi untuk menampilkan pesan error
function showError(inputId, message) {
    const errorElement = document.getElementById(inputId + 'Error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Fungsi untuk menyembunyikan pesan error
function hideError(inputId) {
    const errorElement = document.getElementById(inputId + 'Error');
    errorElement.style.display = 'none';
}

// Fungsi untuk memeriksa validasi form
function validateForm() {
    let isValid = true;

    // Validasi nama (min 3 karakter)
    const nama = document.getElementById('nama').value;
    if (nama.length < 3) {
        showError('nama', 'Nama harus minimal 3 karakter.');
        isValid = false;
    } else {
        hideError('nama');
    }

    // Validasi email (format valid)
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Format email tidak valid.');
        isValid = false;
    } else {
        hideError('email');
    }

    // Validasi nomor telepon (format Indonesia)
    const telepon = document.getElementById('telepon').value;
    const teleponRegex = /^(\+62|0)[0-9]{9,12}$/;
    if (!teleponRegex.test(telepon)) {
        showError('telepon', 'Nomor telepon harus dalam format Indonesia (+62 atau 08).');
        isValid = false;
    } else {
        hideError('telepon');
    }

    // Validasi password (min 8 karakter)
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        showError('password', 'Password harus minimal 8 karakter.');
        isValid = false;
    } else {
        hideError('password');
    }

    // Validasi konfirmasi password
    const confirmPassword = document.getElementById('confirm_password').value;
    if (confirmPassword !== password) {
        showError('confirmPassword', 'Konfirmasi password tidak cocok.');
        isValid = false;
    } else {
        hideError('confirmPassword');
    }

    // Validasi tanggal lahir (tidak boleh lebih dari 2006)
    const tanggalLahir = document.getElementById('tanggal_lahir').value;
    const tahunLahir = new Date(tanggalLahir).getFullYear();
    if (tahunLahir > 2006) {
        showError('tanggalLahir', 'Anda harus berusia minimal 17 tahun (lahir sebelum 2006).');
        isValid = false;
    } else {
        hideError('tanggalLahir');
    }

    // Aktifkan atau nonaktifkan tombol submit
    submitButton.disabled = !isValid;
    return isValid;
}

// Event listener untuk validasi real-time
form.addEventListener('input', validateForm);

// Event listener untuk submit form
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Registrasi berhasil!');
        form.reset();
        submitButton.disabled = true;
    }
});