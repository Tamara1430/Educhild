const gameArea = document.getElementById('game-area');
const player = document.getElementById('player');
const scoreBoard = document.getElementById('score-board');
const gameOverScreen = document.getElementById('game-over');
let playerX = window.innerWidth / 2 - 25;
let bullets = [];
let aliens = [];
let score = 0;
let gameActive = true;

// Update posisi pemain
document.addEventListener('mousemove', (e) => {
    if (gameActive) {
        playerX = e.clientX - 25;
        player.style.left = `${playerX}px`;
    }
});

// Tembak otomatis setiap 300ms
setInterval(() => {
    if (gameActive) {
        const bullet = document.createElement('div');
        bullet.className = 'bullet';
        bullet.style.left = `${playerX + 22.5}px`;
        bullet.style.bottom = '80px';
        gameArea.appendChild(bullet);
        bullets.push(bullet);
    }
}, 300);

// Buat alien setiap 1 detik
setInterval(() => {
    if (gameActive) {
        const alien = document.createElement('div');
        alien.className = 'alien';
        alien.style.left = `${Math.random() * (window.innerWidth - 40)}px`;
        alien.style.top = '0px';
        gameArea.appendChild(alien);
        aliens.push(alien);
    }
}, 1000);

// Game loop
function update() {
    if (!gameActive) return;

    // Gerakkan peluru
    bullets.forEach((bullet, index) => {
        const bottom = parseInt(bullet.style.bottom) || 80;
        if (bottom > window.innerHeight) {
            bullet.remove();
            bullets.splice(index, 1);
        } else {
            bullet.style.bottom = `${bottom + 10}px`;
        }
    });

    // Gerakkan alien
    aliens.forEach((alien, index) => {
        const top = parseInt(alien.style.top) || 0;
        if (top > window.innerHeight) {
            alien.remove();
            aliens.splice(index, 1);
            endGame(); // Game over jika alien mencapai bawah
        } else {
            alien.style.top = `${top + 2}px`;
        }
    });

    // Deteksi tabrakan
    bullets.forEach((bullet, bulletIndex) => {
        const bulletRect = bullet.getBoundingClientRect();
        aliens.forEach((alien, alienIndex) => {
            const alienRect = alien.getBoundingClientRect();
            if (
                bulletRect.left < alienRect.right &&
                bulletRect.right > alienRect.left &&
                bulletRect.top < alienRect.bottom &&
                bulletRect.bottom > alienRect.top
            ) {
                bullet.remove();
                alien.remove();
                bullets.splice(bulletIndex, 1);
                aliens.splice(alienIndex, 1);
                score += 10;
                scoreBoard.textContent = `Score: ${score}`;
            }
        });
    });

    requestAnimationFrame(update);
}

// Fungsi untuk mengakhiri permainan
function endGame() {
    gameActive = false;
    gameOverScreen.style.display = 'block';
    clearInterval(bulletInterval);
    clearInterval(alienInterval);
}

// Mulai game loop
update();