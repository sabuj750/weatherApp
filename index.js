import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const apiKey = '458191fa2be2578f559e0f19a195c2d7';

app.get("/" , (req , res) => {
  res.render('index.ejs');
} );


app.listen(port, () => {
  console.log("The server is running on port " + port);
});
