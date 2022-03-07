require('dotenv').config()
const fs = require('fs');

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST || 'localhost',
  password: process.env.DB_PASSWORD,
  database: 'culture',
  port: 5432,
})

// seed the database with the images
const insertIntoImages = () => {
  fs.readFile("./foam-seed.json", "utf8", (err, jsonString) => {
    try{
      const images = JSON.parse(jsonString);
      images.forEach(image => {
          const {url, lastModified} = image;
          return pool.query(
            `INSERT INTO images (img_url, last_modified, is_foaming) VALUES ($1, $2, $3)`, 
            [url, lastModified, 'unclassified'],
            (err, result) => {
              if(err) {
                console.log(err)
              } else {
                console.log('yay')
              }
            }
          )
      })
    } catch(err) {
      console.log(err)
    }
  });
}

insertIntoImages()