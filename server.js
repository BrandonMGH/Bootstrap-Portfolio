var express = require("express");


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("assets"));

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

require("./routes/htmlroutes")(app);

app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  