const http = require('http'); // includes http library
const fs = require('fs'); //accesses fs library for file handling
const port = 3000

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.readFile('cat.html', function(error, data) {
    if (error){
      res.writeHead(404) //error
      res.write('Error: File Not Found')
    } else {
      res.write(data) //write data from file
    }
    res.end()
  })
}) // handles the request activity on our server


server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)  
  } else {
      console.log('server is listening on port ' + port)
  }
}) //calls function if there is error and listens to port