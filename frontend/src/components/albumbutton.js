document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById("audioPlayer");

    var nameDivs = document.querySelectorAll('.name');

    nameDivs.forEach(function (div) {
        var playPauseIcon = div.querySelector('.bi-play-circle');

        div.addEventListener('click', function () {
            var isPlaying = playPauseIcon.getAttribute('data-playing') === 'true';

            if (isPlaying) {
                audioPlayer.pause()
                playPauseIcon.classList.remove('bi-pause-circle');
                playPauseIcon.classList.add('bi-play-circle');
            } else {
                audioPlayer.play();
                playPauseIcon.classList.remove('bi-play-circle');
                playPauseIcon.classList.add('bi-pause-circle');
            }

            playPauseIcon.setAttribute('data-playing', isPlaying ? 'false' : 'true');
        });
    });
});