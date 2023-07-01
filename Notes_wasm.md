# Usage Tips Markdown in Visual Code: 
To switch between views, press ⇧⌘V in the editor. You can view the preview side-by-side (⌘K V) with the file you are editing and see changes reflected in real-time as you edit.

# Build Steps
1. > emconfigure ./configure --without-tektronix -with-x=no
2. > emmake make gnuplot 
3. Patch Gnuplot file with Custom Module bevahvour
   see: https://emscripten.org/docs/api_reference/module.html

   Patch the file "gnuplot" wich was build with module

    Todo: adapt build to add below patch during build phase, so that patching is not necessary
    > var Module = typeof Module != 'undefined' ? Module : {};

    becomes 
    
    > // var Module = typeof Module != 'undefined' ? Module : {};

    then add the following lines below

```
    var Module = {
       'arguments': ['-e', ""],
       'postRun': function() { runCommand()},
        'print': 
            function (text) {
                handleGnuplotOutput(text);
            },
        'printErr': function (text) {
            const node = document.createElement("p");
            const textnode = document.createTextNode(text);
            node.appendChild(textnode);
            document.getElementById("output").appendChild(node);
        }
    };
```



# Running

# Browser
1. start http server  - eg: 
> python3 -m http.server and 
2. call http://localhost:8000/src/gnuplot.html

