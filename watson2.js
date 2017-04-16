
var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
  username: 'a23f320a-305c-4b5b-8be0-bf865f45a014',
  password: '2gYb8Tzfylzk',
  version: 'v3',
  version_date: '2016-05-19'
});



var hackUNLWatsonn = function(res, req) {
	if(!req.query || !req.query.msg) {
		return
	}
	tone_analyzer.tone({ text: req.query.msg},
		function(err, tone) {
			if(err) 
				console.log(err);
			else
				console.log(JSON.stringify(
					{tone.document_tone.tone_categories
					}));
				var returnObj = {};
				var messageTones = tone.document_tone.tone_categories[0].tones;
				var trackingScore = 0;
				for(var i = 0; i < messageTones.length; i++) {
					switch(messageTones[i].tone_id) {
						case 'anger' :
						case 'disgust' :
							trackingScore += messageTones[i].score;
							break;
						case 'joy' :
							trackingScore -= messageTones[i].score;
							break;
					}
				}

				if(trackingScore > 0.70) {
					res.send(JSON.stringify({
						isHarrased: 1
					}));
				} else {
					res.send(JSON.stringify({
						isHarrased: 0
					}));				
				}
		});
}

module.exports = hackUNLWatsonn; 