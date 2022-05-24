import 'reflect-metadata'
import './src/controller'
import { InversifyExpressServer } from 'inversify-express-utils'
import { json, urlencoded } from 'express'
import { container } from './src/container'


const port = process.env.PORT || 3000
const server = new InversifyExpressServer(container)

server.setConfig(app => {
    app.use(json())
    app.use(urlencoded({ extended: true }))
})

const app = server.build()
app.listen(port, () => {
    console.log(`Server starting on ${port}`)
})