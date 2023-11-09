const express = require('express')

/** create object that instances of express */
const app = express()

/** define port of server */
const PORT = 7000

/** load library cors */
const cors = require('cors')

const bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

/** open CORS policy */
app.use(cors())

/** define all routes */
// const userRoute = require(`./routes/user.route`);

/** define prefix for each route */
// app.use(`/user`, userRoute);

app.use(express.static(__dirname))

app.listen(PORT, () => {
  console.log('server port 7000 wwoilah')
})
