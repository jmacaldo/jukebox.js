 $( document ).ready(function() {

SC.initialize({
  client_id: 'fd4e76fc67798bfa742089ed619084a6'
});
// ALL CODE GOES BELOW THIS LINE
var tracks;
var item;

$('#submit').click(function() {
  var query = $('#search').val();
  console.log(query);
  SC.get('/tracks', {
  q: query,}).then(function(tracks) {
  console.log(tracks);
  console.log(tracks.length);
  for ( var i = 0; i < tracks.length; i++) {

//append default art work if it's not provided for
      if (tracks[i].artwork_url == null) {
        tracks[i].artwork_url = "imgs/doge.jpg"
      } ;

//display
      $("#grid"+i).html("<img src='"+tracks[i].artwork_url+"'/><br>"+  tracks[i].title);

      console.log('value of i='+i);

      console.log('value of tracks id='+tracks[i].id);


      $("#grid"+i).click(function(){
         SC.stream("/tracks/"+tracks[i].id).then(function(player){
           player.play();
           console.log('value of id from inside click function'+tracks[i].id);
         });
       });

      //SC.stream("/tracks/"+tracks[0].id).then(function(player){player.play();});
        }; //for loop close


//SC.stream("/tracks/"+tracks[0].id).then(function(player){player.play();});
// $("#grid"+i).html("<img src='"+tracks[i].artwork_url+"'/><br>"+  tracks[i].title);

// item = $("#grid"+i).html("<img src='"+tracks[i].artwork_url+"'/><br>"+  tracks[i].title);
// console.log('value of item' +item);


    }); //search query callback closing tag

  }); //submit function closing tag
}); //document ready closing tag!
