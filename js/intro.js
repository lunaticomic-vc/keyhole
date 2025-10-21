// Intro Scene - Keyhole Zoom Animation
document.addEventListener('DOMContentLoaded', () => {
  const keyholeWrapper = document.querySelector('.keyhole-wrapper');
  const introContainer = document.querySelector('.intro-container');
  const transitionOverlay = document.querySelector('.transition-overlay');
  
  if (!keyholeWrapper || !introContainer) {
    console.error('Required elements not found');
    return;
  }

  let isAnimating = false;

  keyholeWrapper.addEventListener('click', () => {
    if (isAnimating) return;
    
    isAnimating = true;
    
    // Add zooming class to trigger animation
    introContainer.classList.add('zooming');
    
    // Fade in black overlay for smooth transition
    setTimeout(() => {
      if (transitionOverlay) {
        transitionOverlay.classList.add('active');
      }
    }, 400);
    
    // Navigate to gallery page after animation completes
    setTimeout(() => {
      window.location.href = 'pages/gallery.html';
    }, 900);
  });

  // Prevent default drag behavior on images
  const keyhole = document.querySelector('.keyhole');
  if (keyhole) {
    keyhole.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });
  }
});
