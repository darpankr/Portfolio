// Add a fade-in effect to the text
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.style.opacity = 0;
    container.style.transition = 'opacity 2s';
  
    setTimeout(() => {
      container.style.opacity = 1;
    }, 500); // Fade-in starts after 500ms
  });
  

