const express = require('express');
const bodyParser = require('body-parser');

//middleware
const app = express();
app.use(bodyParser.json());
const port = 7070

const password = 'carUsermunna'



const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://carUser:carUsermunna@cluster0.nwuix.mongodb.net/servicecar?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("servicecar").collection("addroute");
  console.log('database connection');
  // client.close();
});





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})