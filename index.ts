import fastify from 'fastify'
import * as dotenv from 'dotenv'

dotenv.config()

const server = fastify()

server.get('/ping', async (request, reply) => 'pong\n')

server.listen(process.env.PORT, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
