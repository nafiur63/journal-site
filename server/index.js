import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express()




app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

//mongodb

const CONNECTION_URL = 'mongodb+srv://journaluser:journaluser123@cluster0.fpxqa.gcp.mongodb.net/journaldatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000



mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.msg))

mongoose.set('useFindAndModify',false)

app.use('/posts', postRoutes)

