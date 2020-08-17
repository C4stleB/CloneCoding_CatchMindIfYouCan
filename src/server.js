const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const logger = require("morgan");
const socketController = require("./socketController");
const events = require("./events");

const PORT = 4000;
const app = express();
app.set('view engine', "pug");
app.set("views", path.join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "static")))
app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

const handleListening = () => console.log(`Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

io.on("connection", socket => socketController(socket, io));