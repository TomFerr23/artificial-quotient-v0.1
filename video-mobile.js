document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("logo-video");
    const playButton = document.getElementById("play-button");

    // Function to play the video
    function playVideo() {
        if (video.paused) {
            video.play().catch(function (error) {
                // Handle video playback error if needed
                console.error("Video playback error: " + error.message);
            });
        }
    }

    // Play the video when the button is clicked
    playButton.addEventListener("click", playVideo);

    // Delay video playback (optional)
    setTimeout(function () {
        playVideo();
    }, 1000); // Delay of 1 second before auto playback
});
