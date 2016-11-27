var applescript = require('applescript');

function execute(script) {
  return new Promise(function (fulfill, reject) {
    applescript.execString(script, function(err, rtn) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(rtn);
        fulfill(rtn);
      }
    });
  });
}

function playTrack(trackID) {
  var script = 'tell application "Spotify"\n' +
    'play track "' + trackID + '"\n' +
  'end tell';
  console.log(trackID, "TRACK~");

  return execute(script);
}

function displayTrackName() {
  var script =
    'set currentlyPlayingTrack to getCurrentlyPlayingTrack()\n' +
    'displayTrackName(currentlyPlayingTrack)\n' +
    'on getCurrentlyPlayingTrack()\n' +
      'tell application "Spotify"\n' +
        'set currentArtist to artist of current track as string\n' +
        'set currentTrack to name of current track as string\n' +
        'return currentArtist & " - " & currentTrack\n' +
      'end tell\n' +
    'end getCurrentlyPlayingTrack\n' +

    'on displayTrackName(trackName)\n' +
      'display notification "Currently playing " & trackName\n' +
      'delay 1\n' +
    'end displayTrackName';

    return execute(script);
}


module.exports = {
  displayTrackName: displayTrackName,
  playTrack: playTrack
}
