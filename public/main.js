const fileInput = document.getElementById("video-file")
const videoPlayer = document.getElementById("video")
const canvas = document.querySelector(".canvas-video")

const videoSlider = document.getElementById("video-slider")

let videoFile = ""
let videoUrl = ""
let image = '';

fileInput.addEventListener("change", (e) => {
    videoFile = e.target.files
    videoUrl = URL.createObjectURL(videoFile[0])
    videoPlayer.src = videoUrl
    videoPlayer.load()
    videoPlayer.play()
    console.log(videoFile, videoUrl)
})


videoPlayer.addEventListener("dblclick", () => {
   if(videoPlayer.classList.contains('video-large'))
   {
    videoPlayer.classList.remove("video-large")
    videoPlayer.style.width = "640px"
    console.log("clicked")
   }
   else
   {
    videoPlayer.classList.add("video-large")
    videoPlayer.style.width = "100%"
    videoPlayer.style.height = window.innerHeight
    setTimeout(() =>{
        videoPlayer.currentTime = 120
    }, 3000)
    console.log("clicked")

   }

})


videoPlayer.addEventListener("timeupdate", (event) => {
    console.log(event.timeStamp);
  });

  videoPlayer.ondurationchange = (event) => {
    console.log(event);
  };


videoPlayer.addEventListener('timeupdate', function(){
    canvas.width = 1920;
    canvas.height = 1080;

    let ctx = canvas.getContext('2d');
    ctx.drawImage( videoPlayer, 0, 0, canvas.width, canvas.height );

    image = canvas.toDataURL('image/jpeg');
    console.log(image)
});
