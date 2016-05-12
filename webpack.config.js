module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root:__dirname,
    alias: {
     Nav: 'app/components/Nav.jsx',
     Weather: 'app/components/weather.jsx',
       About: 'app/components/About.jsx',
     Example: 'app/components/Example.jsx',
     WeatherMessage: 'app/components/WeatherForm.jsx',
     WeatherForm: 'app/components/WeatherForm.jsx',
     openWeatherMap: 'app/api/openWeatherMap.jsx',
     Main: 'app/components/Main.jsx'
     
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};