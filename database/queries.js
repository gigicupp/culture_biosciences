require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: 'culture',
  port: 5432,
})

const getImages = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM images order by 1', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const updateImage = (img_id, is_foaming) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'UPDATE images SET is_foaming = $2 WHERE img_id = $1',
      [img_id, is_foaming],
      (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.row)
      }
    )
  })
}



module.exports = {getImages, updateImage}