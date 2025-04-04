// Ajusta o iframe para manter a altura dinâmica ao redimensionar a janela
window.addEventListener('resize', () => {
  const iframe = document.getElementById('powerbi-frame');
  iframe.style.height = `${window.innerHeight}px`;
});

// Chamada inicial
window.dispatchEvent(new Event('resize'));
