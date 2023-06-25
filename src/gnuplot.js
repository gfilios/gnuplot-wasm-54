// Assume add.wasm file exists that contains a single function adding 2 provided arguments
const fs = require('fs');

const gnuplotWasmFile = './src/gnuplot.wasm'
const gnuplotWasmHttp = 'http://localhost:8000/src/gnuplot.wasm'


WebAssembly.compileStreaming(fetch(gnuplotWasmHttp)).then((mod) => {
    const imports = WebAssembly.Module.imports(mod);
    const exports = WebAssembly.Module.exports(mod);
    console.log(imports[0]);
    console.log(exports[0]);
  });

/*
const wasmBuffer = fs.readFileSync(gnuplotWasmFile);
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  // Exported function live under instance.exports
  const { main } = wasmModule.instance.exports.main;
  const sum = main();
  console.log(sum); 
});
*/