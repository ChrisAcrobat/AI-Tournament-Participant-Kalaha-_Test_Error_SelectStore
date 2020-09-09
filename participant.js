'use strict'
function play(messageEvent){
	postMessage(messageEvent.data.length/2);
}
onmessage = messageEvent => {
	onmessage = play;
};
