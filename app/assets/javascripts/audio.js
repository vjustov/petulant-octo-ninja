var audioContext;
var recorder;

window.onload = function initialize(){
  try {
    navigator.getUserMedia = Modernizr.prefixed('getUserMedia', navigator);
    window.URL = Modernizr.prefixed('URL', window);
    window.AudioContext = Modernizr.prefixed('audioContext', window);

    audioContext = new AudioContext();
  

  } catch (e) {
    console.log(e);
    console.log("Your browser does not support web audio. Please download a new one");
  }

  // navigator.getUserMedia({audio: true},
  //   startUserMedia,
  //   function(e){
  //     console.log(e);
  //   })
}

