const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const port = 3000;

const renderer = require("express-es6-template-engine");
app.engine("html", renderer);
app.set("views", "templates");
app.set("view engine", "html");

const path = require("path");
app.use(express.static(path.join(__dirname, "templates")));

const projects = {
	Python:
		"Escape-room style game with custom user input and battle system. <a href='https://github.com/nguyntyler/Projects/tree/main/EscapeGame' target='_blank'>GitHub</a>",
	DOM_Manipulation:
		"Created a blackjack game. <a href='https://github.com/nguyntony/blackjack.git' target='_blank'>GitHub</a>",
	API:
		"Pokemon TGC api integrated with DOM manipulation. <a href='https://github.com/nguyntyler/PokeAPI.git' target='_blank'>GitHub</a>",
	FrontEnd:
		"Integrated two api's to create a dad joke game with pixelated avatars and animations. <a href='http://ec2-3-21-41-231.us-east-2.compute.amazonaws.com:3001' target='_blank'>Live Website</a>",
	BackEnd: "TBD",
	React: "TBD",
	Capstone: "TBD",
};

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/projects", (req, res) => {
	res.render("lists", {
		locals: {
			projectKeys: Object.keys(projects),
		},
	});
});

app.get("/projects/:projectName", (req, res) => {
	const projectName = req.params.projectName;
	res.render("project", {
		locals: {
			projectName,
			description: projects[projectName],
		},
	});
});

server.listen(port, () => {
	console.log("listening on port:", port);
});
