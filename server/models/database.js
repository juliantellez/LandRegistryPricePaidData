// @ flow
import pg from 'pg'

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/properties_england'

const client = new pg.Client(connectionString)

client.connect()
const query = client.query(
  'CREATE TABLE land_registry_price_paid(' +
    'uuid uuid PRIMARY KEY, ' +
    'price INTEGER, ' +
    'sold_date DATE,' +
    'post_code TEXT,' +
    'property_type CHAR(1),' +
    'is_new CHAR(1),' +
    'tenure CHAR(1),' +
    'primary_addressable_object_name TEXT,' +
    'secondary_addressable_object_name TEXT,' +
    'street TEXT,' +
    'locality TEXT,' +
    'town_or_city TEXT,' +
    'district TEXT,' +
    'county TEXT,' +
    'price_paid_data CHAR(1),' +
    'record_status CHAR(1)' +
  ')')

query.on('end', () => { client.end() })
