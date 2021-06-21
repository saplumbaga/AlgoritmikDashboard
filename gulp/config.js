const srcPath = 'src'
const destPath = 'dist'
const buildPath = 'build'

const config = {
  src: {
    root: srcPath,
    fonts: `${srcPath}/fonts`,
    images: `${srcPath}/images`,
    icons: `${srcPath}/icons`,
    styles: `${srcPath}/styles`,
    scripts: `${srcPath}/scripts`,
    views: `${srcPath}/views`
  },

  dest: {
    root: destPath,
    fonts: `${destPath}/fonts`,
    images: `${destPath}/images`,
    styles: `${destPath}/styles`,
    scripts: `${destPath}/scripts`,
    views: destPath
  },

  build: {
    root: buildPath,
    fonts: `${buildPath}/fonts`,
    images: `${buildPath}/images`,
    styles: `${buildPath}/styles`,
    scripts: `${buildPath}/scripts`,
    views: buildPath
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod')
    this.isDev = !this.isProd
  }
}

export default config
