const express = require('express')
const bodyParser = require('body-parser') 
const app = express();
const UserRoute = require('./api/routes/UsersRoute')
const PORT = 4000

app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
)
app.use(bodyParser.json())

app.use('/', UserRoute)

const dbConf = require('./configurations/database/database.config')
const mongoose = require('mongoose')
// mongoose.Promise = global.Promise
mongoose.connect(dbConf.url).then(
	() => {
		console.log("Connection To Database Success!!")
	}
).catch(err => {
	console.log('Connection to Database Failed!', err)
	process.exit()
})


app.listen(PORT, () => {
    console.log(`Listening at the port ${PORT}`);
})
