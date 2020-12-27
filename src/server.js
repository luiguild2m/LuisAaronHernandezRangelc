require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const equipoRouter = require('./routes/equipo')


const port = process.env.PORT || 8000
const app = express()
sequelize.sync()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/equipos', equipoRouter)
//app.use('/products', productRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});

