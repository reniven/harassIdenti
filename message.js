jQuery(document).bind("DOMNodeInserted", function(event) {

	// Get text of message
	$('._ua0 ._5yl5 span').each(function(index, item) {
		analyzeMsg.call(this, true);
	});
	
	// Get text of message
	$('._ua1 ._5yl5 span').each(function(index, item) {
		analyzeMsg.call(this, false);
	});
  
});

function analyzeMsg(isUser) {
	var txt = $(this).text();
	if(txt && txt.length) {
		if(txt === ) {
			$(this).remove();
		}
	}
}

console.log('message.js loaded');

*$.ajax{{
	url:  ,
	data: {
		msg: txt,
	},
	success: function(response) {
	},
}}*/	









