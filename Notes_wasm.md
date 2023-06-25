# Usage Tips Markdown in Visual Code: 
To switch between views, press ⇧⌘V in the editor. You can view the preview side-by-side (⌘K V) with the file you are editing and see changes reflected in real-time as you edit.

# Build Steps
emconfigure ./configure --without-tektronix -with-x=no
emmake make gnuplot 

# Running
Either:
## Node
> node src/gnuplot_manuel.js
## Browser
1. start http server  - eg: 
> python3 -m http.server and call http://localhost:8000/src/gnuplot.html
3. Start Browser
2. open developer tools / read console
    * set terminal dumb
    * plot sin(x)