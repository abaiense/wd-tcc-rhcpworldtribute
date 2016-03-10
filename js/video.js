var video = document.getElementById("bgvid"), pauseButton = document.querySelector("#pause");

function vidFade() {
  video.classList.add("stopfade");
}

video.addEventListener('ended', function()
{
// only functional if "loop" is removed 
video.pause();
vidFade();
}, false); 

pauseButton.addEventListener("click", function() {
  video.classList.toggle("stopfade");
  if (video.paused) {
    video.play();
    document.getElementById('pause').innerHTML = '<title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#fff" id="Icons-AV" transform="translate(-42.000000, -85.000000)"><g id="pause-circle-outline" transform="translate(42.000000, 85.000000)"><path d="M7,14 L9,14 L9,6 L7,6 L7,14 L7,14 Z M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z M11,14 L13,14 L13,6 L11,6 L11,14 L11,14 Z" id="Shape"/></g></g></g>';
  } else {
    video.pause();
    pauseButton.innerHTML = '<title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#fff" id="Icons-AV" transform="translate(-168.000000, -85.000000)"><g id="play-circle-outline" transform="translate(168.000000, 85.000000)"><path d="M8,14.5 L14,10 L8,5.5 L8,14.5 L8,14.5 Z M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z" id="Shape"/></g></g></g>';
  }
}, false);

video.addEventListener('touchstart', function(e) {
    e.preventDefault();
    video.play();
})