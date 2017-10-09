//constructor for artist and song information
function Jukebox(artist, song, album, genre, source){
  this.artist = artist;
  this.song = song;
  this.album = album;
  this.genre = genre;
//  this.source = new Audio(source);
  //this.addEventListener("click", this.source.play.bind(this.source));
}


//instances for artist song and information






//Metallica audio controls and event listeners

// document.getElementById("metallica").addEventListener("click", puppets);
// document.getElementById("metPause").addEventListener("click", metallicaPause);
// document.getElementById("metStop").addEventListener("click", metallicaStop);


function puppets(){
  var x = document.getElementById("S0");
    x.play();
}

function metallicaPause(){
      var x = document.getElementById("01");
        x.pause();
    }

    function metallicaStop(){
      var x = document.getElementById("01");
        x.pause();
        x.currentTime = 0;
    }


//Smashing pumpkins audio controls and event listeners
// document.getElementById("pumpkins").addEventListener("click", pumpkins);
// document.getElementById("pumpPause").addEventListener("click", pumpPause);
// document.getElementById("pumpStop").addEventListener("click", pumpStop);

function pumpkins(){
  var x = document.getElementById("02");
    x.play();
}
function pumpPause(){
  var x = document.getElementById("02");
    x.pause();
    }

function pumpStop(){
  var x = document.getElementById("02");
    x.pause();
    x.currentTime = 0;
  }

//Oasis audio controls and event listeners
  // document.getElementById("oasis").addEventListener("click", oasis);
  // document.getElementById("oasisPause").addEventListener("click", oasisPause);
  // document.getElementById("oasisStop").addEventListener("click", oasisStop);

  function oasis(){
    var x = document.getElementById("03");
      x.play();
  }
  function oasisPause(){
    var x = document.getElementById("03");
      x.pause();
      }

  function oasisStop(){
    var x = document.getElementById("03");
      x.pause();
      x.currentTime = 0;
    }

//playlist JSON
var playList = [
  {
    "artist" : "Metallica",
    "song" : "Master of Puppets",
    "album" : "Master of Puppets",
    "genre": "Metal"
  },
  {
    "artist" : "The Smashing Pumpkins",
    "song" : "1979",
    "album" : "Mellon Collie and the Infinite Sadness",
    "genre": "Alternative"
  },
  {
    "artist" : "Oasis",
    "song" : "Champagne Supernova",
    "album" : "(What's the Story) Morning Glory?",
    "genre": "Rock"
  }
]

//dynamic player

document.getElementById("playBtn").addEventListener("click", player);
document.getElementById("nextBtn").addEventListener("click", next);
document.getElementById("stopBtn").addEventListener("click", stop);

let songN = 2; //zero indexed - number of songs in playlist
var i = 0;

function player(){
    document.getElementById('player').innerHTML = ('Artist: '+ playList[i].artist +'<br>'+'Song: '+playList[i].song + '<br>'+ "Album: " + playList[i].album +'<br>'+'Genre: '+playList[i].genre);
    var x = document.getElementById("S"+i);
    x.play();
  //  window[songID]++;
    console.log('value of i from player function: '+i);
  };//function ends here


//plays next song in playlist
function next(){

  var x = document.getElementById("S"+i);
  x.pause();
  x.currentTime = 0;
  i++;
  console.log('value of i from next: '+i);
  player();
}

//stops current track

function stop(){
  var x = document.getElementById("S"+i);
    x.pause();
    x.currentTime = 0;
  }

//unrelated test code below
that = 0;

function test(input) {
    window[input]++;
}

test("that");

console.log('value of that: '+that); // 1

/* last known working snippet of dynamic player

document.getElementById("playBtn").addEventListener("click", player);
document.getElementById("nextBtn").addEventListener("click", next);

let songN = 2; //zero indexed - number of songs in playlist
var i = 0;
function player(songID){
    document.getElementById('player').innerHTML = ('Artist: '+ playList[i].artist +'<br>'+'Song: '+playList[i].song + '<br>'+ "Album: " + playList[i].album +'<br>'+'Genre: '+playList[i].genre);
    var x = document.getElementById("S"+i);
    x.play();
    window[songID]++;
    console.log('value of i from player function: '+i);



  };//function ends here

function next(){

  var x = document.getElementById("S"+i);
  x.pause();
  x.currentTime = 0;
  i++;
  console.log('value of i from next: '+i);
  player();
}

*/
