document.querySelectorAll('.album').forEach(album => {
  const video = album.querySelector('video');
  const tracks = album.querySelectorAll('.track');
  const reset = album.querySelector('.reset');
  const poster = video.getAttribute('poster');

  tracks.forEach(track => {
    track.addEventListener('click', () => {
      const src = track.dataset.video;

      if (video.src.includes(src)) return;

      video.pause();
      video.currentTime = 0;

      video.src = src;
      video.controls = true;
      video.play();
    });
  });

  reset.addEventListener('click', () => {
    video.pause();
    video.removeAttribute('src');
    video.controls = false;
    video.setAttribute('poster', poster);
    video.load();
  });
});