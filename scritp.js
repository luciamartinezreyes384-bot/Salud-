const rangeInput = document.getElementById('dolor');
const rangeValue = document.getElementById('dolorValue');

rangeInput.addEventListener('input', function() {
    rangeValue.textContent = this.value;
});

document.getElementById('healthForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Encuesta de salud enviada correctamente.');
    this.reset();
    rangeValue.textContent = "5";
});

// --- LÓGICA CÓDIGO POSTAL ---
document.getElementById('addressForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cp = document.getElementById('cp').value;
    
    if (/^[0-9]{5}$/.test(cp)) {
        alert(`Código Postal ${cp} válido. Formulario enviado.`);
        this.reset();
    } else {
        alert('Error: El código postal debe tener exactamente 5 números.');
    }
});
/ Mostrar valor actual del nivel de dolor
