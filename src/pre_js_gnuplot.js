
var Module = {
    'arguments': ['-e', ""],
    'postRun': function() { runCommand()},
    'print': function (text) {
      handleGnuplotOutput(text);
    },
    'printErr': function (text) {
      const node = document.createElement("p");
      const textnode = document.createTextNode(text);
      node.appendChild(textnode);
      document.getElementById("output").appendChild(node);
    }
  };
  