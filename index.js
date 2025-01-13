const { spawn } = require('node:child_process');

let takeAtSecond = `${1}`;
let file = 'fw1.mp4';
let output = `output1.png`;
const numberOfFrames = '1';

const ffmpeg = spawn('ffmpeg', [
  '-ss',
  takeAtSecond,
  '-i',
  file,
  '-frames',
  numberOfFrames,
  output,
  '-y',
]);


for(let i = 1; i < 11; i++)
{
    console.log(takeAtSecond,file,output);
    takeAtSecond = `${i + 1}`
    output = `output${i + 1}.png`;
}

ffmpeg.stderr.on('data', (data) => {
  console.log(data.toString());
});

ffmpeg.on('exit', () => {
  console.log(`Image generated successfully`);
});

