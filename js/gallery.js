// Gallery Scene - Interactive Thumbnails
document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  // Add click handlers for future link functionality
  thumbnails.forEach((thumbnail, index) => {
    // Prevent image dragging
    const images = thumbnail.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('dragstart', (e) => {
        e.preventDefault();
      });
    });
    
    // Optional: Add click logging for future link setup
    thumbnail.addEventListener('click', () => {
      console.log(`Thumbnail ${index + 1} clicked - ready for link integration`);
    });
  });
  
  // Smooth scroll behavior if needed
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });
});
