const name = document.getElementById("song");

function afun() {
    console.log("hello");

    const songi = document.querySelector("#song");
    console.log(songi);
    const songii = songi.textContent;
    console.log(songii);

    fetchAndPlaySong(songii);



    function fetchAndPlaySong(song) {

        {
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


        const divElements = document.querySelectorAll(".play");
        console.log(divElements)
        divElements.forEach((div) => {
            // console.log(div)
            div.addEventListener("click", () => {
                idValue = div.id;
                console.log(idValue);
                console.log(typeof idValue);
                for (const [key, value] of Object.entries(idValue)) {
                    console.log(`${key}:${value}`);
                }
                console.log(typeof idValue)
                const h5Element = div.querySelector("h5");
                const songTitle = h5Element.textContent;
                // const songName = div.textContent;
                name.innerText = songTitle;


                const artistName = div.querySelector(".subtitle");
                const ArtistTitle = artistName.textContent;
                artist.innerText = ArtistTitle;
                console.log(artist);

                //for photo change

                const photoName = div.querySelector("img");
                console.log(photoName);
                const PhotoName = photoName.src;
                console.log(PhotoName);
                photo.src = PhotoName;
                console.log(photo);


            });
        });

    }
};