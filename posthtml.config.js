module.exports = {
  plugins: {
    'posthtml-inline-svg': {
      cwd: 'src/icons',
      tag: 'icon',
      attr: 'src'
    }
  }
}
