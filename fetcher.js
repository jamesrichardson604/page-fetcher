const args = process.argv.slice(2)
const request = require('request')
const fs = require('fs')
const url = args[0]
const localFile = args[1]

request(url, (err, response, body) => {
  if (err) throw err
  fs.writeFile(localFile, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved 3261 bytes to ${localFile}`)
  })
})


