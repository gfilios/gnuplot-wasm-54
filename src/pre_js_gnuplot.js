const stdin = function writeToStdIn(buf) {
    console.log(buf);
    return function() {
        if (!buf.length) {
            return null;
        }
        const c = buf[0];
        buf = buf.slice(1);
        return c;
    };
};

var Module = {
    'arguments': ['', ""],
    'postRun': function() { runCommand()},
    'print': function (text) {
      handleGnuplotOutput(text);
    },
    'printErr': function (text) {
      const node = document.createElement("p");
      const textnode = document.createTextNode(text);
      node.appendChild(textnode);
      document.getElementById("output").appendChild(node);
    },
    preRun: function() {
        function stdin(input) {
          if (i < res.length) {
            var code = input.charCodeAt(i);
            ++i;
            return code;
          } else {
            return null;
          }
        }
    
        var stdoutBuffer = "";
        function stdout(code) {
          if (code === "\n".charCodeAt(0) && stdoutBuffer !== "") {
            console.log(stdoutBuffer);
            stdoutBuffer = "";
          } else {
            stdoutBuffer += String.fromCharCode(code);
          }
        }
    
        var stderrBuffer = "";
        function stderr(code) {
          if (code === "\n".charCodeAt(0) && stderrBuffer !== "") {
            console.log(stderrBuffer);
            stderrBuffer = "";
          } else {
            stderrBuffer += String.fromCharCode(code);
          }
        }
    
        FS.init(stdin, stdout, stderr);
      }

  };
  