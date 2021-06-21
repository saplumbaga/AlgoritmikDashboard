import browserSync from 'browser-sync'
import config from '../config'

const server = (done) => {
  browserSync.create().init({
    server: { baseDir: config.dest.root },
    files: [
      {
        match: `${config.dest.fonts}/**/*`,
        fn() {
          this.reload()
        }
      },
      {
        match: `${config.dest.images}/**/*`,
        fn() {
          this.reload()
        }
      },
      `${config.dest.styles}/*.css`,
      `${config.dest.scripts}/*.js`,
      `${config.dest.views}/*.html`
    ],
    port: 4747,
    open: false
  })

  done()
}

export default server
