
var count = 0;

function add(img, name, singer, audioUrl) {
    var likedSongs = document.querySelectorAll('#ul li');
    var isSongAdded = false;

    likedSongs.forEach(function (song) {
        var songName = song.querySelector('h1').innerText;
        if (songName === name) {
            isSongAdded = true;
            return;
        }
    });

    if (isSongAdded) {
        alert("Song is already added!");
        return;
    }

    if (count < 8) {
        document.getElementById('ul').innerHTML += `<li>
    <img src="${img}">
    <div class="name">
        <h1>${name}</h1>
        <p>${singer}</p>
    </div>
    <button class="heart" onclick="playSong('${audioUrl}')">▶</button>
</li>`;
        count++;
    } else {
        alert("You can only add 8 songs!");
    }
}

var playing = false;
var audio;
var playbackPosition = 0;

function playSong(audioUrl) {
    if (playing === false) {
        audio = new Audio(audioUrl);
        audio.currentTime = playbackPosition;
        audio.play();
        playing = true;
    } else {
        playbackPosition = audio.currentTime;
        audio.pause();
        playing = false;
    }
}

