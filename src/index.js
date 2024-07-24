import { Player } from "textalive-app-api";

// 画像ファイルをインポート
import mikuImage0 from './miku_0.png';
import mikuImage1 from './miku_1.png';
import mikuImage2 from './miku_2.png';
import mikuImage3 from './miku_3.png';

const images = [mikuImage0, mikuImage1, mikuImage2,mikuImage3];

let imageIndex = 0; // 最初はmiku_0.pngからスタート

setInterval(function() {
  imageIndex = (imageIndex + 1) % images.length; // 画像インデックスを順番に循環
  document.getElementById("miku-image").src = images[imageIndex]; // 画像のsrc属性を更新する
}, 1000); // 1000ms = 1秒ごとに実行


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

    // 再生ボタン
    playBtns.forEach((playBtn) =>
      playBtn.addEventListener("click", () => {
        player.video && player.requestPlay();
      })
    );

    // 一時停止ボタン
    pauseBtn.addEventListener("click", () => player.video && player.requestPause());
  }

  // 楽曲の指定
  player.createFromSongUrl("https://piapro.jp/t/ELIC/20240130010349");
}

function onVideoReady(v) {
  // アーティスト名と曲名の表示
  artistSpan.textContent = player.data.song.artist.name;
  songSpan.textContent = player.data.song.name;

  // Phraseごとに区切る
  let w = player.video.firstPhrase;
  while (w) {
    w.animate = animateWord;
    w = w.next;
  }
}

function onTimerReady(t) {
  if (!player.app.managed) {
    document.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
  }
}

function onThrottledTimeUpdate(position) {
  positionEl.textContent = String(Math.floor(position));
}

// オーバーレイを消す
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


