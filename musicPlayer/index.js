const allsong = [
  {
    Title: "People",
    songPath: "/music/people.mp3",
    songLobo: "/image/peopel.jpg",

    duration: "",
  },
  {
    Title: "Ik tu hi",
    songPath: "music/king of the.mp3",
    songLobo: "/image/ik tu hi.jpg",
    duration: "",
  },
  {
    Title: "Keasariya lofi",
    songPath: "music/king of the.mp3",
    songLobo: "/image/lofi.jpg",
    duration: "",
  },
  {
    Title: "The carnival",
    songPath: "music/Carnival(PagalWorlld.Com).mp3",
    songLobo: "image/the carnival.webp",
    duration: "",
  },
  {
    Title: "mehabooba",
    songPath: "music/Mehabooba Kgf Chapter 2 320 Kbps.mp3",
    songLobo: "image/meha.jpg",
    duration: "",
  },
  {
    Title: "295",
    songPath: "music/king of the.mp3",
    songLobo: "image/song1.webp",
    duration: "",
  },
  {
    Title: "Passori",
    songPath: "music/Pasoori_320(PagalWorld.com.se).mp3",
    songLobo: "image/passori.jpg",
    duration: "",
  },
  {
    Title: "King of the  steets",
    songPath: "music/king of the.mp3",
    songLobo: "/image/king.jpg",
    duration: "",
  },
];
let image = document.querySelector(".image");
let lobo = image.firstElementChild;
let songinfo = document.querySelector(".songinfo");
let songName = songinfo.children[0];
songName.textContent = "king of world";
let paus = document.querySelector(".button3");
let nextsong = document.querySelector(".button4");
console.log(nextsong);
let presong = document.querySelector(".button2");
let index1;
let duration = document.querySelector(".duration");
let progress = document.querySelector("progress");
let music = new Audio(allsong[0].songPath);
let playagain = document.querySelector(".button1");
let songloboimg = document.querySelectorAll(".songloboimg");
lobo.src = allsong[0].songLobo;
songloboimg.forEach((value, index) => {
  value.src = allsong[index].songLobo;
});
songloboimg.forEach((value, index) => {
  value.addEventListener("click", () => {
    lobo.src = value.src;
  });
});

let songNam1 = document.querySelectorAll(".name");
songNam1.forEach((value, index) => {
  value.textContent = allsong[index].Title;
});

songloboimg.forEach((value, index) => {
  value.addEventListener("click", () => {
    let indexsong = parseInt(value.id);
    songName.textContent = allsong[indexsong].Title;
    Playsong(indexsong);
    next(indexsong);
  });
});

let Playsong = (indexsong) => {
  let song = allsong[indexsong].songPath;
  music.src = song;
  music.play();
  paus.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24"><path class="svg_color" d="M14 19h4V5h-4v14zm-8 0h4V5H6v14z"></path></svg>`;
  let current = document.querySelector(".current");
  setInterval(() => {
    progress.value = (music.currentTime / music.duration) * 100;
    let min = Math.floor(music.currentTime / 60);
    let sec = Math.floor(music.currentTime % 60);
    let min1 = Math.floor(music.duration / 60);
    let sec1 = Math.floor(music.duration % 60);
    duration.textContent = `${min1}:${sec1}`;
    console.log();
    current.textContent = `${min}:${sec}`;
  }, 1000);
  return indexsong;
};
paus.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    console.log(music.duration);
    paus.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24"><path class="svg_color" d="M14 19h4V5h-4v14zm-8 0h4V5H6v14z"></path></svg>`;
  } else {
    pausmusic();
  }
});

if (music.paused) {
  paus.innerHTML = `<svg width="13" height="14" viewBox="0 0 16 24" class="paypuse">
  <path
    class="svg_color"
    fill-rule="evenodd"
    d="M0 0v24l20-12z"
  ></path>`;
}
let pausmusic = () => {
  paus.innerHTML = `<svg width="13" height="14" viewBox="0 0 16 24" class="paypuse">
 <path
   class="svg_color"
   fill-rule="evenodd"
   d="M0 0v24l20-12z"
 ></path>`;
  music.pause();
 
};
let next = (a) => {
  index1 = a;
  nextsong.addEventListener("click", () => {
    if (index1 == 8) {
      index1 = 0;
    } else {
      paus.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24"><path class="svg_color" d="M14 19h4V5h-4v14zm-8 0h4V5H6v14z"></path></svg>`;
      index1 = index1 + 1;
      console.log("pre" + index1);
      let song = allsong[index1].songPath;
      lobo.src = allsong[index1].songLobo;
      songName.textContent = allsong[index1].Title;

      progress.value;
      music.src = song;
      music.play();
    }
  });
};

presong.addEventListener("click", () => {
  if (index1 == -1) {
    index1 = 0;
  } else {
    paus.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24"><path class="svg_color" d="M14 19h4V5h-4v14zm-8 0h4V5H6v14z"></path></svg>`;
    index1 = index1 - 1;
    console.log("pre" + index1);
    let song = allsong[index1].songPath;
    lobo.src = allsong[index1].songLobo;
    songName.textContent = allsong[index1].Title;
    music.src = song;
    music.play();
  }
});
let valuerange = document.querySelector(".valuerange");
function setVolume() {
  music.volume = valuerange.value / 100;
  console.log(music.volume);
  music.muted = false;
}
setInterval(() => {
  setVolume();
}, 2000);

let mute = document.querySelector(".mute");
mute.addEventListener("click", () => {
  if (music.muted) {
    music.muted = false;
  } else {
    music.muted = true;
    valuerange.value = 0;
  }
});
let fullsong = document.querySelector(".fullsong");
fullsong.addEventListener("click", () => {
  music.volume = 1;
  valuerange.value = 100;
});
let like = document.querySelector(".like");
like.addEventListener("click", () => {
  let image = document.createElement("img");
  image.src = "/image/love.png";
  image.classList.add("fav");
  let r = like.lastElementChild;
  like.appendChild(image);
  like.removeChild(r);
});
