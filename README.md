<div align="center">

# Lolley

  <a href="https://www.codefactor.io/repository/github/constani/lolley"><img alt="CodeFactor Grade" src="https://www.codefactor.io/repository/github/constani/lolley/badge"></a>
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Constani/lolley">

**A program to communicate with Lolley browser**

</div>

# Installation and running
First, clone the repository and extract `compressed.zip` after that run `test.js` to run the program.

# Using `client.sendCommand()`

`client.sendCommand()` has 3 basic commands those are;

## `getHTML`

`Example usage: client.sendCommand("getHTML")`

This method sends a `getHTML` message to the browser. The browser responds with the current page's HTML code. When browser tries to send HTML code to the NodeJS side
this will trigger the `client.messageListener.on("message")` event. Example of this method can be found in `test.js` file.

## `execJS`

`Example usage: client.sendCommand("execJS", 'alert("Hello World!")')`

This method sends a `execJS` message to the browser. The browser will execute the JavaScript code that you provide.

## `changeLocation`

`Example usage: client.sendCommand("changeLocation", 'https://google.com')`

This method sends a `changeLocation` message to the browser. The browser will navigate to the URL that you provide.


## Contributors ✨

<table>
  <tr>
        <td align="center"><a href="https://spongebed.me"><img src="https://avatars.githubusercontent.com/u/56435044?v=4" width="100px;" alt=""/><br /><sub>          <b>SpongeBed</b></sub></a><br /> <a href="https://github.com/Constani/vaniply/commits?author=SpongeBed81" title="Code">💻</a></td>
    </tr>
</table>
