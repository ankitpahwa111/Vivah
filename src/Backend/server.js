const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const { db } = require('./Models')
// Routes
app.use('/api', require('./routes/api'))
app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  next();
})
db.sync()
  .then(() => {
    app.listen(7788, () => {
      console.log('Server started on http://localhost:7788/')
    })
  })
  .catch(err => {
    console.error(err)
  })

