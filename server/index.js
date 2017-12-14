import Koa from 'koa'
import path from 'path'
import bodyParser from 'koa-bodyparser'
import sslify from 'koa-sslify'
import fs from 'fs'
import http from 'http'
import https from 'https'

import router from './routes'

const options = {
	key: fs.readFileSync(path.join(__dirname, './cert/cert.key')),
  cert: fs.readFileSync(path.join(__dirname, './cert/cert.pem'))
}
const app = new Koa()
app.use(sslify())
app.use(bodyParser())
app
	.use(router.routes())
	.use(router.allowedMethods())

https.createServer(options, app.callback()).listen(3000);