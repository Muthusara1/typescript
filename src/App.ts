import express = require('express');

class App {
  public express: any;

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hell World!'
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express