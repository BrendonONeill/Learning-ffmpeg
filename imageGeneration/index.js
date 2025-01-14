import ffmpeg from 'fluent-ffmpeg';
import "child_process";


export function imageGen(req, res)
{
    main()
}


function generatingTimestamps(start,loop)
{
    let arr = []
    let end = start + loop
    for(start; start <= end; start++)
    {
        arr[start] = [`00:00:${start}.200`,`00:00:${start}.400`,`00:00:${start}.600`,`00:00:${start}.800`,`00:00:${start+1}.000`]
    }
    console.log(start, end)
    return arr
}

function imageGeneration(arr)
{
    return arr.map( async (data, index) => {
        try{
            console.log(data,index)
            ffmpeg({source: 'data.mp4'})
            .on('filenames',(filenames) => {
                console.log('creating ' + filenames + Date.now().toLocaleString())
            })
            .on('end', () => {
                console.log("finished")
            })
            .on('error', (err) => {
                console.log(err)
            })
            .takeScreenshots({
                filename:'example.png',
                timemarks:data,
                filename: '%f'
            }, `images/frames-${index}`)
        }
        catch(error){
            console.log(error)
        }
    })    
}

async function main()
{
    let arr  = await generatingTimestamps(20,10)
    let uploadPromises = await imageGeneration(arr)
    let test = await Promise.all(uploadPromises).then(test => console.log(test));
}