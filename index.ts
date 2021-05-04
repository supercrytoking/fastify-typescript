import fastify from 'fastify'
import * as dotenv from 'dotenv'
import {db} from "./config/db"

dotenv.config()

const server = fastify()

db()

server.get('/' , async (request, reply) => 'Hello World')
server.get('/ping', async (request, reply) => 'pong\n')

server.listen(process.env.PORT, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
