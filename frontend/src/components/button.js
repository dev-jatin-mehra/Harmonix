//NEW RELEASES FORWARD AND BACKWARD

let TC_left=document.getElementById('TC_left');
let TC_right=document.getElementById('TC_right');
let top_song=document.getElementsByClassName('top-song')[0];

TC_right.addEventListener('click',()=>{
    top_song.scrollLeft+=894;
})

TC_left.addEventListener('click',()=>{
    top_song.scrollLeft-=894;
})

//ARTIST PANEL

let move_left=document.getElementById('Artist_left');
let move_right=document.getElementById('Artist_right');
let main=document.getElementsByClassName('main-artist')[0];

move_right.addEventListener('click',()=>{
    main.scrollLeft+=894;
})

move_left.addEventListener('click',()=>{
    main.scrollLeft-=894;
})

//ALBUMS PANEL

let album_left=document.getElementById('Album_left');
let album_right=document.getElementById('Album_right');
let album=document.getElementsByClassName('main-album')[0];

album_right.addEventListener('click',()=>{
    album.scrollLeft+=894;
    console.log(`true`);
})

album_left.addEventListener('click',()=>{
    album.scrollLeft-=894;
})

