const contrastButton = document.getElementById('toggle-contrast');
const body = document.body;
const yearElement = document.getElementById('year');
const form = document.querySelector('.contact-card');
const statusMessage = document.getElementById('status-message');

if (contrastButton) {
  contrastButton.addEventListener('click', () => {
    body.classList.toggle('high-contrast');
    const isHighContrast = body.classList.contains('high-contrast');
    contrastButton.setAttribute('aria-pressed', String(isHighContrast));
    contrastButton.textContent = isHighContrast ? 'Desativar alto contraste' : 'Ativar alto contraste';
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (form && statusMessage) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    statusMessage.textContent = 'Obrigado! Sua solicitação foi recebida com sucesso.';
  });
}
