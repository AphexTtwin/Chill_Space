const { createServer } = require("node:http");


const idea = [{  id: 1,
				title: "pizza night",
				description: "friday with friends "
			}];
			
function handleRequest(request, response) {
	response.writeHead(200, {
		"Content-type": "text/plain; charset=utf-8"
	});
	response.end("Chill space backend is running");
}

const server = createServer(handleRequest);

server.listen(3000, "127.0.0.1", function () {
	console.log("Open http://127.0.0.1:3000");
});