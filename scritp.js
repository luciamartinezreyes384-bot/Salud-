// Mostrar valor actual del nivel de dolor
const rangeInput = document.getElementById('dolor');
const rangeValue = document.getElementById('dolorValue');

rangeInput.addEventListener('input', function() {
    rangeValue.textContent = this.value;
});

// Envío del formulario
document.getElementById('healthForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Encuesta enviada correctamente.');
    this.reset();
    rangeValue.textContent = "5"; // Resetear valor visual
});
