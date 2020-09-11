const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS SELECTORS</title>
      <style>
          /* Element Selector */
          p{
              border: 5px solid royalblue;
          }
          /* ID selector */
          #firstpara {
              color: blue;
          }
  
          /* class selector */
          .backg {
              background-color: green;
          }
  
          /* grouping selector */
          footer,
          span {
              background-color: pink;
          }
      </style>
  </head>
  
  <body>
      <H1>CSS SELECTORS</H1>
      <p id="firstpara">This is a para to demonstrate selector </p>
      <p class="backg">This is a para2 to demonstrate selector </p>
      <div>
          <p>This is a para3 to demonstrate selector inside div </p>
          <span>This is span</span>
      </div>
      <footer>THIS IS FOOTER</footer>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});