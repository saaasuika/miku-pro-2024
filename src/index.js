import { Player } from "textalive-app-api";

<<<<<<< HEAD
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

=======
>>>>>>> 6c9d1ecf06b3a60c61255bd4b8d51ddc97dc8411

const animateWord = function (now, unit) {
  if (unit.contains(now)) {
    document.querySelector("#text").textContent = unit.text;
  }
};

<<<<<<< HEAD
=======
let imageIndex = 0; // 最初はmiku_0.pngからスタート

setInterval(function() {
  imageIndex = 1 - imageIndex; // 0と1を交互に切り替える
  document.getElementById("#miku-image").src = "miku_${imageIndex}.png"; // 画像のsrc属性を更新する
  }, 5000); // 1000ms = 1秒ごとに実行


>>>>>>> 6c9d1ecf06b3a60c61255bd4b8d51ddc97dc8411
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

<<<<<<< HEAD
=======


>>>>>>> 6c9d1ecf06b3a60c61255bd4b8d51ddc97dc8411
function onAppReady(app) {
  if (!app.managed) {
    document.querySelector("#control").style.display = "block";

<<<<<<< HEAD
    // 再生ボタン
=======
    //再生
>>>>>>> 6c9d1ecf06b3a60c61255bd4b8d51ddc97dc8411
    playBtns.forEach((playBtn) =>
      playBtn.addEventListener("click", () => {
        player.video && player.requestPlay();
      })
    );

    // 一時停止ボタン
<<<<<<< HEAD
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
=======
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
>>>>>>> 6c9d1ecf06b3a60c61255bd4b8d51ddc97dc8411
  let w = player.video.firstPhrase;
  while (w) {
    w.animate = animateWord;
    w = w.next;
  }
}

function onTimerReady(t) {
  if (!player.app.managed) {
<<<<<<< HEAD
    document.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
=======
    document
      .querySelectorAll("button")
      .forEach((btn) => (btn.disabled = false));
>>>>>>> 6c9d1ecf06b3a60c61255bd4b8d51ddc97dc8411
  }
}

function onThrottledTimeUpdate(position) {
  positionEl.textContent = String(Math.floor(position));
}

<<<<<<< HEAD
// オーバーレイを消す
=======

//オーバーレイを消す
>>>>>>> 6c9d1ecf06b3a60c61255bd4b8d51ddc97dc8411
function onPlay() {
  document.querySelector("#overlay").style.display = "none";
}

<<<<<<< HEAD
=======


>>>>>>> 6c9d1ecf06b3a60c61255bd4b8d51ddc97dc8411
// 再生が一時停止したら歌詞表示をリセット
function onPause() {
  document.querySelector("#text").textContent = "";
}
<<<<<<< HEAD

=======
>>>>>>> 6c9d1ecf06b3a60c61255bd4b8d51ddc97dc8411
function onStop() {
  document.querySelector("#text").textContent = "";
}

<<<<<<< HEAD

=======
>>>>>>> 6c9d1ecf06b3a60c61255bd4b8d51ddc97dc8411
