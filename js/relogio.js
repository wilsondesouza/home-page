// Função para capturar, atualizar e persistir o Relógio em tempo real.
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let displayHours = hours;
    let ampm = '';

    // Exibe com dois dígitos
    const timeString = 
        `${displayHours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}${ampm}`;

    document.getElementById('time').textContent = timeString;

    // Data formatada (ex: Domingo, 08 de Junho de 2025)
    const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const dateString = now.toLocaleDateString('pt-BR', options);
    document.getElementById('date').textContent = dateString.charAt(0).toUpperCase() + dateString.slice(1);
}

// Alterna entre 12h e 24h ao clicar no relógio
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
});