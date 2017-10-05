

// Chargement de vidéo:
// choix de Channels de National Geographic: https://www.youtube.com/user/NationalGeographic/channels
// Playlist National Geographic: https://www.youtube.com/playlist?list=PLlHanBMNk-DLSFPn4hK24KzwdKHA5H934
// v=Ghd8H-KvwVA&list=PLlHanBMNk-DLSFPn4hK24KzwdKHA5H934

// Définir la liste des vidéos:

var listeVideosNature = [
  'fImy-43Z0Yo', // Tigers Revenge
  '3alvkCIuRlM', // African Animals Wildlife
  'rmmu4mqERaQ', // Underwater Earth
  'i2fRuDP3jpY' // Deep Oceans ~ LOST WORLD UNDERWATER
];


// Méthode: https://developers.google.com/youtube/iframe_api_reference

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    loadPlaylist:{
        listType:'playlist',
        list:listeVideosNature,
        index:parseInt(0),
        suggestedQuality:'large'
     },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}



// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // event.target.playVideo();
  event.target.loadPlaylist(listeVideosNature);
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 3000);

    // On pourrait programmer le lancement de la prochaine video...
    player.nextVideo();

    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

// https://stackoverflow.com/questions/18266818/about-use-youtube-player-api-loadplaylist

// https://stackoverflow.com/questions/9148227/youtube-player-api-list-with-videos

// https://stackoverflow.com/questions/5123143/how-to-play-a-playlist-using-youtube-javascript-api





/*
 * Un petit script mesurant l'écoulement du temps
 * 
 * Source: https://codepen.io/Tcip/pen/BNKjeN
 * Auteur: Mikael Elmblad, tcip.se
*/

// répéter la fonction metronone une fois par seconde

var myVar = setInterval(function() {
  metronome();
}, 1000);





function metronome() {

  // 1: on définit l'heure, avec l'objet Date()
  // voir documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date

  var date = new Date();
  var heure = date.getHours();
  var minute = date.getMinutes();
  var seconde = date.getSeconds();

  // identifier le bloc "horloge"
  var horloge = document.getElementById("horloge");
  
  // 2: on affiche l'heure dans notre objet "horloge"

  horloge.innerHTML = date.toLocaleTimeString();
  horloge.style.top = seconde+'px';

  // afin de mieux tester, on lance la prochaine vidéo toutes les 30 secondes...
  if ( seconde == 0 || seconde == 15 || seconde == 45 || seconde == 30 ) {

    // lancer prochaine video.
    player.nextVideo();

  }

  // modification de la position de la ligne...



}

