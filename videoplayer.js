function openVideo(videoPath) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("testVideo");
    const source = document.getElementById("videoSource");

    source.src = videoPath;
    video.load();

    modal.style.display = "flex";
    video.play();
}

function closeVideo() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("testVideo");

    video.pause();
    video.currentTime = 0;

    modal.style.display = "none";
}