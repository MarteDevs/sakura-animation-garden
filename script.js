const quotes = [
    { text: "No importa en qué parte del mundo estés, te buscaré.", source: "Your Name (Kimi no Na wa)" },
    { text: "Quiero estar contigo. De ahora en adelante, quiero pasar todos y cada uno de mis días contigo hasta que muera.", source: "Clannad" },
    { text: "Incluso si el mundo entero se vuelve contra ti, yo seguiré a tu lado.", source: "Tenki no Ko (Weathering With You)" },
    { text: "Si pudiera conocerte mil veces, te elegiría mil veces más.", source: "Romance Anime Quote" },
    { text: "Te amo más que a cualquier cielo azul.", source: "Tenki no Ko" },
    { text: "Me enamoré de ti. No porque no tuviera a nadie más, sino porque no quería a nadie más.", source: "Shigatsu wa Kimi no Uso" }
];

const container = document.getElementById('garden-container');
const quoteOverlay = document.getElementById('quote-overlay');
const quoteText = document.getElementById('quote-text');
const quoteSource = document.getElementById('quote-source');
const musicBtn = document.getElementById('music-btn');
const audio = document.getElementById('bg-music');
const canvas = document.getElementById('petal-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let animationId;

// Ajustar canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// SVG de Flor de Sakura
const sakuraSvgContent = `
<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M256,0C167.6,0,105.7,46.9,86.4,117c-13.6,49.4,3.1,101.5,41.9,139c-38.8,37.5-55.5,89.6-41.9,139C105.7,465.1,167.6,512,256,512c88.4,0,150.3-46.9,169.6-117c13.6-49.4-3.1-101.5-41.9-139c38.8-37.5,55.5-89.6,41.9-139C406.3,46.9,344.4,0,256,0z M256,224c-17.7,0-32-14.3-32-32s14.3-32,32-32s32,14.3,32,32S273.7,224,256,224z" fill="currentColor"/>
</svg>
`; 
// Usando un path simplificado o iconografía genérica de flor para demo
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
        
        // Posición aleatoria
        const x = Math.random() * 80 + 10; // 10% a 90%
        const y = Math.random() * 80 + 10; // 10% a 90%
        
        flower.style.left = `${x}%`;
        flower.style.top = `${y}%`;
        
        // Retraso de animación aleatorio
        flower.style.animationDelay = `${Math.random() * 2}s`;
        
        flower.addEventListener('click', (e) => handleFlowerClick(e, flower));
        
        container.appendChild(flower);
    }
}

function handleFlowerClick(e, element) {
    // 1. Lluvia de pétalos
    createExplosion(e.clientX, e.clientY);
    
    // 2. Mostrar frase
    showRandomQuote();
    
    // 3. Efecto visual en la flor (opcional: ocultar o animar)
    element.style.transform = "scale(0) rotate(180deg)";
    element.style.opacity = "0";
    setTimeout(() => {
        // Reaparecer en otro lugar o reiniciar
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
    
    quoteText.textContent = `"${quote.text}"`;
    quoteSource.textContent = `- ${quote.source}`;
    
    quoteOverlay.classList.remove('hidden');
    quoteOverlay.classList.add('visible');
    
    // Reiniciar animación
    quoteOverlay.classList.remove('fade-in-up');
    void quoteOverlay.offsetWidth; // trigger reflow
    quoteOverlay.classList.add('fade-in-up');

    // Ocultar después de unos segundos si se desea, o dejar hasta el próximo click
}

// --- Sistema de Partículas (Pétalos) ---
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
        // Dibujar forma de pétalo simple
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

function createExplosion(x, y) {
    for (let i = 0; i < 30; i++) {
        particles.push(new Petal(x, y));
    }
    if (!animationId) animateParticles();
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].size <= 0.2 || particles[i].y > canvas.height) {
            particles.splice(i, 1);
            i--;
        }
    }
    
    if (particles.length > 0) {
        animationId = requestAnimationFrame(animateParticles);
    } else {
        animationId = null;
    }
}

// --- Música ---
let isPlaying = false;
musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.innerHTML = "<span>🎵</span> Música";
    } else {
        audio.play().catch(e => alert("Por favor interactúa con la página primero o agrega un archivo de audio válido."));
        musicBtn.innerHTML = "<span>⏸️</span> Pausar";
    }
    isPlaying = !isPlaying;
});

// Inicializar
createFlowers(5);
