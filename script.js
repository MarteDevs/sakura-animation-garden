const quotes = [
    { "frase": "Cuando miro tus ojos, encuentro mi hogar.", "anime": "Your Name" },
    { "frase": "Quiero ser la razón de tu sonrisa cada mañana.", "anime": "Clannad" },
    { "frase": "Aunque el mundo cambie, mi cariño por ti no lo hará.", "anime": "Toradora!" },
    { "frase": "Tu voz es la melodía que calma mis días.", "anime": "Kimi ni Todoke" },
    { "frase": "Si el destino nos separa, lo desafiaré por encontrarte.", "anime": "Fruits Basket" },
    { "frase": "En el silencio, sólo tu nombre ilumina mi pecho.", "anime": "Ao Haru Ride" },
    { "frase": "Caminar a tu lado convierte cualquier lugar en un sueño.", "anime": "Golden Time" },
    { "frase": "Guardaré cada recuerdo contigo como un tesoro eterno.", "anime": "Anohana" },
    { "frase": "Tu risa tiene el poder de cambiar mi mala suerte.", "anime": "Lovely★Complex" },
    { "frase": "Si pudiera elegir una vida, te elegiría a ti una y otra vez.", "anime": "NANA" },
    { "frase": "Prometo protegerte aunque mi fuerza sea imperfecta.", "anime": "Kaichou wa Maid-sama!" },
    { "frase": "Eres la historia más bonita que ha llegado a mi vida.", "anime": "Sukitte Ii na yo" },
    { "frase": "A tu lado, incluso el invierno se siente como primavera.", "anime": "Spice and Wolf" },
    { "frase": "Cuando pienso en futuro, sólo te veo a ti.", "anime": "Wolf Children" },
    { "frase": "Tu nombre se quedó grabado en mi pecho como una promesa.", "anime": "Violet Evergarden" },
    { "frase": "Si cerrar los ojos me acerca a ti, lo haré sin dudar.", "anime": "Angel Beats!" },
    { "frase": "Eres esa memoria que quiero revivir cada día.", "anime": "Plastic Memories" },
    { "frase": "Contigo aprendí a escuchar la música del corazón.", "anime": "Your Lie in April" },
    { "frase": "Me basta mirarte para saber que todo está bien.", "anime": "Horimiya" },
    { "frase": "Aunque discutamos, te escogería siempre entre mil opciones.", "anime": "My Teen Romantic Comedy SNAFU" },
    { "frase": "Tu felicidad es el mapa que guía mis decisiones.", "anime": "Honey and Clover" },
    { "frase": "En cada logro tuyo, siento que también gané algo mío.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Prefiero un minuto a tu lado que toda una eternidad sin ti.", "anime": "Kaguya-sama: Love is War" },
    { "frase": "Si perderte fuera el precio de amarte, me negaría a pagar.", "anime": "Whisper of the Heart" },
    { "frase": "Eres la calma después de mi tormenta más feroz.", "anime": "From Up on Poppy Hill" },
    { "frase": "Tu abrazo es el idioma que no necesito aprender.", "anime": "The Garden of Words" },
    { "frase": "La distancia sólo hizo que mi cariño creciera más fuerte.", "anime": "5 Centimeters per Second" },
    { "frase": "Quisiera proteger tu sonrisa incluso en mis noches más oscuras.", "anime": "I Want to Eat Your Pancreas" },
    { "frase": "Ser tu amigo fue el primer paso; amarte, el segundo inevitable.", "anime": "My Love Story!!" },
    { "frase": "Aunque finjamos normalidad, mi corazón te elige siempre.", "anime": "Monthly Girls' Nozaki-kun" },
    { "frase": "Eres la prenda más valiosa en el armario de mi alma.", "anime": "Paradise Kiss" },
    { "frase": "No necesito entendimiento perfecto; sólo tu compañía sincera.", "anime": "Kokoro Connect" },
    { "frase": "Si pudiera detener el tiempo, lo haría en tu mirada.", "anime": "The Anthem of the Heart" },
    { "frase": "Por ti, aprendí que el riesgo más grande vale la pena.", "anime": "Romeo x Juliet" },
    { "frase": "Tu honestidad me enseñó a querer sin miedo.", "anime": "My Little Monster" },
    { "frase": "A veces basta tu silencio para entender cuánto me amas.", "anime": "True Tears" },
    { "frase": "Nuestro pasado duele menos si al final estás tú.", "anime": "ef: A Tale of Memories" },
    { "frase": "Entre mil voces, la tuya siempre destaca para mí.", "anime": "School Rumble" },
    { "frase": "Aunque la ciudad cambie, mi sentimiento permanece constante.", "anime": "Weathering With You" },
    { "frase": "Si pudiera volver a elegir, volvería a cruzar el mismo camino que me trajo a ti.", "anime": "The Girl Who Leapt Through Time" },
    { "frase": "Encontrarme contigo fue mi segundo nacimiento.", "anime": "A Silent Voice" },
    { "frase": "Cada promesa contigo pesa más que cualquier miedo.", "anime": "White Album 2" },
    { "frase": "Eres la tinta con la que escribiría todas mis cartas.", "anime": "Snow White with the Red Hair" },
    { "frase": "Amarte es aprender un idioma que sólo nosotros dos hablamos.", "anime": "The World Is Still Beautiful" },
    { "frase": "Tus pequeños gestos hacen grande todo mi mundo.", "anime": "Rascal Does Not Dream of Bunny Girl Senpai" },
    { "frase": "Cuando te veo, las palabras sobran y el corazón habla.", "anime": "After the Rain" },
    { "frase": "Ser testigo de tus pasos es la mejor compañía.", "anime": "Tamako Love Story" },
    { "frase": "Me pierdo en tus ojos y me encuentro feliz.", "anime": "Nagi-Asu: A Lull in the Sea" },
    { "frase": "Aunque el orgullo nos separe, volverás a encontrarme aquí.", "anime": "Love, Chunibyo & Other Delusions" },
    { "frase": "Contigo cada tarde se vuelve un recuerdo imborrable.", "anime": "Emma: A Victorian Romance" },
    { "frase": "Tu presencia convierte mis dudas en certezas.", "anime": "Kids on the Slope" },
    { "frase": "Amarte es la decisión más sensata que he tomado.", "anime": "Bloom Into You" },
    { "frase": "Si un día dudas, deja que mis hechos respondan por mí.", "anime": "Orange" },
    { "frase": "Tu piel guarda el calor de todas mis promesas.", "anime": "Scum's Wish" },
    { "frase": "Prefiero la verdad dura que una mentira suave sin ti.", "anime": "A Town Where You Live" },
    { "frase": "Tu compañía es la partitura donde encajan mis silencios.", "anime": "Nodame Cantabile" },
    { "frase": "Quiero cuidarte incluso cuando no haya nada que arreglar.", "anime": "Kiss Him, Not Me" },
    { "frase": "Eres la escena favorita de mi película interna.", "anime": "Kanon" },
    { "frase": "Por ti, mis días mundanos adquieren color.", "anime": "Air" },
    { "frase": "Amarte implicó aprender a aceptar mis contradicciones.", "anime": "His and Her Circumstances" },
    { "frase": "Si la vida fuera un laberinto, tu mano sería mi guía.", "anime": "Uchouten Kazoku" },
    { "frase": "Eres la razón por la que esperaría cualquier tren.", "anime": "Rurouni Kenshin" },
    { "frase": "En tus labios encontré respuestas que no sabía buscar.", "anime": "Sailor Moon" },
    { "frase": "Tu nombre aparece en todos mis planes sin pedir permiso.", "anime": "Clannad: After Story" },
    { "frase": "No hay noche demasiado larga si tu recuerdo la ilumina.", "anime": "Kimi to 100 Kaime no Koi" },
    { "frase": "Prometo ser el abrigo que aleje tu frío.", "anime": "Snow White with the Red Hair" },
    { "frase": "Cada vez que dices mi nombre, el mundo hace silencio.", "anime": "Your Name" },
    { "frase": "No quiero ser perfecto, sólo perfecto para ti.", "anime": "Toradora!" },
    { "frase": "Eres el final feliz que nunca imaginé merecer.", "anime": "Kimi ni Todoke" },
    { "frase": "La distancia enseña cuánto valen los latidos compartidos.", "anime": "Fruits Basket" },
    { "frase": "Si mi voz pudiera llegar a ti a través del viento, te diría todo.", "anime": "Ao Haru Ride" },
    { "frase": "Tu sonrisa es la estación donde siempre quiero bajar.", "anime": "Golden Time" },
    { "frase": "No necesito comprenderlo todo; basta con comprenderte a ti.", "anime": "Anohana" },
    { "frase": "Eres la promesa que más feliz me hace cumplir.", "anime": "Lovely★Complex" },
    { "frase": "Vivir a tu lado convierte lo ordinario en sagrado.", "anime": "NANA" },
    { "frase": "Si me das una razón, construiré mil motivos para quererte.", "anime": "Kaichou wa Maid-sama!" },
    { "frase": "Tu mirada tiene el poder de regresar mi alma a casa.", "anime": "Sukitte Ii na yo" },
    { "frase": "A tu lado aprendí el lenguaje que no enseñan en libros.", "anime": "Spice and Wolf" },
    { "frase": "Si tuviera que elegir una canción, sería la que compusimos sin saberlo.", "anime": "Your Lie in April" },
    { "frase": "Aunque la vida sea incierta, mi cariño es constante.", "anime": "Horimiya" },
    { "frase": "En cada despedida hay una semilla de regreso cuando te pienso.", "anime": "My Teen Romantic Comedy SNAFU" },
    { "frase": "Tus defectos son los capítulos que más amo leer.", "anime": "Honey and Clover" },
    { "frase": "Prometo abrazarte fuerte cuando el mundo te haga dudar.", "anime": "The Pet Girl of Sakurasou" },
    { "frase": "Eres mi lugar favorito para quedarme sin planes.", "anime": "Kaguya-sama: Love is War" },
    { "frase": "Si el tiempo fuera un río, me lanzaría a nadar hacia ti.", "anime": "Whisper of the Heart" },
    { "frase": "Contigo aprendí a esperar sin desesperar.", "anime": "From Up on Poppy Hill" },
    { "frase": "Tu nombre en mi boca es la más dulce oración.", "anime": "The Garden of Words" },
    { "frase": "No necesito un mañana perfecto, sólo uno contigo.", "anime": "5 Centimeters per Second" },
    { "frase": "Cada palabra tuya regresa en eco a mi corazón.", "anime": "I Want to Eat Your Pancreas" },
    { "frase": "Amarte sinceramente es mi manera de ser valiente.", "anime": "My Love Story!!" },
    { "frase": "Tu ternura es el refugio donde quiero quedarme siempre.", "anime": "Monthly Girls' Nozaki-kun" },
    { "frase": "Cuando estás cerca, todo lo demás encuentra su lugar.", "anime": "Paradise Kiss" },
    { "frase": "Tu recuerdo es el mapa que sigo en mis noches perdidas.", "anime": "Kokoro Connect" },
    { "frase": "Si pudiera darte una estrella, sería la que guía tus pasos.", "anime": "The Anthem of the Heart" },
    { "frase": "Amarte fue aprender a escuchar los silencios que importan.", "anime": "Romeo x Juliet" },
    { "frase": "Tu mirada convierte mis miedos en promesas.", "anime": "My Little Monster" },
    { "frase": "Quisiera ser el nombre que pronuncias antes de dormir.", "anime": "True Tears" },
    { "frase": "Si me dejas, haré del miedo una historia pequeña junto a ti.", "anime": "ef: A Tale of Memories" },
    { "frase": "Eres ese pensamiento que me visita con ternura cada día.", "anime": "School Rumble" },
    { "frase": "No hay distancia que borre lo que el corazón eligió.", "anime": "Weathering With You" },
    { "frase": "Si pudiera pedir un deseo, sería elegirte siempre.", "anime": "The Girl Who Leapt Through Time" },
    { "frase": "Amarte es mi acto de fe más sencillo y profundo.", "anime": "A Silent Voice" },
    { "frase": "Tu risa despeja las nubes más negras de mi mente.", "anime": "White Album 2" },
    { "frase": "Cada gesto tuyo es una razón para quedarme.", "anime": "Snow White with the Red Hair" },
    { "frase": "Eres la página en blanco que quiero llenar todos los días.", "anime": "The World Is Still Beautiful" }
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
    
    // Ocultar instrucciones después de la primera interacción
    const instructions = document.getElementById('instructions');
    if (instructions) {
        instructions.style.display = 'none';
    }

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

// Intentar reproducir música automáticamente al cargar
window.addEventListener('load', () => {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Auto-play funcionó
            isPlaying = true;
            musicBtn.innerHTML = "<span>⏸️</span> Pausar";
            musicBtn.classList.add('playing');
        })
        .catch(error => {
            // Auto-play bloqueado por el navegador
            console.log("Auto-play bloqueado. Esperando interacción del usuario.");
            // Añadir listener para el primer clic en cualquier parte
            document.addEventListener('click', startAudioOnFirstClick, { once: true });
        });
    }
});

function startAudioOnFirstClick() {
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            musicBtn.innerHTML = "<span>⏸️</span> Pausar";
            musicBtn.classList.add('playing');
        }).catch(e => console.error("Error al iniciar audio tras clic:", e));
    }
}

musicBtn.addEventListener('click', (e) => {
    // Evitar que este clic dispare el listener global si aún existe
    e.stopPropagation(); 
    
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
