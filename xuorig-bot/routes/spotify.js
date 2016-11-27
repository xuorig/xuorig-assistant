var express = require('express');
var router = express.Router();
var spotify = require('../spotify');

router.post('/play', function(req, res, next) {
  spotify.playTrack(req.body.id).then(function(rtn) {
    spotify.displayTrackName().then(function(rtn) {
      res.sendStatus(200);
    });
  });
});

module.exports = router;
