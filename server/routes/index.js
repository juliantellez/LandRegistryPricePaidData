// import path from 'path'
import pg from 'pg'
import express from 'express'

const router = express.Router()
// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/properties_england'

const config = {
  database: 'properties_england',
  host: 'localhost',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

const pool = new pg.Pool(config)

router.get('api/v1/first5', (req, res, next) => {
  const results = []
  pool.connect((err, client, done) => {
    if (err) {
      done()
      console.log(err)
      return res.status(500).json({success: false, data: err})
    }

    const query = client.query('SELECT * FROM land_registry_price_paid FETCH FIRST 5 ROWS ONLY')

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

export default router
