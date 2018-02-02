var Song = function(artist,song,album,genre,source,art){
  this.artist = artist;
  this.song = song;
  this.album = album;
  this.genre = genre;
  this.source = source;
  this.art = art;
};

var i = 0;

class Jukebox{
  constructor(){
    this.player = document.createElement('AUDIO');
    this.playlist = [];
    this.playlist.push(new Song('Metallica','Master of Puppets','Master of Puppets','Metal','audio/puppets.mp3','imgs/bg0.jpg'));
    this.playlist.push(new Song('The Smashing Pumpkins','1979','Mellon Collie and the Infinite Sadness','Alternative','audio/1979.mp3','imgs/bg1.jpg'));
    this.playlist.push(new Song('Oasis','Champagne Supernova','(What\'s the Story) Morning Glory?','Rock','audio/oasis.mp3','imgs/bg2.jpg'));
    this.player.src = this.playlist[i].source;
    document.getElementById('audio').appendChild(this.player);
  }

  play(){
    console.log('play btn');
    $("#player").html('<span id="artist"> '+ this.playlist[i].artist + '</span><br>'+'<span id="song"> '+this.playlist[i].song + '</span><br>'+ '<span id="album">  ' + this.playlist[i].album +'</span><br>'+'<span id="genre">  '+this.playlist[i].genre+'</span><br>');
    $('#mainContainer').css("background-image", "url("+this.playlist[i].art+")");
    this.player.play()
  }
  pause(){
    console.log('pause btn');
    this.player.pause()
  }
  stop(){
    console.log('stop btn');
      this.player.pause()
      this.player.currentTime = 0;
  }
  next(){
    i++;
    //reset playhead position to the beginning when the end is reached
    if (i >= this.playlist.length) {
      i = 0;
    }
    this.player.pause();
    this.player.currentTime = 0;
    this.player.src = this.playlist[i].source;
    $("#player").html('<span id="artist"> '+ this.playlist[i].artist + '</span><br>'+'<span id="song"> '+this.playlist[i].song + '</span><br>'+ '<span id="album">  ' + this.playlist[i].album +'</span><br>'+'<span id="genre">  '+this.playlist[i].genre+'</span><br>');
    $('#mainContainer').css("background-image", "url("+this.playlist[i].art+")");
    this.player.play();
    }
  htmlUpload(e){
    this.playlist.push(new Song (""+e.target.value.split("\\")[2],'','','','audio/'+e.target.value.split("\\")[2],'imgs/defaultBg.jpg'));
  }
}

function start(){
  var player = new Jukebox();

  $("#playBtn").on("click", function() {
    player.play();
  });
  $("#pauseBtn").on("click", function() {
    player.pause();
  });
  $("#stopBtn").on("click", function() {
    player.stop();
  });
  $("#nextBtn").on("click", function() {
    player.next();
  });
  $("#upload").on("change", function(e) {
    player.htmlUpload(e);
  })
};

start();
