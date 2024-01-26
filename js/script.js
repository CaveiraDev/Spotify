 // Função para obter a hora atual
 function getHour() {
    return new Date().getHours();
}

// Função para determinar a saudação com base na hora
function determineGreeting() {
    var hour = getHour();
    var greetingElement = document.getElementById('greeting');

    if (hour >= 6 && hour < 12) {
        greetingElement.textContent = 'Bom dia';
    } else if (hour >= 12 && hour < 18) {
        greetingElement.textContent = 'Boa tarde';
    } else {
        greetingElement.textContent = 'Boa noite';
    }
}

// Atualizar a saudação quando a página for carregada
document.addEventListener('DOMContentLoaded', determineGreeting);