import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

// This is a middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

// This is a middleware for the limit in json format of web(taaki json format mei kitna hi bhi data na aaye hum limit lga ske)
app.use(express.json({limit: "16kb"}))

// This is a middleware for the data came from the url is encoded like aman+bhardwaj, aman%20
app.use(express.urlencoded({extended:true, limit: "16kb"}))

// This is the middleware for the storing the files and folders
app.use(express.static("public"))

app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export { app }