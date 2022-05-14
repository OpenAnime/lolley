const child_process = require("node:child_process")
const {
 WebSocket
} = require("ws")
let currentConnection;
let EventEmitter1 = require('node:events')
let em = new EventEmitter1.EventEmitter();

module.exports = {
 client: {
  start: function (port) {
   return new Promise((resolve, reject) => {
    if (!port) throw new Error("Port should be specified")
    if (isNaN(port)) throw new Error("Port should be a numeric value")
    child_process.exec("resources\\Lolley.exe " + port)
    async function recursive() {
     const ws = new WebSocket('ws://127.0.0.1:' + port);
     ws.on('error', function (err) {
      setTimeout(recursive, 100)
     });

     ws.on('open', function open() {
      currentConnection = ws;
      resolve("open!")
     });
    }
    recursive()
   })
  },
  sendCommand: function(command, arg) {
  if(command.toLowerCase() == "gethtml") {
   currentConnection.send(JSON.stringify({
    "eventName": "getHTML"
   }))
  } else if(command.toLowerCase() == "execjs") {
   if(!arg) throw new Error("Please provide JavaScript code to execute")
   currentConnection.send(JSON.stringify({
    "eventName": "execJS",
    "js": arg
   }))
  } else if(command.toLowerCase() == "changelocation") {
   if(!arg) throw new Error("Please provide an URL to navigate")
   currentConnection.send(JSON.stringify({
    "eventName": "changeLocation",
    "URL": arg
   }))
  }
  },
  listenMessages: function() {
    currentConnection.on("message", (data) => {
    em.emit("message", data.toString())
    })
  },
  close: function() {
   currentConnection.close()
   child_process.exec(`taskkill /im Lolley.exe /t /f`)
  },
  messageListener: em
 }
}

