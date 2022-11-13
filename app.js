//main structure
class Music{
    constructor(title,singer,img,file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    };
    getName(){
        return this.singer + " - " + this.title;
    }
};

const musicList = [
    new Music("Demet Akalin","Ben Fero","1.jpg","1.mp3"),
    new Music("1,2,3","Ben Fero","3.jpg","3.mp3"),
    new Music("Dua Lipa","One Kiss","2.jpg","2.mp3")
];

//control 

class MusicPlayer{
    constructor(musicList){
        this.musicList = musicList;
        this.index = 0;
    }
    getMusic(){
        return this.musicList[this.index];
    }
    next(){
        if(this.index + 1 != this.musicList.length)
        {
            this.index ++;
        }else
        {
            this.index = 0;
         }}; 

    prev(){
        if(this.index !=0){
        this.index--;
         }else{
        this.index = this.musicList.length - 1;
         }};
};

const player = new MusicPlayer(musicList);


//app

const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const next = document.querySelector("#next");
const singer = document.querySelector(".singer");
const title = document.querySelector(".title");
const image = document.querySelector(".music-image");
const container = document.querySelector(".container");
const currentTime = document.querySelector("#current-time");
const duration = document.querySelector("#duration");
const progressBar = document.querySelector("#progresBar");
const volumeBar = document.querySelector("#volume-bar");
const volume = document.querySelector("#volume");

 
function displayMusic(music){
 title.innerText = music.getName();
//   singer.innerText = music.singer;
  image.src = "img/" + music.img;
  audio.src = "mp3/" + music.file;
};

window.addEventListener("load",()=>{
    let music = player.getMusic();
    displayMusic(music);
});

play.addEventListener("click",()=>{
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
});

function pauseMusic(){
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play"
    audio.pause();
};

function playMusic(){
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause"
    audio.play();
};

prev.addEventListener("click",() =>{
    prevMusic();
})

function prevMusic (){
    player.prev();
    let  music = player.getMusic()
    displayMusic(music);
    playMusic();
}

next.addEventListener("click",() =>{
    nextMusic();
})

function nextMusic (){
    player.next();
    let  music = player.getMusic()
    displayMusic(music);
    playMusic();
}
const calculateTime = (toplamSaniye) => {
    const dakika = Math.floor(toplamSaniye / 60);
    const saniye = Math.floor(toplamSaniye % 60);
    const updateSecond = saniye < 10 ? `0${saniye}`:`${saniye}`;
    const result = `${dakika}:${updateSecond}`;
    return result;
};
 
audio.addEventListener("loadedmetadata",() => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate",() =>{
   progressBar.value = Math.floor(audio.currentTime);
   currentTime.textContent = calculateTime(progressBar.value);
});

progressBar.addEventListener("input",() => {
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
});

let sesDurumu = "sesli";

volumeBar.addEventListener("input", (a) =>{
const value = a.target.value;
audio.volume = value / 100;
if(value == 0)
{
    audio.muted = true;
    sesDurumu = "sessiz";
    volume.classList = "fa-solid fa-volume-xmark";
  
}else{
    audio.muted = false;
    sesDurumu = "sesli";
    volume.classList = "fa-solid fa-volume-high";
  
}
});

volume.addEventListener("click", ()=>{
    // console.log("aa")
    if(sesDurumu === "sesli"){
     audio.muted = true;
     sesDurumu = "sessiz";
     volume.classList = "fa-solid fa-volume-xmark";
     volumeBar.value = 0;
    }else{
        audio.muted = false;
        sesDurumu = "sesli";
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value = 50;
    }
})

volumeBar.addEventListener("click",() => {

    
    // console.log(volumeBar.value)
});