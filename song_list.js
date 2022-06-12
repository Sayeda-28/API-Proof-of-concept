//song list
let All_song = [
   {
     name: "Light Rain",
     path: "music/1.wav",
     img: "music/lightrain.jpg",
     singer: "NoCopyrightSounds [NCS]"
   },
   {
     name: "Heavy Rain",
     path: "music/2.wav",
     img: "music/heavyrain.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "Forest",
     path: "music/3.wav",
     img: "music/forest.jpg",
     singer: "Audio Library"
   },
  
   {
    name: "Water flow",
    path: "music/6.wav",
    img: "music/water.jpg",
    singer: "Magic Free Release"
   },

   {
    name: "Morning birds",
    path: "music/7.wav",
    img: "music/birds.jpg",
    singer: "NoCopyrightSounds"
  }
 
   
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);

  var count = 1
document.getElementById('music').addEventListener('ended', function(){
   this.currentTime = 0;
   if(count <= 3000){
      this.play();
   }
   count++;
}, false);
};


/*please follow all the rules so that you do not face any problem*/