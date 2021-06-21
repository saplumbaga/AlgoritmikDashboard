import gulp from 'gulp'
import changed from 'gulp-changed'
import image from 'gulp-image'
import gulpif from 'gulp-if'
import config from '../config'

export const buildImages = () =>
  gulp
    .src(`${config.src.images}/**/*`)
    .pipe(changed(config.dest.images))
    .pipe(image())
    .pipe(
      gulpif(
        config.isProd,
        gulp.dest(config.build.images),
        gulp.dest(config.dest.images)
      )
    )

export const watchImages = () =>
  gulp.watch(`${config.src.images}/**/*`, buildImages)
