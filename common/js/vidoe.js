// Get all the video player elements on the page
var videoPlayers = document.querySelectorAll(".video-player");

// Loop through each video player
videoPlayers.forEach(function (player) {
  // Get the video element
  var video = player.querySelector("video");

  // Get the play/pause button
  var playPauseButton = player.querySelector(".play-pause-button");

  // Get the start button
  var startButton = player.querySelector(".start-button");

  // Get the poster image
  // var posterImage = video.getAttribute("poster");

  // Pause the video and update the button text
  function pauseVideo() {
    video.pause();
    // player.style.backgroundImage = "url('" + posterImage + "')";
  }

  // Play the video and update the button text
  function playVideo() {
    video.currentTime = 0;
    video.play();
    player.style.backgroundImage = "none";
  }

  // Toggle the video playback on play/pause button click
  playPauseButton.addEventListener("click", function () {
    if (video.paused) {
      playVideo();
    } else {
      pauseVideo();
    }
  });

  // Start the video from the beginning on start button click
  startButton.addEventListener("click", function () {
    playVideo();
  });

  // Pause the video when it ends and show the poster image
  video.addEventListener("ended", function () {
    pauseVideo();
  });
});
