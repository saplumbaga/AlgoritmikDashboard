import gulp from 'gulp'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import gulpif from 'gulp-if'
import config from '../config'

export const buildScripts = () =>
  browserify(`${config.src.scripts}/main.js`, { debug: true })
    .transform('babelify', { presets: ['@babel/preset-env'] })
    .bundle()
    .on('error', function browserifyError(error) {
      console.log(error.stack)
      this.emit('end')
    })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulpif(config.isDev, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpif(config.isProd, uglify()))
    .pipe(gulpif(config.isDev, sourcemaps.write()))
    .pipe(
      gulpif(
        config.isProd,
        gulp.dest(config.build.scripts),
        gulp.dest(config.dest.scripts)
      )
    )

export const watchScripts = () =>
  gulp.watch(`${config.src.scripts}/**/*.js`, buildScripts)
