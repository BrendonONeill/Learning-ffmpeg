const ffmpeg = require('fluent-ffmpeg');

function generate(start,loop)
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

function testing(arr)
{
    return arr.map( async (test, index) => {
        try{
            console.log(test,index)
            ffmpeg({source: 'C:/Users/bpjon/OneDrive/Desktop/test_upload/test.mp4'})
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
                timemarks:test,
                filename: '%f'
            }, `images/frames-${index}`)
        }
        catch(error){
    
        }
    })    
}

async function main()
{
    let arr  = await generate(20,10)
    let uploadPromises = await testing(arr)
    await Promise.all(uploadPromises);
}

main()


