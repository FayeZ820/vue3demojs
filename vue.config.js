module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
    //lintOnSave: true,
    css: {
        loaderOptions: {
          scss: {
            prependData: `@import "./src/styles/main.scss";`
          }
        }
      }
}