const client = require("./Lolley").client
const messageListener = client.messageListener

client.start(3581).then(() => {
 client.listenMessages()
 messageListener.on("message", (message) => {
  if(message.startsWith("loaded:")) {
   console.log(message)
  client.sendCommand("getHTML")
  } else {
   console.log(message)
   client.close()
  }
 })
})