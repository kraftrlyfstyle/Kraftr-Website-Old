// Add JavaScript to play the video on hover
document.querySelector('.photo-container').addEventListener('mouseenter', function() {
    const video = this.querySelector('.video1');
    video.style.opacity = 1; // Show the video on hover
    video.play(); // Start playing the video
});

// Pause the video on mouse leave (optional)
document.querySelector('.photo-container').addEventListener('mouseleave', function() {
    const video = this.querySelector('.video1');
    video.style.opacity = 0; // Hide the video on mouse leave
    video.pause(); // Pause the video
});
