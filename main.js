document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DE INTERACCIÓN DE ENTRADA Y MÚSICA ---
    const overlay = document.getElementById("welcome-overlay");
    const btnMusic = document.getElementById("btn-with-music");
    const btnNoMusic = document.getElementById("btn-no-music");
    const audio = document.getElementById("bg-music");
    const musicToggle = document.getElementById("music-toggle");

    function entrarInvitacion() {
        overlay.classList.add("hidden");
    }

    btnMusic.addEventListener("click", () => {
        audio.play().catch(e => console.log("Auto-play bloqueado por el navegador"));
        entrarInvitacion();
    });

    btnNoMusic.addEventListener("click", () => {
        entrarInvitacion();
    });

    // Control del botón flotante de pausa/reproducción
    musicToggle.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            musicToggle.style.opacity = "1";
        } else {
            audio.pause();
            musicToggle.style.opacity = "0.5";
        }
    });

    // --- SISTEMA DE CUENTA REGRESIVA REAL ---
    // Setea aquí la fecha meta de tu evento
    const eventDate = new Date("May 15, 2027 17:00:00").getTime();

    const runTimer = () => {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft < 0) {
            clearInterval(intervalId);
            document.getElementById("countdown-timer").innerHTML = "<p>¡El gran día ha llegado!</p>";
            return;
        }

        const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = d.toString().padStart(2, '0');
        document.getElementById("hours").innerText = h.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
    };

    const intervalId = setInterval(runTimer, 1000);
    runTimer(); // Llamada inicial inmediata para evitar parpadeo
});