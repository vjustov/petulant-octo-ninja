var localMediaStream;
var tracks = [];
var sourceNodes = [];
var streams = [];
var recorder;

function addTrack(){
  var audioElement = $('<audio ID="track-' + tracks.len + 1 + '" controls="true">')[0]; 
  $('body').append(audioElement)
  tracks.push(audioElement)
}
function record(){
  navigator.getUserMedia({audio: true},
    function(stream){
      localMediaStream = stream;

      streams.push(new webkitMediaStream(stream));

      var node = audioContext.createMediaStreamSource(localMediaStream);
      node.connect(audioContext.destination);
      sourceNodes.push(node);

      // recorder = new Recorder(node);
      // setTimeout(localMediaStream.stop(), 1000000);
    },
    function(e){
      console.log(e);
    })

  
}
function play(){
  tracks.forEach(function(track){
    track = document.getElementById(track.id);
    track.play();
  });
}