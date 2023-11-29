document.addEventListener("DOMContentLoaded", () => {
    // const songListElement = document.getElementById("");
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");
    const playButton = document.getElementById("playButton");
    const wave = document.getElementById("wave");
    //for HOME panel
    const name = document.getElementById("song");
    const artist = document.getElementById("Artist");

    const photo = document.getElementById('poster_play');


    // console.log(audioPlayer);
    // console.log(audioSource);
    let idValue = 0;
    // HOME

    function fetchAndPlaySong(song) {
        console.log(song);
        const encodedSong = encodeURIComponent(song);
        audioPlayer.src = `http://localhost:3000/music/${encodedSong}.mp3`;
        audioPlayer.load();
        audioPlayer.play();
        if (audioPlayer.paused || audioPlayer.currentTime <= 0) {
            wave.classList.add("start");
            playButton.classList.remove("bi-play-circle-fill");
            playButton.classList.add("bi-pause-circle-fill");
        } else {
            wave.classList.remove("start");
            playButton.classList.remove("bi-pause-circle-fill");
            playButton.classList.add("bi-play-circle-fill");
        }
    }

    const divElements = document.querySelectorAll(".name");
    // console.log(divElements)
    divElements.forEach((div) => {
        // console.log(div)
        div.addEventListener("click", () => {

            const h5Element = div.querySelector("h5");
            const songTitle = h5Element.textContent;
            console.log(songTitle);
            // const songName = div.textContent;
            name.innerText = songTitle;


            const artistName = div.querySelector("h6");
            const ArtistTitle = artistName.textContent;
            console.log(ArtistTitle);
            artist.innerText = ArtistTitle;
            // console.log(artist);

            //for photo change

            const photoName = div.querySelector("img");
            // console.log(photoName);
            const PhotoName = photoName.src;
            console.log(PhotoName);
            photo.src = PhotoName;
            // console.log(photo);

            fetchAndPlaySong(songTitle);
        });
    });
});


playButton.addEventListener("click", () => {
    if (audioPlayer.paused || audioPlayer.currentTime <= 0) {
        audioPlayer.play();
        wave.classList.add("start");
        playButton.classList.remove("bi-play-circle-fill");
        playButton.classList.add("bi-pause-circle-fill");
    } else {
        audioPlayer.pause();
        wave.classList.remove("start");
        playButton.classList.remove("bi-pause-circle-fill");
        playButton.classList.add("bi-play-circle-fill");
    }
});
let currentStart = document.getElementById("currentstart");
let currentEnd = document.getElementById("currentend");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar-2");
let position = document.getElementsByClassName("position")[0];

audioPlayer.addEventListener("timeupdate", () => {
    let music_curr = audioPlayer.currentTime;
    // console.log(music_curr);
    let music_dur = audioPlayer.duration;
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;
    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    position.style.left = `${seekbar}%`;
});
seek.addEventListener("change", () => {
    audioPlayer.currentTime = (seek.value * audioPlayer.duration) / 100;
});