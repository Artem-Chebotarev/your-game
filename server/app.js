const express = require('express')
const cors = require('cors')
const { dbConnect } = require('../server/src/db/connect')

const PORT = 3000

const app = express()

dbConnect();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT)
})

