import { defineWebSocket, eventHandler } from "vinxi/http";

export default eventHandler({
	handler: () => {},
	websocket: defineWebSocket({
		async open(event) {
			console.log("WebSocket opened");
		},
		async message(peer, msg) {
			console.log("WebSocket message", msg);
            
		},
		async close(event) {
			console.log("WebSocket closed"); 
		},
	}),
});