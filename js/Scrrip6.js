const video = document.getElementById("video");
const videoContainer = document.getElementById("videoContainer");
const videoOverlay = document.getElementById("videoOverlay");

// Al hacer clic en el contenedor del video
videoContainer.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    videoContainer.classList.add("playing");
  } else {
    video.pause();
    videoContainer.classList.remove("playing");
  }
});
