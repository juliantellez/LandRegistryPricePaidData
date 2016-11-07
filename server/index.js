import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/sample', (req, res) => {
  res.send('this is a sample!')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

const router = express.Router()
app.use('/', router)

router.get('/', (req, res) => {
  res.send('this is the home page')
})

// import path from 'path'
import pg from 'pg'

// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/properties_england'

const config = {
  database: 'properties_england',
  host: 'localhost',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

const pool = new pg.Pool(config)

router.get('/api/v1/first5', (req, res, next) => {
  const results = []
  pool.connect((err, client, done) => {
    if (err) {
      done()
      console.log(err)
      return res.status(500).json({success: false, data: err})
    }

    const query = client.query('SELECT * FROM module.land_registry_price_paid FETCH FIRST 5 ROWS ONLY')

    query.on('row', row => {
      results.push(row)
    })

    query.on('end', () => {
      done()
      return res.json(results)
    })
  })
})

pool.on('error', (err, client) => {
  console.error('idle client error', err.message, err.stack)
})

// TODO organise the routes in a folder, read about best practices
// create more api calls
// http://mherman.org/blog/2015/02/12/postgresql-and-nodejs/#.WCD1wuGLTdQ
// https://github.com/brianc/node-postgres/wiki/Query
// https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4