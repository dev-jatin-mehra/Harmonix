document.addEventListener("DOMContentLoaded", () => {
    const songListElement = document.getElementById("songList");
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");
    const playButton = document.getElementById("playButton");
    const wave = document.getElementById("wave");
    //for HOME panel
    const name = document.getElementById("song");
    const artist = document.getElementById("Artist");

    const photo = document.getElementById("poster_play");
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

    const divElements = document.querySelectorAll(".song_artist");
    // console.log(divElements)
    divElements.forEach((div) => {
        div.addEventListener("click", () => {

            // const h5Element = div.querySelector("div");
            // const songTitle = divElement.textContent;
            // // const songName = div.textContent;
            name.innerText = `Now Playing`;


            const artistName = div.querySelector(".subtitle");
            // console.log(artistName);
            const ArtistTitle = artistName.textContent;
            console.log(ArtistTitle);
            artist.innerText = ArtistTitle;
            console.log(artist);

            //for photo change

            const photoName = div.querySelector("img");
            // console.log(photoName);
            const PhotoName = photoName.src;
            // console.log(PhotoName);
            photo.src = PhotoName;
            // console.log(photo);

            fetchAndPlaySong(ArtistTitle);

        });
    });
});



// console.log("THIS IS A PROJECT BY JATIN<DEEPAK<DINESH supported By PRIYANSHU KUMAR AKA BlackShort")