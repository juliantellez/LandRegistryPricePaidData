// @ flow
import pg from 'pg'

type Config = {
  user: string,
  database: string,
  password: string,
  host: string,
  port: number,
  max: number,
  idleTimeoutMillis: number
}

const config: Object<Config> = {
  user: 'julian',
  database: 'properties_england',
  password: 'aguila-0',
  host: 'localhost',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

const pool = new pg.Pool(config)

pool.connect((err, client, done) => {
  if (err) {
    return new Error('error', err)
  }

  client.query(`SELECT * from module.land_registry_price_paid where sold_date > '2015-01-01' AND post_code LIKE 'SW%' AND price < 250000 fetch first 5 rows only`, [],
    (e, result) => {
      done() // release the client back to the pool
      if (err) {
        return new Error('error', err)
      }
      console.log('result', result)
    })
})

pool.on('error', (err, client) => {
  console.error('idle client error', err.message, err.stack)
})
