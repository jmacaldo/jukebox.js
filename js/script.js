//playlist contructor
var Playlist = function (artist,song,album,genre,source,art){
  this.artist = artist;
  this.song = song;
  this.album = album;
  this.genre = genre;
  this.source = source; //audio source
  this.art = art;       //album art
  };

//song instances made with Playlist contructor
var songs = [];

var metallica = new Playlist ('Metallica','Master of Puppets','Master of Puppets','Metal','audio/puppets.mp3','imgs/bg0.jpg');
songs.push(metallica);
var pumpkins = new Playlist ('The Smashing Pumpkins','1979','Mellon Collie and the Infinite Sadness','Alternative','audio/1979.mp3','imgs/bg1.jpg');
songs.push(pumpkins);
var oasis = new Playlist ('Oasis','Champagne Supernova','(What\'s the Story) Morning Glory?','Rock','audio/oasis.mp3','imgs/bg2.jpg');
songs.push(oasis);




//event listeners

document.getElementById("playBtn").addEventListener("click", player);
document.getElementById("nextBtn").addEventListener("click", next);
document.getElementById("stopBtn").addEventListener("click", stop);

//player global values
var i = 0;

//song uploader
function htmlUpload(filelist){
  var uploaded =  filelist.files[0].name;
  var newUpload = new Playlist (""+uploaded,'','','','audio/'+uploaded,'imgs/defaultBg.jpg');
  songs.push(newUpload);
  console.log(songs.length);
  console.log('value of var uploaded song (from inside function): ' +uploaded);
  i = songs.length -1;
  player();

}

//load first song on page load

document.getElementById('player').innerHTML = ('<span id="artist"> '+ songs[i].artist + '</span><br>'+'<span id="song"> '+songs[i].song + '</span><br>'+ '<span id="album">  ' + songs[i].album +'</span><br>'+'<span id="genre">  '+songs[i].genre+'</span><br>');
var audioHTML = document.getElementById("idAudio");
audioHTML.src = songs[i].source;
document.getElementById('mainContainer').style.backgroundImage = "url(" + songs[i].art + ")";


//play button and display artist info
function player(){
    document.getElementById('player').innerHTML = ('<span id="artist"> '+ songs[i].artist + '</span><br>'+'<span id="song"> '+songs[i].song + '</span><br>'+ '<span id="album">  ' + songs[i].album +'</span><br>'+'<span id="genre">  '+songs[i].genre+'</span><br>');
    var audioHTML = document.getElementById("idAudio");
    audioHTML.src = songs[i].source;
    audioHTML.play();
    console.log('status of audioHTML: '+ audioHTML);
    console.log('value of i from player function: '+i);
    document.getElementById('mainContainer').style.backgroundImage = "url(" + songs[i].art + ")";
  };



//play next song in playlist
function next(){
  i++;
  var x = document.getElementById("idAudio");
  console.log('value of x : '+x);
  x.pause();
  x.currentTime = 0;
  console.log('value of i from next: '+i);

//reset playlist position to the beginning when the end is reached
    if (i > songs.length-1) {
       i = 0;
       player();
    } else {
      player();
    }
}
//stops current track

function stop(){
  console.log('stop');
  var x = document.getElementById("idAudio");
    x.pause();
    x.currentTime = 0;
  }
