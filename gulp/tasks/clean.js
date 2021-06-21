import del from 'del'
import config from '../config'

const clean = (done) => {
  del.sync(config.dest.root)
  del.sync(config.build.root)

  done()
}

export default clean
