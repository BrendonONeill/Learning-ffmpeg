import express from 'express'
import imageGeneration from './routes/imageGeneration.js'
import { dirname, join } from 'path';
import {fileURLToPath} from 'url';

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    console.log("---------")
    next()
})

app.use("/imagegen", imageGeneration)


app.get('/html', (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'));
});


app.listen("3000" ,() =>{
    console.log("running on 3000")
})