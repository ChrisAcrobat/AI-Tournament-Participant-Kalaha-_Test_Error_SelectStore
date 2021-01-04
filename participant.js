'use strict'
function tock(messageEvent){
	postMessage(messageEvent.data.length/2);
}
onmessage = messageEvent => {
	onmessage = tock;
};
