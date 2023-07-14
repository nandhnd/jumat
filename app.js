const http = require ('http');~
http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type' : 'text/html',
    })
  })
  .listen(3000, () => {
    var result = '';
    for (var i = 0; i < 6; i++) {

        for (var j = 0; j < 6; j++) {

            if(i>0 && j>0){
            result += (i*j) + ' ';
            }
        }
        result += '\n'
    }
    console.log(result);
  });