import gulp from 'gulp'
import gulpif from 'gulp-if'
import plumber from 'gulp-plumber'
import config from '../config'

export const buildFonts = () =>
  gulp
    .src(`${config.src.fonts}/**/*`)
    .pipe(plumber())
    .pipe(
      gulpif(
        config.isProd,
        gulp.dest(config.build.fonts),
        gulp.dest(config.dest.fonts)
      )
    )

export const watchFonts = () =>
  gulp.watch(`${config.src.fonts}/**/*`, buildFonts)
