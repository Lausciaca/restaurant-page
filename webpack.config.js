// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Punto de entrada de tu aplicación
  output: {
    filename: 'main.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'build'), // Carpeta de salida
  },
};
