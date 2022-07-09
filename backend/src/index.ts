// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', async () => {
  return { message: "Server is running... 😁" }
})



// Run the server
try {
  const port = 3001;
  fastify.listen({ port });
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}