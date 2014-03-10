var audioContext;
var recorder;
var localMediaStream;

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

  navigator.getUserMedia({audio: true},
    startUserMedia,
    function(e){
      console.log(e);
    })
}

function startUserMedia(stream){
  var input = audioContext.createMediaStreamSource(stream);
  input.connect(audioContext.destination);
  recorder = new Recorder(input);
  localMediaStream = stream; 
}

function startRecording(){
  recorder && recorder.record();
}

function stopRecording(){
  recorder && recorder.stop();
  localMediaStream.stop();

  recorder.exportWAV( doneEncoding );
  recorder.clear();
}

function createDownloadLink(){
  recorder && recorder.exportWAV(function(blob){
    var url = URL.createObjectURL(blob);

  })
}

function doneEncoding(blob){
  Recorder.forceDownload(blob, "recording_.wav")
}
