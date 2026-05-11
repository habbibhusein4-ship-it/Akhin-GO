/* ============================================
   JAVASCRIPT UTAMA - AKHIN.GO
   Kode dibuat sederhana agar mudah dipelajari
   ============================================ */

// --- 1. HAMBURGER MENU (Mobile) ---
// Menampilkan/menyembunyikan menu saat hamburger diklik
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
        // Toggle class 'active' pada hamburger dan menu
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// --- 2. TUTUP MENU SAAT LINK DIKLIK ---
// Agar menu mobile tertutup otomatis setelah memilih menu
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// --- 3. ANIMASI SCROLL ---
// Menampilkan elemen dengan efek fade-in saat discroll
function handleScrollAnimation() {
    // Ambil semua elemen yang memiliki class 'animate-on-scroll'
    var elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(function (el) {
        // Hitung posisi elemen dari atas viewport
        var rect = el.getBoundingClientRect();
        // Jika elemen sudah masuk ke area layar (dengan batas 100px dari bawah)
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('animated');
        }
    });
}

// Jalankan saat halaman discroll
window.addEventListener('scroll', handleScrollAnimation);
// Jalankan sekali saat halaman pertama kali dibuka
handleScrollAnimation();

// --- 4. NAVBAR EFEK (opsional) ---
// Menambahkan bayangan pada navbar saat discroll ke bawah
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// --- 5. PENANGANAN GAMBAR GAGAL MUAT ---
// Fallback sudah diatur via atribut onerror di HTML,
// tapi ini sebagai backup tambahan jika ada gambar yang luput
document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('img');
    images.forEach(function (img) {
        img.addEventListener('error', function () {
            // Jika gambar gagal dan belum ada fallback
            if (!this.parentElement.classList.contains('img-fallback')) {
                this.style.display = 'none';
                var fallback = document.createElement('div');
                fallback.className = 'img-fallback';
                fallback.textContent = 'Gambar belum ditambahkan';
                this.parentElement.appendChild(fallback);
            }
        });
    });
});