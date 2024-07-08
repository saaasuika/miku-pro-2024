import { Player } from "textalive-app-api";


const animateWord = function (now, unit) {
  if (unit.contains(now)) {
    document.querySelector("#text").textContent = unit.text;
  }
};

const player = new Player({
  app: {
    token: "MSB7JpBroogXvUTv",
  },
  mediaElement: document.querySelector("#media"),
});

player.addListener({
  onAppReady,
  onVideoReady,
  onTimerReady,
  onThrottledTimeUpdate,
  onPlay,
  onPause,
  onStop,
});

const playBtns = document.querySelectorAll(".play");
const pauseBtn = document.querySelector("#pause");
const positionEl = document.querySelector("#position strong");
const artistSpan = document.querySelector("#artist span");
const songSpan = document.querySelector("#song span");

function onAppReady(app) {
  if (!app.managed) {
    document.querySelector("#control").style.display = "block";

    //再生
    playBtns.forEach((playBtn) =>
      playBtn.addEventListener("click", () => {
        player.video && player.requestPlay();
      })
    );

    // 一時停止ボタン
    pauseBtn.addEventListener(
      "click",
      () => player.video && player.requestPause()
    );

  }

    //楽曲の指定
    player.createFromSongUrl("https://piapro.jp/t/ELIC/20240130010349");
  
}


function onVideoReady(v) {
  //アーティスト名と曲名の表示
  artistSpan.textContent = player.data.song.artist.name;
  songSpan.textContent = player.data.song.name;

  //Phraseごとに区切る
  let w = player.video.firstPhrase;
  while (w) {
    w.animate = animateWord;
    w = w.next;
  }
}

function onTimerReady(t) {
  if (!player.app.managed) {
    document
      .querySelectorAll("button")
      .forEach((btn) => (btn.disabled = false));
  }
}

function onThrottledTimeUpdate(position) {
  positionEl.textContent = String(Math.floor(position));
}

//オーバーレイを消す
function onPlay() {
  document.querySelector("#overlay").style.display = "none";
}

// 再生が一時停止したら歌詞表示をリセット
function onPause() {
  document.querySelector("#text").textContent = "";
}
function onStop() {
  document.querySelector("#text").textContent = "";
}

