import express from 'express'
import imageGeneration from './routes/imageGeneration.js'

const app = express()


app.use("/imagegen", imageGeneration)



app.listen("3000" ,() =>{
    console.log("running on 3000")
})