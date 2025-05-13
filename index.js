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

app.post("/weather" , async (req  , res) => {
  const city = req.body.city;
// console.log(city);
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 try{
  const response = await axios.get(url);
  const weatherData = response.data;
  // console.log(weatherData);
  const temp = weatherData.main.temp;
  res.render('weather.ejs' , { city: city , temp: temp });
 }catch (error){
  res.render('weather.ejs' , {city : null , temp : 'Not found or error occure'});
 }
});


app.listen(port, () => {
  console.log("The server is running on port " + port);
});
