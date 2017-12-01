

// Chargement de vidéo:
// choix de Channels de National Geographic: https://www.youtube.com/user/NationalGeographic/channels
// Playlist National Geographic: https://www.youtube.com/playlist?list=PLlHanBMNk-DLSFPn4hK24KzwdKHA5H934
// v=Ghd8H-KvwVA&list=PLlHanBMNk-DLSFPn4hK24KzwdKHA5H934

// Définir la liste des vidéos:

var listeVideosNature = [
  'fImy-43Z0Yo', //	 1	Tigers Revenge
  '3alvkCIuRlM', //	 2	African Animals Wildlife
  'rmmu4mqERaQ', //	 3	Underwater Earth
  'i2fRuDP3jpY', //	 4	Deep Oceans ~ LOST WORLD UNDERWATER
  'Gd3tN4H0NjY', //	 5	Pentagon
  'M-56zHYx-CU', //	 6	America
  'pxqIlaVBoH0', //	 7	Birds
  'JGK4rGx2YZg', //	 8	Russia
  'Gri5mUezu50', //	 9	Asia
  'lAOH2ImdfD4', //	10	Asia pyramids
  'c_uL1bZii6k', //	11	Caligurla
  'pR33Ev1QKGY', //	12	Alexandre
  'Ackx7Q0dQLY', //	13	Gods and Godesses
  'fq-SQRxc7f8', //	14	Amazon Forest
  'P1BwCGv7GK8', //	15	Museum
  'vit76dx4ZZI', //	16	Pinguin
  'ElodfqSiPFg', //	17	flying monsters
  'j8w9IF7xhYw', //	18	prehistoric
  '_A7OLjfBD4Y', //	19	Prison
  'QH-kNnq7mFM', //	20	Life in Japan
  '7b6kxXrug1Q', //	21	architecture
  'Cq1oFhTINXE', //	22	climate change
  'tmWV5ZnKOAg', //	23	Universe
  'Jn7VcOU3x2g', //	24	secretes of the universe

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
    height: '100%',
    width: '100%',
    loadPlaylist:{
        listType:'playlist',
        list:listeVideosNature,
        index:parseInt(1),
        suggestedQuality:'large'
     },
	 playerVars: {'autoplay':1 , 'controls':0, 'disablekb':1, 'modestbranding':1, 'showinfo':0  },

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
     setTimeout(stopVideo, 3600000);

    // On pourrait programmer le lancement de la prochaine video...
    player.nextVideo();

    done = true;
  }
}
function stopVideo() {
  player.stopVideo(listeVideosNature);
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

  var position = minute * 1.66666666667;
  horloge.style.bottom = position +'vh';

  // afin de mieux tester, on lance la prochaine vidéo toutes les 30 secondes...
  if ( Hours == 1 ) {

    // lancer prochaine video.
    player.nextVideo();

  }

  // modification de la position de la ligne...



}
