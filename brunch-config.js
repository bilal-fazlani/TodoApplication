exports.config = {
  hot: true,

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css',
    }
  },

    npm: {
        styles: {
            bootstrap: ['dist/css/bootstrap.css']
        }
    },

  plugins: {
    babel: {
      presets: ['es2015', 'react']
    }
  }
};
