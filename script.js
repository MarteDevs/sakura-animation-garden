const quotes = [
    { "frase": "Te amo más de lo que las palabras pueden expresar.", "anime": "Sword Art Online" },
    { "frase": "Mientras estés conmigo, no necesito nada más.", "anime": "Naruto" },
    { "frase": "Eres la razón por la que sonrío cada día.", "anime": "Toradora!" },
    { "frase": "No importa dónde estés, siempre estaré contigo.", "anime": "Your Name" },
    { "frase": "Mi corazón siempre te encontrará.", "anime": "Inuyasha" },
    { "frase": "Quiero quedarme a tu lado para siempre.", "anime": "Clannad" },
    { "frase": "Eres mi luz en la oscuridad.", "anime": "Attack on Titan" },
    { "frase": "Si estamos juntos, puedo superar cualquier cosa.", "anime": "Fairy Tail" },
    { "frase": "Tu sonrisa es mi tesoro más preciado.", "anime": "Kimi ni Todoke" },
    { "frase": "No necesito un milagro, te tengo a ti.", "anime": "Fullmetal Alchemist: Brotherhood" },
    { "frase": "Contigo, todo es posible.", "anime": "Violet Evergarden" },
    { "frase": "Quiero caminar a tu lado toda la vida.", "anime": "Your Lie in April" },
    { "frase": "Prometo protegerte siempre.", "anime": "Horimiya" },
    { "frase": "Mi mundo cambió cuando te conocí.", "anime": "Your Lie in April" },
    { "frase": "Mi corazón late por ti.", "anime": "Fruits Basket" },
    { "frase": "Siempre elijo estar contigo.", "anime": "Fruits Basket" },
    { "frase": "Eres mi hogar.", "anime": "ReLIFE" },
    { "frase": "Gracias por existir.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Eres mi destino.", "anime": "Plastic Memories" },
    { "frase": "Quiero caminar a tu lado toda la vida.", "anime": "Horimiya" },
    { "frase": "Eres mi destino.", "anime": "Your Lie in April" },
    { "frase": "Gracias por existir.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Siempre elijo estar contigo.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Quiero caminar a tu lado toda la vida.", "anime": "Plastic Memories" },
    { "frase": "Gracias por existir.", "anime": "Your Lie in April" },
    { "frase": "Mi corazón late por ti.", "anime": "Your Lie in April" },
    { "frase": "Eres mi destino.", "anime": "Ao Haru Ride" },
    { "frase": "Prometo protegerte siempre.", "anime": "Plastic Memories" },
    { "frase": "Mi mundo cambió cuando te conocí.", "anime": "Your Lie in April" },
    { "frase": "Siempre elijo estar contigo.", "anime": "Your Lie in April" },
    { "frase": "Prometo protegerte siempre.", "anime": "Ao Haru Ride" },
    { "frase": "Siempre elijo estar contigo.", "anime": "Horimiya" },
    { "frase": "Siempre elijo estar contigo.", "anime": "Your Lie in April" },
    { "frase": "Contigo, todo es posible.", "anime": "Darling in the Franxx" },
    { "frase": "Quiero caminar a tu lado toda la vida.", "anime": "Your Lie in April" },
    { "frase": "Quiero caminar a tu lado toda la vida.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Eres mi persona favorita en el mundo.", "anime": "ReLIFE" },
    { "frase": "Mi mundo cambió cuando te conocí.", "anime": "Plastic Memories" },
    { "frase": "Prometo protegerte siempre.", "anime": "Your Lie in April" },
    { "frase": "Contigo, todo es posible.", "anime": "Angel Beats!" },
    { "frase": "Eres mi persona favorita en el mundo.", "anime": "Your Lie in April" },
    { "frase": "Contigo, todo es posible.", "anime": "Horimiya" },
    { "frase": "Eres mi hogar.", "anime": "Darling in the Franxx" },
    { "frase": "Prometo protegerte siempre.", "anime": "Ao Haru Ride" },
    { "frase": "Prometo protegerte siempre.", "anime": "Ao Haru Ride" },
    { "frase": "Gracias por existir.", "anime": "Your Lie in April" },
    { "frase": "Mi corazón late por ti.", "anime": "ReLIFE" },
    { "frase": "Prometo protegerte siempre.", "anime": "Violet Evergarden" },
    { "frase": "Mi corazón late por ti.", "anime": "ReLIFE" },
    { "frase": "Gracias por existir.", "anime": "Plastic Memories" },
    { "frase": "Eres mi persona favorita en el mundo.", "anime": "ReLIFE" },
    { "frase": "Eres mi hogar.", "anime": "Ao Haru Ride" },
    { "frase": "Gracias por existir.", "anime": "ReLIFE" },
    { "frase": "Contigo, todo es posible.", "anime": "Angel Beats!" },
    { "frase": "Mi mundo cambió cuando te conocí.", "anime": "ReLIFE" },
    { "frase": "Contigo, todo es posible.", "anime": "Your Lie in April" },
    { "frase": "Eres mi persona favorita en el mundo.", "anime": "ReLIFE" },
    { "frase": "Mi mundo cambió cuando te conocí.", "anime": "Your Lie in April" },
    { "frase": "Mi mundo cambió cuando te conocí.", "anime": "Darling in the Franxx" },
    { "frase": "Eres mi persona favorita en el mundo.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Gracias por existir.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Quiero caminar a tu lado toda la vida.", "anime": "Your Lie in April" },
    { "frase": "Contigo, todo es posible.", "anime": "Your Lie in April" },
    { "frase": "Siempre elijo estar contigo.", "anime": "Horimiya" },
    { "frase": "Prometo protegerte siempre.", "anime": "Horimiya" },
    { "frase": "Eres mi destino.", "anime": "Violet Evergarden" },
    { "frase": "Gracias por existir.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Siempre elijo estar contigo.", "anime": "Darling in the Franxx" },
    { "frase": "Mi corazón late por ti.", "anime": "Your Lie in April" },
    { "frase": "Contigo, todo es posible.", "anime": "Darling in the Franxx" },
    { "frase": "Eres mi hogar.", "anime": "Angel Beats!" },
    { "frase": "Mi mundo cambió cuando te conocí.", "anime": "Angel Beats!" },
    { "frase": "Prometo protegerte siempre.", "anime": "ReLIFE" },
    { "frase": "Eres mi persona favorita en el mundo.", "anime": "Ao Haru Ride" },
    { "frase": "Mi mundo cambió cuando te conocí.", "anime": "Violet Evergarden" },
    { "frase": "Siempre elijo estar contigo.", "anime": "ReLIFE" },
    { "frase": "Gracias por existir.", "anime": "Angel Beats!" },
    { "frase": "Contigo, todo es posible.", "anime": "ReLIFE" },
    { "frase": "Contigo, todo es posible.", "anime": "Violet Evergarden" },
    { "frase": "Gracias por existir.", "anime": "Your Lie in April" },
    { "frase": "Gracias por existir.", "anime": "Your Lie in April" },
    { "frase": "Mi corazón late por ti.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Quiero caminar a tu lado toda la vida.", "anime": "Your Lie in April" },
    { "frase": "Contigo, todo es posible.", "anime": "ReLIFE" },
    { "frase": "Prometo protegerte siempre.", "anime": "Ao Haru Ride" },
    { "frase": "Eres mi destino.", "anime": "Ao Haru Ride" },
    { "frase": "Siempre elijo estar contigo.", "anime": "Violet Evergarden" },
    { "frase": "Quiero caminar a tu lado toda la vida.", "anime": "Ao Haru Ride" },
    { "frase": "Eres mi hogar.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Mi mundo cambió cuando te conocí.", "anime": "Ao Haru Ride" },
    { "frase": "Mi corazón late por ti.", "anime": "Darling in the Franxx" },
    { "frase": "Contigo, todo es posible.", "anime": "ReLIFE" },
    { "frase": "Mi corazón late por ti.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Mi mundo cambió cuando te conocí.", "anime": "Violet Evergarden" },
    { "frase": "Mi corazón late por ti.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Quiero caminar a tu lado toda la vida.", "anime": "Plastic Memories" },
    { "frase": "Prometo protegerte siempre.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Mi corazón late por ti.", "anime": "Ao Haru Ride" },
    { "frase": "Quiero caminar a tu lado toda la vida.", "anime": "Violet Evergarden" },
    { "frase": "Eres mi hogar.", "anime": "Angel Beats!" }
];

const container = document.getElementById('garden-container');
const quoteOverlay = document.getElementById('quote-overlay');
const quoteText = document.getElementById('quote-text');
const quoteSource = document.getElementById('quote-source');
const musicBtn = document.getElementById('music-btn');
const audio = document.getElementById('bg-music');
const canvas = document.getElementById('petal-canvas');
const ctx = canvas.getContext('2d');
const cloudsContainer = document.getElementById('clouds-container');

let particles = [];
let sparkles = [];
let animationId;

// Ajustar canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// --- Generación de Nubes ---
function createClouds() {
    const cloudCount = 4;
    for (let i = 0; i < cloudCount; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        
        const width = Math.random() * 300 + 200;
        const height = width * 0.4;
        
        cloud.style.width = `${width}px`;
        cloud.style.height = `${height}px`;
        cloud.style.top = `${Math.random() * 60}%`;
        cloud.style.left = `-400px`; // Inicio fuera de pantalla
        
        const duration = Math.random() * 40 + 60; // 60-100s
        cloud.style.animationDuration = `${duration}s`;
        cloud.style.animationDelay = `${Math.random() * -duration}s`; // Iniciar en posición random
        
        cloudsContainer.appendChild(cloud);
    }
}
createClouds();

// SVG de Flor de Sakura
const simpleFlowerSvg = `
<svg viewBox="0 0 100 100" style="fill:#ffb7c5; overflow:visible;">
  <path d="M50 50 Q70 20 90 50 Q70 80 50 50 Q30 80 10 50 Q30 20 50 50 Z" transform="rotate(0 50 50)" />
  <path d="M50 50 Q70 20 90 50 Q70 80 50 50 Q30 80 10 50 Q30 20 50 50 Z" transform="rotate(72 50 50)" />
  <path d="M50 50 Q70 20 90 50 Q70 80 50 50 Q30 80 10 50 Q30 20 50 50 Z" transform="rotate(144 50 50)" />
  <path d="M50 50 Q70 20 90 50 Q70 80 50 50 Q30 80 10 50 Q30 20 50 50 Z" transform="rotate(216 50 50)" />
  <path d="M50 50 Q70 20 90 50 Q70 80 50 50 Q30 80 10 50 Q30 20 50 50 Z" transform="rotate(288 50 50)" />
  <circle cx="50" cy="50" r="10" fill="#ffdde1" />
</svg>
`;

function createFlowers(count) {
    for (let i = 0; i < count; i++) {
        const flower = document.createElement('div');
        flower.classList.add('sakura-flower');
        flower.innerHTML = simpleFlowerSvg;
        
        const x = Math.random() * 80 + 10;
        const y = Math.random() * 80 + 10;
        
        flower.style.left = `${x}%`;
        flower.style.top = `${y}%`;
        flower.style.animationDelay = `${Math.random() * 2}s`;
        
        flower.addEventListener('click', (e) => handleFlowerClick(e, flower));
        
        container.appendChild(flower);
    }
}

function handleFlowerClick(e, element) {
    createExplosion(e.clientX, e.clientY);
    showRandomQuote();
    
    element.style.transform = "scale(0) rotate(180deg)";
    element.style.opacity = "0";
    setTimeout(() => {
        const x = Math.random() * 80 + 10;
        const y = Math.random() * 80 + 10;
        element.style.left = `${x}%`;
        element.style.top = `${y}%`;
        element.style.transform = "scale(1) rotate(0deg)";
        element.style.opacity = "1";
    }, 2000);
}

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    quoteText.textContent = `"${quote.frase}"`;
    quoteSource.textContent = `- ${quote.anime}`;
    
    quoteOverlay.classList.remove('hidden');
    quoteOverlay.classList.add('visible');
    
    quoteOverlay.classList.remove('fade-in-up');
    void quoteOverlay.offsetWidth;
    quoteOverlay.classList.add('fade-in-up');
}

// --- Sistema de Partículas (Pétalos y Destellos) ---
class Petal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 5;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 3 + 2;
        this.color = `rgba(255, ${180 + Math.random() * 40}, ${190 + Math.random() * 40}, ${Math.random() * 0.5 + 0.5})`;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
        this.sway = 0;
        this.swaySpeed = Math.random() * 0.05 + 0.01;
    }

    update() {
        this.y += this.speedY;
        this.sway += this.swaySpeed;
        this.x += Math.sin(this.sway) * 2;
        this.rotation += this.rotationSpeed;
        if (this.size > 0.2) this.size -= 0.05;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

class Sparkle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.opacity = Math.random();
        this.speedY = Math.random() * -0.5 - 0.1; // Flotar hacia arriba suavemente
        this.fadeSpeed = Math.random() * 0.01 + 0.005;
    }

    update() {
        this.y += this.speedY;
        this.opacity -= this.fadeSpeed;
        if (this.opacity <= 0) {
            this.y = canvas.height + 10;
            this.x = Math.random() * canvas.width;
            this.opacity = 1;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function createExplosion(x, y) {
    for (let i = 0; i < 30; i++) {
        particles.push(new Petal(x, y));
    }
}

function initSparkles() {
    for (let i = 0; i < 50; i++) {
        sparkles.push(new Sparkle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Animar destellos (siempre activos)
    for (let i = 0; i < sparkles.length; i++) {
        sparkles[i].update();
        sparkles[i].draw();
    }

    // Animar pétalos (solo cuando existen)
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].size <= 0.2 || particles[i].y > canvas.height) {
            particles.splice(i, 1);
            i--;
        }
    }
    
    requestAnimationFrame(animateParticles);
}

// --- Música ---
let isPlaying = false;
audio.volume = 1.0; // Volumen al 100%

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.innerHTML = "<span>🎵</span> Música";
        musicBtn.classList.remove('playing');
    } else {
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Reproducción iniciada con éxito
                musicBtn.innerHTML = "<span>⏸️</span> Pausar";
                musicBtn.classList.add('playing');
            })
            .catch(error => {
                console.error("Error al reproducir audio:", error);
                alert("No se pudo reproducir la música. Asegúrate de que el archivo 'music.mp3' esté en la carpeta 'assets/music/'.");
                musicBtn.innerHTML = "<span>⚠️</span> Error";
            });
        }
    }
    isPlaying = !isPlaying;
});

// Inicializar
createFlowers(5);
initSparkles();
animateParticles(); // Bucle constante para los destellos
