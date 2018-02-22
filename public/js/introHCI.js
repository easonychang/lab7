'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("button").click(likeOriginal);
	//$("button.likeBtn").click(likeMin);
}

function likeOriginal(e){

	e.preventDefault();

	ga("send", "event", 'like', 'click');

}

/*function likeMin(e){

	e.preventDefault();

	ga("send", "event", 'likeM', 'click');

}*/