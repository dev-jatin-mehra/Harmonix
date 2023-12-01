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
    console.log(audioPlayer);
    console.log(audioSource);
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

    const divElements = document.querySelectorAll(".item");
    // console.log(divElements)
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

            fetchAndPlaySong(songTitle);

            const prev = document.getElementById("prev");
            prev.addEventListener("click", () => {
                idValue = idValue - 1;
                prevPlay(`${parseInt(idValue)}`);

                // console.log(hi);
                // idValue=idValue-1;
            });
            const next = document.getElementById('next');
            console.log(next);
            next.addEventListener("click", () => {
                idValue = parseInt(idValue) + 1;
                console.log(idValue);
                nextPlay(`${parseInt(idValue)}`);
            });

        });
    });
});



function prevPlay(idh) {
    const prevNo = document.getElementById(`${idh}`);
    console.log(prevNo);
    const prevH5 = prevNo.querySelector('h5');
    console.log(prevH5);
    const prevH5text = prevH5.textContent;
    console.log(prevH5text);

    const named = document.getElementById('song');
    named.innerText = prevH5text

    const artistd = document.getElementById('Artist');
    const subtitleArtist = prevNo.querySelector('.subtitle');
    const textSub = subtitleArtist.textContent
    console.log(textSub);
    artistd.innerText = textSub;

    const posterD = document.getElementById('poster_play');
    const imageD = prevNo.querySelector('img');
    const imageSrc = imageD.src;
    posterD.src = imageSrc;
    fetchPlaySong(prevH5text);
}
function nextPlay(idh2) {
    const nextNo = document.getElementById(`${idh2}`);
    console.log(nextNo);
    const nextH5 = nextNo.querySelector('h5');
    const nextH5text = nextH5.textContent;
    console.log(nextH5text);
    const namenxt = document.getElementById('song');
    namenxt.innerText = nextH5text

    const artistnxt = document.getElementById('Artist');
    const subtitleArtistnxt = nextNo.querySelector('.subtitle');
    const textSubnxt = subtitleArtistnxt.textContent
    console.log(textSubnxt);
    artistnxt.innerText = textSubnxt;

    const posterDnxt = document.getElementById('poster_play');
    const imageDnxt = nextNo.querySelector('img');
    const imageSrcnxt = imageDnxt.src;
    posterDnxt.src = imageSrcnxt;
    fetchPlaySong(nextH5text);
}


// NEW RELEASES

function myfunction(a) {
    let releases;

    //for new releases panel

    const releasename = document.getElementById("song");
    const releaseartist = document.getElementById("Artist");
    const releasephoto = document.getElementById("poster_play");
    if (a == 11) {
        releases = document.getElementById("ab1").innerHTML;
        // console.log(releases)
    }
    if (a == 12) {
        releases = document.getElementById("ab2").innerHTML;
        // console.log(releases)
    }
    if (a == 13) {
        releases = document.getElementById("ab3").innerHTML;
        // console.log(releases)
    }
    if (a == 14) {
        releases = document.getElementById("ab4").innerHTML;
        // console.log(releases)
    }
    if (a == 15) {
        releases = document.getElementById("ab5").innerHTML;
        // console.log(releases)
    }
    if (a == 16) {
        releases = document.getElementById("ab6").innerHTML;
        // console.log(releases)
    }
    if (a == 17) {
        releases = document.getElementById("ab7").innerHTML;
        // console.log(releases)
    }
    if (a == 18) {
        releases = document.getElementById("ab8").innerHTML;
        // console.log(releases)
    }
    if (a == 19) {
        releases = document.getElementById("ab9").innerHTML;
        // console.log(releases)
    }
    if (a == 20) {
        releases = document.getElementById("ab10").innerHTML;
        // console.log(releases)
    }


    const divElement = document.querySelectorAll(".song_item");
    // console.log(divElements)
    divElement.forEach((divs) => {
        // console.log(div)
        divs.addEventListener("click", () => {

            const h5Elements = divs.querySelector("h5");
            // console.log(h5Elements);
            const releaseTitle = h5Elements.textContent;
            console.log(releaseTitle);
            releasename.innerText = releaseTitle;
            // console.log(releasename);

            const releaseElement = divs.querySelector(".subtitle");
            // console.log(releaseElement);
            const releasesubTitle = releaseElement.textContent;
            console.log(releasesubTitle);
            releaseartist.innerText = releasesubTitle;
            // console.log(releaseartist);

            const photorelease = divs.querySelector("img");
            // console.log(photorelease);
            const PhotoRelease = photorelease.src;
            console.log(PhotoRelease);
            releasephoto.src = PhotoRelease;
            // console.log(releasephoto);

        });
    });
    fetchPlaySong(releases);
}

function fetchPlaySong(release) {
    console.log(release);
    const encodedSongs = encodeURIComponent(release);
    audioPlayer.src = `http://localhost:3000/music/${encodedSongs}.mp3`;
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

// PLAYER BUTTONS

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

