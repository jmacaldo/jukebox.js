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

document.getElementById("metallica").addEventListener("click", puppets);
document.getElementById("metPause").addEventListener("click", metallicaPause);
document.getElementById("metStop").addEventListener("click", metallicaStop);


function puppets(){
  var x = document.getElementById("01");
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
document.getElementById("pumpkins").addEventListener("click", pumpkins);
document.getElementById("pumpPause").addEventListener("click", pumpPause);
document.getElementById("pumpStop").addEventListener("click", pumpStop);

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
  document.getElementById("oasis").addEventListener("click", oasis);
  document.getElementById("oasisPause").addEventListener("click", oasisPause);
  document.getElementById("oasisStop").addEventListener("click", oasisStop);

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
