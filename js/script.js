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

var metallica = new Playlist ('Metallica','Master of Puppets','Master of Puppets','Metal','audio/puppets.mp3','imgs/0.jpg');
songs.push(metallica);
var pumpkins = new Playlist ('The Smashing Pumpkins','1979','Mellon Collie and the Infinite Sadness','Alternative','audio/1979.mp3','imgs/1.jpg');
songs.push(pumpkins);
var oasis = new Playlist ('Oasis','Champagne Supernova','(What\'s the Story) Morning Glory?','Rock','audio/oasis.mp3','imgs/2.jpg');
songs.push(oasis);



//song uploader
var uploaded;

function htmlUpload(filelist){
  uploaded =  filelist.files[0].name;
  var newUpload = new Playlist (''+uploaded,'','','','audio/'+uploaded,'');
  songs.push(newUpload);
  console.log('value of uploaded song (from inside function): ' +uploaded);

    //document.getElementById("audiosource").setAttribute("src", filelist.files[0].name);
    //console.log('value of uploaded song: ' +uploaded);

}
console.log('value of uploaded song (from global): ' +uploaded);




//event listeners

document.getElementById("playBtn").addEventListener("click", player);
document.getElementById("nextBtn").addEventListener("click", next);
document.getElementById("stopBtn").addEventListener("click", stop);


//player global values
let songN = songs.length ; //zero indexed - number of songs in playlist
var i = 0;
//var audioHTML;

//play button and display artist info
function player(){
    document.getElementById('player').innerHTML = ('Artist: '+ songs[i].artist +'<br>'+'Song: '+songs[i].song + '<br>'+ "Album: " + songs[i].album +'<br>'+'Genre: '+songs[i].genre);
    var audioHTML = document.getElementById("idAudio");

    audioHTML.src = songs[i].source;
    audioHTML.play();
    console.log('audioHTML ->'+ audioHTML);
    console.log('value of i from player function: '+i);
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
    if (i > songN) {
       i = 0;
       player();
    } else {
      player();
    }
}
//stops current track

function stop(){
  var x = document.getElementById("idAudio");
    x.pause();
    x.currentTime = 0;
  }
