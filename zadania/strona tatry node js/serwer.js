const http = require("http");
const fs = require("fs");

const port = 1024;

http.createServer((req, res) => {
  let file = "index.html";
  let contentType = "text/html; charset=utf-8";

  if (req.url === "/style.css") {
    file = "style.css";
    contentType = "text/css; charset=utf-8";
  }

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>404 - Nie znaleziono strony</h1>");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
}).listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
