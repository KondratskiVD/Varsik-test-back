const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express()
app.set('port', 3000);

app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(cors());
const productsRoute = require('./routes/products')
app.use('/products', productsRoute);

async function start() {
  try {
    await mongoose.connect('mongodb+srv://Vitaliy_DB:EuGyrgWdHZdxNCS0@cluster0.gd530.mongodb.net/PrettyVarsik?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    app.listen(app.get('port'),() => {
      console.log(`[OK] Server is running on localhost:${app.get('port')}`);
    });
  } catch (e) {
    console.log(e)
  }
}
start()
