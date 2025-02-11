// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hCdKa":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "46ff091b40863ccb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _textaliveAppApi = require("textalive-app-api");
// 画像ファイルをインポート
var _miku0Png = require("./miku_0.png");
var _miku0PngDefault = parcelHelpers.interopDefault(_miku0Png);
var _miku1Png = require("./miku_1.png");
var _miku1PngDefault = parcelHelpers.interopDefault(_miku1Png);
var _miku2Png = require("./miku_2.png");
var _miku2PngDefault = parcelHelpers.interopDefault(_miku2Png);
var _miku3Png = require("./miku_3.png");
var _miku3PngDefault = parcelHelpers.interopDefault(_miku3Png);
const images = [
    (0, _miku0PngDefault.default),
    (0, _miku1PngDefault.default),
    (0, _miku2PngDefault.default),
    (0, _miku3PngDefault.default)
];
let imageIndex = 0; // 最初はmiku_0.pngからスタート
setInterval(function() {
    imageIndex = (imageIndex + 1) % images.length; // 画像インデックスを順番に循環
    document.getElementById("miku-image").src = images[imageIndex]; // 画像のsrc属性を更新する
}, 1000); // 1000ms = 1秒ごとに実行
const animateWord = function(now, unit) {
    if (unit.contains(now)) document.querySelector("#text").textContent = unit.text;
};
const player = new (0, _textaliveAppApi.Player)({
    app: {
        token: "MSB7JpBroogXvUTv"
    },
    mediaElement: document.querySelector("#media")
});
player.addListener({
    onAppReady,
    onVideoReady,
    onTimerReady,
    onThrottledTimeUpdate,
    onPlay,
    onPause,
    onStop
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
        playBtns.forEach((playBtn)=>playBtn.addEventListener("click", ()=>{
                player.video && player.requestPlay();
            }));
        // 一時停止ボタン
        pauseBtn.addEventListener("click", ()=>player.video && player.requestPause());
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
    while(w){
        w.animate = animateWord;
        w = w.next;
    }
}
function onTimerReady(t) {
    if (!player.app.managed) document.querySelectorAll("button").forEach((btn)=>btn.disabled = false);
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

},{"textalive-app-api":"cgMHd","./miku_0.png":"csKGc","./miku_1.png":"dHVhQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./miku_2.png":"kWCOL","./miku_3.png":"j5TtC"}],"cgMHd":[function(require,module,exports) {
/** textalive-app-api v0.3.2 | Copyright 2021 AIST TextAlive Project <textalive-ml@aist.go.jp> (https://textalive.jp) */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BasicTimer", ()=>vn);
parcelHelpers.export(exports, "Color", ()=>Z);
parcelHelpers.export(exports, "Ease", ()=>Oi);
parcelHelpers.export(exports, "Matrix2D", ()=>st);
parcelHelpers.export(exports, "NullGraphicsDriver", ()=>ct);
parcelHelpers.export(exports, "Player", ()=>Wi);
parcelHelpers.export(exports, "PlayerLogoImage", ()=>Fi);
parcelHelpers.export(exports, "Point", ()=>at);
parcelHelpers.export(exports, "SongleTimer", ()=>mn);
parcelHelpers.export(exports, "UnitTypes", ()=>r);
parcelHelpers.export(exports, "dataUrlToString", ()=>E);
parcelHelpers.export(exports, "findTimedObject", ()=>rt);
parcelHelpers.export(exports, "isStringEncodedDataUrl", ()=>P);
parcelHelpers.export(exports, "sortedIndex", ()=>Yi);
parcelHelpers.export(exports, "stringToDataUrl", ()=>O);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var global = arguments[3];
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
var e = {
    exports: {}
};
!function(t) {
    function e(t, e, r) {
        for(var n = r && "number" != typeof e ? r(e) : e, i = 0, o = t.length; i < o;){
            var s = i + o >>> 1;
            (r ? r(t[s]) : t[s]) < n ? i = s + 1 : o = s;
        }
        return i;
    }
    t.sortedIndex = e, Object.defineProperty(t, "__esModule", {
        value: !0
    });
}(e.exports);
var r = {
    NONE: 0,
    PHRASE: 1,
    WORD: 2,
    CHAR: 4,
    GRAPHIC: 8,
    ALL: 63,
    PUBLIC: 64
}, n = /^https?:\/\/uploader\.ongaaccel\.jp\/files\?guid=([a-zA-Z0-9]+)/i, i = /^https?:\/\/songle\.jp\/uploads\/([a-zA-Z0-9]+)\.mp3$/i, o = /^uploaded:([a-zA-Z0-9]+)$/i, s = /^songle\.jp\/uploads\/([a-zA-Z0-9]+)\.mp3$/i, a = /^https?:\/\/piapro\.jp\/t\/([^/]+)(\/[0-9]+)?$/i, u = {
    getSongPathFromUrl: function(t) {
        if (u.isUploaderUrl(t)) {
            var e = i.exec(t);
            if (e) return "songle.jp/uploads/" + e[1] + ".mp3";
            var r = n.exec(t);
            if (r) return "songle.jp/uploads/" + r[1] + ".mp3";
        }
        return /https?:\/\/(.+)/.exec(t)[1];
    },
    isUploaderUrl: function(t) {
        return i.test(t) || n.test(t);
    },
    isUploaderPath: function(t) {
        return s.test(t) || o.test(t);
    },
    getUploaderGuid: function(t) {
        var e = s.exec(t);
        if (e) return e[1];
        var r = o.exec(t);
        return r ? r[1] : null;
    },
    getSongUrlFromUploaderGuid: function(t) {
        return t ? "https://songle.jp/uploads/" + t + ".mp3" : null;
    },
    getAltSongUrlFromUploaderGuid: function(t) {
        return t ? "https://api.textalive.jp/songle/me/uploads/" + t : null;
    },
    getSongUrlFromPath: function(t) {
        var e = u.getUploaderGuid(t);
        return e ? u.getSongUrlFromUploaderGuid(e) : "https://" + t;
    },
    isYouTubeUrl: function(t) {
        return /^https?:\/\/((www|m)\.)?youtube\.com/i.test(t);
    },
    isNicovideoUrl: function(t) {
        return /^https?:\/\/(www\.)?nicovideo.jp/i.test(t);
    },
    isVideoSiteUrl: function(t) {
        return u.isYouTubeUrl(t) || u.isNicovideoUrl(t);
    },
    isPiaproUrl: function(t) {
        return a.test(t);
    }
}, l = /^https:\/\/songle\.jp\/api\/v[0-9]+\/users\/(.+)\/uploads\/(.+)$/, c = function(t) {
    return l.test(t);
}, p = function(t) {
    var e = l.exec(t);
    return e ? {
        user: e[1],
        identifier: e[2]
    } : {
        user: null,
        identifier: null
    };
}, h = function() {
    function t() {}
    return t.prototype.isLicenseLoading = function(t) {
        return !t || !t.song || void 0 === t.lyrics || void 0 === t.backgroundImage;
    }, t.prototype.checkLicenses = function(t) {
        return !this.isLicenseLoading(t) && this.checkLicense(t.song) && this.checkLicense(t.lyrics) && this.checkLicense(t.backgroundImage);
    }, t.prototype.checkLicense = function(t) {
        return null === t || (1 === t.contentType ? this.checkMusicLicense(t.license) : 2 === t.contentType ? this.checkTextLicense(t.license) : 0 === t.contentType && (!!this.isBackgroundColorAsset(t) || this.checkBackgroundImageLicense(t.license)));
    }, t.prototype.checkMusicLicense = function(t) {
        return t.condition && t.condition.uploader || !(!t.condition || t.condition.ns || t.condition.nc || t.condition.org || t.condition.clb);
    }, t.prototype.checkTextLicense = function(t) {
        return t.condition && t.condition.uploader || !(!t.condition || t.condition.ns || t.condition.org || t.condition.clb);
    }, t.prototype.checkBackgroundImageLicense = function(t) {
        return !(!t.condition || t.condition.ns || t.condition.nc || t.condition.org || t.condition.clb);
    }, t.prototype.isUploaderAsset = function(t) {
        return t && t.url && (u.isUploaderUrl(t.url) || c(t.url));
    }, t.prototype.isPiaproAsset = function(t) {
        return t && t.url && u.isPiaproUrl(t.url);
    }, t.prototype.isBlankBackgroundAsset = function(t) {
        return !t || !t.originalUrl;
    }, t.prototype.isBackgroundColorAsset = function(t) {
        var e = t && t.originalUrl ? t.originalUrl : "";
        return /^#[0-9a-fA-F]{3,6}$/.test(e);
    }, t.prototype.isBackgroundPiaproImageAsset = function(t) {
        var e = t && t.originalUrl ? t.originalUrl : "";
        return u.isPiaproUrl(e);
    }, t.prototype.isBackgroundSpecialImageAsset = function(t) {
        var e = t && t.originalUrl ? t.originalUrl : "";
        return /^snowmiku2016-([0-9]{2})$/.test(e);
    }, t.prototype.getQueryParameter = function(t) {
        return !t || t.license && !this.checkBackgroundImageLicense(t.license) ? null : t.originalUrl;
    }, t;
}(), d = function(t, e) {
    return d = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }, d(t, e);
}, f = function() {
    return f = Object.assign || function(t) {
        for(var e, r = 1, n = arguments.length; r < n; r++)for(var i in e = arguments[r])Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
    }, f.apply(this, arguments);
};
function y(t, e, r, n) {
    return new (r || (r = Promise))(function(i, o) {
        function s(t) {
            try {
                u(n.next(t));
            } catch (t) {
                o(t);
            }
        }
        function a(t) {
            try {
                u(n.throw(t));
            } catch (t) {
                o(t);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                t(e);
            })).then(s, a);
        }
        u((n = n.apply(t, e || [])).next());
    });
}
function v(t, e) {
    var r, n, i, o, s = {
        label: 0,
        sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1];
        },
        trys: [],
        ops: []
    };
    return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
    }), o;
    function a(o) {
        return function(a) {
            return function(o) {
                if (r) throw new TypeError("Generator is already executing.");
                for(; s;)try {
                    if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                    switch(n = 0, i && (o = [
                        2 & o[0],
                        i.value
                    ]), o[0]){
                        case 0:
                        case 1:
                            i = o;
                            break;
                        case 4:
                            return s.label++, {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            s.label++, n = o[1], o = [
                                0
                            ];
                            continue;
                        case 7:
                            o = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                s = 0;
                                continue;
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                s.label = o[1];
                                break;
                            }
                            if (6 === o[0] && s.label < i[1]) {
                                s.label = i[1], i = o;
                                break;
                            }
                            if (i && s.label < i[2]) {
                                s.label = i[2], s.ops.push(o);
                                break;
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue;
                    }
                    o = e.call(t, s);
                } catch (t) {
                    o = [
                        6,
                        t
                    ], n = 0;
                } finally{
                    r = i = 0;
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }([
                o,
                a
            ]);
        };
    }
}
var g = {
    fallback: {
        protocol: "https"
    },
    songle: {
        domain: "songle.jp"
    },
    textalive: {
        domain: "api.textalive.jp"
    },
    content: {
        domain: "content.textalive.jp"
    },
    client: {
        version: "0.10.0",
        axios: null
    }
};
function m(e, r, n) {
    var i, o, s;
    return y(this, void 0, void 0, function() {
        var a;
        return v(this, function(u) {
            switch(u.label){
                case 0:
                    a = {
                        responseType: (null == n ? void 0 : n.responseType) || "json"
                    }, r && (a.params = r), (null == n ? void 0 : n.auth) && (a.auth = {
                        username: null === (i = n.auth) || void 0 === i ? void 0 : i.username,
                        password: null === (o = n.auth) || void 0 === o ? void 0 : o.password
                    }), (null == n ? void 0 : n.withCredentials) && (a.withCredentials = !0), a.headers = {}, 0 === e.indexOf(g.textalive.server) && (g.textalive.appToken && (a.headers["x-ta-app-token"] = g.textalive.appToken), g.textalive.authUser && g.textalive.authToken && (a.headers["x-ta-auth-user"] = g.textalive.authUser, a.headers["x-ta-auth-token"] = g.textalive.authToken)), (null == n ? void 0 : n.headers) && (a.headers = f(f({}, a.headers), n.headers)), u.label = 1;
                case 1:
                    return u.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]), [
                        4,
                        ((null == n ? void 0 : n.client) || (null === (s = g.client) || void 0 === s ? void 0 : s.axios) || (0, _axiosDefault.default)).get(e, a)
                    ];
                case 2:
                    return [
                        2,
                        u.sent()
                    ];
                case 3:
                    return u.sent(), [
                        2,
                        null
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
}
function b(t) {
    var e, r, n = 0;
    if (0 === t.length) return n;
    for(e = 0, r = t.length; e < r; e++)n = (n << 5) - n + t.charCodeAt(e), n |= 0;
    return n;
}
g.songle.protocol = g.songle.protocol || g.fallback.protocol, g.songle.server = g.songle.protocol + "://" + g.songle.domain, g.textalive.protocol = g.textalive.protocol || g.fallback.protocol, g.textalive.server = g.textalive.protocol + "://" + g.textalive.domain, g.textalive.appToken = null, g.content.protocol = g.content.protocol || g.fallback.protocol, g.content.server = g.content.protocol + "://" + g.content.domain;
var _ = new (function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function r() {
            this.constructor = t;
        }
        d(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
    }(e, t), Object.defineProperty(e.prototype, "endpoint", {
        get: function() {
            return g.textalive.server + "/etc/license";
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.read = function(t, e) {
        var r;
        return void 0 === e && (e = !0), y(this, void 0, void 0, function() {
            var n, i;
            return v(this, function(o) {
                switch(o.label){
                    case 0:
                        return [
                            4,
                            m(this.endpoint, {
                                url: t,
                                token: b("ta" + t),
                                skipOptoutCheck: !!e || void 0
                            })
                        ];
                    case 1:
                        return !(n = o.sent()) || 200 !== n.status || (null === (r = n.data) || void 0 === r ? void 0 : r.error) ? [
                            2,
                            {
                                originalUrl: null,
                                license: {
                                    code: n ? n.status : 404
                                }
                            }
                        ] : ((i = n.data).license.code = n.status, 0 === i.contentType && (i.css = 'url("' + i.contentUrl + '")'), [
                            2,
                            i
                        ]);
                }
            });
        });
    }, e;
}(h));
function w(e, r, n) {
    var i;
    return y(this, void 0, void 0, function() {
        var o;
        return v(this, function(s) {
            switch(s.label){
                case 0:
                    r || (r = {}), o = {
                        responseType: (null == n ? void 0 : n.responseType) || "json"
                    }, (null == n ? void 0 : n.withCredentials) && (o.withCredentials = !0), o.headers = {}, 0 === e.indexOf(g.textalive.server) && (g.textalive.appToken && (o.headers["x-ta-app-token"] = g.textalive.appToken), g.textalive.authUser && g.textalive.authToken && (o.headers["x-ta-auth-user"] = g.textalive.authUser, o.headers["x-ta-auth-token"] = g.textalive.authToken)), (null == n ? void 0 : n.postToken) && (o.headers["x-ta-post-token"] = n.postToken), (null == n ? void 0 : n.headers) && (o.headers || (o.headers = {}), o.headers = f(f({}, o.headers), n.headers)), s.label = 1;
                case 1:
                    return s.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]), [
                        4,
                        ((null == n ? void 0 : n.client) || (null === (i = g.client) || void 0 === i ? void 0 : i.axios) || (0, _axiosDefault.default)).post(e, r, o)
                    ];
                case 2:
                    return [
                        2,
                        s.sent()
                    ];
                case 3:
                    return s.sent(), [
                        2,
                        null
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
}
function P(t) {
    return "string" == typeof t && 0 === t.indexOf("data:text/plain;base64,");
}
function E(t) {
    if (!P(t)) return null;
    var e = t.split(",")[1];
    return decodeURIComponent(atob(e).split("").map(function(t) {
        return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
}
function O(t) {
    return "string" != typeof t ? null : "data:text/plain;base64," + btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(t, e) {
        return String.fromCharCode(parseInt("0x" + e));
    }));
}
function S(t, e, r, n, i) {
    var o = void 0 === window.screenLeft ? screen.left : window.screenLeft, s = void 0 === window.screenTop ? screen.top : window.screenTop, a = (window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width) / 2 - r / 2 + o, u = (window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height) / 2 - n / 2 + s, l = window.open(t, e, "width=" + r + ",height=" + n + ",top=" + u + ",left=" + a + (i ? "," + i : ""));
    return window.focus && l.focus(), l;
}
var T = new (function() {
    function t() {
        this.listeners = [], this.pollingTimeout = null;
    }
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return g.textalive.server + "/";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "songleEndpoint", {
        get: function() {
            return g.songle.server + "/";
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isLoading = function() {
        return !!this.userProfile;
    }, t.prototype.spoof = function(t) {
        this.userProfile = t;
    }, t.prototype.getServerStatus = function() {
        return y(this, void 0, void 0, function() {
            return v(this, function(t) {
                return [
                    2,
                    this.serverStatus || this.doGetServerStatus()
                ];
            });
        });
    }, t.prototype.doGetServerStatus = function() {
        return y(this, void 0, void 0, function() {
            var t;
            return v(this, function(e) {
                switch(e.label){
                    case 0:
                        return this.serverStatusRequest || (this.serverStatusRequest = m(this.endpoint, null, {
                            withCredentials: !0
                        })), [
                            4,
                            this.serverStatusRequest
                        ];
                    case 1:
                        return t = e.sent(), this.serverStatusRequest = null, t && 200 === t.status ? (this.serverStatus = t.data, [
                            2,
                            this.serverStatus
                        ]) : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.getProfile = function() {
        return y(this, void 0, void 0, function() {
            return v(this, function(t) {
                return [
                    2,
                    this.userProfile || this.doGetProfile()
                ];
            });
        });
    }, t.prototype.doGetProfile = function() {
        return y(this, void 0, void 0, function() {
            var t;
            return v(this, function(e) {
                switch(e.label){
                    case 0:
                        return this.userProfileRequest || (this.userProfileRequest = m(this.endpoint + "profile", null, {
                            withCredentials: !0
                        })), [
                            4,
                            this.userProfileRequest
                        ];
                    case 1:
                        return t = e.sent(), this.userProfileRequest = null, t && 200 === t.status ? (this.emitUserProfile(t.data), this.userProfile = t.data, [
                            2,
                            this.userProfile
                        ]) : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.getMergingUsers = function() {
        return y(this, void 0, void 0, function() {
            var t;
            return v(this, function(e) {
                switch(e.label){
                    case 0:
                        return [
                            4,
                            m(this.endpoint + "profile/merge", null, {
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return (t = e.sent()) && 200 === t.status && t.data ? [
                            2,
                            [
                                t.data.user,
                                t.data.mergeWith
                            ]
                        ] : [
                            2,
                            [
                                null,
                                null
                            ]
                        ];
                }
            });
        });
    }, t.prototype.mergeUsers = function() {
        var t;
        return y(this, void 0, void 0, function() {
            var e, r, n, i, o, s;
            return v(this, function(a) {
                switch(a.label){
                    case 0:
                        return [
                            4,
                            this.getToken()
                        ];
                    case 1:
                        return e = a.sent(), [
                            4,
                            w(this.endpoint + "profile/merge", null, {
                                postToken: e,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        if (!(r = a.sent()) || 200 !== r.status || !(null === (t = r.data) || void 0 === t ? void 0 : t.success)) return [
                            2,
                            null
                        ];
                        for(n = r.data.user, i = 0, o = this.listeners; i < o.length; i++)(s = o[i]).onUserMerged && s.onUserMerged(n);
                        return [
                            2,
                            n
                        ];
                }
            });
        });
    }, t.prototype.updateUser = function(t) {
        var e;
        return y(this, void 0, void 0, function() {
            var r, n, i, o;
            return v(this, function(s) {
                switch(s.label){
                    case 0:
                        return [
                            4,
                            this.getToken()
                        ];
                    case 1:
                        return r = s.sent(), [
                            4,
                            w(this.endpoint + "profile", t, {
                                postToken: r,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (n = s.sent()) && 200 === n.status && (null === (e = n.data) || void 0 === e ? void 0 : e.success) ? (i = n.data.user, [
                            4,
                            this.getProfile()
                        ]) : [
                            2,
                            null
                        ];
                    case 3:
                        return (o = s.sent()).user = i, this.emitUserProfile(o), [
                            2,
                            i
                        ];
                }
            });
        });
    }, t.prototype.isYouTubeUser = function(t) {
        return t && t.user && "string" == typeof t.user.youtubeIdString;
    }, t.prototype.isPiaproUser = function(t) {
        return t && t.user && "string" == typeof t.user.piaproIdString;
    }, t.prototype.isSongleUser = function(t) {
        return t && t.user && ("number" == typeof t.user.songleUserId && t.user.songleUserId >= 0 || "string" == typeof t.user.songleAccessToken);
    }, t.prototype.isSpoofingSongleUser = function(t) {
        return this.isSongleUser(t) && ("number" != typeof t.user.id || t.user.id < 0);
    }, t.prototype.addListener = function(t) {
        t && this.listeners.push(t);
    }, t.prototype.removeListener = function(t) {
        this.listeners = this.listeners.filter(function(e) {
            return e !== t;
        });
    }, t.prototype.emitUserProfile = function(t) {
        this.userProfile = t;
        for(var e = 0, r = this.listeners; e < r.length; e++){
            var n = r[e];
            n.onUserProfileUpdated && n.onUserProfileUpdated(t), this.userProfile.user ? n.onUserLoggedIn && n.onUserLoggedIn(t.user) : n.onUserLoggedOut && n.onUserLoggedOut();
        }
    }, t.prototype.authenticate = function(t, e) {
        return y(this, void 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            m(this.endpoint + "profile/logins/basic", null, {
                                auth: {
                                    username: String(t),
                                    password: e
                                },
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status && r.data ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loginTwitter = function(t) {
        return this.login(t, "twitter");
    }, t.prototype.loginGitHub = function(t) {
        return this.login(t, "github");
    }, t.prototype.loginYouTube = function(t) {
        return this.login(t, "youtube");
    }, t.prototype.loginPiapro = function(t) {
        return this.login(t, "piapro");
    }, t.prototype.loginSongle = function(t) {
        return this.login(t, "songle");
    }, t.prototype.login = function(t, e) {
        return t && t.preventDefault(), !!e && (S(this.endpoint + "profile/logins/" + e, "TextAliveAuth", 600, 480, "status=no,toolbar=no,menubar=no"), this.startMonitoringAuthState(), !1);
    }, t.prototype.logoutTwitter = function(t) {
        return this.logout(t, "twitter");
    }, t.prototype.logoutGitHub = function(t) {
        return this.logout(t, "github");
    }, t.prototype.logoutYouTube = function(t) {
        return this.logout(t, "youtube");
    }, t.prototype.logoutPiapro = function(t) {
        return this.logout(t, "piapro");
    }, t.prototype.logoutSongle = function(t) {
        return this.logout(t, "songle");
    }, t.prototype.logout = function(t, e) {
        return void 0 === e && (e = null), t && t.preventDefault(), S(this.endpoint + "profile/logouts/" + (e || "all"), "TextAliveAuth", 600, 480, "status=no,toolbar=no,menubar=no"), this.startMonitoringAuthState(), !1;
    }, t.prototype.startMonitoringAuthState = function() {
        var t = this;
        this.pollingTimeout && (clearTimeout(this.pollingTimeout), this.pollingTimeout = null);
        var e = function(r) {
            if (r.data && r.data.textalive) {
                if (r.source.postMessage("close", r.origin), r.data.merge) return t.getMergingUsers().then(function(e) {
                    for(var r = e[0], n = e[1], i = 0, o = t.listeners; i < o.length; i++){
                        var s = o[i];
                        s.onUserMergeRequired && s.onUserMergeRequired(r, n);
                    }
                }).catch(function() {}), void window.removeEventListener("message", e);
                t.doGetProfile(), window.removeEventListener("message", e);
            }
        };
        window.addEventListener("message", e);
    }, t.prototype.getToken = function() {
        return y(this, void 0, void 0, function() {
            return v(this, function(t) {
                return this.userProfile ? [
                    2,
                    this.userProfile.status.token
                ] : this.token ? [
                    2,
                    this.token
                ] : [
                    2,
                    this.doGetToken()
                ];
            });
        });
    }, t.prototype.doGetToken = function() {
        var t;
        return y(this, void 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            m(this.endpoint + "profile/token", null, {
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return e = r.sent(), (null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.token) && (this.token = e.data.token), [
                            2,
                            this.token
                        ];
                }
            });
        });
    }, t;
}()), x = new (function() {
    function t() {}
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return g.textalive.server + "/text-parser/";
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.parse = function(t) {
        return y(this, void 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            T.getToken()
                        ];
                    case 1:
                        return e = n.sent(), [
                            4,
                            w(this.endpoint, {
                                text: t
                            }, {
                                postToken: e,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (r = n.sent()) && 200 === r.status ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t;
}()), A = new (function() {
    function t() {}
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return g.content.server + "/fonts";
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.listAvailableFonts = function() {
        return y(this, void 0, void 0, function() {
            var t = this;
            return v(this, function(e) {
                switch(e.label){
                    case 0:
                        return this.data ? [
                            3,
                            2
                        ] : [
                            4,
                            this.fetchInfo()
                        ];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return this.data && this.data.fontFamilies ? [
                            2,
                            Object.keys(this.data.fontFamilies).map(function(e) {
                                return f({
                                    key: e
                                }, t.data.fontFamilies[e]);
                            })
                        ] : [
                            2,
                            []
                        ];
                }
            });
        });
    }, t.prototype.getFrequentChars = function() {
        return y(this, void 0, void 0, function() {
            return v(this, function(t) {
                switch(t.label){
                    case 0:
                        return this.data ? [
                            3,
                            2
                        ] : [
                            4,
                            this.fetchInfo()
                        ];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [
                            2,
                            this.data && this.data.frequentChars || ""
                        ];
                }
            });
        });
    }, t.prototype.fetchInfo = function() {
        return y(this, void 0, void 0, function() {
            var t, e, r, n;
            return v(this, function(i) {
                switch(i.label){
                    case 0:
                        return [
                            4,
                            m(this.endpoint + "/index.json")
                        ];
                    case 1:
                        if (!(t = i.sent()) || 200 !== t.status || !t.data) return this.data = null, [
                            2,
                            null
                        ];
                        for(r in this.data = t.data, e = this.data.fontUrlPrefix, this.data.fontFamilies)(n = this.data.fontFamilies[r]).typesquare || n.typekit || n.google || n.url || (n.url = e + "/" + r + "-all.css", n.compactUrl = e + "/" + r + ".css");
                        return [
                            2
                        ];
                }
            });
        });
    }, t;
}());
var R = new RegExp("\\b([CDEFGAB](?:b|bb)*(?:#|##|sus|maj|min|aug|m|M)*[\\d/]*(?:[CDEFGAB](?:b|bb)*(?:#|##|sus|maj|min|aug|m|M)*[\\d/]*)*\\-){2}");
function C(t, e, r) {
    return !R.test(t) && !t.match(/[（(].+(?:転載|書き起こし).*[）)]/) && (!t.match(/(作詞|作曲).+(作詞|作曲)/) || 0 !== e && e !== r.length - 2);
}
function N(t) {
    return !t.match(new RegExp("[\uFF08(]?\u203B"));
}
var k = {}, j = {}, I = function() {
    function t() {}
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return g.songle.server + "/lyrics/";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "localLyricsEndpoint", {
        get: function() {
            return g.textalive.server + "/etc/lyrics";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "timingEndpoint", {
        get: function() {
            return g.songle.server + "/songs/";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lyricsParserEndpoint", {
        get: function() {
            return g.songle.server;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lyricsPostEndpoint", {
        get: function() {
            return g.songle.server;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isUploaderUrl = function(t) {
        return c(t);
    }, t.prototype.parseUploaderUrl = function(t) {
        return p(t);
    }, t.prototype.getRecentlySynchronizedCount = function() {
        return y(this, void 0, void 0, function() {
            var t;
            return v(this, function(e) {
                switch(e.label){
                    case 0:
                        return [
                            4,
                            m(this.endpoint + "recently_synchronized_count.json")
                        ];
                    case 1:
                        return (t = e.sent()) && 200 === t.status && t.data ? [
                            2,
                            t.data.count
                        ] : [
                            2,
                            -1
                        ];
                }
            });
        });
    }, t.prototype.getRecentlySynchronizedList = function(t, e) {
        return void 0 === t && (t = 1), y(this, void 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            m(this.endpoint + "recently_synchronized.json", f({
                                page: t
                            }, e))
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.load = function(t) {
        return y(this, void 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            m(this.timingEndpoint + t + "/lyrics.json")
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadDetail = function(t, e) {
        return y(this, void 0, void 0, function() {
            var r, n;
            return v(this, function(i) {
                switch(i.label){
                    case 0:
                        return k[t] && k[t][e] ? [
                            2,
                            k[t][e]
                        ] : [
                            4,
                            m(this.timingEndpoint + t + "/lyrics/" + (e < 0 ? "latest" : e) + ".json")
                        ];
                    case 1:
                        return (r = i.sent()) && 200 === r.status ? (n = r.data, k[t] || (k[t] = {}), k[t][n.id] = n, e < 0 && (k[t][-1] = n), [
                            2,
                            n
                        ]) : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadDiffs = function(t, e) {
        return y(this, void 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            m(this.timingEndpoint + t + "/lyrics/" + e + "/diffs.json")
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadDiff = function(t, e, r) {
        return y(this, void 0, void 0, function() {
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            m(this.timingEndpoint + t + "/lyrics/" + e + (r < 0 ? "" : 0 === r ? "/original" : "/diffs/" + r + "/lyrics") + ".json")
                        ];
                    case 1:
                        return [
                            2,
                            n.sent().data
                        ];
                }
            });
        });
    }, t.prototype.loadAllRevisionsForSong = function(t) {
        return y(this, void 0, void 0, function() {
            var e, r, n, i, o, s, a, u, l, c;
            return v(this, function(p) {
                switch(p.label){
                    case 0:
                        return [
                            4,
                            this.load(t)
                        ];
                    case 1:
                        if (!(e = p.sent())) return [
                            2,
                            null
                        ];
                        r = [], n = 0, i = e.lyrics, p.label = 2;
                    case 2:
                        return n < i.length ? (o = i[n], [
                            4,
                            this.loadDetail(t, o.id)
                        ]) : [
                            3,
                            6
                        ];
                    case 3:
                        return s = p.sent(), [
                            4,
                            this.loadDiffs(t, s.id)
                        ];
                    case 4:
                        if (a = p.sent(), r.push({
                            lyrics: s,
                            updated_at: new Date(s.created_at)
                        }), Array.isArray(a)) for(u = 0, l = a; u < l.length; u++)c = l[u], r.push({
                            diff_id: c.id,
                            source_id: c.source_id,
                            lyrics: s,
                            updated_at: new Date(c.updated_at)
                        });
                        p.label = 5;
                    case 5:
                        return n++, [
                            3,
                            2
                        ];
                    case 6:
                        return [
                            2,
                            r.sort(function(t, e) {
                                var r = e.updated_at.getTime() - t.updated_at.getTime();
                                return 0 === r ? e.diff_id - t.diff_id : r;
                            })
                        ];
                }
            });
        });
    }, t.prototype.getLatestRevision = function(t) {
        return t.filter(function(t) {
            return !(t.lyrics.processing || t.lyrics.failed);
        })[0];
    }, t.prototype.fetchLocalLyricBody = function(t) {
        return y(this, void 0, void 0, function() {
            var e, r, n, i;
            return v(this, function(o) {
                switch(o.label){
                    case 0:
                        return this.verbose && ("string" == typeof t ? console.log("load locally-stored lyrics for song code", t) : console.log("load locally-stored lyrics for lyric id", t)), e = {}, "string" == typeof t ? e.code = t : e.lyricId = t, [
                            4,
                            m(this.localLyricsEndpoint + "/token", e)
                        ];
                    case 1:
                        return !(r = o.sent()) || 200 !== r.status || r.data.error ? [
                            2,
                            null
                        ] : (n = r.data.token, e.token = n, [
                            4,
                            m(this.localLyricsEndpoint, e)
                        ]);
                    case 2:
                        return (i = o.sent()) && 200 === i.status ? (this.verbose && console.log("loaded locally-stored lyrics with params", e), [
                            2,
                            i.data
                        ]) : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.fetchSongleLyricBody = function(t, e) {
        return y(this, void 0, void 0, function() {
            var r, n, i, o, s, a, u, l, c, p, h;
            return v(this, function(d) {
                switch(d.label){
                    case 0:
                        if (!(r = this.parseUploaderUrl(t)).identifier) throw new Error("unsupported lyrics url " + t);
                        return [
                            4,
                            T.getProfile()
                        ];
                    case 1:
                        if (n = d.sent(), !T.isSongleUser(n)) throw new Error("Songle authentication is required");
                        return j[i = t + "//" + e] ? [
                            2,
                            j[i]
                        ] : (T.isSpoofingSongleUser(n) && (s = n.user, a = s.songleUserId, u = s.songleAccessToken, l = s.songleRefreshToken, o = {
                            songleUserId: a,
                            songleAccessToken: u,
                            songleRefreshToken: l
                        }), [
                            4,
                            m(g.textalive.server + "/songle/users/" + r.user + "/uploads/" + r.identifier, o, {
                                withCredentials: !0,
                                responseType: "text"
                            })
                        ]);
                    case 2:
                        return c = d.sent(), p = null == c ? void 0 : c.data, h = p ? {
                            text: p,
                            url: t
                        } : null, p && (j[i] = h), [
                            2,
                            h
                        ];
                }
            });
        });
    }, t.prototype.fetchPiaproLyricBody = function(t, e) {
        return y(this, void 0, void 0, function() {
            var r, n, i, o, s;
            return v(this, function(a) {
                switch(a.label){
                    case 0:
                        if (!u.isPiaproUrl(t)) throw new Error("unsupported lyrics url " + t);
                        return j[r = t + "//" + e] ? [
                            2,
                            j[r]
                        ] : [
                            4,
                            _.read(t, !0)
                        ];
                    case 1:
                        if (n = a.sent(), !_.isPiaproAsset(n)) throw new Error("unsupported piapro lyrics url " + t);
                        return i = E(n.contentUrl), [
                            4,
                            this.parseLyricBody(i, e)
                        ];
                    case 2:
                        return o = a.sent(), (s = o ? {
                            text: o,
                            artist: {
                                name: n.authorName,
                                url: n.authorPath ? "https://piapro.jp" + n.authorPath : null
                            },
                            name: n.name,
                            url: t
                        } : null) && (j[r] = s), [
                            2,
                            s
                        ];
                }
            });
        });
    }, t.prototype.fetchInternalLyricBody = function(t, e) {
        return y(this, void 0, void 0, function() {
            var r;
            return v(this, function(n) {
                if (r = new URL(t), "undefined" == typeof location || location.protocol !== r.protocol || location.hostname !== r.hostname) throw new Error("direct access not supported for lyrics url " + t);
                return [
                    2,
                    this.fetchCrossOriginLyricBody(t, e)
                ];
            });
        });
    }, t.prototype.fetchCrossOriginLyricBody = function(t, e) {
        return y(this, void 0, void 0, function() {
            var r, n, i, o, s;
            return v(this, function(a) {
                switch(a.label){
                    case 0:
                        return j[r = t + "//" + e] ? [
                            2,
                            j[r]
                        ] : [
                            4,
                            m(t, null, {
                                responseType: "text"
                            })
                        ];
                    case 1:
                        return n = a.sent(), i = null == n ? void 0 : n.data, n && 200 === n.status && i ? [
                            4,
                            this.parseLyricBody(i, e)
                        ] : (this.verbose && console.error("direct access not supported for lyrics url " + t), [
                            2,
                            this.fetchProxiedLyricBody(t, e)
                        ]);
                    case 2:
                        return o = a.sent(), (s = o ? {
                            text: o,
                            url: t
                        } : null) && (j[r] = s), [
                            2,
                            s
                        ];
                }
            });
        });
    }, t.prototype.fetchProxiedLyricBody = function(t, e) {
        return y(this, void 0, void 0, function() {
            var r, n, i;
            return v(this, function(o) {
                switch(o.label){
                    case 0:
                        return j[r = t + "//" + e] ? [
                            2,
                            j[r]
                        ] : (this.verbose && console.log("load lyrics from the external server", t), [
                            4,
                            U(this.lyricsParserEndpoint + e, function(e) {
                                return new Promise(function(r, n) {
                                    e.Songle.Utils.url2Lyric(t, function(t) {
                                        return r(t);
                                    }, function(t) {
                                        return n(t);
                                    });
                                });
                            }, this.verbose)
                        ]);
                    case 1:
                        return n = o.sent(), (i = n ? {
                            text: n,
                            url: t
                        } : null) && (j[r] = i), [
                            2,
                            i
                        ];
                }
            });
        });
    }, t.prototype.parseLyricBody = function(t, e) {
        return y(this, void 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return n.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]), [
                            4,
                            U(this.lyricsParserEndpoint + e, function(e) {
                                return e.Songle.Utils.parseLyric(t);
                            }, this.verbose)
                        ];
                    case 1:
                        return r = n.sent(), [
                            3,
                            3
                        ];
                    case 2:
                        return n.sent(), r = function(t) {
                            return function(t) {
                                return t = function(t) {
                                    var e, r = t.split(/\n/);
                                    return r.forEach(function(t, r) {
                                        t.match(/^\S+：\S+$/m) && (e = r);
                                    }), void 0 !== e && e < 5 ? r.slice(e + 1).join("\n") : t;
                                }(t), (t = function(t) {
                                    var e = new RegExp("[\\u4E00-\\u9FAF|\\uFF66-\\uFF9D|\\u31F0-\\u31FF]+[\uFF08\\(]([\\u3041-\\u3096\\u309D-\\u309F]+)[\\)\uFF09]", "g");
                                    return t.replace(e, function(t, e) {
                                        return e;
                                    });
                                }(t = function(t) {
                                    for(var e, r, n, i, o, s = new RegExp("[\uFF08(]?(.)\u7E70\u308A\u8FD4\u3057[)\uFF09]?", "g"); null !== (r = s.exec(t));)n = r[1], i = new RegExp("^(" + n + "[\\s\\S]+?)(?=\\n\\n[^\\u3000|\\s])", "m"), null !== (o = t.match(i)) && (e = o[1].replace(new RegExp("^" + n, "m"), "").replace(new RegExp("^\\n"), "").replace(new RegExp("^\\u3000", "mg"), ""), t = (t = t.replace(i, function() {
                                        return e;
                                    })).replace(new RegExp("[\uFF08\\(]?" + n + "\u7E70\u308A\u8FD4\u3057[\\)\uFF09]?", "g"), e).replace(new RegExp("^" + n, "m"), ""));
                                    return t;
                                }(t = t.split(/\n/).filter(C).join("\n")))).split(/\n/).filter(N).join("\n").replace(/\n\n+/g, "\n\n").replace(/\n+$/g, "\n");
                            }(t.replace(/^\ufeff/, "").replace(/\r/, "").split(/\n/).filter(C).filter(function(t) {
                                return !t.match(/^#/);
                            }).join("\n").replace(/^\s+/, ""));
                        }(t), [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2,
                            r
                        ];
                }
            });
        });
    }, t.prototype.fetchLyricBody = function(t, e) {
        var r, n, i = e.parserPath, o = e.directAccess;
        return y(this, void 0, void 0, function() {
            var e, s;
            return v(this, function(a) {
                switch(a.label){
                    case 0:
                        if (P(t)) return this.verbose && console.log("load lyrics from the data url", t), [
                            2,
                            {
                                text: E(t)
                            }
                        ];
                        if (this.isUploaderUrl(t)) return [
                            2,
                            this.fetchSongleLyricBody(t, i)
                        ];
                        if (u.isPiaproUrl(t)) return [
                            2,
                            this.fetchPiaproLyricBody(t, i)
                        ];
                        a.label = 1;
                    case 1:
                        return a.trys.push([
                            1,
                            5,
                            ,
                            6
                        ]), e = new URL(t), o || "undefined" != typeof location && location.protocol !== e.protocol && "https:" !== e.protocol ? [
                            3,
                            4
                        ] : "undefined" != typeof location && location.hostname !== e.hostname ? [
                            3,
                            2
                        ] : (o = !0, [
                            3,
                            4
                        ]);
                    case 2:
                        return [
                            4,
                            m(this.localLyricsEndpoint + "/cors", {
                                url: t
                            })
                        ];
                    case 3:
                        s = a.sent(), o = s && 200 === s.status && (null === (n = null === (r = s.data) || void 0 === r ? void 0 : r.data) || void 0 === n ? void 0 : n.enabled), a.label = 4;
                    case 4:
                        return o ? (this.verbose && console.log("load lyrics directly", t), [
                            2,
                            this.fetchCrossOriginLyricBody(t, i)
                        ]) : [
                            3,
                            6
                        ];
                    case 5:
                        return a.sent(), [
                            3,
                            6
                        ];
                    case 6:
                        return [
                            2,
                            this.fetchProxiedLyricBody(t, i)
                        ];
                }
            });
        });
    }, t.prototype.post = function(t) {
        return y(this, void 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return e = t.forceUpdate ? {
                            url: t.lyricsUrl,
                            force_create: "true"
                        } : {
                            url: t.lyricsUrl
                        }, [
                            4,
                            w(this.lyricsPostEndpoint + "/songs/" + t.songId + "/lyrics.json", e)
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status && r.data ? [
                            2,
                            {
                                success: !0,
                                lyricsId: r.data.id
                            }
                        ] : [
                            2,
                            {
                                success: !1,
                                error: "failed to update lyrics url"
                            }
                        ];
                }
            });
        });
    }, t.prototype.postPrivate = function(t) {
        return y(this, void 0, void 0, function() {
            var e, r, n, i, o, s, a, u, l, c, p;
            return v(this, function(h) {
                switch(h.label){
                    case 0:
                        return [
                            4,
                            T.getProfile()
                        ];
                    case 1:
                        if (e = h.sent(), !T.isSongleUser(e)) throw new Error("Songle authentication is required");
                        return T.isSpoofingSongleUser(e) ? (n = e.user, i = n.songleUserId, o = n.songleAccessToken, s = n.songleRefreshToken, a = {
                            songleUserId: i,
                            songleAccessToken: o,
                            songleRefreshToken: s
                        }, r = "?" + Object.keys(a).map(function(t) {
                            return t + "=" + encodeURIComponent(a[t]);
                        }).join("&")) : r = "", u = t.songId, l = t.lyricsText, (c = new FormData).append("text", l), [
                            4,
                            w(g.textalive.server + "/songle/me/songs/" + u + "/lyrics.json" + r, c, {
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (p = h.sent()) && 200 === p.status && p.data ? [
                            2,
                            {
                                success: !0,
                                lyrics: p.data.data.lyric
                            }
                        ] : [
                            2,
                            {
                                success: !1,
                                error: "failed to post lyrics text"
                            }
                        ];
                }
            });
        });
    }, t.prototype.update = function(t) {
        var e;
        return y(this, void 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            w(this.lyricsPostEndpoint + "/songs/" + t.songCode + "/lyrics/" + t.lyricsId + "/diffs.json", t.lyricsData ? {
                                lyric: JSON.stringify(t.lyricsData)
                            } : {
                                source_diff_id: t.lyricsDiffId
                            })
                        ];
                    case 1:
                        return r = n.sent(), [
                            2,
                            (null === (e = null == r ? void 0 : r.data) || void 0 === e ? void 0 : e.lyric_diff) ? {
                                success: 200 === r.status,
                                lyricsId: r.data.lyric_diff.lyric_id,
                                lyricsDiffId: r.data.lyric_diff.id
                            } : {
                                success: 200 === r.status
                            }
                        ];
                }
            });
        });
    }, t;
}();
function U(t, e, r) {
    var n, i = this;
    return "undefined" == typeof window || !(null === (n = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === n ? void 0 : n.userAgent) || window.navigator.userAgent.includes("Node.js") || window.navigator.userAgent.includes("jsdom") ? function(t, e, r) {
        return r && console.log("parse lyrics: loading on Node.js", t), new Promise(function(r, n) {
            m(t, {
                responseType: "text"
            }).then(function(t) {
                var i = t.data, o = new Function("let g=global;global={};" + i + ";let res=global;global=g"), s = {};
                try {
                    o.bind(s)(), r(e(s));
                } catch (t) {
                    n(t);
                }
            }).catch(n);
        });
    }(t, e, r) : (r && console.log("parse lyrics: loading", t), new Promise(function(n, o) {
        try {
            var s = document.createElement("script"), a = null;
            window.module && (a = window.module, delete window.module), s.src = t, s.onload = function() {
                return y(i, void 0, void 0, function() {
                    var i, u;
                    return v(this, function(l) {
                        switch(l.label){
                            case 0:
                                document.body.removeChild(s), r && console.log("parse lyrics: load", t), window.Songle && window.Songle.Utils && window.Songle.Utils.url2Lyric || (a && (window.module = a), o("url2Lyric not found")), l.label = 1;
                            case 1:
                                return l.trys.push([
                                    1,
                                    3,
                                    4,
                                    5
                                ]), i = n, [
                                    4,
                                    e(window)
                                ];
                            case 2:
                                return i.apply(void 0, [
                                    l.sent()
                                ]), [
                                    3,
                                    5
                                ];
                            case 3:
                                return u = l.sent(), o(u), [
                                    3,
                                    5
                                ];
                            case 4:
                                return a && (window.module = a), [
                                    7
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }, s.onerror = function(t) {
                return o(t.message);
            }, document.body.appendChild(s);
        } catch (e) {
            console.error("failed to call lyrics parser", t, e);
        }
    }));
}
var F = new I, L = {}, D = {}, M = new (function() {
    function t() {}
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return g.textalive.server;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "songleEndpoint", {
        get: function() {
            return g.songle.server;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.getSongPathFromUrl = function(t) {
        return u.getSongPathFromUrl(t);
    }, t.prototype.isUploaderUrl = function(t) {
        return u.isUploaderUrl(t);
    }, t.prototype.isUploaderPath = function(t) {
        return u.isUploaderPath(t);
    }, t.prototype.getUploaderGuid = function(t) {
        return u.getUploaderGuid(t);
    }, t.prototype.getAltSongUrlFromUploaderGuid = function(t) {
        return u.getAltSongUrlFromUploaderGuid(t);
    }, t.prototype.getSongUrlFromUploaderGuid = function(t) {
        return u.getSongUrlFromUploaderGuid(t);
    }, t.prototype.getSongUrlFromPath = function(t) {
        return u.getSongUrlFromPath(t);
    }, t.prototype.isYouTubeUrl = function(t) {
        return u.isYouTubeUrl(t);
    }, t.prototype.isNicovideoUrl = function(t) {
        return u.isNicovideoUrl(t);
    }, t.prototype.isVideoSiteUrl = function(t) {
        return u.isVideoSiteUrl(t);
    }, t.prototype.isPiaproUrl = function(t) {
        return u.isPiaproUrl(t);
    }, t.prototype.load = function(t) {
        return y(this, void 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return e = t.code || "number" == typeof t.id && String(t.id) || encodeURIComponent(t.songPath), L[e] ? [
                            2,
                            L[e]
                        ] : (L[e] = this.doLoad(e), [
                            4,
                            L[e]
                        ]);
                    case 1:
                        return r = n.sent(), this.use(r), [
                            2,
                            r
                        ];
                }
            });
        });
    }, t.prototype.use = function(t) {
        if (t) {
            var e = String(t.song.id), r = t.song.code, n = this.getSongPathFromUrl(t.song.permalink);
            L[e] = L[r] = L[n] = Promise.resolve(t);
        }
    }, t.prototype.clearCache = function() {
        L = {}, D = {};
    }, t.prototype.doLoad = function(t) {
        var e;
        return y(this, void 0, void 0, function() {
            var r, n, i;
            return v(this, function(o) {
                switch(o.label){
                    case 0:
                        return [
                            4,
                            m(this.songleEndpoint + "/songs/" + t + "?format=json")
                        ];
                    case 1:
                        return (r = o.sent()) && 200 === r.status ? (n = r.data, this.isUploaderUrl(null === (e = null == n ? void 0 : n.song) || void 0 === e ? void 0 : e.permalink) ? [
                            4,
                            this.doLoadPrivateSong(n.song.id)
                        ] : [
                            3,
                            3
                        ]) : [
                            2,
                            null
                        ];
                    case 2:
                        if (i = o.sent()) return n.status = n.status || {}, n.status.owner = !0, [
                            2,
                            f(f({}, n), {
                                song: i
                            })
                        ];
                        n.status = n.status || {}, n.status.owner = !1, o.label = 3;
                    case 3:
                        return [
                            2,
                            n
                        ];
                }
            });
        });
    }, t.prototype.doLoadPrivateSong = function(t) {
        var e, r;
        return y(this, void 0, void 0, function() {
            var n, i, o, s, a, u, l;
            return v(this, function(c) {
                switch(c.label){
                    case 0:
                        return [
                            4,
                            T.getProfile()
                        ];
                    case 1:
                        return n = c.sent(), T.isSongleUser(n) ? (T.isSpoofingSongleUser(n) && (o = n.user, s = o.songleUserId, a = o.songleAccessToken, u = o.songleRefreshToken, i = {
                            songleUserId: s,
                            songleAccessToken: a,
                            songleRefreshToken: u
                        }), [
                            4,
                            m(this.endpoint + "/songle/me/songs/" + t + ".json", i, {
                                withCredentials: !0
                            })
                        ]) : [
                            2,
                            null
                        ];
                    case 2:
                        return (l = c.sent()) && 200 === l.status && (null === (r = null === (e = l.data) || void 0 === e ? void 0 : e.data) || void 0 === r ? void 0 : r.song) ? [
                            2,
                            l.data.data.song
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadInfo = function(t, e) {
        return y(this, void 0, void 0, function() {
            var r;
            return v(this, function(n) {
                return r = this.cacheKey(t, e), D[r] || (D[r] = this.doLoadInfo(t, {
                    min: !0,
                    revisions: null == e ? void 0 : e.revisions
                })), [
                    2,
                    D[r]
                ];
            });
        });
    }, t.prototype.loadDetailInfo = function(t, e) {
        return y(this, void 0, void 0, function() {
            var r;
            return v(this, function(n) {
                return r = this.cacheKey(t, e) + "/dt", D[r] || (D[r] = this.doLoadInfo(t, {
                    min: !1,
                    revisions: null == e ? void 0 : e.revisions
                })), [
                    2,
                    D[r]
                ];
            });
        });
    }, t.prototype.cacheKey = function(t, e) {
        var r = String(t);
        return (null == e ? void 0 : e.revisions) && ("number" == typeof e.revisions.chord && (r += "/cd" + e.revisions.chord), "number" == typeof e.revisions.beat && (r += "/bt" + e.revisions.beat), "number" == typeof e.revisions.chorus && (r += "/cr" + e.revisions.chorus)), r;
    }, t.prototype.doLoadInfo = function(t, e) {
        var r = void 0 === e ? {
            min: !0
        } : e, n = r.min, i = r.revisions;
        return y(this, void 0, void 0, function() {
            var e, r;
            return v(this, function(o) {
                switch(o.label){
                    case 0:
                        return e = {
                            min: n ? 1 : 0
                        }, "number" == typeof (null == i ? void 0 : i.chord) && (e.chord_revision_id = i.chord), "number" == typeof (null == i ? void 0 : i.beat) && (e.beat_revision_id = i.beat), "number" == typeof (null == i ? void 0 : i.chorus) && (e.chorus_revision_id = i.chorus), [
                            4,
                            m(this.songleEndpoint + "/songs/" + t + "/info.json", e)
                        ];
                    case 1:
                        return (r = o.sent()) && 200 === r.status ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadVocalAmplitude = function(t) {
        return y(this, void 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            m(this.songleEndpoint + "/songs/" + t + "/vamplitude.json")
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status && e.data ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadValenceArousal = function(t) {
        return y(this, void 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            m(this.songleEndpoint + "/songs/" + t + "/av.json")
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status && e.data ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.list = function(t) {
        return y(this, void 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return void 0 === t && (t = {}), [
                            4,
                            m(this.endpoint + "/songs", t)
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.listPrivate = function() {
        return y(this, void 0, void 0, function() {
            var t, e, r, n, i, o, s;
            return v(this, function(a) {
                switch(a.label){
                    case 0:
                        return [
                            4,
                            T.getProfile()
                        ];
                    case 1:
                        return t = a.sent(), T.isSongleUser(t) ? (T.isSpoofingSongleUser(t) && (r = t.user, n = r.songleUserId, i = r.songleAccessToken, o = r.songleRefreshToken, e = {
                            songleUserId: n,
                            songleAccessToken: i,
                            songleRefreshToken: o
                        }), [
                            4,
                            m(this.endpoint + "/songle/me/songs.json", f(f({}, e), {
                                private: !0
                            }), {
                                withCredentials: !0
                            })
                        ]) : [
                            2,
                            {
                                data: null,
                                error: "Songle authentication is required"
                            }
                        ];
                    case 2:
                        return (s = a.sent()) && 200 === s.status ? [
                            2,
                            s.data
                        ] : [
                            2,
                            {
                                data: null,
                                error: "private songs not found"
                            }
                        ];
                }
            });
        });
    }, t.prototype.create = function(t) {
        return y(this, void 0, void 0, function() {
            return v(this, function(e) {
                return [
                    2,
                    this.doCreate(t, !1)
                ];
            });
        });
    }, t.prototype.createPrivate = function(t) {
        return y(this, void 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            T.getProfile()
                        ];
                    case 1:
                        return e = r.sent(), T.isSongleUser(e) ? [
                            2,
                            this.doCreate(t, !0)
                        ] : [
                            2,
                            {
                                success: !1,
                                song: null,
                                error: "Songle authentication is required"
                            }
                        ];
                }
            });
        });
    }, t.prototype.doCreate = function(t, e) {
        var r, n;
        return y(this, void 0, void 0, function() {
            var i, o, s, a, u;
            return v(this, function(l) {
                switch(l.label){
                    case 0:
                        return i = t.url, o = t.name, s = t.artistName, [
                            4,
                            T.getToken()
                        ];
                    case 1:
                        return a = l.sent(), [
                            4,
                            w(e ? this.endpoint + "/etc/songs/private" : this.endpoint + "/etc/songs", {
                                url: i,
                                name: o,
                                artist: s
                            }, {
                                postToken: a,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (u = l.sent()) && 200 === u.status ? e ? [
                            2,
                            {
                                success: !0,
                                song: u.data.data.song
                            }
                        ] : [
                            2,
                            {
                                success: !0,
                                song: u.data.song
                            }
                        ] : [
                            2,
                            {
                                success: !1,
                                error: ((null === (r = null == u ? void 0 : u.data) || void 0 === r ? void 0 : r.data) ? u.data.data.message : null === (n = null == u ? void 0 : u.data) || void 0 === n ? void 0 : n.message) || "failed to register a song"
                            }
                        ];
                }
            });
        });
    }, t.prototype.uploadPrivate = function(t) {
        return y(this, void 0, void 0, function() {
            var e, r, n, i, o, s, a, u, l;
            return v(this, function(c) {
                switch(c.label){
                    case 0:
                        return [
                            4,
                            T.getProfile()
                        ];
                    case 1:
                        if (e = c.sent(), !T.isSongleUser(e)) throw new Error("Songle authentication is required");
                        return T.isSpoofingSongleUser(e) ? (n = e.user, i = n.songleUserId, o = n.songleAccessToken, s = n.songleRefreshToken, a = {
                            songleUserId: i,
                            songleAccessToken: o,
                            songleRefreshToken: s
                        }, r = "?" + Object.keys(a).map(function(t) {
                            return t + "=" + encodeURIComponent(a[t]);
                        }).join("&")) : r = "", (u = new FormData).append("file", t), [
                            4,
                            w(this.endpoint + "/songle/me/uploads.json" + r, u, {
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (l = c.sent()) && 200 === l.status && l.data ? [
                            2,
                            l.data.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.search = function(t, e) {
        return void 0 === e && (e = !0), y(this, void 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            m(this.songleEndpoint + "/songs/search.json", {
                                q: t,
                                lyrics: e ? 1 : 0
                            })
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status && r.data ? [
                            2,
                            {
                                success: !0,
                                data: r.data
                            }
                        ] : [
                            2,
                            {
                                success: !1
                            }
                        ];
                }
            });
        });
    }, t.prototype.copySongMap = function(t) {
        var e;
        return y(this, void 0, void 0, function() {
            var r, n, i, o;
            return v(this, function(s) {
                switch(s.label){
                    case 0:
                        return r = t.sourceId, n = t.destinationId, i = t.types || [
                            "beat",
                            "chord",
                            "chorus",
                            "melody"
                        ], [
                            4,
                            w(this.endpoint + "/songle/me/songs/" + n + "/actions/copy_music_map.json", {
                                source_id: r,
                                types: i
                            }, {
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return (o = s.sent()) && (null === (e = o.data) || void 0 === e ? void 0 : e.success) ? [
                            2,
                            {
                                success: !0
                            }
                        ] : [
                            2,
                            {
                                success: !1,
                                error: null == o ? void 0 : o.data
                            }
                        ];
                }
            });
        });
    }, t.prototype.createStage = function() {
        var t;
        return y(this, void 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            T.getProfile()
                        ];
                    case 1:
                        return e = n.sent(), [
                            4,
                            w(this.endpoint + "/etc/songs/stage", null, {
                                postToken: null === (t = null == e ? void 0 : e.status) || void 0 === t ? void 0 : t.token,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return [
                            2,
                            (null == (r = n.sent()) ? void 0 : r.data) || null
                        ];
                }
            });
        });
    }, t;
}()), B = function() {
    function t() {}
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return g.textalive.server + "/templates/";
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.list = function(t) {
        return y(this, void 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            m("" + this.endpoint, t)
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.load = function(t) {
        return y(this, void 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            m("" + (this.endpoint + t))
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadByName = function(t) {
        return y(this, void 0, void 0, function() {
            var e, r, n;
            return v(this, function(i) {
                switch(i.label){
                    case 0:
                        return r = "latest", t && (e = t.match(/(.+)@([0-9]+)/)) && (t = e[1], r = e[2]), [
                            4,
                            m(this.endpoint + t + "/" + r)
                        ];
                    case 1:
                        return (n = i.sent()) && 200 === n.status ? [
                            2,
                            n.data
                        ] : "latest" !== r ? [
                            2,
                            this.loadByName(t)
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadForVideo = function(t, e) {
        return void 0 === e && (e = {
            script: !0,
            withoutAuthors: !0
        }), y(this, void 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            m(this.endpoint + "for/" + t, e)
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.create = function(t) {
        return y(this, void 0, void 0, function() {
            var e, r, n;
            return v(this, function(i) {
                switch(i.label){
                    case 0:
                        return [
                            4,
                            T.getToken()
                        ];
                    case 1:
                        return e = i.sent(), [
                            4,
                            w(this.endpoint, t, {
                                postToken: e,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (r = i.sent()) ? 200 !== r.status || Array.isArray(r.data) || r.data.error ? (n = Array.isArray(r.data) ? {
                            parseErrors: r.data
                        } : r.data, [
                            2,
                            f(f({}, n), {
                                success: !1
                            })
                        ]) : [
                            2,
                            f(f({}, r.data), {
                                success: !0
                            })
                        ] : [
                            2,
                            {
                                success: !1
                            }
                        ];
                }
            });
        });
    }, t.prototype.listContributors = function(t, e) {
        return y(this, void 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            m("" + this.endpoint + t + "/" + e + "/contributors")
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t;
}(), V = new B, G = new (function() {
    function t() {}
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return g.textalive.server + "/videos/";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rendererEndpoint", {
        get: function() {
            return g.textalive.server + "/renderer/";
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.list = function(t) {
        return y(this, void 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            m("" + this.endpoint, t)
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.load = function(t) {
        return y(this, void 0, void 0, function() {
            var e, r, n, i, o, s, a;
            return v(this, function(u) {
                switch(u.label){
                    case 0:
                        return e = {}, [
                            4,
                            T.getProfile()
                        ];
                    case 1:
                        return r = u.sent(), T.isSpoofingSongleUser(r) && (n = r.user, i = n.songleUserId, o = n.songleAccessToken, s = n.songleRefreshToken, e = {
                            songleUserId: i,
                            songleAccessToken: o,
                            songleRefreshToken: s
                        }), [
                            4,
                            m("" + (this.endpoint + t), e, {
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (a = u.sent()) && 200 === a.status ? [
                            2,
                            a.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.create = function(t) {
        return y(this, void 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            T.getToken()
                        ];
                    case 1:
                        return e = n.sent(), [
                            4,
                            w(this.endpoint, t, {
                                postToken: e,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (r = n.sent()) ? 200 !== r.status || r.data.error ? [
                            2,
                            f(f({}, r.data), {
                                success: !1
                            })
                        ] : [
                            2,
                            f(f({}, r.data), {
                                success: !0
                            })
                        ] : [
                            2,
                            {
                                success: !1
                            }
                        ];
                }
            });
        });
    }, t.prototype.delete = function(t) {
        return y(this, void 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            T.getToken()
                        ];
                    case 1:
                        return e = n.sent(), [
                            4,
                            w(this.endpoint + "delete", {
                                id: t
                            }, {
                                postToken: e,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (r = n.sent()) && 200 === r.status ? [
                            2,
                            {
                                success: !0,
                                video: r.data
                            }
                        ] : [
                            2,
                            {
                                success: !1,
                                video: null
                            }
                        ];
                }
            });
        });
    }, t.prototype.listContributors = function(t) {
        return y(this, void 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            m("" + this.endpoint + t + "/contributors", null, {
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.listRenderings = function(t) {
        return y(this, void 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            m(this.rendererEndpoint + "list", {
                                videoId: t
                            }, {
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.getRenderingStatus = function(t) {
        return y(this, void 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            m(this.rendererEndpoint + "status", {
                                id: t
                            }, {
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.render = function(t, e, r) {
        return y(this, void 0, void 0, function() {
            var n, i, o;
            return v(this, function(s) {
                switch(s.label){
                    case 0:
                        return [
                            4,
                            T.getToken()
                        ];
                    case 1:
                        return n = s.sent(), i = {
                            token: n,
                            videoId: t,
                            quality: e
                        }, r && (i.authentication = !0), [
                            4,
                            w(this.rendererEndpoint + "render", i, {
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (o = s.sent()) && 200 === o.status ? [
                            2,
                            o.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.getDownloadInfo = function() {
        return y(this, void 0, void 0, function() {
            var t;
            return v(this, function(e) {
                switch(e.label){
                    case 0:
                        return t = {
                            endpoint: this.rendererEndpoint + "download"
                        }, [
                            4,
                            T.getToken()
                        ];
                    case 1:
                        return [
                            2,
                            (t.token = e.sent(), t)
                        ];
                }
            });
        });
    }, t;
}()), q = {
    asset: _,
    endpoint: g,
    lyrics: F,
    song: M,
    template: V,
    text: x,
    font: A,
    user: T,
    video: G
}, W = function(t, e) {
    return W = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }, W(t, e);
};
function Y(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    function r() {
        this.constructor = t;
    }
    W(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
}
var z = function() {
    function t() {
        this._parent = null, this._children = [], this._previous = null, this._next = null, this._runtime = null, this._templates = [];
    }
    return Object.defineProperty(t.prototype, "video", {
        get: function() {
            return this.parent && this.parent.video;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        get: function() {
            return this._parent;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "children", {
        get: function() {
            return this._children;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "previous", {
        get: function() {
            return this._previous;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "next", {
        get: function() {
            return this._next;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "startTime", {
        get: function() {
            return this._data ? this._data.startTime : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "endTime", {
        get: function() {
            return this._data ? this._data.endTime : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "duration", {
        get: function() {
            return this.endTime - this.startTime;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rendering", {
        get: function() {
            return this._runtime ? this._runtime.rendering : null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "graphics", {
        get: function() {
            return this._runtime ? this._runtime.graphics : null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "templates", {
        get: function() {
            return this._templates.slice();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "templateCount", {
        get: function() {
            return this._templates.length;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.contains = function(t) {
        return t >= this.startTime && t <= this.endTime;
    }, t.prototype.overlaps = function(t, e) {
        return this.contains(t) || this.contains(e) || this.startTime <= t && this.endTime >= e;
    }, t.prototype.progress = function(t) {
        return this.contains(t) ? (t - this.startTime) / this.duration : -1;
    }, t.prototype.maximize = function() {
        var t = !1, e = this.endTime, r = Math.max(null === this._parent ? 0 : this._parent.startTime, null === this._previous ? 0 : this._previous.endTime);
        r !== this.startTime && (this.moveWithChildren(r - this.startTime), t = !0);
        var n = Math.min(null === this._parent ? this.video.duration : this._parent.endTime, null === this._next ? this.video.duration : this._next.startTime);
        return n !== this.endTime && (this._data.endTime = n, t = e !== n), t;
    }, t.prototype.moveWithChildren = function(t) {
        var e = [];
        for(e.push(this); e.length > 0;){
            var r = e.pop();
            null != r._children && r._children.forEach(function(t) {
                return e.push(t);
            }), r._data.startTime += t, r._data.endTime += t;
        }
    }, t.prototype.getTemplate = function(t) {
        return void 0 === t && (t = 0), t < 0 || t >= this._templates.length ? null : this._templates[t];
    }, t.prototype.addTemplateAt = function(t, e) {
        this._templates.splice(e, 0, t), t.assignedUnit = this;
    }, t.prototype.addTemplate = function(t) {
        this._templates.push(t), t.assignedUnit = this;
    }, t.prototype.removeTemplates = function() {
        for(var t = this._templates.slice(); this._templates.length > 0;)this._templates.pop();
        return t;
    }, t.prototype.removeTemplateAt = function(t) {
        if (t < 0 || t >= this._templates.length) return null;
        var e = this._templates.splice(t, 1)[0];
        return e.assignedUnit = null, e;
    }, t.prototype.removeTemplate = function(t) {
        for(var e = 0; e < this._templates.length; e++){
            var r = this._templates[e];
            if (r === t) return this._templates.splice(e, 1), t.assignedUnit = null, r;
        }
        return null;
    }, t.prototype.getType = function() {
        return r.NONE;
    }, t.prototype.toString = function() {
        return "RenderingUnit";
    }, t;
}();
function J(t, e) {
    return "number" == typeof e && !isNaN(e) && e > t ? e : t;
}
function H(t, e) {
    return "number" == typeof e && !isNaN(e) && e < t ? e : t;
}
var X = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Y(e, t), Object.defineProperty(e.prototype, "text", {
        get: function() {
            var t = "";
            return this.children.forEach(function(e) {
                t += e.text;
            }), t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "color", {
        get: function() {
            return this.children.reduce(function(t, e) {
                return null === t ? e.color : void 0 === t || t.eq(e.color) ? t : void 0;
            }, null);
        },
        set: function(t) {
            null !== t && this.children.forEach(function(e) {
                e.color = t;
            });
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "font", {
        set: function(t) {
            null !== t && this.children.forEach(function(e) {
                e.font = t;
            });
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontFamily", {
        get: function() {
            return this.children.reduce(function(t, e) {
                var r = e.fontFamily;
                return void 0 === t || null !== t && t !== r ? void 0 : r;
            }, null);
        },
        set: function(t) {
            this.children.forEach(function(e) {
                e.fontFamily = t;
            });
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontStyle", {
        get: function() {
            return this.children.reduce(function(t, e) {
                var r = e.fontStyle;
                return void 0 === t || null !== t && t !== r ? void 0 : r;
            }, null);
        },
        set: function(t) {
            this.children.forEach(function(e) {
                e.fontStyle = t;
            });
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontSize", {
        get: function() {
            return this.children.length <= 0 ? 0 : this.children.reduce(function(t, e) {
                return t + e.fontSize;
            }, 0) / this.children.length;
        },
        set: function(t) {
            this.children.forEach(function(e) {
                e.fontSize = t;
            });
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "advance", {
        get: function() {
            return this.children.reduce(function(t, e) {
                return t + e.advance;
            }, 0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "ascent", {
        get: function() {
            return this.children.reduce(function(t, e) {
                return Math.max(t, e.ascent);
            }, 0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "descent", {
        get: function() {
            return this.children.reduce(function(t, e) {
                return Math.max(t, e.descent);
            }, 0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "height", {
        get: function() {
            return this.ascent + this.descent;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.expandTime = function(t) {
        return {
            startTime: H(this.startTime, t.startTime),
            endTime: J(this.endTime, t.endTime)
        };
    }, e.prototype.toString = function() {
        return this.text;
    }, e;
}(z), Z = function() {
    function t(t) {
        this.a = 0, this.r = 0, this.g = 0, this.b = 0, this.from(t);
    }
    return Object.defineProperty(t.prototype, "value", {
        get: function() {
            return (((this.a << 8) + this.r << 8) + this.g << 8) + this.b;
        },
        set: function(t) {
            this.fromNumber(t, !0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rgb", {
        get: function() {
            return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rgba", {
        get: function() {
            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a / 255 + ")";
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.eq = function(e) {
        return typeof this == typeof e && e instanceof t && this.value === e.value;
    }, t.prototype.toString = function(t) {
        return void 0 === t && (t = !0), t ? this.rgba : this.rgb;
    }, t.prototype.from = function(t) {
        if (void 0 === t && (t = "#000"), "object" == typeof t) {
            if (!t) return;
            return "number" == typeof t.value ? void (this.value = t.value) : "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b ? (this.a = "number" == typeof t.a ? t.a : 255, this.r = t.r, this.g = t.g, void (this.b = t.b)) : void 0;
        }
        "string" == typeof t ? this.fromString(t) : "number" == typeof t && this.fromNumber(t);
    }, t.prototype.fromString = function(t) {
        if (t) {
            if ("#" === t.charAt(0) && (t = t.substr(1)), 4 === t.length) {
                var e = t.charAt(0), r = t.charAt(1), n = t.charAt(2), i = t.charAt(3);
                t = "" + e + e + r + r + n + n + i + i;
            }
            3 === t.length && (r = t.charAt(0), n = t.charAt(1), i = t.charAt(2), t = "" + r + r + n + n + i + i);
            var o = parseInt(t, 16);
            this.fromNumber(o, 8 === t.length);
        }
    }, t.prototype.fromNumber = function(t, e) {
        void 0 === e && (e = !0), isNaN(t) || (this.a = e ? t >> 24 & 255 : 255, this.r = t >> 16 & 255, this.g = t >> 8 & 255, this.b = 255 & t);
    }, t;
}();
var $ = function() {
    function t(t, e, r) {
        void 0 === t && (t = "Noto Sans Japanese"), void 0 === e && (e = 40), void 0 === r && (r = ""), this._family = t, this._size = e, this._style = r;
    }
    return Object.defineProperty(t.prototype, "family", {
        get: function() {
            return this._family;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this._size;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "style", {
        get: function() {
            return this._style;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.deriveFamily = function(e) {
        return new t(e, this._size, this._style);
    }, t.prototype.deriveStyle = function(e) {
        return new t(this._family, this._size, e);
    }, t.prototype.deriveSize = function(e) {
        return new t(this._family, e, this._style);
    }, t.prototype.clone = function() {
        return new t(this._family, this._size, this._style);
    }, t.prototype.eq = function(t) {
        return this._family === t._family && this._size === t._size && this._style === t._style;
    }, t.prototype.toString = function(t) {
        void 0 === t && (t = 1);
        var e, r = function(t) {
            if (!t || t.length <= 0) return [];
            for(var e = [], r = "", n = !1, i = !1, o = !1, s = 0, a = t; s < a.length; s++){
                var u = a[s];
                if (i ? o ? o = !1 : "\\" === u ? o = !0 : u === i && (i = !1) : '"' === u || "'" === u ? i = u : "," === u && (n = !0), n) {
                    var l = r.trim();
                    "" !== l && e.push(l), r = "", n = !1;
                } else r += u;
            }
            var c = r.trim();
            return "" !== c && e.push(c), e;
        }(this._family);
        return e = r.length < 1 ? "" : r.length > 1 ? " " + r.join(", ") : (e = r[0]).length > 1 && e[0] !== e[e.length - 1] || "'" !== e[0] && '"' !== e[0] ? " '" + e + "'" : " " + e, this._style + (this._style.length > 0 ? " " : "") + this._size * t + "px" + e;
    }, t;
}(), Q = function(t) {
    function e(e) {
        var r = t.call(this) || this;
        return r._data = e, r._font = new $(e && e.fontFamily, e && e.fontSize, e && e.fontStyle), r._color = new Z, r;
    }
    return Y(e, t), Object.defineProperty(e.prototype, "parent", {
        get: function() {
            return this._parent;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "previous", {
        get: function() {
            return this._previous;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "next", {
        get: function() {
            return this._next;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "text", {
        get: function() {
            return this._data && this._data.char || "?";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "advance", {
        get: function() {
            return this._runtime ? this._runtime.advance : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "ascent", {
        get: function() {
            return this._runtime ? this._runtime.ascent : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "descent", {
        get: function() {
            return this._runtime ? this._runtime.descent : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "font", {
        get: function() {
            return this._font;
        },
        set: function(t) {
            null === t || this.font.eq(t) || (this._font = t.clone(), this._data.fontFamily = t.family, this._data.fontSize = t.size, this._data.fontStyle = t.style, this._runtime && this._runtime.onFontUpdate(this.font));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontFamily", {
        get: function() {
            return this.font.family;
        },
        set: function(t) {
            this.font.family !== t && (this._font = this.font.deriveFamily(t), this._data.fontFamily = t, this._runtime && this._runtime.onFontUpdate(this.font));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontStyle", {
        get: function() {
            return this.font.style;
        },
        set: function(t) {
            this.font.style !== t && (this._font = this.font.deriveStyle(t), this._data.fontStyle = t, this._runtime && this._runtime.onFontUpdate(this.font));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontSize", {
        get: function() {
            return this.font.size;
        },
        set: function(t) {
            isNaN(t) || this.font.size === t || (this._font = this.font.deriveSize(t), this._data.fontSize = t, this._runtime && this._runtime.onFontUpdate(this.font));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "color", {
        get: function() {
            return this._color;
        },
        set: function(t) {
            t && !t.eq(this.color) && (this._color = t, this._runtime && this._runtime.onColorUpdate(t));
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.getType = function() {
        return r.CHAR;
    }, e;
}(X), K = function(t) {
    function e(e) {
        var r = t.call(this) || this;
        return r._data = e, r;
    }
    return Y(e, t), e.prototype.getType = function() {
        return r.GRAPHIC;
    }, e.prototype.toString = function() {
        return "Graphic";
    }, e;
}(z), tt = function(t) {
    function e(e) {
        var r = t.call(this) || this;
        return r._data = e, r;
    }
    return Y(e, t), Object.defineProperty(e.prototype, "parent", {
        get: function() {
            return this._parent;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "children", {
        get: function() {
            return this._children.slice();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "previous", {
        get: function() {
            return this._previous;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "next", {
        get: function() {
            return this._next;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "startTime", {
        get: function() {
            return this.firstChar ? this.firstChar.startTime : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "endTime", {
        get: function() {
            return this.lastChar ? this.lastChar.endTime : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "pos", {
        get: function() {
            return this._data && this._data.pos || "";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "rawPos", {
        get: function() {
            return this._data && this._data.rawPoS || "";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "language", {
        get: function() {
            return this._data && this._data.language || "";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "countDown", {
        get: function() {
            return this._data ? this._data.countDown : -1;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "countUp", {
        get: function() {
            return this._data ? this._data.countUp : -1;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "initialCount", {
        get: function() {
            return this._data ? this._data.initialCount : -1;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "charCount", {
        get: function() {
            return this._children.length;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "firstChar", {
        get: function() {
            return this._children.length <= 0 ? null : this._children[0];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "lastChar", {
        get: function() {
            return this._children.length <= 0 ? null : this._children[this._children.length - 1];
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.addChar = function(t) {
        if (t) {
            this._children.length > 0 && (t._previous = this.lastChar, this.lastChar._next = t), this._children.push(t), t._parent = this;
            var e = this.expandTime(t), r = e.startTime, n = e.endTime;
            this._data.startTime = r, this._data.endTime = n;
        }
    }, e.prototype.findIndex = function(t) {
        return t instanceof Q ? this._children.indexOf(t) : -1;
    }, e.prototype.getType = function() {
        return r.WORD;
    }, e;
}(X), et = function(t) {
    function e(e, r) {
        var n = t.call(this) || this;
        return n._video = e, n._data = r, n.createUnits(), n;
    }
    return Y(e, t), e.prototype.createUnits = function() {
        var t = this, e = this._data;
        e && Array.isArray(e.words) && e.words.forEach(function(e) {
            if (e) {
                var r = new tt(e);
                Array.isArray(e.characters) && e.characters.forEach(function(t) {
                    return r.addChar(new Q(t));
                }), t.addWord(r);
            }
        });
    }, Object.defineProperty(e.prototype, "children", {
        get: function() {
            return this._children.slice();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "previous", {
        get: function() {
            return this._previous;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "next", {
        get: function() {
            return this._next;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "video", {
        get: function() {
            return this._video;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "startTime", {
        get: function() {
            return this.firstChar ? this.firstChar.startTime : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "endTime", {
        get: function() {
            return this.lastChar ? this.lastChar.endTime : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "wordCount", {
        get: function() {
            return this._children.length;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "charCount", {
        get: function() {
            return this._children.reduce(function(t, e) {
                return t + e.charCount;
            }, 0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "firstWord", {
        get: function() {
            return this._children.length <= 0 ? null : this._children[0];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "lastWord", {
        get: function() {
            return this._children.length <= 0 ? null : this._children[this._children.length - 1];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "firstChar", {
        get: function() {
            var t = this.firstWord;
            return null === t ? null : t.firstChar;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "lastChar", {
        get: function() {
            var t = this.lastWord;
            return null === t ? null : t.lastChar;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.getWord = function(t) {
        return t < 0 || t >= this._children.length ? null : this._children[t];
    }, e.prototype.getChar = function(t) {
        if (t < 0) return null;
        for(var e = 0, r = this.firstWord;;){
            if (!r) return null;
            if (e + r.children.length > t) break;
            e += r.children.length, r = r.next;
        }
        return r.children[t - e];
    }, e.prototype.addWord = function(t) {
        if (t) {
            this._children.length > 0 && (t._previous = this.lastWord, t._previous._next = t, t.firstChar._previous = t._previous.lastChar, t._previous.lastChar._next = t.firstChar), this._children.push(t), t._parent = this;
            var e = this.expandTime(t), r = e.startTime, n = e.endTime;
            this._data.startTime = r, this._data.endTime = n;
        }
    }, e.prototype.findIndex = function(t) {
        if (t instanceof tt) return this._children.indexOf(t);
        if (t instanceof Q) {
            for(var e = 0, r = !1, n = 0, i = this._children; n < i.length; n++){
                var o = i[n], s = o.findIndex(t);
                if (!(s < 0)) {
                    e += s, r = !0;
                    break;
                }
                e += o.charCount;
            }
            return r ? e : -1;
        }
        return -1;
    }, e.prototype.getType = function() {
        return r.PHRASE;
    }, e;
}(X);
function rt(t, r, n) {
    if (!t || t.length <= 0) return null;
    var i = e.exports.sortedIndex(t, r, function(t) {
        return t.endTime;
    });
    if (i < 0) return null;
    if ("number" == typeof (null == n ? void 0 : n.endTime)) {
        i >= t.length && (i = t.length - 1);
        var o = r, s = n.endTime;
        return t[i].overlaps(o, s) ? t[i] : i < 1 ? null : t[i - 1].overlaps(o, s) ? t[i - 1] : null;
    }
    return i >= t.length ? null : (null == n ? void 0 : n.loose) || t[i].contains(r) ? t[i] : null;
}
var nt = function() {
    function t(t) {
        this._credits = [], this._phrases = [], this._graphics = [], this.data = t || {}, this.createUnits();
    }
    return Object.defineProperty(t.prototype, "credits", {
        get: function() {
            return this._credits.slice();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "phrases", {
        get: function() {
            return this._phrases.slice();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "graphics", {
        get: function() {
            return this._graphics.slice();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rendering", {
        get: function() {
            return this._runtime.rendering;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "duration", {
        get: function() {
            return this.data.duration || 0;
        },
        set: function(t) {
            this.data.duration = t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "startTime", {
        get: function() {
            return this.data.startTime || 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "endTime", {
        get: function() {
            return this.data.endTime || 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "creditCount", {
        get: function() {
            return this._credits.length;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "phraseCount", {
        get: function() {
            return this._phrases.length;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "graphicCount", {
        get: function() {
            return this._graphics.length;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "wordCount", {
        get: function() {
            return this._phrases.reduce(function(t, e) {
                return t + e.wordCount;
            }, 0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "charCount", {
        get: function() {
            return this._phrases.reduce(function(t, e) {
                return t + e.charCount;
            }, 0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "firstCredit", {
        get: function() {
            return this._credits.length <= 0 ? null : this._credits[0];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lastCredit", {
        get: function() {
            return this._credits.length <= 0 ? null : this._credits[this._credits.length - 1];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "firstPhrase", {
        get: function() {
            return this._phrases.length <= 0 ? null : this._phrases[0];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lastPhrase", {
        get: function() {
            return this._phrases.length <= 0 ? null : this._phrases[this._phrases.length - 1];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "firstWord", {
        get: function() {
            var t;
            return (null === (t = this.firstPhrase) || void 0 === t ? void 0 : t.firstWord) || null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lastWord", {
        get: function() {
            var t;
            return (null === (t = this.lastPhrase) || void 0 === t ? void 0 : t.lastWord) || null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "firstChar", {
        get: function() {
            var t;
            return (null === (t = this.firstWord) || void 0 === t ? void 0 : t.firstChar) || null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lastChar", {
        get: function() {
            var t;
            return (null === (t = this.lastWord) || void 0 === t ? void 0 : t.lastChar) || null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "firstGraphic", {
        get: function() {
            return this._graphics.length <= 0 ? null : this._graphics[0];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lastGraphic", {
        get: function() {
            return this._graphics.length <= 0 ? null : this._graphics[this._graphics.length - 1];
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.createUnits = function() {
        var t, e, r = this;
        Array.isArray(this.data.credits) ? (this.data.credits.sort(it), this.data.credits.forEach(function(t) {
            return r.doAddCredit(new et(r, t), !1);
        }), this.organizeTimings(null === (t = this.firstCredit) || void 0 === t ? void 0 : t.firstChar)) : this.data.credits = [], Array.isArray(this.data.phrases) ? (this.data.phrases.sort(it), this.data.phrases.forEach(function(t) {
            return r.doAddPhrase(new et(r, t), !1);
        }), this.organizeTimings(null === (e = this.firstPhrase) || void 0 === e ? void 0 : e.firstChar)) : this.data.phrases = [], Array.isArray(this.data.graphics) ? (this.data.graphics.sort(it), this.data.graphics.forEach(function(t) {
            return r.doAddGraphic(new K(t), !1);
        })) : this.data.graphics = [];
    }, t.prototype.organizeTimings = function(t) {
        for(; t;)t.startTime === t.endTime && t.maximize(), t = t.next;
    }, t.prototype.exportData = function(e) {
        this.updateTemplateData(e);
        for(var r = t.exportUnitData(this.data.credits, !0), n = r.units, i = r.templateClasses, o = t.exportUnitData(this.data.phrases, !1), s = o.units, a = o.templateClasses, u = t.exportUnitData(this.data.graphics, !0), l = u.units, c = u.templateClasses, p = i.concat(a, c).filter(function(t, e, r) {
            return r.indexOf(t) === e;
        }), h = {}; p.length > 0;){
            var d = p.shift(), f = e.getByName(d);
            if (f) {
                h[d] = f.id;
                for(var y = 0, v = e.getRequiredTemplates(f.script); y < v.length; y++){
                    var g = v[y];
                    h[g] || p.push(g);
                }
            } else console.log("template class not found", d);
        }
        return {
            credits: n,
            phrases: s,
            graphics: l,
            templateClasses: h
        };
    }, t.exportUnitData = function(e, r) {
        if (void 0 === r && (r = !1), !e) return {
            units: [],
            templateClasses: []
        };
        for(var n = [], i = [], o = 0, s = e; o < s.length; o++){
            var a = s[o], u = {
                templates: a.templates ? a.templates.map(function(t) {
                    var e = t.type;
                    i.push(e);
                    var r = {};
                    return Object.keys(t.value).forEach(function(e) {
                        var n = t.value[e];
                        r[e] = "object" == typeof n ? Object.assign({}, n) : n;
                    }), {
                        type: e,
                        value: r
                    };
                }) : []
            }, l = void 0;
            if (a.words) {
                var c = a, p = t.exportUnitData(c.words);
                u.words = p.units, l = p.templateClasses;
            } else if (a.characters) {
                var h = a, d = t.exportUnitData(h.characters);
                u.characters = d.units, l = d.templateClasses;
            } else {
                for(var f = 0, y = [
                    "fontFamily",
                    "fontSize",
                    "fontStyle"
                ]; f < y.length; f++){
                    var v = y[f];
                    a[v] && (u[v] = a[v]);
                }
                l = [];
            }
            r && (u.startTime = a.startTime, u.endTime = a.endTime), n.push(u), i = i.concat(l);
        }
        return {
            units: n,
            templateClasses: i = i.filter(function(t, e, r) {
                return r.indexOf(t) === e;
            })
        };
    }, t.prototype.updateTemplateData = function(e) {
        t.updateTemplateDataForUnits(e, this.firstCredit, this.data.credits), t.updateTemplateDataForUnits(e, this.firstPhrase, this.data.phrases), t.updateTemplateDataForUnits(e, this.firstGraphic, this.data.graphics);
    }, t.updateTemplateDataForUnits = function(e, r, n) {
        if (r && n) for(var i = 0, o = n; i < o.length; i++){
            var s = o[i];
            s.templates = [];
            for(var a = 0; a < r.templateCount; a++){
                var u = r.getTemplate(a), l = e.exportInstance(u);
                s.templates.push(l);
            }
            if (s.words) {
                var c = s;
                t.updateTemplateDataForUnits(e, r.children[0], c.words);
            } else if (s.characters) {
                var p = s;
                t.updateTemplateDataForUnits(e, r.children[0], p.characters);
            }
            r = r.next;
        }
    }, t.prototype.addCredit = function(t) {
        this.doAddCredit(t, !0);
    }, t.prototype.doAddCredit = function(t, e) {
        var r = this.addRenderingUnit(this._credits, t);
        e && this.data.credits.splice(r, 0, t._data), this._runtime && this._runtime.addCredit(t);
    }, t.prototype.addPhrase = function(t) {
        this.doAddPhrase(t, !0);
    }, t.prototype.doAddPhrase = function(t, e) {
        var r = this.addRenderingUnit(this._phrases, t);
        e && this.data.phrases.splice(r, 0, t._data), this._runtime && this._runtime.addPhrase(t);
    }, t.prototype.addGraphic = function(t) {
        this.doAddGraphic(t, !0);
    }, t.prototype.doAddGraphic = function(t, e) {
        if (t) {
            var r = this.addRenderingUnit(this._graphics, t);
            e && this.data.graphics.splice(r, 0, t._data), this._runtime && this._runtime.addGraphic(t);
        }
    }, t.prototype.addRenderingUnit = function(t, r) {
        if (r) {
            var n = e.exports.sortedIndex(t, r, ot), i = n > 0 ? t[n - 1] : null, o = n < t.length ? t[n] : null;
            if (t.splice(n, 0, r), i && (r._previous = i, r._previous._next = r), o && (o._previous = r, r._next = o), r instanceof et && r.wordCount > 0) {
                for(var s = i; s && !s.lastWord;)s = s.previous;
                for(var a = o; a && !a.firstWord;)a = a.next;
                if (s && (r.firstWord._previous = s.lastWord, s.lastWord._next = r.firstWord), a && (r.lastWord._next = a.firstWord, a.firstWord._previous = r.lastWord), r.charCount > 0) {
                    for(var u = null == s ? void 0 : s.lastWord; u && null === u.lastChar;)u = u.previous;
                    for(var l = null == a ? void 0 : a.firstWord; l && null === l.firstChar;)l = l.next;
                    u && (r.firstChar._previous = u.lastChar, u.lastChar._next = r.firstChar), l && (r.lastChar._next = l.firstChar, l.firstChar._previous = r.lastChar);
                }
            }
            return this.updateStartAndEndTime(), n;
        }
    }, t.prototype.removeCredit = function(t) {
        var e = this.removeRenderingUnit(this._credits, t);
        return !(e < 0 || (this.data.credits.splice(e, 1), this._runtime && this._runtime.removeCredit(t), 0));
    }, t.prototype.removeCredits = function() {
        var t = this;
        this._runtime && this._credits.forEach(function(e) {
            return t._runtime.removeCredit(e);
        }), this._credits = [], this.data.credits.splice(0, this.data.credits.length);
    }, t.prototype.removePhrase = function(t) {
        var e = this.removeRenderingUnit(this._phrases, t);
        return !(e < 0 || (this.data.phrases.splice(e, 1), this._runtime && this._runtime.removePhrase(t), 0));
    }, t.prototype.removePhrases = function() {
        var t = this;
        this._runtime && this._phrases.forEach(function(e) {
            return t._runtime.removePhrase(e);
        }), this._phrases = [], this.data.phrases.splice(0, this.data.phrases.length);
    }, t.prototype.removeGraphic = function(t) {
        var e = this.removeRenderingUnit(this._graphics, t);
        return !(e < 0 || (this.data.graphics.splice(e, 1), this._runtime && this._runtime.removeGraphic(t), 0));
    }, t.prototype.removeGraphics = function() {
        var t = this;
        this._runtime && this._graphics.forEach(function(e) {
            return t._runtime.removeGraphic(e);
        }), this._graphics = [], this.data.graphics.splice(0, this.data.graphics.length), this.rendering.reset();
    }, t.prototype.removeRenderingUnit = function(t, r) {
        var n = e.exports.sortedIndex(t, r, ot);
        if (n < 0 || t[n] !== r) return -1;
        if (t.splice(n, 1), r instanceof et) {
            if (r.charCount > 0) {
                for(var i = r._previous; i && null === i.lastChar;)i = i.previous;
                for(var o = r._next; o && null === o.firstChar;)o = o.next;
                i && o ? (i.lastChar._next = o.firstChar, o.firstChar._previous = i.lastChar) : i ? i.lastChar._next = null : o && (o.firstChar._previous = null);
            }
            if (r.wordCount > 0) {
                for(i = r._previous; i && null === i.lastWord;)i = i.previous;
                for(o = r._next; o && null === o.firstWord;)o = o.next;
                i && o ? (i.lastWord._next = o.firstWord, o.firstWord._previous = i.lastWord) : i ? i.lastWord._next = null : o && (o.firstWord._previous = null);
            }
        }
        r._previous && (r._previous._next = r._next), r._next && (r._next._previous = r._previous), this.updateStartAndEndTime();
    }, t.prototype.updateStartAndEndTime = function() {
        var t, e, r, n, i, o, s, a;
        this.data.endTime = Math.max((null === (e = null === (t = this.lastCredit) || void 0 === t ? void 0 : t.lastChar) || void 0 === e ? void 0 : e.endTime) || 0, (null === (r = this.lastChar) || void 0 === r ? void 0 : r.endTime) || 0, (null === (n = this.lastGraphic) || void 0 === n ? void 0 : n.endTime) || 0);
        var u = null === (o = null === (i = this.firstCredit) || void 0 === i ? void 0 : i.firstChar) || void 0 === o ? void 0 : o.startTime, l = null === (s = this.firstChar) || void 0 === s ? void 0 : s.startTime, c = null === (a = this.firstGraphic) || void 0 === a ? void 0 : a.startTime;
        this.data.startTime = Math.min("number" == typeof u ? u : Number.MAX_VALUE, "number" == typeof l ? l : Number.MAX_VALUE, "number" == typeof c ? c : Number.MAX_VALUE, this.data.endTime);
    }, t.prototype.findIndex = function(t) {
        if (t instanceof et) return (e = this._phrases.indexOf(t)) >= 0 ? e : this._credits.indexOf(t);
        if (t instanceof tt) {
            for(var e = 0, r = !1, n = 0, i = this._phrases; n < i.length; n++){
                if (!((u = (a = i[n]).findIndex(t)) < 0)) {
                    e += u, r = !0;
                    break;
                }
                e += a.wordCount;
            }
            return r ? e : -1;
        }
        if (t instanceof Q) {
            e = 0, r = !1;
            for(var o = 0, s = this._phrases; o < s.length; o++){
                var a, u;
                if (!((u = (a = s[o]).findIndex(t)) < 0)) {
                    e += u, r = !0;
                    break;
                }
                e += a.charCount;
            }
            return r ? e : -1;
        }
        return t instanceof K ? this._graphics.indexOf(t) : -1;
    }, t.prototype.getCredit = function(t) {
        return t < 0 || t >= this._credits.length ? null : this._credits[t];
    }, t.prototype.getPhrase = function(t) {
        return t < 0 || t >= this._phrases.length ? null : this._phrases[t];
    }, t.prototype.getWord = function(t) {
        if (t < 0) return null;
        for(var e = 0, r = this.firstPhrase;;){
            if (!r) return null;
            if (e + r.children.length > t) break;
            e += r.children.length, r = r.next;
        }
        return r.children[t - e];
    }, t.prototype.getChar = function(t) {
        if (t < 0) return null;
        for(var e = 0, r = this.firstWord;;){
            if (!r) return null;
            if (e + r.children.length > t) break;
            e += r.children.length, r = r.next;
        }
        return r.children[t - e];
    }, t.prototype.getGraphic = function(t) {
        return t < 0 || t >= this._graphics.length ? null : this._graphics[t];
    }, t.prototype.findCredit = function(t, e) {
        return rt(this._credits, t, e);
    }, t.prototype.findPhrase = function(t, e) {
        return rt(this._phrases, t, e);
    }, t.prototype.findWord = function(t, e) {
        var r = this.findPhrase(t, e);
        return r ? rt(r._children, t, e) : null;
    }, t.prototype.findChar = function(t, e) {
        var r = this.findWord(t, e);
        return r ? rt(r._children, t, e) : null;
    }, t.prototype.findGraphic = function(t, e) {
        return rt(this._graphics, t, e);
    }, t.prototype.contains = function(t) {
        return t >= this.startTime && t <= this.endTime;
    }, t.prototype.overlaps = function(t, e) {
        return this.contains(t) || this.contains(e) || this.startTime <= t && this.endTime >= e;
    }, t.prototype.progress = function(t) {
        return this.contains(t) ? (t - this.startTime) / this.duration : -1;
    }, t;
}();
function it(t, e) {
    return t.startTime - e.startTime;
}
function ot(t) {
    return t.startTime;
}
var st = function() {
    function t(t, e, r, n, i, o) {
        void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 1), void 0 === i && (i = 0), void 0 === o && (o = 0), this.setValues(t, e, r, n, i, o);
    }
    return t.prototype.setValues = function(t, e, r, n, i, o) {
        return void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 1), void 0 === i && (i = 0), void 0 === o && (o = 0), this.a = t, this.b = e, this.c = r, this.d = n, this.tx = i, this.ty = o, this;
    }, t.prototype.append = function(t, e, r, n, i, o) {
        var s = this.a, a = this.b, u = this.c, l = this.d;
        return 1 == t && 0 == e && 0 == r && 1 == n || (this.a = s * t + u * e, this.b = a * t + l * e, this.c = s * r + u * n, this.d = a * r + l * n), this.tx = s * i + u * o + this.tx, this.ty = a * i + l * o + this.ty, this;
    }, t.prototype.prepend = function(t, e, r, n, i, o) {
        var s = this.a, a = this.c, u = this.tx;
        return this.a = t * s + r * this.b, this.b = e * s + n * this.b, this.c = t * a + r * this.d, this.d = e * a + n * this.d, this.tx = t * u + r * this.ty + i, this.ty = e * u + n * this.ty + o, this;
    }, t.prototype.appendMatrix = function(t) {
        return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty);
    }, t.prototype.prependMatrix = function(t) {
        return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty);
    }, t.prototype.appendTransform = function(e, r, n, i, o, s, a, u, l) {
        var c, p, h;
        return o % 360 ? (c = o * t.DEG_TO_RAD, p = Math.cos(c), h = Math.sin(c)) : (p = 1, h = 0), s || a ? (s *= t.DEG_TO_RAD, a *= t.DEG_TO_RAD, this.append(Math.cos(a), Math.sin(a), -Math.sin(s), Math.cos(s), e, r), this.append(p * n, h * n, -h * i, p * i, 0, 0)) : this.append(p * n, h * n, -h * i, p * i, e, r), (u || l) && (this.tx -= u * this.a + l * this.c, this.ty -= u * this.b + l * this.d), this;
    }, t.prototype.prependTransform = function(e, r, n, i, o, s, a, u, l) {
        var c, p, h;
        return o % 360 ? (c = o * t.DEG_TO_RAD, p = Math.cos(c), h = Math.sin(c)) : (p = 1, h = 0), (u || l) && (this.tx -= u, this.ty -= l), s || a ? (s *= t.DEG_TO_RAD, a *= t.DEG_TO_RAD, this.prepend(p * n, h * n, -h * i, p * i, 0, 0), this.prepend(Math.cos(a), Math.sin(a), -Math.sin(s), Math.cos(s), e, r)) : this.prepend(p * n, h * n, -h * i, p * i, e, r), this;
    }, t.prototype.rotate = function(e) {
        e *= t.DEG_TO_RAD;
        var r = Math.cos(e), n = Math.sin(e), i = this.a, o = this.b;
        return this.a = i * r + this.c * n, this.b = o * r + this.d * n, this.c = -i * n + this.c * r, this.d = -o * n + this.d * r, this;
    }, t.prototype.skew = function(e, r) {
        return e *= t.DEG_TO_RAD, r *= t.DEG_TO_RAD, this.append(Math.cos(r), Math.sin(r), -Math.sin(e), Math.cos(e), 0, 0), this;
    }, t.prototype.scale = function(t, e) {
        return this.a *= t, this.b *= t, this.c *= e, this.d *= e, this;
    }, t.prototype.translate = function(t, e) {
        return this.tx += this.a * t + this.c * e, this.ty += this.b * t + this.d * e, this;
    }, t.prototype.identity = function() {
        return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this;
    }, t.prototype.invert = function() {
        var t = this.a, e = this.b, r = this.c, n = this.d, i = this.tx, o = t * n - e * r;
        return this.a = n / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - n * i) / o, this.ty = -(t * this.ty - e * i) / o, this;
    }, t.prototype.isIdentity = function() {
        return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d;
    }, t.prototype.equals = function(t) {
        return this.tx === t.tx && this.ty === t.ty && this.a === t.a && this.b === t.b && this.c === t.c && this.d === t.d;
    }, t.prototype.transformPoint = function(t, e, r) {
        return r.x = t * this.a + e * this.c + this.tx, r.y = t * this.b + e * this.d + this.ty, r;
    }, t.prototype.decompose = function(e) {
        void 0 === e && (e = {}), e.x = this.tx, e.y = this.ty, e.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), e.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
        var r = Math.atan2(-this.c, this.d), n = Math.atan2(this.b, this.a);
        return Math.abs(1 - r / n) < 1e-5 ? (e.rotation = n / t.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (e.rotation += e.rotation <= 0 ? 180 : -180), e.skewX = e.skewY = 0) : (e.skewX = r / t.DEG_TO_RAD, e.skewY = n / t.DEG_TO_RAD), e;
    }, t.prototype.copy = function(t) {
        return this.setValues(t.a, t.b, t.c, t.d, t.tx, t.ty);
    }, t.prototype.clone = function() {
        return new t(this.a, this.b, this.c, this.d, this.tx, this.ty);
    }, t.prototype.toString = function() {
        return "[" + this.constructor.name + " (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]";
    }, t.DEG_TO_RAD = Math.PI / 180, t.identity = new t, t;
}(), at = function() {
    function t(t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), this.setValues(t, e);
    }
    return t.prototype.setValues = function(t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e, this;
    }, t.prototype.copy = function(t) {
        return this.x = t.x, this.y = t.y, this;
    }, t.prototype.clone = function() {
        return new t(this.x, this.y);
    }, t.prototype.toString = function() {
        return "[" + this.constructor.name + " (x=" + this.x + " y=" + this.y + ")]";
    }, t;
}(), ut = function() {
    function t() {
        this.tx = new st, this.alpha = 0, this.composite = "", this.visible = !0;
    }
    return t.prototype.reset = function() {}, t;
}(), lt = function() {
    function t() {
        this.rendering = new ut;
    }
    return t.prototype.addCredit = function(t) {
        this.doAddPhrase(t);
    }, t.prototype.removeCredit = function(t) {
        t._runtime = null;
    }, t.prototype.addPhrase = function(t) {
        this.doAddPhrase(t);
    }, t.prototype.removePhrase = function(t) {
        t._runtime = null;
    }, t.prototype.doAddPhrase = function(t) {
        t._runtime = {
            graphics: {
                clear: function() {}
            },
            rendering: new ut,
            update: function() {}
        };
        for(var e = t.firstWord; e;){
            e._runtime = {
                graphics: {
                    clear: function() {}
                },
                rendering: new ut,
                update: function() {}
            };
            for(var r = e.firstChar; r && (r._runtime = {
                graphics: {
                    clear: function() {}
                },
                rendering: new ut,
                update: function() {},
                advance: 0,
                ascent: 0,
                descent: 0,
                onFontUpdate: function() {},
                onColorUpdate: function() {}
            }, r !== e.lastChar);)r = r.next;
            if (e === t.lastWord) break;
            e = e.next;
        }
    }, t.prototype.addGraphic = function(t) {
        t._runtime = {
            graphics: {
                clear: function() {}
            },
            rendering: new ut,
            update: function() {}
        };
    }, t.prototype.removeGraphic = function(t) {
        t._runtime = null;
    }, t;
}(), ct = function() {
    function t() {
        this.wrapperTable = {};
    }
    return t.prototype.isGraphics = function() {
        return !1;
    }, t.prototype.setCanvas = function() {
        return Promise.resolve();
    }, t.prototype.createRuntime = function(t) {
        return function(t, e, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function s(t) {
                    try {
                        u(n.next(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function a(t) {
                    try {
                        u(n.throw(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function u(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                        t(e);
                    })).then(s, a);
                }
                u((n = n.apply(t, e || [])).next());
            });
        }(this, void 0, void 0, function() {
            var e, r, n;
            return function(t, e) {
                var r, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this;
                }), o;
                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for(; s;)try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                switch(n = 0, i && (o = [
                                    2 & o[0],
                                    i.value
                                ]), o[0]){
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = o[1], o = [
                                            0
                                        ];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break;
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break;
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break;
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                o = e.call(t, s);
                            } catch (t) {
                                o = [
                                    6,
                                    t
                                ], n = 0;
                            } finally{
                                r = i = 0;
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            };
                        }([
                            o,
                            a
                        ]);
                    };
                }
            }(this, function(i) {
                for(this.video = t, t._runtime = new lt, e = t.firstCredit; e;)t._runtime.addCredit(e), e = e.next;
                for(r = t.firstPhrase; r;)t._runtime.addPhrase(r), r = r.next;
                for(n = t.firstGraphic; n;)t._runtime.addGraphic(n), n = n.next;
                return [
                    2,
                    t._runtime
                ];
            });
        });
    }, t.prototype.reset = function() {
        var t, e;
        this.resetTextUnitsFrom(this.video.firstCredit), this.resetTextUnitsFrom(null === (t = this.video.firstCredit) || void 0 === t ? void 0 : t.firstWord), this.resetTextUnitsFrom(null === (e = this.video.firstCredit) || void 0 === e ? void 0 : e.firstChar), this.resetTextUnitsFrom(this.video.firstPhrase), this.resetTextUnitsFrom(this.video.firstWord), this.resetTextUnitsFrom(this.video.firstChar), this.video._runtime.rendering.reset();
    }, t.prototype.resetTextUnitsFrom = function(t) {
        for(; t;)t.rendering.reset(), t.graphics.clear(), t = t.next;
    }, t.prototype.update = function() {
        var t, e;
        this.updateCharsFrom(null === (t = this.video.firstCredit) || void 0 === t ? void 0 : t.firstChar), this.updateCharsFrom(null === (e = this.video.firstPhrase) || void 0 === e ? void 0 : e.firstChar);
    }, t.prototype.updateCharsFrom = function(t) {
        for(; t;)t._runtime.update(), t = t.next;
    }, t.prototype.updateStageTx = function() {}, t;
}();
function pt(t) {
    if (void 0 !== t && "function" != typeof t) {
        if ("object" != typeof t) return t;
        if (null === t) return null;
        if (t instanceof Z) return {
            type: "Color",
            value: {
                r: t.r,
                g: t.g,
                b: t.b,
                a: t.a
            }
        };
        throw new Error;
    }
}
function ht(t, e) {
    if ("object" != typeof t || null === t) return t;
    if (t.type && e[t.type]) {
        var r;
        if ("Color" === t.type) {
            var n = new Z;
            n.r = Number(t.value.r), n.g = Number(t.value.g), n.b = Number(t.value.b), n.a = Number(t.value.a), r = n;
        } else {
            for(var i = new e[t.type], o = 0, s = Object.keys(t.value); o < s.length; o++){
                var a = s[o];
                i[a] = t.value[a];
            }
            r = i;
        }
        return r;
    }
}
var dt, ft, yt, vt, gt, mt, bt, _t, wt, Pt, Et, Ot, St, Tt, xt, At, Rt, Ct, Nt, kt, jt = function(t, e) {
    return ft = String(t), yt = ft.length, function(t) {
        for(var e in dt = t || {}, It)Object.prototype.hasOwnProperty.call(dt, e) || (dt[e] = It[e]);
        vt = dt.sourceFile || null;
    }(e), St = 1, gt = Tt = 0, Ot = !0, ar(), function(t) {
        xt = At = gt, dt.locations && (Rt = new nr), Ct = kt = null, Nt = [], ur();
        var e = t || _r(), r = !0;
        for(t || (e.body = []); Pt !== Vt;){
            var n = kr();
            e.body.push(n), r && Er(n) && gr(!0), r = !1;
        }
        return Pr(e, "Program");
    }(dt.program);
}, It = {
    ecmaVersion: 5,
    strictSemicolons: !1,
    allowTrailingCommas: !0,
    forbidReserved: !1,
    locations: !1,
    onComment: null,
    ranges: !1,
    program: null,
    sourceFile: null,
    directSourceFile: null
};
function Ut(t, e) {
    var r = function(t, e) {
        for(var r = 1, n = 0;;){
            tr.lastIndex = n;
            var i = tr.exec(t);
            if (!(i && i.index < e)) break;
            ++r, n = i.index + i[0].length;
        }
        return {
            line: r,
            column: e - n
        };
    }(ft, t);
    e += " (" + r.line + ":" + r.column + ")";
    var n = new SyntaxError(e);
    throw n.pos = t, n.loc = r, n.raisedAt = gt, n;
}
var Ft = [], Lt = {
    type: "num"
}, Dt = {
    type: "regexp"
}, Mt = {
    type: "string"
}, Bt = {
    type: "name"
}, Vt = {
    type: "eof"
}, Gt = {
    keyword: "break"
}, qt = {
    keyword: "case",
    beforeExpr: !0
}, Wt = {
    keyword: "catch"
}, Yt = {
    keyword: "continue"
}, zt = {
    keyword: "debugger"
}, Jt = {
    keyword: "default"
}, Ht = {
    keyword: "do",
    isLoop: !0
}, Xt = {
    keyword: "else",
    beforeExpr: !0
}, Zt = {
    keyword: "finally"
}, $t = {
    keyword: "for",
    isLoop: !0
}, Qt = {
    keyword: "function"
}, Kt = {
    keyword: "if"
}, te = {
    keyword: "return",
    beforeExpr: !0
}, ee = {
    keyword: "switch"
}, re = {
    keyword: "throw",
    beforeExpr: !0
}, ne = {
    keyword: "try"
}, ie = {
    keyword: "var"
}, oe = {
    keyword: "while",
    isLoop: !0
}, se = {
    keyword: "with"
}, ae = {
    keyword: "new",
    beforeExpr: !0
}, ue = {
    keyword: "this"
}, le = {
    keyword: "null",
    atomValue: null
}, ce = {
    keyword: "true",
    atomValue: !0
}, pe = {
    keyword: "false",
    atomValue: !1
}, he = {
    keyword: "in",
    binop: 7,
    beforeExpr: !0
}, de = {
    break: Gt,
    case: qt,
    catch: Wt,
    continue: Yt,
    debugger: zt,
    default: Jt,
    do: Ht,
    else: Xt,
    finally: Zt,
    for: $t,
    function: Qt,
    if: Kt,
    return: te,
    switch: ee,
    throw: re,
    try: ne,
    var: ie,
    while: oe,
    with: se,
    null: le,
    true: ce,
    false: pe,
    new: ae,
    in: he,
    instanceof: {
        keyword: "instanceof",
        binop: 7,
        beforeExpr: !0
    },
    this: ue,
    typeof: {
        keyword: "typeof",
        prefix: !0,
        beforeExpr: !0
    },
    void: {
        keyword: "void",
        prefix: !0,
        beforeExpr: !0
    },
    delete: {
        keyword: "delete",
        prefix: !0,
        beforeExpr: !0
    }
}, fe = {
    type: "[",
    beforeExpr: !0
}, ye = {
    type: "]"
}, ve = {
    type: "{",
    beforeExpr: !0
}, ge = {
    type: "}"
}, me = {
    type: "(",
    beforeExpr: !0
}, be = {
    type: ")"
}, _e = {
    type: ",",
    beforeExpr: !0
}, we = {
    type: ";",
    beforeExpr: !0
}, Pe = {
    type: ":",
    beforeExpr: !0
}, Ee = {
    type: "."
}, Oe = {
    type: "?",
    beforeExpr: !0
}, Se = {
    binop: 10,
    beforeExpr: !0
}, Te = {
    isAssign: !0,
    beforeExpr: !0
}, xe = {
    isAssign: !0,
    beforeExpr: !0
}, Ae = {
    postfix: !0,
    prefix: !0,
    isUpdate: !0
}, Re = {
    prefix: !0,
    beforeExpr: !0
}, Ce = {
    binop: 1,
    beforeExpr: !0
}, Ne = {
    binop: 2,
    beforeExpr: !0
}, ke = {
    binop: 3,
    beforeExpr: !0
}, je = {
    binop: 4,
    beforeExpr: !0
}, Ie = {
    binop: 5,
    beforeExpr: !0
}, Ue = {
    binop: 6,
    beforeExpr: !0
}, Fe = {
    binop: 7,
    beforeExpr: !0
}, Le = {
    binop: 8,
    beforeExpr: !0
}, De = {
    binop: 9,
    prefix: !0,
    beforeExpr: !0
}, Me = {
    binop: 10,
    beforeExpr: !0
}, Be = {
    bracketL: fe,
    bracketR: ye,
    braceL: ve,
    braceR: ge,
    parenL: me,
    parenR: be,
    comma: _e,
    semi: we,
    colon: Pe,
    dot: Ee,
    question: Oe,
    slash: Se,
    eq: Te,
    name: Bt,
    eof: Vt,
    num: Lt,
    regexp: Dt,
    string: Mt
};
for(var Ve in de)Be["_" + Ve] = de[Ve];
function Ge(t) {
    t = t.split(" ");
    var e = "", r = [];
    t: for(var n = 0; n < t.length; ++n){
        for(var i = 0; i < r.length; ++i)if (r[i][0].length == t[n].length) {
            r[i].push(t[n]);
            continue t;
        }
        r.push([
            t[n]
        ]);
    }
    function o(t) {
        if (1 == t.length) return e += "return str === " + JSON.stringify(t[0]) + ";";
        e += "switch(str){";
        for(var r = 0; r < t.length; ++r)e += "case " + JSON.stringify(t[r]) + ":";
        e += "return true}return false;";
    }
    if (r.length > 3) {
        for(r.sort(function(t, e) {
            return e.length - t.length;
        }), e += "switch(str.length){", n = 0; n < r.length; ++n){
            var s = r[n];
            e += "case " + s[0].length + ":", o(s);
        }
        e += "}";
    } else o(t);
    return new Function("str", e);
}
var qe, We = Ge("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"), Ye = Ge("class enum extends super const export import"), ze = Ge("implements interface let package private protected public static yield"), Je = Ge("eval arguments"), He = Ge("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"), Xe = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/, Ze = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", $e = new RegExp("[" + Ze + "]"), Qe = new RegExp("[" + Ze + "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u0620-\u0649\u0672-\u06D3\u06E7-\u06E8\u06FB-\u06FC\u0730-\u074A\u0800-\u0814\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0840-\u0857\u08E4-\u08FE\u0900-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09D7\u09DF-\u09E0\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5F-\u0B60\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2-\u0CE3\u0CE6-\u0CEF\u0D02\u0D03\u0D46-\u0D48\u0D57\u0D62-\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E34-\u0E3A\u0E40-\u0E45\u0E50-\u0E59\u0EB4-\u0EB9\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F41-\u0F47\u0F71-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1029\u1040-\u1049\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u170E-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17B2\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1920-\u192B\u1930-\u193B\u1951-\u196D\u19B0-\u19C0\u19C8-\u19C9\u19D0-\u19D9\u1A00-\u1A15\u1A20-\u1A53\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1B46-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C00-\u1C22\u1C40-\u1C49\u1C5B-\u1C7D\u1CD0-\u1CD2\u1D00-\u1DBE\u1E01-\u1F15\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2D81-\u2D96\u2DE0-\u2DFF\u3021-\u3028\u3099\u309A\uA640-\uA66D\uA674-\uA67D\uA69F\uA6F0-\uA6F1\uA7F8-\uA800\uA806\uA80B\uA823-\uA827\uA880-\uA881\uA8B4-\uA8C4\uA8D0-\uA8D9\uA8F3-\uA8F7\uA900-\uA909\uA926-\uA92D\uA930-\uA945\uA980-\uA983\uA9B3-\uA9C0\uAA00-\uAA27\uAA40-\uAA41\uAA4C-\uAA4D\uAA50-\uAA59\uAA7B\uAAE0-\uAAE9\uAAF2-\uAAF3\uABC0-\uABE1\uABEC\uABED\uABF0-\uABF9\uFB20-\uFB28\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F]"), Ke = /[\n\r\u2028\u2029]/, tr = /\r\n|[\n\r\u2028\u2029]/g, er = function(t) {
    return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || t >= 170 && $e.test(String.fromCharCode(t)));
}, rr = function(t) {
    return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || t >= 170 && Qe.test(String.fromCharCode(t))));
};
function nr() {
    this.line = St, this.column = gt - Tt;
}
function ir(t, e) {
    bt = gt, dt.locations && (wt = new nr), Pt = t, ar(), Et = e, Ot = t.beforeExpr;
}
function or() {
    var t, e = dt.onComment && dt.locations && new nr, r = gt, n = ft.indexOf("*/", gt += 2);
    if (-1 === n && Ut(gt - 2, "Unterminated comment"), gt = n + 2, dt.locations) for(tr.lastIndex = r; (t = tr.exec(ft)) && t.index < gt;)++St, Tt = t.index + t[0].length;
    dt.onComment && dt.onComment(!0, ft.slice(r + 2, n), r, gt, e, dt.locations && new nr);
}
function sr() {
    for(var t = gt, e = dt.onComment && dt.locations && new nr, r = ft.charCodeAt(gt += 2); gt < yt && 10 !== r && 13 !== r && 8232 !== r && 8233 !== r;)++gt, r = ft.charCodeAt(gt);
    dt.onComment && dt.onComment(!1, ft.slice(t + 2, gt), t, gt, e, dt.locations && new nr);
}
function ar() {
    for(; gt < yt;){
        var t = ft.charCodeAt(gt);
        if (32 === t) ++gt;
        else if (13 === t) ++gt, 10 === (e = ft.charCodeAt(gt)) && ++gt, dt.locations && (++St, Tt = gt);
        else if (10 === t || 8232 === t || 8233 === t) ++gt, dt.locations && (++St, Tt = gt);
        else if (t > 8 && t < 14) ++gt;
        else if (47 === t) {
            var e;
            if (42 === (e = ft.charCodeAt(gt + 1))) or();
            else {
                if (47 !== e) break;
                sr();
            }
        } else if (160 === t) ++gt;
        else {
            if (!(t >= 5760 && Xe.test(String.fromCharCode(t)))) break;
            ++gt;
        }
    }
}
function ur(t) {
    if (t ? gt = mt + 1 : mt = gt, dt.locations && (_t = new nr), t) return cr();
    if (gt >= yt) return ir(Vt);
    var e = ft.charCodeAt(gt);
    if (er(e) || 92 === e) return yr();
    var r = function(t) {
        switch(t){
            case 46:
                return function() {
                    var t = ft.charCodeAt(gt + 1);
                    return t >= 48 && t <= 57 ? hr(!0) : (++gt, ir(Ee));
                }();
            case 40:
                return ++gt, ir(me);
            case 41:
                return ++gt, ir(be);
            case 59:
                return ++gt, ir(we);
            case 44:
                return ++gt, ir(_e);
            case 91:
                return ++gt, ir(fe);
            case 93:
                return ++gt, ir(ye);
            case 123:
                return ++gt, ir(ve);
            case 125:
                return ++gt, ir(ge);
            case 58:
                return ++gt, ir(Pe);
            case 63:
                return ++gt, ir(Oe);
            case 48:
                var e = ft.charCodeAt(gt + 1);
                if (120 === e || 88 === e) return function() {
                    gt += 2;
                    var t = pr(16);
                    return null == t && Ut(mt + 2, "Expected hexadecimal number"), er(ft.charCodeAt(gt)) && Ut(gt, "Identifier directly after number"), ir(Lt, t);
                }();
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return hr(!1);
            case 34:
            case 39:
                return function(t) {
                    gt++;
                    for(var e = "";;){
                        gt >= yt && Ut(mt, "Unterminated string constant");
                        var r = ft.charCodeAt(gt);
                        if (r === t) return ++gt, ir(Mt, e);
                        if (92 === r) {
                            r = ft.charCodeAt(++gt);
                            var n = /^[0-7]+/.exec(ft.slice(gt, gt + 3));
                            for(n && (n = n[0]); n && parseInt(n, 8) > 255;)n = n.slice(0, -1);
                            if ("0" === n && (n = null), ++gt, n) kt && Ut(gt - 2, "Octal literal in strict mode"), e += String.fromCharCode(parseInt(n, 8)), gt += n.length - 1;
                            else switch(r){
                                case 110:
                                    e += "\n";
                                    break;
                                case 114:
                                    e += "\r";
                                    break;
                                case 120:
                                    e += String.fromCharCode(dr(2));
                                    break;
                                case 117:
                                    e += String.fromCharCode(dr(4));
                                    break;
                                case 85:
                                    e += String.fromCharCode(dr(8));
                                    break;
                                case 116:
                                    e += "	";
                                    break;
                                case 98:
                                    e += "\b";
                                    break;
                                case 118:
                                    e += "\v";
                                    break;
                                case 102:
                                    e += "\f";
                                    break;
                                case 48:
                                    e += "\0";
                                    break;
                                case 13:
                                    10 === ft.charCodeAt(gt) && ++gt;
                                case 10:
                                    dt.locations && (Tt = gt, ++St);
                                    break;
                                default:
                                    e += String.fromCharCode(r);
                            }
                        } else 13 !== r && 10 !== r && 8232 !== r && 8233 !== r || Ut(mt, "Unterminated string constant"), e += String.fromCharCode(r), ++gt;
                    }
                }(t);
            case 47:
                return function(t) {
                    var e = ft.charCodeAt(gt + 1);
                    return Ot ? (++gt, cr()) : 61 === e ? lr(xe, 2) : lr(Se, 1);
                }();
            case 37:
            case 42:
                return 61 === ft.charCodeAt(gt + 1) ? lr(xe, 2) : lr(Me, 1);
            case 124:
            case 38:
                return function(t) {
                    var e = ft.charCodeAt(gt + 1);
                    return e === t ? lr(124 === t ? Ce : Ne, 2) : 61 === e ? lr(xe, 2) : lr(124 === t ? ke : Ie, 1);
                }(t);
            case 94:
                return 61 === ft.charCodeAt(gt + 1) ? lr(xe, 2) : lr(je, 1);
            case 43:
            case 45:
                return function(t) {
                    var e = ft.charCodeAt(gt + 1);
                    return e === t ? 45 == e && 62 == ft.charCodeAt(gt + 2) && Ke.test(ft.slice(At, gt)) ? (gt += 3, sr(), ar(), ur()) : lr(Ae, 2) : 61 === e ? lr(xe, 2) : lr(De, 1);
                }(t);
            case 60:
            case 62:
                return function(t) {
                    var e = ft.charCodeAt(gt + 1), r = 1;
                    return e === t ? (r = 62 === t && 62 === ft.charCodeAt(gt + 2) ? 3 : 2, 61 === ft.charCodeAt(gt + r) ? lr(xe, r + 1) : lr(Le, r)) : 33 == e && 60 == t && 45 == ft.charCodeAt(gt + 2) && 45 == ft.charCodeAt(gt + 3) ? (gt += 4, sr(), ar(), ur()) : (61 === e && (r = 61 === ft.charCodeAt(gt + 2) ? 3 : 2), lr(Fe, r));
                }(t);
            case 61:
            case 33:
                return function(t) {
                    return 61 === ft.charCodeAt(gt + 1) ? lr(Ue, 61 === ft.charCodeAt(gt + 2) ? 3 : 2) : lr(61 === t ? Te : Re, 1);
                }(t);
            case 126:
                return lr(Re, 1);
        }
        return !1;
    }(e);
    if (!1 === r) {
        var n = String.fromCharCode(e);
        if ("\\" === n || $e.test(n)) return yr();
        Ut(gt, "Unexpected character '" + n + "'");
    }
    return r;
}
function lr(t, e) {
    var r = ft.slice(gt, gt + e);
    gt += e, ir(t, r);
}
function cr() {
    for(var t, e, r = gt;;){
        gt >= yt && Ut(r, "Unterminated regular expression");
        var n = ft.charAt(gt);
        if (Ke.test(n) && Ut(r, "Unterminated regular expression"), t) t = !1;
        else {
            if ("[" === n) e = !0;
            else if ("]" === n && e) e = !1;
            else if ("/" === n && !e) break;
            t = "\\" === n;
        }
        ++gt;
    }
    var i = ft.slice(r, gt);
    ++gt;
    var o = fr();
    return o && !/^[gmsiy]*$/.test(o) && Ut(r, "Invalid regexp flag"), ir(Dt, new RegExp(i, o));
}
function pr(t, e) {
    for(var r = gt, n = 0, i = 0, o = null == e ? 1 / 0 : e; i < o; ++i){
        var s, a = ft.charCodeAt(gt);
        if ((s = a >= 97 ? a - 97 + 10 : a >= 65 ? a - 65 + 10 : a >= 48 && a <= 57 ? a - 48 : 1 / 0) >= t) break;
        ++gt, n = n * t + s;
    }
    return gt === r || null != e && gt - r !== e ? null : n;
}
function hr(t) {
    var e = gt, r = !1, n = 48 === ft.charCodeAt(gt);
    t || null !== pr(10) || Ut(e, "Invalid number"), 46 === ft.charCodeAt(gt) && (++gt, pr(10), r = !0);
    var i = ft.charCodeAt(gt);
    69 !== i && 101 !== i || (43 !== (i = ft.charCodeAt(++gt)) && 45 !== i || ++gt, null === pr(10) && Ut(e, "Invalid number"), r = !0), er(ft.charCodeAt(gt)) && Ut(gt, "Identifier directly after number");
    var o, s = ft.slice(e, gt);
    return r ? o = parseFloat(s) : n && 1 !== s.length ? /[89]/.test(s) || kt ? Ut(e, "Invalid number") : o = parseInt(s, 8) : o = parseInt(s, 10), ir(Lt, o);
}
function dr(t) {
    var e = pr(16, t);
    return null === e && Ut(mt, "Bad character escape sequence"), e;
}
function fr() {
    qe = !1;
    for(var t, e = !0, r = gt;;){
        var n = ft.charCodeAt(gt);
        if (rr(n)) qe && (t += ft.charAt(gt)), ++gt;
        else {
            if (92 !== n) break;
            qe || (t = ft.slice(r, gt)), qe = !0, 117 != ft.charCodeAt(++gt) && Ut(gt, "Expecting Unicode escape sequence \\uXXXX"), ++gt;
            var i = dr(4), o = String.fromCharCode(i);
            o || Ut(gt - 1, "Invalid Unicode escape"), (e ? er(i) : rr(i)) || Ut(gt - 4, "Invalid Unicode escape"), t += o;
        }
        e = !1;
    }
    return qe ? t : ft.slice(r, gt);
}
function yr() {
    var t = fr(), e = Bt;
    return qe || (He(t) ? e = de[t] : (dt.forbidReserved && (3 === dt.ecmaVersion ? We : Ye)(t) || kt && ze(t)) && Ut(mt, "The keyword '" + t + "' is reserved")), ir(e, t);
}
function vr() {
    xt = mt, At = bt, Rt = wt, ur();
}
function gr(t) {
    if (kt = t, gt = At, dt.locations) for(; gt < Tt;)Tt = ft.lastIndexOf("\n", Tt - 2) + 1, --St;
    ar(), ur();
}
function mr() {
    this.type = null, this.start = mt, this.end = null;
}
function br() {
    this.start = _t, this.end = null, null !== vt && (this.source = vt);
}
function _r() {
    var t = new mr;
    return dt.locations && (t.loc = new br), dt.directSourceFile && (t.sourceFile = dt.directSourceFile), dt.ranges && (t.range = [
        mt,
        0
    ]), t;
}
function wr(t) {
    var e = new mr;
    return e.start = t.start, dt.locations && (e.loc = new br, e.loc.start = t.loc.start), dt.ranges && (e.range = [
        t.range[0],
        0
    ]), e;
}
function Pr(t, e) {
    return t.type = e, t.end = At, dt.locations && (t.loc.end = Rt), dt.ranges && (t.range[1] = At), t;
}
function Er(t) {
    return dt.ecmaVersion >= 5 && "ExpressionStatement" === t.type && "Literal" === t.expression.type && "use strict" === t.expression.value;
}
function Or(t) {
    if (Pt === t) return vr(), !0;
}
function Sr() {
    return !dt.strictSemicolons && (Pt === Vt || Pt === ge || Ke.test(ft.slice(At, mt)));
}
function Tr() {
    Or(we) || Sr() || Ar();
}
function xr(t) {
    Pt === t ? vr() : Ar();
}
function Ar() {
    Ut(mt, "Unexpected token");
}
function Rr(t) {
    "Identifier" !== t.type && "MemberExpression" !== t.type && Ut(t.start, "Assigning to rvalue"), kt && "Identifier" === t.type && Je(t.name) && Ut(t.start, "Assigning to " + t.name + " in strict mode");
}
var Cr = {
    kind: "loop"
}, Nr = {
    kind: "switch"
};
function kr() {
    (Pt === Se || Pt === xe && "/=" == Et) && ur(!0);
    var t = Pt, e = _r();
    switch(t){
        case Gt:
        case Yt:
            vr();
            var r = t === Gt;
            Or(we) || Sr() ? e.label = null : Pt !== Bt ? Ar() : (e.label = Jr(), Tr());
            for(var n = 0; n < Nt.length; ++n){
                var i = Nt[n];
                if (null == e.label || i.name === e.label.name) {
                    if (null != i.kind && (r || "loop" === i.kind)) break;
                    if (e.label && r) break;
                }
            }
            return n === Nt.length && Ut(e.start, "Unsyntactic " + t.keyword), Pr(e, r ? "BreakStatement" : "ContinueStatement");
        case zt:
            return vr(), Tr(), Pr(e, "DebuggerStatement");
        case Ht:
            return vr(), Nt.push(Cr), e.body = kr(), Nt.pop(), xr(oe), e.test = jr(), Tr(), Pr(e, "DoWhileStatement");
        case $t:
            if (vr(), Nt.push(Cr), xr(me), Pt === we) return Ur(e, null);
            if (Pt === ie) {
                var o = _r();
                return vr(), Lr(o, !0), Pr(o, "VariableDeclaration"), 1 === o.declarations.length && Or(he) ? Fr(e, o) : Ur(e, o);
            }
            return o = Dr(!1, !0), Or(he) ? (Rr(o), Fr(e, o)) : Ur(e, o);
        case Qt:
            return vr(), Yr(e, !0);
        case Kt:
            return vr(), e.test = jr(), e.consequent = kr(), e.alternate = Or(Xt) ? kr() : null, Pr(e, "IfStatement");
        case te:
            return Ct || Ut(mt, "'return' outside of function"), vr(), Or(we) || Sr() ? e.argument = null : (e.argument = Dr(), Tr()), Pr(e, "ReturnStatement");
        case ee:
            vr(), e.discriminant = jr(), e.cases = [], xr(ve), Nt.push(Nr);
            for(var s, a; Pt != ge;)if (Pt === qt || Pt === Jt) {
                var u = Pt === qt;
                s && Pr(s, "SwitchCase"), e.cases.push(s = _r()), s.consequent = [], vr(), u ? s.test = Dr() : (a && Ut(xt, "Multiple default clauses"), a = !0, s.test = null), xr(Pe);
            } else s || Ar(), s.consequent.push(kr());
            return s && Pr(s, "SwitchCase"), vr(), Nt.pop(), Pr(e, "SwitchStatement");
        case re:
            return vr(), Ke.test(ft.slice(At, mt)) && Ut(At, "Illegal newline after throw"), e.argument = Dr(), Tr(), Pr(e, "ThrowStatement");
        case ne:
            if (vr(), e.block = Ir(), e.handler = null, Pt === Wt) {
                var l = _r();
                vr(), xr(me), l.param = Jr(), kt && Je(l.param.name) && Ut(l.param.start, "Binding " + l.param.name + " in strict mode"), xr(be), l.guard = null, l.body = Ir(), e.handler = Pr(l, "CatchClause");
            }
            return e.guardedHandlers = Ft, e.finalizer = Or(Zt) ? Ir() : null, e.handler || e.finalizer || Ut(e.start, "Missing catch or finally clause"), Pr(e, "TryStatement");
        case ie:
            return vr(), Lr(e), Tr(), Pr(e, "VariableDeclaration");
        case oe:
            return vr(), e.test = jr(), Nt.push(Cr), e.body = kr(), Nt.pop(), Pr(e, "WhileStatement");
        case se:
            return kt && Ut(mt, "'with' in strict mode"), vr(), e.object = jr(), e.body = kr(), Pr(e, "WithStatement");
        case ve:
            return Ir();
        case we:
            return vr(), Pr(e, "EmptyStatement");
        default:
            var c = Et, p = Dr();
            if (t === Bt && "Identifier" === p.type && Or(Pe)) {
                for(n = 0; n < Nt.length; ++n)Nt[n].name === c && Ut(p.start, "Label '" + c + "' is already declared");
                var h = Pt.isLoop ? "loop" : Pt === ee ? "switch" : null;
                return Nt.push({
                    name: c,
                    kind: h
                }), e.body = kr(), Nt.pop(), e.label = p, Pr(e, "LabeledStatement");
            }
            return e.expression = p, Tr(), Pr(e, "ExpressionStatement");
    }
}
function jr() {
    xr(me);
    var t = Dr();
    return xr(be), t;
}
function Ir(t) {
    var e, r = _r(), n = !0, i = !1;
    for(r.body = [], xr(ve); !Or(ge);){
        var o = kr();
        r.body.push(o), n && t && Er(o) && (e = i, gr(i = !0)), n = !1;
    }
    return i && !e && gr(!1), Pr(r, "BlockStatement");
}
function Ur(t, e) {
    return t.init = e, xr(we), t.test = Pt === we ? null : Dr(), xr(we), t.update = Pt === be ? null : Dr(), xr(be), t.body = kr(), Nt.pop(), Pr(t, "ForStatement");
}
function Fr(t, e) {
    return t.left = e, t.right = Dr(), xr(be), t.body = kr(), Nt.pop(), Pr(t, "ForInStatement");
}
function Lr(t, e) {
    for(t.declarations = [], t.kind = "var";;){
        var r = _r();
        if (r.id = Jr(), kt && Je(r.id.name) && Ut(r.id.start, "Binding " + r.id.name + " in strict mode"), r.init = Or(Te) ? Dr(!0, e) : null, t.declarations.push(Pr(r, "VariableDeclarator")), !Or(_e)) break;
    }
    return t;
}
function Dr(t, e) {
    var r = Mr(e);
    if (!t && Pt === _e) {
        var n = wr(r);
        for(n.expressions = [
            r
        ]; Or(_e);)n.expressions.push(Mr(e));
        return Pr(n, "SequenceExpression");
    }
    return r;
}
function Mr(t) {
    var e = function(t) {
        var e = function(t) {
            return Br(Vr(), -1, t);
        }(t);
        if (Or(Oe)) {
            var r = wr(e);
            return r.test = e, r.consequent = Dr(!0), xr(Pe), r.alternate = Dr(!0, t), Pr(r, "ConditionalExpression");
        }
        return e;
    }(t);
    if (Pt.isAssign) {
        var r = wr(e);
        return r.operator = Et, r.left = e, vr(), r.right = Mr(t), Rr(e), Pr(r, "AssignmentExpression");
    }
    return e;
}
function Br(t, e, r) {
    var n = Pt.binop;
    if (null != n && (!r || Pt !== he) && n > e) {
        var i = wr(t);
        i.left = t, i.operator = Et;
        var o = Pt;
        return vr(), i.right = Br(Vr(), n, r), Br(Pr(i, o === Ce || o === Ne ? "LogicalExpression" : "BinaryExpression"), e, r);
    }
    return t;
}
function Vr() {
    if (Pt.prefix) {
        var t = _r(), e = Pt.isUpdate;
        return t.operator = Et, t.prefix = !0, Ot = !0, vr(), t.argument = Vr(), e ? Rr(t.argument) : kt && "delete" === t.operator && "Identifier" === t.argument.type && Ut(t.start, "Deleting local variable in strict mode"), Pr(t, e ? "UpdateExpression" : "UnaryExpression");
    }
    for(var r = Gr(qr()); Pt.postfix && !Sr();)(t = wr(r)).operator = Et, t.prefix = !1, t.argument = r, Rr(r), vr(), r = Pr(t, "UpdateExpression");
    return r;
}
function Gr(t, e) {
    var r;
    return Or(Ee) ? ((r = wr(t)).object = t, r.property = Jr(!0), r.computed = !1, Gr(Pr(r, "MemberExpression"), e)) : Or(fe) ? ((r = wr(t)).object = t, r.property = Dr(), r.computed = !0, xr(ye), Gr(Pr(r, "MemberExpression"), e)) : !e && Or(me) ? ((r = wr(t)).callee = t, r.arguments = zr(be, !1), Gr(Pr(r, "CallExpression"), e)) : t;
}
function qr() {
    switch(Pt){
        case ue:
            var t = _r();
            return vr(), Pr(t, "ThisExpression");
        case Bt:
            return Jr();
        case Lt:
        case Mt:
        case Dt:
            return (t = _r()).value = Et, t.raw = ft.slice(mt, bt), vr(), Pr(t, "Literal");
        case le:
        case ce:
        case pe:
            return (t = _r()).value = Pt.atomValue, t.raw = Pt.keyword, vr(), Pr(t, "Literal");
        case me:
            var e = _t, r = mt;
            vr();
            var n = Dr();
            return n.start = r, n.end = bt, dt.locations && (n.loc.start = e, n.loc.end = wt), dt.ranges && (n.range = [
                r,
                bt
            ]), xr(be), n;
        case fe:
            return t = _r(), vr(), t.elements = zr(ye, !0, !0), Pr(t, "ArrayExpression");
        case ve:
            return function() {
                var t = _r(), e = !0, r = !1;
                for(t.properties = [], vr(); !Or(ge);){
                    if (e) e = !1;
                    else if (xr(_e), dt.allowTrailingCommas && Or(ge)) break;
                    var n, i = {
                        key: Wr()
                    }, o = !1;
                    if (Or(Pe) ? (i.value = Dr(!0), n = i.kind = "init") : dt.ecmaVersion >= 5 && "Identifier" === i.key.type && ("get" === i.key.name || "set" === i.key.name) ? (o = r = !0, n = i.kind = i.key.name, i.key = Wr(), Pt !== me && Ar(), i.value = Yr(_r(), !1)) : Ar(), "Identifier" === i.key.type && (kt || r)) for(var s = 0; s < t.properties.length; ++s){
                        var a = t.properties[s];
                        if (a.key.name === i.key.name) {
                            var u = n == a.kind || o && "init" === a.kind || "init" === n && ("get" === a.kind || "set" === a.kind);
                            u && !kt && "init" === n && "init" === a.kind && (u = !1), u && Ut(i.key.start, "Redefinition of property");
                        }
                    }
                    t.properties.push(i);
                }
                return Pr(t, "ObjectExpression");
            }();
        case Qt:
            return t = _r(), vr(), Yr(t, !1);
        case ae:
            return function() {
                var t = _r();
                return vr(), t.callee = Gr(qr(), !0), Or(me) ? t.arguments = zr(be, !1) : t.arguments = Ft, Pr(t, "NewExpression");
            }();
        default:
            Ar();
    }
}
function Wr() {
    return Pt === Lt || Pt === Mt ? qr() : Jr(!0);
}
function Yr(t, e) {
    Pt === Bt ? t.id = Jr() : e ? Ar() : t.id = null, t.params = [];
    var r = !0;
    for(xr(me); !Or(be);)r ? r = !1 : xr(_e), t.params.push(Jr());
    var n = Ct, i = Nt;
    if (Ct = !0, Nt = [], t.body = Ir(!0), Ct = n, Nt = i, kt || t.body.body.length && Er(t.body.body[0])) for(var o = t.id ? -1 : 0; o < t.params.length; ++o){
        var s = o < 0 ? t.id : t.params[o];
        if ((ze(s.name) || Je(s.name)) && Ut(s.start, "Defining '" + s.name + "' in strict mode"), o >= 0) for(var a = 0; a < o; ++a)s.name === t.params[a].name && Ut(s.start, "Argument name clash in strict mode");
    }
    return Pr(t, e ? "FunctionDeclaration" : "FunctionExpression");
}
function zr(t, e, r) {
    for(var n = [], i = !0; !Or(t);){
        if (i) i = !1;
        else if (xr(_e), e && dt.allowTrailingCommas && Or(t)) break;
        r && Pt === _e ? n.push(null) : n.push(Dr(!0));
    }
    return n;
}
function Jr(t) {
    var e = _r();
    return e.name = Pt === Bt ? Et : t && !dt.forbidReserved && Pt.keyword || Ar(), Ot = !1, vr(), Pr(e, "Identifier");
}
var Hr = function() {
    function t(e, r) {
        var n, i = "string" == typeof e ? jt(e, t.PARSE_OPTIONS) : e;
        this.ast = i, this.initFunc_ = r, this.paused_ = !1, this.polyfills_ = [], this.functionCounter_ = 0, this.stepFunctions_ = Object.create(null);
        for(var o, s = /^step([A-Z]\w*)$/, a = Object.getOwnPropertyNames(t.prototype), u = 0; u < a.length; u++){
            var l = a[u];
            "function" == typeof t.prototype[l] && (o = l.match(s)) && (this.stepFunctions_[o[1]] = t.prototype[l].bind(this));
        }
        this.global = this.createScope(this.ast, null), this.ast = jt(this.polyfills_.join("\n"), t.PARSE_OPTIONS), this.polyfills_ = void 0, this.stripLocations_(this.ast, void 0, void 0), (n = new Zr(this.ast, this.global)).done = !1, this.stateStack = [
            n
        ], this.run(), this.value = void 0, this.ast = i, (n = new Zr(this.ast, this.global)).done = !1, this.stateStack.length = 0, this.stateStack[0] = n, this.nodeConstructor = n.node.constructor, this.stateStack = this.stateStack, this.OBJECT = this.OBJECT, this.OBJECT_PROTO = this.OBJECT_PROTO, this.FUNCTION = this.FUNCTION, this.FUNCTION_PROTO = this.FUNCTION_PROTO, this.ARRAY = this.ARRAY, this.ARRAY_PROTO = this.ARRAY_PROTO, this.REGEXP = this.REGEXP, this.REGEXP_PROTO = this.REGEXP_PROTO, this.UNDEFINED = void 0, this.NULL = null, this.NAN = NaN, this.TRUE = !0, this.FALSE = !1, this.STRING_EMPTY = "", this.NUMBER_ZERO = 0, this.NUMBER_ONE = 1;
    }
    return t.prototype.wrap = function(t) {
        return t;
    }, t.prototype.unwrap = function(t, e) {
        return t;
    }, t.prototype.appendCode = function(e) {
        var r = this.stateStack[0];
        if (!r || "Program" !== r.node.type) throw Error("Expecting original AST to start with a Program node.");
        var n = "string" == typeof e ? jt(e, t.PARSE_OPTIONS) : e;
        if (!n || "Program" !== n.type) throw Error("Expecting new AST to start with a Program node.");
        this.populateScope_(n, r.scope);
        for(var i, o = 0; i = n.body[o]; o++)r.node.body.push(i);
        r.done = !1;
    }, t.prototype.step = function() {
        var e = this.stateStack, r = e[e.length - 1];
        if (!r) return !1;
        var n = r.node, i = n.type;
        if ("Program" === i && r.done) return !1;
        if (this.paused_) return !0;
        try {
            var o = this.stepFunctions_[i](e, r, n);
        } catch (e) {
            if (e !== t.STEP_ERROR) throw e;
        }
        return o && e.push(o), !!n.end || this.step();
    }, t.prototype.run = function() {
        for(; !this.paused_ && this.step(););
        return this.paused_;
    }, t.prototype.initGlobalScope = function(e) {
        this.setProperty(e, "NaN", NaN, t.READONLY_DESCRIPTOR), this.setProperty(e, "Infinity", 1 / 0, t.READONLY_DESCRIPTOR), this.setProperty(e, "undefined", void 0, t.READONLY_DESCRIPTOR), this.setProperty(e, "window", e, t.READONLY_DESCRIPTOR), this.setProperty(e, "this", e, t.READONLY_DESCRIPTOR), this.setProperty(e, "self", e), this.OBJECT_PROTO = new Xr(null), this.FUNCTION_PROTO = new Xr(this.OBJECT_PROTO), this.initFunction(e), this.initObject(e), e.proto = this.OBJECT_PROTO, this.setProperty(e, "constructor", this.OBJECT), this.initArray(e), this.initString(e), this.initBoolean(e), this.initNumber(e), this.initDate(e), this.initRegExp(e), this.initError(e), this.initMath(e), this.initJSON(e);
        var r = this, n = this.createNativeFunction(function(t) {
            throw EvalError("Can't happen");
        }, !1);
        n.eval = !0, this.setProperty(e, "eval", n), this.setProperty(e, "parseInt", this.createNativeFunction(parseInt, !1)), this.setProperty(e, "parseFloat", this.createNativeFunction(parseFloat, !1)), this.setProperty(e, "isNaN", this.createNativeFunction(isNaN, !1)), this.setProperty(e, "isFinite", this.createNativeFunction(isFinite, !1));
        for(var i = [
            [
                escape,
                "escape"
            ],
            [
                unescape,
                "unescape"
            ],
            [
                decodeURI,
                "decodeURI"
            ],
            [
                decodeURIComponent,
                "decodeURIComponent"
            ],
            [
                encodeURI,
                "encodeURI"
            ],
            [
                encodeURIComponent,
                "encodeURIComponent"
            ]
        ], o = 0; o < i.length; o++){
            var s = function(t) {
                return function(e) {
                    try {
                        return t(e);
                    } catch (t) {
                        r.throwException(r.URI_ERROR, t.message);
                    }
                };
            }(i[o][0]);
            this.setProperty(e, i[o][1], this.createNativeFunction(s, !1), t.NONENUMERABLE_DESCRIPTOR);
        }
        this.initFunc_ && this.initFunc_(this, e);
    }, t.prototype.initFunction = function(e) {
        var r, n = this, i = /^[A-Za-z_$][\w$]*$/;
        r = function(e) {
            if (n.calledWithNew()) var r = this;
            else r = n.createObjectProto(n.FUNCTION_PROTO);
            if (arguments.length) var o = String(arguments[arguments.length - 1]);
            else o = "";
            for(var s = [], a = 0; a < arguments.length - 1; a++){
                var u = String(arguments[a]);
                u.match(i) || n.throwException(n.SYNTAX_ERROR, "Invalid function argument: " + u), s.push(u);
            }
            s = s.join(", "), r.parentScope = n.global;
            try {
                var l = jt("$ = function(" + s + ") {" + o + "};", t.PARSE_OPTIONS);
            } catch (t) {
                n.throwException(n.SYNTAX_ERROR, "Invalid code: " + t.message);
            }
            return 1 !== l.body.length && n.throwException(n.SYNTAX_ERROR, "Invalid code in function body."), r.node = l.body[0].expression.right, n.setProperty(r, "length", r.node.length, t.READONLY_DESCRIPTOR), r;
        }, r.id = this.functionCounter_++, this.FUNCTION = this.createObjectProto(this.FUNCTION_PROTO), this.setProperty(e, "Function", this.FUNCTION), this.setProperty(this.FUNCTION, "prototype", this.FUNCTION_PROTO), this.FUNCTION.nativeFunc = r, this.setProperty(this.FUNCTION_PROTO, "constructor", this.FUNCTION, t.NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.nativeFunc = function() {}, this.FUNCTION_PROTO.nativeFunc.id = this.functionCounter_++, this.setProperty(this.FUNCTION_PROTO, "length", 0, t.READONLY_DESCRIPTOR);
        var o = function(t) {
            if (!(t && t.isObject || n.getScope().strict)) {
                if (null == t) t = n.global;
                else {
                    var e = n.createObjectProto(n.getPrototype(t));
                    e.data = t, t = e;
                }
            }
            return t;
        };
        r = function(t, e) {
            var r = n.stateStack[n.stateStack.length - 1];
            r.func_ = this, r.funcThis_ = o(t), r.arguments_ = [], null != e && (e.isObject ? r.arguments_ = n.pseudoToNative(e) : n.throwException(n.TYPE_ERROR, "CreateListFromArrayLike called on non-object")), r.doneExec_ = !1;
        }, this.setNativeFunctionPrototype(this.FUNCTION, "apply", r), r = function(t, e) {
            var r = n.stateStack[n.stateStack.length - 1];
            r.func_ = this, r.funcThis_ = o(t), r.arguments_ = [];
            for(var i = 1; i < arguments.length; i++)r.arguments_.push(arguments[i]);
            r.doneExec_ = !1;
        }, this.setNativeFunctionPrototype(this.FUNCTION, "call", r), this.polyfills_.push("Object.defineProperty(Function.prototype, 'bind',", "{configurable: true, writable: true, value:", "function(oThis) {", "if (typeof this !== 'function') {", "throw TypeError('What is trying to be bound is not callable');", "}", "var aArgs   = Array.prototype.slice.call(arguments, 1),", "fToBind = this,", "fNOP    = function() {},", "fBound  = function() {", "return fToBind.apply(this instanceof fNOP", "? this", ": oThis,", "aArgs.concat(Array.prototype.slice.call(arguments)));", "};", "if (this.prototype) {", "fNOP.prototype = this.prototype;", "}", "fBound.prototype = new fNOP();", "return fBound;", "}", "});", ""), r = function() {
            return this.toString();
        }, this.setNativeFunctionPrototype(this.FUNCTION, "toString", r), this.setProperty(this.FUNCTION, "toString", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function() {
            return this.valueOf();
        }, this.setNativeFunctionPrototype(this.FUNCTION, "valueOf", r), this.setProperty(this.FUNCTION, "valueOf", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR);
    }, t.prototype.initObject = function(e) {
        var r, n = this;
        r = function(t) {
            if (null == t) return n.calledWithNew() ? this : n.createObjectProto(n.OBJECT_PROTO);
            if (!t.isObject) {
                var e = n.createObjectProto(n.getPrototype(t));
                return e.data = t, e;
            }
            return t;
        }, this.OBJECT = this.createNativeFunction(r, !0), this.setProperty(this.OBJECT, "prototype", this.OBJECT_PROTO), this.setProperty(this.OBJECT_PROTO, "constructor", this.OBJECT), this.setProperty(e, "Object", this.OBJECT);
        var i = function(t) {
            null == t && n.throwException(n.TYPE_ERROR, "Cannot convert '" + t + "' to object");
        };
        r = function(t) {
            i(t);
            var e = t.isObject ? t.properties : t;
            return n.nativeToPseudo(Object.getOwnPropertyNames(e));
        }, this.setProperty(this.OBJECT, "getOwnPropertyNames", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function(t) {
            return i(t), t.isObject ? n.nativeToPseudo(Object.keys(t.properties)) : n.nativeToPseudo(Object.keys(t));
        }, this.setProperty(this.OBJECT, "keys", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function(t) {
            return null === t ? n.createObjectProto(null) : (void 0 !== t && t.isObject || n.throwException(n.TYPE_ERROR, "Object prototype may only be an Object or null"), n.createObjectProto(t));
        }, this.setProperty(this.OBJECT, "create", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push("(function() {", "var create_ = Object.create;", "Object.create = function(proto, props) {", "var obj = create_(proto);", "props && Object.defineProperties(obj, props);", "return obj;", "};", "})();", ""), r = function(t, e, r) {
            return e = String(e), t && t.isObject || n.throwException(n.TYPE_ERROR, "Object.defineProperty called on non-object"), r && r.isObject || n.throwException(n.TYPE_ERROR, "Property description must be an object"), !t.properties[e] && t.preventExtensions && n.throwException(n.TYPE_ERROR, "Can't define property '" + e + "', object is not extensible"), n.setProperty(t, e, ReferenceError, r.properties), t;
        }, this.setProperty(this.OBJECT, "defineProperty", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push("(function() {", "var defineProperty_ = Object.defineProperty;", "Object.defineProperty = function(obj, prop, d1) {", "var d2 = {};", "if ('configurable' in d1) d2.configurable = d1.configurable;", "if ('enumerable' in d1) d2.enumerable = d1.enumerable;", "if ('writable' in d1) d2.writable = d1.writable;", "if ('value' in d1) d2.value = d1.value;", "if ('get' in d1) d2.get = d1.get;", "if ('set' in d1) d2.set = d1.set;", "return defineProperty_(obj, prop, d2);", "};", "})();", "Object.defineProperty(Object, 'defineProperties',", "{configurable: true, writable: true, value:", "function(obj, props) {", "var keys = Object.keys(props);", "for (var i = 0; i < keys.length; i++) {", "Object.defineProperty(obj, keys[i], props[keys[i]]);", "}", "return obj;", "}", "});", ""), r = function(t, e) {
            if (t && t.isObject || n.throwException(n.TYPE_ERROR, "Object.getOwnPropertyDescriptor called on non-object"), (e = String(e)) in t.properties) {
                var r = Object.getOwnPropertyDescriptor(t.properties, e), i = t.getter[e], o = t.setter[e];
                (i || o) && (r.get = i, r.set = o, delete r.value, delete r.writable);
                var s = n.nativeToPseudo(r);
                return "value" in r && n.setProperty(s, "value", r.value), s;
            }
        }, this.setProperty(this.OBJECT, "getOwnPropertyDescriptor", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function(t) {
            return i(t), n.getPrototype(t);
        }, this.setProperty(this.OBJECT, "getPrototypeOf", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function(t) {
            return Boolean(t) && !t.preventExtensions;
        }, this.setProperty(this.OBJECT, "isExtensible", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function(t) {
            return t && t.isObject && (t.preventExtensions = !0), t;
        }, this.setProperty(this.OBJECT, "preventExtensions", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), this.setNativeFunctionPrototype(this.OBJECT, "toString", Xr.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, "toLocaleString", Xr.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, "valueOf", Xr.prototype.valueOf), r = function(t) {
            return i(this), this.isObject ? String(t) in this.properties : this.hasOwnProperty(t);
        }, this.setNativeFunctionPrototype(this.OBJECT, "hasOwnProperty", r), r = function(t) {
            return i(this), Object.prototype.propertyIsEnumerable.call(this.properties, t);
        }, this.setNativeFunctionPrototype(this.OBJECT, "propertyIsEnumerable", r), r = function(t) {
            for(;;){
                if (!(t = n.getPrototype(t))) return !1;
                if (t === this) return !0;
            }
        }, this.setNativeFunctionPrototype(this.OBJECT, "isPrototypeOf", r);
    }, t.prototype.initArray = function(e) {
        var r, n = this;
        r = function(e) {
            if (n.calledWithNew()) var r = this;
            else r = n.createObjectProto(n.ARRAY_PROTO);
            var i = arguments[0];
            if (1 === arguments.length && "number" == typeof i) isNaN(t.legalArrayLength(i)) && n.throwException(n.RANGE_ERROR, "Invalid array length"), r.properties.length = i;
            else {
                for(var o = 0; o < arguments.length; o++)r.properties[o] = arguments[o];
                r.properties.length = o;
            }
            return r;
        }, this.ARRAY = this.createNativeFunction(r, !0), this.ARRAY_PROTO = this.ARRAY.properties.prototype, this.setProperty(e, "Array", this.ARRAY), r = function(t) {
            return t && "Array" === t.class;
        }, this.setProperty(this.ARRAY, "isArray", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function() {
            return Array.prototype.pop.call(this.properties);
        }, this.setNativeFunctionPrototype(this.ARRAY, "pop", r), r = function(t) {
            return Array.prototype.push.apply(this.properties, arguments);
        }, this.setNativeFunctionPrototype(this.ARRAY, "push", r), r = function() {
            return Array.prototype.shift.call(this.properties);
        }, this.setNativeFunctionPrototype(this.ARRAY, "shift", r), r = function(t) {
            return Array.prototype.unshift.apply(this.properties, arguments);
        }, this.setNativeFunctionPrototype(this.ARRAY, "unshift", r), r = function() {
            return Array.prototype.reverse.call(this.properties), this;
        }, this.setNativeFunctionPrototype(this.ARRAY, "reverse", r), r = function(t, e) {
            var r = Array.prototype.splice.apply(this.properties, arguments);
            return n.unwrap && (r = r.map(n.unwrap)), n.nativeToPseudo(r);
        }, this.setNativeFunctionPrototype(this.ARRAY, "splice", r), r = function(t, e) {
            var r = Array.prototype.slice.call(this.properties, t, e);
            return n.unwrap && (r = r.map(n.unwrap)), n.nativeToPseudo(r);
        }, this.setNativeFunctionPrototype(this.ARRAY, "slice", r), r = function(t) {
            return Array.prototype.join.call(this.properties, t);
        }, this.setNativeFunctionPrototype(this.ARRAY, "join", r), r = function(t) {
            for(var e = [], r = 0, i = n.getProperty(this, "length"), o = 0; o < i; o++){
                if (n.hasProperty(this, o)) {
                    var s = n.getProperty(this, o);
                    e[r] = s;
                }
                r++;
            }
            for(o = 0; o < arguments.length; o++){
                var a = arguments[o];
                if (n.isa(a, n.ARRAY)) for(var u = n.getProperty(a, "length"), l = 0; l < u; l++)n.hasProperty(a, l) && (e[r] = n.getProperty(a, l)), r++;
                else e[r] = a;
            }
            return n.unwrap && (e = e.map(n.unwrap)), n.nativeToPseudo(e);
        }, this.setNativeFunctionPrototype(this.ARRAY, "concat", r), r = function(t, e) {
            return Array.prototype.indexOf.apply(this.properties, arguments);
        }, this.setNativeFunctionPrototype(this.ARRAY, "indexOf", r), r = function(t, e) {
            return Array.prototype.lastIndexOf.apply(this.properties, arguments);
        }, this.setNativeFunctionPrototype(this.ARRAY, "lastIndexOf", r), r = function() {
            return Array.prototype.sort.call(this.properties), this;
        }, this.setNativeFunctionPrototype(this.ARRAY, "sort", r), this.polyfills_.push("Object.defineProperty(Array.prototype, 'every',", "{configurable: true, writable: true, value:", "function(callbackfn, thisArg) {", "if (!this || typeof callbackfn !== 'function') throw TypeError();", "var T, k;", "var O = Object(this);", "var len = O.length >>> 0;", "if (arguments.length > 1) T = thisArg;", "k = 0;", "while (k < len) {", "if (k in O && !callbackfn.call(T, O[k], k, O)) return false;", "k++;", "}", "return true;", "}", "});", "Object.defineProperty(Array.prototype, 'filter',", "{configurable: true, writable: true, value:", "function(fun/*, thisArg*/) {", "if (this === void 0 || this === null || typeof fun !== 'function') throw TypeError();", "var t = Object(this);", "var len = t.length >>> 0;", "var res = [];", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in t) {", "var val = t[i];", "if (fun.call(thisArg, val, i, t)) res.push(val);", "}", "}", "return res;", "}", "});", "Object.defineProperty(Array.prototype, 'forEach',", "{configurable: true, writable: true, value:", "function(callback, thisArg) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var T, k;", "var O = Object(this);", "var len = O.length >>> 0;", "if (arguments.length > 1) T = thisArg;", "k = 0;", "while (k < len) {", "if (k in O) callback.call(T, O[k], k, O);", "k++;", "}", "}", "});", "Object.defineProperty(Array.prototype, 'map',", "{configurable: true, writable: true, value:", "function(callback, thisArg) {", "if (!this || typeof callback !== 'function') new TypeError;", "var T, A, k;", "var O = Object(this);", "var len = O.length >>> 0;", "if (arguments.length > 1) T = thisArg;", "A = new Array(len);", "k = 0;", "while (k < len) {", "if (k in O) A[k] = callback.call(T, O[k], k, O);", "k++;", "}", "return A;", "}", "});", "Object.defineProperty(Array.prototype, 'reduce',", "{configurable: true, writable: true, value:", "function(callback /*, initialValue*/) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var t = Object(this), len = t.length >>> 0, k = 0, value;", "if (arguments.length === 2) {", "value = arguments[1];", "} else {", "while (k < len && !(k in t)) k++;", "if (k >= len) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = t[k++];", "}", "for (; k < len; k++) {", "if (k in t) value = callback(value, t[k], k, t);", "}", "return value;", "}", "});", "Object.defineProperty(Array.prototype, 'reduceRight',", "{configurable: true, writable: true, value:", "function(callback /*, initialValue*/) {", "if (null === this || 'undefined' === typeof this || 'function' !== typeof callback) throw TypeError();", "var t = Object(this), len = t.length >>> 0, k = len - 1, value;", "if (arguments.length >= 2) {", "value = arguments[1];", "} else {", "while (k >= 0 && !(k in t)) k--;", "if (k < 0) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = t[k--];", "}", "for (; k >= 0; k--) {", "if (k in t) value = callback(value, t[k], k, t);", "}", "return value;", "}", "});", "Object.defineProperty(Array.prototype, 'some',", "{configurable: true, writable: true, value:", "function(fun/*, thisArg*/) {", "if (!this || typeof fun !== 'function') throw TypeError();", "var t = Object(this);", "var len = t.length >>> 0;", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in t && fun.call(thisArg, t[i], i, t)) {", "return true;", "}", "}", "return false;", "}", "});", "(function() {", "var sort_ = Array.prototype.sort;", "Array.prototype.sort = function(opt_comp) {", "if (typeof opt_comp !== 'function') {", "return sort_.call(this);", "}", "for (var i = 0; i < this.length; i++) {", "var changes = 0;", "for (var j = 0; j < this.length - i - 1; j++) {", "if (opt_comp(this[j], this[j + 1]) > 0) {", "var swap = this[j];", "this[j] = this[j + 1];", "this[j + 1] = swap;", "changes++;", "}", "}", "if (!changes) break;", "}", "return this;", "};", "})();", "Object.defineProperty(Array.prototype, 'toLocaleString',", "{configurable: true, writable: true, value:", "function() {", "var out = [];", "for (var i = 0; i < this.length; i++) {", "out[i] = (this[i] === null || this[i] === undefined) ? '' : this[i].toLocaleString();", "}", "return out.join(',');", "}", "});", "");
    }, t.prototype.initString = function(e) {
        var r, n = this;
        r = function(t) {
            return t = String(t), n.calledWithNew() ? (this.data = t, this) : t;
        }, this.STRING = this.createNativeFunction(r, !0), this.setProperty(e, "String", this.STRING), this.setProperty(this.STRING, "fromCharCode", this.createNativeFunction(String.fromCharCode, !1), t.NONENUMERABLE_DESCRIPTOR);
        for(var i = [
            "trim",
            "toLowerCase",
            "toUpperCase",
            "toLocaleLowerCase",
            "toLocaleUpperCase",
            "charAt",
            "charCodeAt",
            "substring",
            "slice",
            "substr",
            "indexOf",
            "lastIndexOf",
            "concat"
        ], o = 0; o < i.length; o++)this.setNativeFunctionPrototype(this.STRING, i[o], String.prototype[i[o]]);
        r = function(t, e, r) {
            return e = e ? n.pseudoToNative(e) : void 0, r = r ? n.pseudoToNative(r) : void 0, String(this).localeCompare(t, e, r);
        }, this.setNativeFunctionPrototype(this.STRING, "localeCompare", r), r = function(t, e) {
            n.isa(t, n.REGEXP) && (t = t.data);
            var r = String(this).split(t, e);
            return n.nativeToPseudo(r);
        }, this.setNativeFunctionPrototype(this.STRING, "split", r), r = function(t) {
            t = t ? t.data : void 0;
            var e = String(this).match(t);
            return e ? n.nativeToPseudo(e) : null;
        }, this.setNativeFunctionPrototype(this.STRING, "match", r), r = function(t) {
            return n.isa(t, n.REGEXP) && (t = t.data), String(this).search(t);
        }, this.setNativeFunctionPrototype(this.STRING, "search", r), r = function(t, e) {
            return String(this).replace(t.data || t, e);
        }, this.setNativeFunctionPrototype(this.STRING, "replace", r), this.polyfills_.push("(function() {", "var replace_ = String.prototype.replace;", "String.prototype.replace = function(substr, newSubstr) {", "if (typeof newSubstr !== 'function') {", "return replace_.call(this, substr, newSubstr);", "}", "var str = this;", "if (substr instanceof RegExp) {", "var subs = [];", "var m = substr.exec(str);", "while (m) {", "m.push(m.index, str);", "var inject = newSubstr.apply(null, m);", "subs.push([m.index, m[0].length, inject]);", "m = substr.global ? substr.exec(str) : null;", "}", "for (var i = subs.length - 1; i >= 0; i--) {", "str = str.substring(0, subs[i][0]) + subs[i][2] + str.substring(subs[i][0] + subs[i][1]);", "}", "} else {", "var i = str.indexOf(substr);", "if (i !== -1) {", "var inject = newSubstr(str.substr(i, substr.length), i, str);", "str = str.substring(0, i) + inject + str.substring(i + substr.length);", "}", "}", "return str;", "};", "})();", "");
    }, t.prototype.initBoolean = function(t) {
        var e, r = this;
        e = function(t) {
            return t = Boolean(t), r.calledWithNew() ? (this.data = t, this) : t;
        }, this.BOOLEAN = this.createNativeFunction(e, !0), this.setProperty(t, "Boolean", this.BOOLEAN);
    }, t.prototype.initNumber = function(e) {
        var r, n = this;
        r = function(t) {
            return t = Number(t), n.calledWithNew() ? (this.data = t, this) : t;
        }, this.NUMBER = this.createNativeFunction(r, !0), this.setProperty(e, "Number", this.NUMBER);
        for(var i = [
            "MAX_VALUE",
            "MIN_VALUE",
            "NaN",
            "NEGATIVE_INFINITY",
            "POSITIVE_INFINITY"
        ], o = 0; o < i.length; o++)this.setProperty(this.NUMBER, i[o], Number[i[o]], t.READONLY_NONENUMERABLE_DESCRIPTOR);
        r = function(t) {
            try {
                return Number(this).toExponential(t);
            } catch (t) {
                n.throwException(n.ERROR, t.message);
            }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toExponential", r), r = function(t) {
            try {
                return Number(this).toFixed(t);
            } catch (t) {
                n.throwException(n.ERROR, t.message);
            }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toFixed", r), r = function(t) {
            try {
                return Number(this).toPrecision(t);
            } catch (t) {
                n.throwException(n.ERROR, t.message);
            }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toPrecision", r), r = function(t) {
            try {
                return Number(this).toString(t);
            } catch (t) {
                n.throwException(n.ERROR, t.message);
            }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toString", r), r = function(t, e) {
            return t = t ? n.pseudoToNative(t) : void 0, e = e ? n.pseudoToNative(e) : void 0, Number(this).toLocaleString(t, e);
        }, this.setNativeFunctionPrototype(this.NUMBER, "toLocaleString", r);
    }, t.prototype.initDate = function(e) {
        var r, n = this;
        r = function(t, e) {
            if (!n.calledWithNew()) return Date();
            var r = [
                null
            ].concat([].slice.call(arguments));
            return this.data = new (Function.prototype.bind.apply(Date, r)), this;
        }, this.DATE = this.createNativeFunction(r, !0), this.setProperty(e, "Date", this.DATE), this.setProperty(this.DATE, "now", this.createNativeFunction(Date.now, !1), t.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, "parse", this.createNativeFunction(Date.parse, !1), t.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, "UTC", this.createNativeFunction(Date.UTC, !1), t.NONENUMERABLE_DESCRIPTOR);
        for(var i = [
            "getDate",
            "getDay",
            "getFullYear",
            "getHours",
            "getMilliseconds",
            "getMinutes",
            "getMonth",
            "getSeconds",
            "getTime",
            "getTimezoneOffset",
            "getUTCDate",
            "getUTCDay",
            "getUTCFullYear",
            "getUTCHours",
            "getUTCMilliseconds",
            "getUTCMinutes",
            "getUTCMonth",
            "getUTCSeconds",
            "getYear",
            "setDate",
            "setFullYear",
            "setHours",
            "setMilliseconds",
            "setMinutes",
            "setMonth",
            "setSeconds",
            "setTime",
            "setUTCDate",
            "setUTCFullYear",
            "setUTCHours",
            "setUTCMilliseconds",
            "setUTCMinutes",
            "setUTCMonth",
            "setUTCSeconds",
            "setYear",
            "toDateString",
            "toISOString",
            "toJSON",
            "toGMTString",
            "toLocaleDateString",
            "toLocaleString",
            "toLocaleTimeString",
            "toTimeString",
            "toUTCString"
        ], o = 0; o < i.length; o++)r = function(t) {
            return function(e) {
                for(var r = [], i = 0; i < arguments.length; i++)r[i] = n.pseudoToNative(arguments[i]);
                return this.data[t].apply(this.data, r);
            };
        }(i[o]), this.setNativeFunctionPrototype(this.DATE, i[o], r);
    }, t.prototype.initRegExp = function(e) {
        var r, n = this;
        r = function(t, e) {
            if (n.calledWithNew()) var r = this;
            else r = n.createObjectProto(n.REGEXP_PROTO);
            return t = t ? t.toString() : "", e = e ? e.toString() : "", n.populateRegExp(r, new RegExp(t, e)), r;
        }, this.REGEXP = this.createNativeFunction(r, !0), this.REGEXP_PROTO = this.REGEXP.properties.prototype, this.setProperty(e, "RegExp", this.REGEXP), this.setProperty(this.REGEXP.properties.prototype, "global", void 0, t.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "ignoreCase", void 0, t.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "multiline", void 0, t.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "source", "(?:)", t.READONLY_NONENUMERABLE_DESCRIPTOR), r = function(t) {
            return this.data.test(t);
        }, this.setNativeFunctionPrototype(this.REGEXP, "test", r), r = function(t) {
            t = t.toString(), this.data.lastIndex = Number(n.getProperty(this, "lastIndex"));
            var e = this.data.exec(t);
            if (n.setProperty(this, "lastIndex", this.data.lastIndex), e) {
                for(var r = n.createObjectProto(n.ARRAY_PROTO), i = 0; i < e.length; i++)n.setProperty(r, i, e[i]);
                return n.setProperty(r, "index", e.index), n.setProperty(r, "input", e.input), r;
            }
            return null;
        }, this.setNativeFunctionPrototype(this.REGEXP, "exec", r);
    }, t.prototype.initError = function(e) {
        var r = this;
        this.ERROR = this.createNativeFunction(function(e) {
            if (r.calledWithNew()) var n = this;
            else n = r.createObject(r.ERROR);
            return e && r.setProperty(n, "message", String(e), t.NONENUMERABLE_DESCRIPTOR), n;
        }, !0), this.setProperty(e, "Error", this.ERROR), this.setProperty(this.ERROR.properties.prototype, "message", "", t.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, "name", "Error", t.NONENUMERABLE_DESCRIPTOR);
        var n = function(n) {
            var i = r.createNativeFunction(function(e) {
                if (r.calledWithNew()) var n = this;
                else n = r.createObject(i);
                return e && r.setProperty(n, "message", String(e), t.NONENUMERABLE_DESCRIPTOR), n;
            }, !0);
            return r.setProperty(i, "prototype", r.createObject(r.ERROR)), r.setProperty(i.properties.prototype, "name", n, t.NONENUMERABLE_DESCRIPTOR), r.setProperty(e, n, i), i;
        };
        this.EVAL_ERROR = n("EvalError"), this.RANGE_ERROR = n("RangeError"), this.REFERENCE_ERROR = n("ReferenceError"), this.SYNTAX_ERROR = n("SyntaxError"), this.TYPE_ERROR = n("TypeError"), this.URI_ERROR = n("URIError");
    }, t.prototype.initMath = function(e) {
        var r = this.createObjectProto(this.OBJECT_PROTO);
        this.setProperty(e, "Math", r);
        for(var n = [
            "E",
            "LN2",
            "LN10",
            "LOG2E",
            "LOG10E",
            "PI",
            "SQRT1_2",
            "SQRT2"
        ], i = 0; i < n.length; i++)this.setProperty(r, n[i], Math[n[i]], t.READONLY_NONENUMERABLE_DESCRIPTOR);
        var o = [
            "abs",
            "acos",
            "asin",
            "atan",
            "atan2",
            "ceil",
            "cos",
            "exp",
            "floor",
            "log",
            "max",
            "min",
            "pow",
            "random",
            "round",
            "sin",
            "sqrt",
            "tan"
        ];
        for(i = 0; i < o.length; i++)this.setProperty(r, o[i], this.createNativeFunction(Math[o[i]], !1), t.NONENUMERABLE_DESCRIPTOR);
    }, t.prototype.initJSON = function(t) {
        var e = this, r = e.createObjectProto(this.OBJECT_PROTO);
        this.setProperty(t, "JSON", r);
        var n = function(t) {
            try {
                var r = JSON.parse(t.toString());
            } catch (t) {
                e.throwException(e.SYNTAX_ERROR, t.message);
            }
            return e.nativeToPseudo(r);
        };
        this.setProperty(r, "parse", this.createNativeFunction(n, !1)), n = function(t) {
            var r = e.pseudoToNative(t);
            try {
                var n = JSON.stringify(r);
            } catch (t) {
                e.throwException(e.TYPE_ERROR, t.message);
            }
            return n;
        }, this.setProperty(r, "stringify", this.createNativeFunction(n, !1));
    }, t.prototype.isa = function(t, e) {
        if (null == t || !e) return !1;
        var r = e.properties.prototype;
        if (t === r) return !0;
        for(var n = this.getPrototype(t); n;){
            if (n === r) return !0;
            n = n.proto;
        }
        return !1;
    }, t.legalArrayLength = function(t) {
        var e = t >>> 0;
        return e === Number(t) ? e : NaN;
    }, t.legalArrayIndex = function(t) {
        var e = t >>> 0;
        return String(e) === String(t) && 4294967295 !== e ? e : NaN;
    }, t.prototype.createObject = function(t) {
        return this.createObjectProto(t && t.properties.prototype);
    }, t.prototype.createObjectProto = function(t) {
        var e = new Xr(t);
        return this.isa(e, this.FUNCTION) && (this.setProperty(e, "prototype", this.createObjectProto(this.OBJECT_PROTO || null)), e.class = "Function"), this.isa(e, this.ARRAY) && (this.setProperty(e, "length", 0, {
            configurable: !1,
            enumerable: !1,
            writable: !0
        }), e.class = "Array"), this.isa(e, this.ERROR) && (e.class = "Error"), e;
    }, t.prototype.populateRegExp = function(e, r) {
        e.data = r, this.setProperty(e, "lastIndex", r.lastIndex, t.NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "source", r.source, t.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "global", r.global, t.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "ignoreCase", r.ignoreCase, t.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "multiline", r.multiline, t.READONLY_NONENUMERABLE_DESCRIPTOR);
    }, t.prototype.createFunction = function(e, r) {
        var n = this.createObjectProto(this.FUNCTION_PROTO);
        return n.parentScope = r, n.node = e, this.setProperty(n, "length", n.node.params.length, t.READONLY_DESCRIPTOR), n;
    }, t.prototype.createNativeFunction = function(e, r) {
        var n = this.createObjectProto(this.FUNCTION_PROTO);
        return n.nativeFunc = e, e.id = this.functionCounter_++, this.setProperty(n, "length", e.length, t.READONLY_DESCRIPTOR), r ? this.setProperty(n.properties.prototype, "constructor", n, t.NONENUMERABLE_DESCRIPTOR) : !1 === r && (n.illegalConstructor = !0, this.setProperty(n, "prototype", void 0)), n;
    }, t.prototype.createAsyncFunction = function(e) {
        var r = this.createObjectProto(this.FUNCTION_PROTO);
        return r.asyncFunc = e, e.id = this.functionCounter_++, this.setProperty(r, "length", e.length, t.READONLY_DESCRIPTOR), r;
    }, t.prototype.nativeToPseudo = function(t) {
        if ("boolean" == typeof t || "number" == typeof t || "string" == typeof t || null == t) return t;
        if (t instanceof RegExp) {
            var e = this.createObjectProto(this.REGEXP_PROTO);
            return this.populateRegExp(e, t), e;
        }
        if (t instanceof Function) {
            var r = this;
            return this.createNativeFunction(function() {
                return r.nativeToPseudo(t.apply(r, Array.prototype.slice.call(arguments).map(function(t) {
                    return r.pseudoToNative(t);
                })));
            }, void 0);
        }
        var n;
        if (Array.isArray(t)) {
            n = this.createObjectProto(this.ARRAY_PROTO);
            for(var i = 0; i < t.length; i++)i in t && this.setProperty(n, i, this.wrap ? this.wrap(t[i]) : this.nativeToPseudo(t[i]));
        } else for(var o in n = this.createObjectProto(this.OBJECT_PROTO), t)this.setProperty(n, o, this.wrap ? this.wrap(t[i]) : this.nativeToPseudo(t[i]));
        return n;
    }, t.prototype.pseudoToNative = function(t, e) {
        if ("boolean" == typeof t || "number" == typeof t || "string" == typeof t || null == t) return t;
        if (this.isa(t, this.REGEXP)) return t.data;
        var r, n = e || {
            pseudo: [],
            native: []
        };
        if (-1 !== (o = n.pseudo.indexOf(t))) return n.native[o];
        if (n.pseudo.push(t), this.isa(t, this.ARRAY)) {
            r = [], n.native.push(r);
            for(var i = this.getProperty(t, "length"), o = 0; o < i; o++)this.hasProperty(t, o) && (r[o] = this.unwrap ? this.unwrap(this.getProperty(t, o), n) : this.pseudoToNative(this.getProperty(t, o), n));
        } else {
            if (t._native) return t._native;
            r = {}, n.native.push(r);
            var s = void 0;
            for(var a in t.properties)s = t.properties[a], r[a] = this.unwrap ? this.unwrap(s, n) : this.pseudoToNative(s, n);
        }
        return n.pseudo.pop(), n.native.pop(), r;
    }, t.prototype.getPrototype = function(t) {
        switch(typeof t){
            case "number":
                return this.NUMBER.properties.prototype;
            case "boolean":
                return this.BOOLEAN.properties.prototype;
            case "string":
                return this.STRING.properties.prototype;
        }
        return t ? t.proto : null;
    }, t.prototype.getProperty = function(e, r) {
        if (r = String(r), null == e && this.throwException(this.TYPE_ERROR, "Cannot read property '" + r + "' of " + e), "length" === r) {
            if (this.isa(e, this.STRING)) return String(e).length;
        } else if (r.charCodeAt(0) < 64 && this.isa(e, this.STRING)) {
            var n = t.legalArrayIndex(r);
            if (!isNaN(n) && n < String(e).length) return String(e)[n];
        }
        do {
            var i = e;
            if (i.properties && r in i.properties) {
                var o = i.getter[r];
                return o ? (o.isGetter = !0, o) : i.properties[r];
            }
            if (void 0 !== i._native && "_" !== r.charAt(0) && "function" != typeof i._native[r]) return this.wrap ? this.wrap(i._native[r]) : i._native[r];
        }while (e = this.getPrototype(e));
    }, t.prototype.hasProperty = function(e, r) {
        if (!e.isObject) throw TypeError("Primitive data type has no properties");
        if ("length" === (r = String(r)) && this.isa(e, this.STRING)) return !0;
        if (this.isa(e, this.STRING)) {
            var n = t.legalArrayIndex(r);
            if (!isNaN(n) && n < String(e).length) return !0;
        }
        do {
            var i = e;
            if (i.properties && r in i.properties) return !0;
            if (void 0 !== i._native && "_" != r.charAt(0)) {
                var o = typeof i._native[r];
                return "function" !== o && ("undefined" !== o || $r(i._native.constructor, r));
            }
        }while (e = this.getPrototype(e));
        return !1;
    }, t.prototype.setProperty = function(e, r, n, i) {
        r = String(r), null == e && this.throwException(this.TYPE_ERROR, "Cannot set property '" + r + "' of " + e), i && ("get" in i || "set" in i) && ("value" in i || "writable" in i) && this.throwException(this.TYPE_ERROR, "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
        var o = !this.stateStack || this.getScope().strict;
        if (e.isObject) {
            if (this.isa(e, this.STRING)) {
                var s = t.legalArrayIndex(r);
                if ("length" === r || !isNaN(s) && s < String(e).length) return void (o && this.throwException(this.TYPE_ERROR, "Cannot assign to read only property '" + r + "' of String '" + e.data + "'"));
            }
            if ("Array" === e.class) {
                var a = e.properties.length, u = void 0;
                if ("length" === r) {
                    if (n = t.legalArrayLength(n), isNaN(n) && this.throwException(this.RANGE_ERROR, "Invalid array length"), n < a) for(u in e.properties)u = t.legalArrayIndex(u), !isNaN(u) && n <= u && delete e.properties[u];
                } else isNaN(u = t.legalArrayIndex(r)) || (e.properties.length = Math.max(a, u + 1));
            }
            if (!e.preventExtensions || r in e.properties) {
                if (i) {
                    "get" in i && (i.get ? e.getter[r] = i.get : delete e.getter[r]), "set" in i && (i.set ? e.setter[r] = i.set : delete e.setter[r]);
                    var l = {};
                    "configurable" in i && (l.configurable = i.configurable), "enumerable" in i && (l.enumerable = i.enumerable), "writable" in i && (l.writable = i.writable, delete e.getter[r], delete e.setter[r]), "value" in i ? (l.value = i.value, delete e.getter[r], delete e.setter[r]) : n !== ReferenceError && (l.value = n, delete e.getter[r], delete e.setter[r]);
                    try {
                        Object.defineProperty(e.properties, r, l);
                    } catch (t) {
                        this.throwException(this.TYPE_ERROR, "Cannot redefine property: " + r);
                    }
                } else {
                    if (n === ReferenceError) throw ReferenceError("Value not specified.");
                    if (void 0 !== e._native && "_" != r.charAt(0)) {
                        var c = typeof e._native[r];
                        if ("function" !== c && ("undefined" !== c || $r(e._native.constructor, r))) {
                            var p = this.unwrap ? this.unwrap(n) : n;
                            return void (e._native[r] = p);
                        }
                    }
                    for(var h = e; !(r in h.properties);)if (!(h = this.getPrototype(h))) {
                        h = e;
                        break;
                    }
                    if (h.setter && h.setter[r]) return h.setter[r];
                    if (h.getter && h.getter[r]) o && this.throwException(this.TYPE_ERROR, "Cannot set property '" + r + "' of object '" + e + "' which only has a getter");
                    else try {
                        e.properties[r] = n;
                    } catch (t) {
                        o && this.throwException(this.TYPE_ERROR, "Cannot assign to read only property '" + r + "' of object '" + e + "'");
                    }
                }
            } else o && this.throwException(this.TYPE_ERROR, "Can't add property '" + r + "', object is not extensible");
        } else o && this.throwException(this.TYPE_ERROR, "Can't create property '" + r + "' on '" + e + "'");
    }, t.prototype.setNativeFunctionPrototype = function(e, r, n) {
        this.setProperty(e.properties.prototype, r, this.createNativeFunction(n, !1), t.NONENUMERABLE_DESCRIPTOR);
    }, t.prototype.getScope = function() {
        var t = this.stateStack[this.stateStack.length - 1].scope;
        if (!t) throw Error("No scope found.");
        return t;
    }, t.prototype.createScope = function(t, e) {
        var r = this.createObjectProto(null);
        if (r.parentScope = e, e || this.initGlobalScope(r), this.populateScope_(t, r), r.strict = !1, e && e.strict) r.strict = !0;
        else {
            var n = t.body && t.body[0];
            n && n.expression && "Literal" === n.expression.type && "use strict" === n.expression.value && (r.strict = !0);
        }
        return r;
    }, t.prototype.createSpecialScope = function(t, e) {
        if (!t) throw Error("parentScope required");
        var r = e || this.createObjectProto(null);
        return r.parentScope = t, r.strict = t.strict, r;
    }, t.prototype.getValueFromScope = function(t) {
        for(var e = this.getScope(); e && e !== this.global;){
            if (t in e.properties) return e.properties[t];
            e = e.parentScope;
        }
        if (e === this.global && this.hasProperty(e, t)) return this.getProperty(e, t);
        var r = this.stateStack[this.stateStack.length - 1].node;
        "UnaryExpression" === r.type && "typeof" === r.operator || this.throwException(this.REFERENCE_ERROR, t + " is not defined");
    }, t.prototype.setValueToScope = function(t, e) {
        for(var r = this.getScope(), n = r.strict; r && r !== this.global;){
            if (t in r.properties) return void (r.properties[t] = e);
            r = r.parentScope;
        }
        if (r === this.global && (!n || this.hasProperty(r, t))) return this.setProperty(r, t, e);
        this.throwException(this.REFERENCE_ERROR, t + " is not defined");
    }, t.prototype.populateScope_ = function(e, r) {
        if ("VariableDeclaration" === e.type) for(var n = 0; n < e.declarations.length; n++)this.setProperty(r, e.declarations[n].id.name, void 0, t.VARIABLE_DESCRIPTOR);
        else {
            if ("FunctionDeclaration" === e.type) return void this.setProperty(r, e.id.name, this.createFunction(e, r), t.VARIABLE_DESCRIPTOR);
            if ("FunctionExpression" === e.type) return;
            if ("ExpressionStatement" === e.type) return;
        }
        var i = e.constructor;
        for(var o in e){
            var s = e[o];
            if (s && "object" == typeof s) {
                if (Array.isArray(s)) for(n = 0; n < s.length; n++)s[n] && s[n].constructor === i && this.populateScope_(s[n], r);
                else s.constructor === i && this.populateScope_(s, r);
            }
        }
    }, t.prototype.stripLocations_ = function(t, e, r) {
        for(var n in e ? t.start = e : delete t.start, r ? t.end = r : delete t.end, t)if (t.hasOwnProperty(n)) {
            var i = t[n];
            i && "object" == typeof i && this.stripLocations_(i, e, r);
        }
    }, t.prototype.calledWithNew = function() {
        return this.stateStack[this.stateStack.length - 1].isConstructor;
    }, t.prototype.getValue = function(e) {
        return e[0] === t.SCOPE_REFERENCE ? this.getValueFromScope(e[1]) : this.getProperty(e[0], e[1]);
    }, t.prototype.setValue = function(e, r) {
        return e[0] === t.SCOPE_REFERENCE ? this.setValueToScope(e[1], r) : this.setProperty(e[0], e[1], r);
    }, t.prototype.throwException = function(e, r) {
        if (void 0 === r) var n = e;
        else n = this.createObject(e), this.setProperty(n, "message", r, t.NONENUMERABLE_DESCRIPTOR);
        throw this.executeException(n), t.STEP_ERROR;
    }, t.prototype.executeException = function(t) {
        var e, r = this.stateStack.slice();
        do {
            this.stateStack.pop();
            var n = this.stateStack[this.stateStack.length - 1];
            if ("TryStatement" === n.node.type) return void (n.throwValue = t);
        }while (n && "Program" !== n.node.type);
        if (this.isa(t, this.ERROR)) {
            var i = {
                EvalError: EvalError,
                RangeError: RangeError,
                ReferenceError: ReferenceError,
                SyntaxError: SyntaxError,
                TypeError: TypeError,
                URIError: URIError
            }, o = this.getProperty(t, "name").toString(), s = this.getProperty(t, "message").valueOf();
            e = (i[o] || Error)(s);
        } else e = t.toString();
        throw this.stateStack = r, e;
    }, t.prototype.createGetter_ = function(t, e) {
        var r = Array.isArray(e) ? e[0] : e, n = new this.nodeConstructor;
        n.type = "CallExpression";
        var i = new Zr(n, this.stateStack[this.stateStack.length - 1].scope);
        return i.doneCallee_ = !0, i.funcThis_ = r, i.func_ = t, i.doneArgs_ = !0, i.arguments_ = [], i;
    }, t.prototype.createSetter_ = function(t, e, r) {
        var n = Array.isArray(e) ? e[0] : this.global, i = new this.nodeConstructor;
        i.type = "CallExpression";
        var o = new Zr(i, this.stateStack[this.stateStack.length - 1].scope);
        return o.doneCallee_ = !0, o.funcThis_ = n, o.func_ = t, o.doneArgs_ = !0, o.arguments_ = [
            r
        ], o;
    }, t.prototype.stepArrayExpression = function(t, e, r) {
        var n = r.elements, i = e.n_ || 0;
        for(e.array_ ? (this.setProperty(e.array_, i, e.value), i++) : (e.array_ = this.createObjectProto(this.ARRAY_PROTO), e.array_.properties.length = n.length); i < n.length;){
            if (n[i]) return e.n_ = i, new Zr(n[i], e.scope);
            i++;
        }
        t.pop(), t[t.length - 1].value = e.array_;
    }, t.prototype.stepAssignmentExpression = function(t, e, r) {
        if (!e.doneLeft_) {
            e.doneLeft_ = !0;
            var n = new Zr(r.left, e.scope);
            return n.components = !0, n;
        }
        if (!e.doneRight_) {
            if (e.leftReference_ || (e.leftReference_ = e.value), e.doneGetter_ && (e.leftValue_ = e.value), !e.doneGetter_ && "=" !== r.operator) {
                var i = this.getValue(e.leftReference_);
                if (e.leftValue_ = i, i && "object" == typeof i && i.isGetter) {
                    i.isGetter = !1, e.doneGetter_ = !0;
                    var o = i;
                    return this.createGetter_(o, e.leftReference_);
                }
            }
            return e.doneRight_ = !0, new Zr(r.right, e.scope);
        }
        if (e.doneSetter_) return t.pop(), void (t[t.length - 1].value = e.doneSetter_);
        var s = e.leftValue_, a = e.value;
        switch(r.operator){
            case "=":
                s = a;
                break;
            case "+=":
                s += a;
                break;
            case "-=":
                s -= a;
                break;
            case "*=":
                s *= a;
                break;
            case "/=":
                s /= a;
                break;
            case "%=":
                s %= a;
                break;
            case "<<=":
                s <<= a;
                break;
            case ">>=":
                s >>= a;
                break;
            case ">>>=":
                s >>>= a;
                break;
            case "&=":
                s &= a;
                break;
            case "^=":
                s ^= a;
                break;
            case "|=":
                s |= a;
                break;
            default:
                throw SyntaxError("Unknown assignment expression: " + r.operator);
        }
        var u = this.setValue(e.leftReference_, s);
        if (u) return e.doneSetter_ = s, this.createSetter_(u, e.leftReference_, s);
        t.pop(), t[t.length - 1].value = s;
    }, t.prototype.stepBinaryExpression = function(t, e, r) {
        if (!e.doneLeft_) return e.doneLeft_ = !0, new Zr(r.left, e.scope);
        if (!e.doneRight_) return e.doneRight_ = !0, e.leftValue_ = e.value, new Zr(r.right, e.scope);
        t.pop();
        var n, i = e.leftValue_, o = e.value;
        switch(r.operator){
            case "==":
                n = i == o;
                break;
            case "!=":
                n = i != o;
                break;
            case "===":
                n = i === o;
                break;
            case "!==":
                n = i !== o;
                break;
            case ">":
                n = i > o;
                break;
            case ">=":
                n = i >= o;
                break;
            case "<":
                n = i < o;
                break;
            case "<=":
                n = i <= o;
                break;
            case "+":
                n = i + o;
                break;
            case "-":
                n = i - o;
                break;
            case "*":
                n = i * o;
                break;
            case "/":
                n = i / o;
                break;
            case "%":
                n = i % o;
                break;
            case "&":
                n = i & o;
                break;
            case "|":
                n = i | o;
                break;
            case "^":
                n = i ^ o;
                break;
            case "<<":
                n = i << o;
                break;
            case ">>":
                n = i >> o;
                break;
            case ">>>":
                n = i >>> o;
                break;
            case "in":
                o && o.isObject || this.throwException(this.TYPE_ERROR, "'in' expects an object, not '" + o + "'"), n = this.hasProperty(o, i);
                break;
            case "instanceof":
                this.isa(o, this.FUNCTION) || this.throwException(this.TYPE_ERROR, "Right-hand side of instanceof is not an object"), n = !!i.isObject && this.isa(i, o);
                break;
            default:
                throw SyntaxError("Unknown binary operator: " + r.operator);
        }
        t[t.length - 1].value = n;
    }, t.prototype.stepBlockStatement = function(t, e, r) {
        var n = e.n_ || 0, i = r.body[n];
        if (i) return e.n_ = n + 1, new Zr(i, e.scope);
        t.pop();
    }, t.prototype.stepBreakStatement = function(t, e, r) {
        t.pop();
        var n = null;
        for(r.label && (n = r.label.name); e && "CallExpression" !== e.node.type && "NewExpression" !== e.node.type;){
            if (n) {
                if (e.labels && -1 !== e.labels.indexOf(n)) return;
            } else if (e.isLoop || e.isSwitch) return;
            e = t.pop();
        }
        throw SyntaxError("Illegal break statement");
    }, t.prototype.stepCallExpression = function(e, r, n) {
        if (!r.doneCallee_) {
            r.doneCallee_ = 1;
            var i = new Zr(n.callee, r.scope);
            return i.components = !0, i;
        }
        if (1 === r.doneCallee_) {
            r.doneCallee_ = 2;
            var o = r.value;
            if (Array.isArray(o)) {
                if (r.func_ = this.getValue(o), o[0] !== t.SCOPE_REFERENCE && (r.funcThis_ = o[0]), (o = r.func_) && "object" == typeof o && o.isGetter) return o.isGetter = !1, r.doneCallee_ = 1, this.createGetter_(o, r.value);
            } else r.func_ = o;
            r.arguments_ = [], r.n_ = 0;
        }
        if (o = r.func_, !r.doneArgs_) {
            if (0 !== r.n_ && r.arguments_.push(r.value), n.arguments[r.n_]) return new Zr(n.arguments[r.n_++], r.scope);
            "NewExpression" === n.type ? (o.illegalConstructor && this.throwException(this.TYPE_ERROR, o + " is not a constructor"), r.funcThis_ = this.createObject(o), r.isConstructor = !0) : void 0 === r.funcThis_ && (r.funcThis_ = r.scope.strict ? void 0 : this.global), r.doneArgs_ = !0;
        }
        if (r.doneExec_) e.pop(), r.isConstructor && "object" != typeof r.value ? e[e.length - 1].value = r.funcThis_ : e[e.length - 1].value = r.value;
        else {
            r.doneExec_ = !0, o && o.isObject || (console.log("non-function called", o, r), this.throwException(this.TYPE_ERROR, o + " is not a function"));
            var s = o.node;
            if (s) {
                for(var a = this.createScope(s.body, o.parentScope), u = 0; u < s.params.length; u++){
                    var l = s.params[u].name, c = r.arguments_.length > u ? r.arguments_[u] : void 0;
                    this.setProperty(a, l, c);
                }
                var p = this.createObjectProto(this.ARRAY_PROTO);
                for(u = 0; u < r.arguments_.length; u++)this.setProperty(p, u, r.arguments_[u]);
                this.setProperty(a, "arguments", p);
                var h = s.id && s.id.name;
                return h && this.setProperty(a, h, o), this.setProperty(a, "this", r.funcThis_, t.READONLY_DESCRIPTOR), r.value = void 0, new Zr(s.body, a);
            }
            if (o.eval) {
                var d = r.arguments_[0];
                if ("string" == typeof d) {
                    try {
                        var f = jt(d.toString(), t.PARSE_OPTIONS);
                    } catch (t) {
                        this.throwException(this.SYNTAX_ERROR, "Invalid code: " + t.message);
                    }
                    var y = new this.nodeConstructor;
                    return y.type = "EvalProgram_", y.body = f.body, this.stripLocations_(y, n.start, n.end), (a = r.scope).strict ? a = this.createScope(f, a) : this.populateScope_(f, a), this.value = void 0, new Zr(y, a);
                }
                r.value = d;
            } else if (o.nativeFunc) void 0 !== r.funcThis_ && void 0 !== r.funcThis_._native ? r.value = o.nativeFunc.call(r.funcThis_, r.arguments_) : r.value = o.nativeFunc.apply(r.funcThis_, r.arguments_);
            else {
                if (o.asyncFunc) {
                    var v = this, g = r.arguments_.concat(function(t) {
                        r.value = t, v.paused_ = !1;
                    });
                    return this.paused_ = !0, void o.asyncFunc.apply(r.funcThis_, g);
                }
                this.throwException(this.TYPE_ERROR, o.class + " is not a function");
            }
        }
    }, t.prototype.stepCatchClause = function(t, e, r) {
        if (!e.done_) {
            e.done_ = !0;
            var n = this.createSpecialScope(e.scope);
            return this.setProperty(n, r.param.name, e.throwValue), new Zr(r.body, n);
        }
        t.pop();
    }, t.prototype.stepConditionalExpression = function(t, e, r) {
        var n = e.mode_ || 0;
        if (0 === n) return e.mode_ = 1, new Zr(r.test, e.scope);
        if (1 === n) {
            e.mode_ = 2;
            var i = Boolean(e.value);
            if (i && r.consequent) return new Zr(r.consequent, e.scope);
            if (!i && r.alternate) return new Zr(r.alternate, e.scope);
            this.value = void 0;
        }
        t.pop(), "ConditionalExpression" === r.type && (t[t.length - 1].value = e.value);
    }, t.prototype.stepContinueStatement = function(t, e, r) {
        t.pop();
        var n = null;
        for(r.label && (n = r.label.name), e = t[t.length - 1]; e && "CallExpression" !== e.node.type && "NewExpression" !== e.node.type;){
            if (e.isLoop && (!n || e.labels && -1 !== e.labels.indexOf(n))) return;
            t.pop(), e = t[t.length - 1];
        }
        throw SyntaxError("Illegal continue statement");
    }, t.prototype.stepDebuggerStatement = function(t, e, r) {
        t.pop();
    }, t.prototype.stepDoWhileStatement = function(t, e, r) {
        if ("DoWhileStatement" === r.type && void 0 === e.test_ && (e.value = !0, e.test_ = !0), !e.test_) return e.test_ = !0, new Zr(r.test, e.scope);
        if (e.value) {
            if (r.body) return e.test_ = !1, e.isLoop = !0, new Zr(r.body, e.scope);
        } else t.pop();
    }, t.prototype.stepEmptyStatement = function(t, e, r) {
        t.pop();
    }, t.prototype.stepEvalProgram_ = function(t, e, r) {
        var n = e.n_ || 0, i = r.body[n];
        if (i) return e.n_ = n + 1, new Zr(i, e.scope);
        t.pop(), t[t.length - 1].value = this.value;
    }, t.prototype.stepExpressionStatement = function(t, e, r) {
        if (!e.done_) return e.done_ = !0, new Zr(r.expression, e.scope);
        t.pop(), this.value = e.value;
    }, t.prototype.stepForInStatement = function(e, r, n) {
        if (!r.doneInit_ && (r.doneInit_ = !0, n.left.declarations && n.left.declarations[0].init)) return r.scope.strict && this.throwException(this.SYNTAX_ERROR, "for-in loop variable declaration may not have an initializer."), new Zr(n.left, r.scope);
        if (!r.doneObject_) return r.doneObject_ = !0, r.variable_ || (r.variable_ = r.value), new Zr(n.right, r.scope);
        if (r.isLoop || (r.isLoop = !0, r.object_ = r.value, r.visited_ = Object.create(null)), void 0 === r.name_) {
            t: do {
                if (r.object_ && r.object_.isObject) {
                    r.props_ || (r.props_ = Object.getOwnPropertyNames(r.object_.properties));
                    do var i = r.props_.shift();
                    while (i && (r.visited_[i] || !Object.prototype.hasOwnProperty.call(r.object_.properties, i)));
                    if (i && (r.visited_[i] = !0, Object.prototype.propertyIsEnumerable.call(r.object_.properties, i))) {
                        r.name_ = i;
                        break t;
                    }
                } else if (null !== r.object_) {
                    r.props_ || (r.props_ = Object.getOwnPropertyNames(r.object_));
                    do i = r.props_.shift();
                    while (i && r.visited_[i]);
                    if (i) {
                        r.visited_[i] = !0, r.name_ = i;
                        break t;
                    }
                }
                r.object_ = this.getPrototype(r.object_), r.props_ = null;
            }while (null !== r.object_);
            if (null === r.object_) return void e.pop();
        }
        if (!r.doneVariable_) {
            r.doneVariable_ = !0;
            var o = n.left;
            if ("VariableDeclaration" !== o.type) {
                r.variable_ = null;
                var s = new Zr(o, r.scope);
                return s.components = !0, s;
            }
            r.variable_ = [
                t.SCOPE_REFERENCE,
                o.declarations[0].id.name
            ];
        }
        if (r.variable_ || (r.variable_ = r.value), !r.doneSetter_) {
            r.doneSetter_ = !0;
            var a = r.name_, u = this.setValue(r.variable_, a);
            if (u) return this.createSetter_(u, r.variable_, a);
        }
        return r.name_ = void 0, r.doneVariable_ = !1, r.doneSetter_ = !1, n.body ? new Zr(n.body, r.scope) : void 0;
    }, t.prototype.stepForStatement = function(t, e, r) {
        var n = e.mode_ || 0;
        if (0 === n) {
            if (e.mode_ = 1, r.init) return new Zr(r.init, e.scope);
        } else if (1 === n) {
            if (e.mode_ = 2, r.test) return new Zr(r.test, e.scope);
        } else if (2 === n) {
            if (e.mode_ = 3, !r.test || e.value) return e.isLoop = !0, new Zr(r.body, e.scope);
            t.pop();
        } else if (3 === n && (e.mode_ = 1, r.update)) return new Zr(r.update, e.scope);
    }, t.prototype.stepFunctionDeclaration = function(t, e, r) {
        t.pop();
    }, t.prototype.stepFunctionExpression = function(t, e, r) {
        t.pop(), t[t.length - 1].value = this.createFunction(r, e.scope);
    }, t.prototype.stepIdentifier = function(e, r, n) {
        if (e.pop(), r.components) e[e.length - 1].value = [
            t.SCOPE_REFERENCE,
            n.name
        ];
        else {
            var i = this.getValueFromScope(n.name);
            if (i && "object" == typeof i && i.isGetter) {
                i.isGetter = !1;
                for(var o = r.scope; !this.hasProperty(o, n.name);)o = o.parentScope;
                var s = i;
                return this.createGetter_(s, this.global);
            }
            e[e.length - 1].value = i;
        }
    }, t.prototype.stepIfStatement = function(t, e, r) {
        return this.stepConditionalExpression(t, e, r);
    }, t.prototype.stepLabeledStatement = function(t, e, r) {
        t.pop();
        var n = e.labels || [];
        n.push(r.label.name);
        var i = new Zr(r.body, e.scope);
        return i.labels = n, i;
    }, t.prototype.stepLiteral = function(t, e, r) {
        t.pop();
        var n = r.value;
        if (n instanceof RegExp) {
            var i = this.createObjectProto(this.REGEXP_PROTO);
            this.populateRegExp(i, n), n = i;
        }
        t[t.length - 1].value = n;
    }, t.prototype.stepLogicalExpression = function(t, e, r) {
        if ("&&" !== r.operator && "||" !== r.operator) throw SyntaxError("Unknown logical operator: " + r.operator);
        if (!e.doneLeft_) return e.doneLeft_ = !0, new Zr(r.left, e.scope);
        if (e.doneRight_) t.pop(), t[t.length - 1].value = e.value;
        else {
            if (!("&&" === r.operator && !e.value || "||" === r.operator && e.value)) return e.doneRight_ = !0, new Zr(r.right, e.scope);
            t.pop(), t[t.length - 1].value = e.value;
        }
    }, t.prototype.stepMemberExpression = function(t, e, r) {
        if (!e.doneObject_) return e.doneObject_ = !0, new Zr(r.object, e.scope);
        var n;
        if (r.computed) {
            if (!e.doneProperty_) return e.object_ = e.value, e.doneProperty_ = !0, new Zr(r.property, e.scope);
            n = e.value;
        } else e.object_ = e.value, n = r.property.name;
        if (t.pop(), e.components) t[t.length - 1].value = [
            e.object_,
            n
        ];
        else {
            var i = this.getProperty(e.object_, n);
            if (i && "object" == typeof i && i.isGetter) {
                i.isGetter = !1;
                var o = i;
                return this.createGetter_(o, e.object_);
            }
            t[t.length - 1].value = i;
        }
    }, t.prototype.stepNewExpression = function(t, e, r) {
        return this.stepCallExpression(t, e, r);
    }, t.prototype.stepObjectExpression = function(t, e, r) {
        var n = e.n_ || 0, i = r.properties[n];
        if (e.object_) {
            var o = i.key;
            if ("Identifier" === o.type) var s = o.name;
            else {
                if ("Literal" !== o.type) throw SyntaxError("Unknown object structure: " + o.type);
                s = o.value;
            }
            e.properties_[s] || (e.properties_[s] = {}), e.properties_[s][i.kind] = e.value, e.n_ = ++n, i = r.properties[n];
        } else e.object_ = this.createObjectProto(this.OBJECT_PROTO), e.properties_ = Object.create(null);
        if (i) return new Zr(i.value, e.scope);
        for(var a in e.properties_){
            var u = e.properties_[a];
            if ("get" in u || "set" in u) {
                var l = {
                    configurable: !0,
                    enumerable: !0,
                    get: u.get,
                    set: u.set
                };
                this.setProperty(e.object_, a, null, l);
            } else this.setProperty(e.object_, a, u.init);
        }
        t.pop(), t[t.length - 1].value = e.object_;
    }, t.prototype.stepProgram = function(t, e, r) {
        var n = e.n_ || 0, i = r.body[n];
        if (i) return e.done = !1, e.n_ = n + 1, new Zr(i, e.scope);
        e.done = !0;
    }, t.prototype.stepReturnStatement = function(t, e, r) {
        if (r.argument && !e.done_) return e.done_ = !0, new Zr(r.argument, e.scope);
        var n = e.value, i = t.length - 1;
        for(e = t[i]; "CallExpression" !== e.node.type && "NewExpression" !== e.node.type;){
            if ("TryStatement" !== e.node.type && t.splice(i, 1), --i < 0) throw SyntaxError("Illegal return statement");
            e = t[i];
        }
        e.value = n;
    }, t.prototype.stepSequenceExpression = function(t, e, r) {
        var n = e.n_ || 0, i = r.expressions[n];
        if (i) return e.n_ = n + 1, new Zr(i, e.scope);
        t.pop(), t[t.length - 1].value = e.value;
    }, t.prototype.stepSwitchStatement = function(t, e, r) {
        if (!e.test_) return e.test_ = 1, new Zr(r.discriminant, e.scope);
        for(1 === e.test_ && (e.test_ = 2, e.switchValue_ = e.value);;){
            var n = e.index_ || 0, i = r.cases[n];
            if (e.matched_ || !i || i.test) {
                if (i || e.matched_ || !e.defaultCase_) {
                    if (!i) return void t.pop();
                    if (!e.matched_ && !e.tested_ && i.test) return e.tested_ = !0, new Zr(i.test, e.scope);
                    if (e.matched_ || e.value === e.switchValue_) {
                        e.matched_ = !0;
                        var o = e.n_ || 0;
                        if (i.consequent[o]) return e.isSwitch = !0, e.n_ = o + 1, new Zr(i.consequent[o], e.scope);
                    }
                    e.tested_ = !1, e.n_ = 0, e.index_ = n + 1;
                } else e.matched_ = !0, e.index_ = e.defaultCase_;
            } else e.defaultCase_ = n, e.index_ = n + 1;
        }
    }, t.prototype.stepThisExpression = function(t, e, r) {
        t.pop(), t[t.length - 1].value = this.getValueFromScope("this");
    }, t.prototype.stepThrowStatement = function(t, e, r) {
        if (!e.done_) return e.done_ = !0, new Zr(r.argument, e.scope);
        this.throwException(e.value);
    }, t.prototype.stepTryStatement = function(t, e, r) {
        if (!e.doneBlock_) return e.doneBlock_ = !0, new Zr(r.block, e.scope);
        if (e.throwValue && !e.doneHandler_ && r.handler) {
            e.doneHandler_ = !0;
            var n = new Zr(r.handler, e.scope);
            return n.throwValue = e.throwValue, e.throwValue = null, n;
        }
        if (!e.doneFinalizer_ && r.finalizer) return e.doneFinalizer_ = !0, new Zr(r.finalizer, e.scope);
        e.throwValue ? this.executeException(e.throwValue) : t.pop();
    }, t.prototype.stepUnaryExpression = function(e, r, n) {
        if (!r.done_) {
            r.done_ = !0;
            var i = new Zr(n.argument, r.scope);
            return i.components = "delete" === n.operator, i;
        }
        e.pop();
        var o = r.value;
        if ("-" === n.operator) o = -o;
        else if ("+" === n.operator) o = +o;
        else if ("!" === n.operator) o = !o;
        else if ("~" === n.operator) o = ~o;
        else if ("delete" === n.operator) {
            var s = !0;
            if (Array.isArray(o)) {
                var a = o[0];
                a === t.SCOPE_REFERENCE && (a = r.scope);
                var u = String(o[1]);
                try {
                    delete a.properties[u];
                } catch (t) {
                    r.scope.strict ? this.throwException(this.TYPE_ERROR, "Cannot delete property '" + u + "' of '" + a + "'") : s = !1;
                }
            }
            o = s;
        } else if ("typeof" === n.operator) o = o && "Function" === o.class ? "function" : typeof o;
        else {
            if ("void" !== n.operator) throw SyntaxError("Unknown unary operator: " + n.operator);
            o = void 0;
        }
        e[e.length - 1].value = o;
    }, t.prototype.stepUpdateExpression = function(t, e, r) {
        if (!e.doneLeft_) {
            e.doneLeft_ = !0;
            var n = new Zr(r.argument, e.scope);
            return n.components = !0, n;
        }
        if (e.leftSide_ || (e.leftSide_ = e.value), e.doneGetter_ && (e.leftValue_ = e.value), !e.doneGetter_) {
            var i = this.getValue(e.leftSide_);
            if (e.leftValue_ = i, i && "object" == typeof i && i.isGetter) {
                i.isGetter = !1, e.doneGetter_ = !0;
                var o = i;
                return this.createGetter_(o, e.leftSide_);
            }
        }
        if (e.doneSetter_) return t.pop(), void (t[t.length - 1].value = e.doneSetter_);
        var s;
        if (i = Number(e.leftValue_), "++" === r.operator) s = i + 1;
        else {
            if ("--" !== r.operator) throw SyntaxError("Unknown update expression: " + r.operator);
            s = i - 1;
        }
        var a = r.prefix ? s : i, u = this.setValue(e.leftSide_, s);
        if (u) return e.doneSetter_ = a, this.createSetter_(u, e.leftSide_, s);
        t.pop(), t[t.length - 1].value = a;
    }, t.prototype.stepVariableDeclaration = function(t, e, r) {
        var n = r.declarations, i = e.n_ || 0, o = n[i];
        for(e.init_ && o && (this.setValueToScope(o.id.name, e.value), e.init_ = !1, o = n[++i]); o;){
            if (o.init) return e.n_ = i, e.init_ = !0, new Zr(o.init, e.scope);
            o = n[++i];
        }
        t.pop();
    }, t.prototype.stepWithStatement = function(t, e, r) {
        if (!e.doneObject_) return e.doneObject_ = !0, new Zr(r.object, e.scope);
        if (!e.doneBody_) {
            e.doneBody_ = !0;
            var n = this.createSpecialScope(e.scope, e.value);
            return new Zr(r.body, n);
        }
        t.pop();
    }, t.prototype.stepWhileStatement = function(t, e, r) {
        return this.stepDoWhileStatement(t, e, r);
    }, t.PARSE_OPTIONS = {
        ecmaVersion: 5
    }, t.READONLY_DESCRIPTOR = {
        configurable: !0,
        enumerable: !0,
        writable: !1
    }, t.NONENUMERABLE_DESCRIPTOR = {
        configurable: !0,
        enumerable: !1,
        writable: !0
    }, t.READONLY_NONENUMERABLE_DESCRIPTOR = {
        configurable: !0,
        enumerable: !1,
        writable: !1
    }, t.VARIABLE_DESCRIPTOR = {
        configurable: !1,
        enumerable: !0,
        writable: !0
    }, t.STEP_ERROR = {}, t.SCOPE_REFERENCE = {}, t.toStringCycles_ = [], t;
}(), Xr = function() {
    function t(t) {
        this.proto = null, this.isObject = !0, this.class = "Object", this.data = null, this._native = void 0, this.getter = Object.create(null), this.setter = Object.create(null), this.properties = Object.create(null), this.proto = t;
    }
    return t.prototype.toString = function() {
        if ("Array" === this.class) {
            (n = Hr.toStringCycles_).push(this);
            try {
                for(var t = [], e = 0; e < this.properties.length; e++){
                    var r = this.properties[e];
                    t[e] = r && r.isObject && -1 !== n.indexOf(r) ? "..." : r;
                }
            } finally{
                n.pop();
            }
            return t.join(",");
        }
        if ("Error" === this.class) {
            var n;
            if (-1 !== (n = Hr.toStringCycles_).indexOf(this)) return "[object Error]";
            var i, o = void 0, s = this;
            do if ("name" in s.properties) {
                i = s.properties.name;
                break;
            }
            while (s = s.proto);
            s = this;
            do if ("message" in s.properties) {
                o = s.properties.message;
                break;
            }
            while (s = s.proto);
            n.push(this);
            try {
                i = i && i.toString(), o = o && o.toString();
            } finally{
                n.pop();
            }
            return o ? i + ": " + o : String(i);
        }
        return null !== this.data ? String(this.data) : "[object " + this.class + "]";
    }, t.prototype.valueOf = function() {
        return void 0 === this.data || null === this.data || this.data instanceof RegExp ? this : this.data instanceof Date ? this.data.valueOf() : this.data;
    }, t;
}(), Zr = function(t, e) {
    this.node = t, this.scope = e;
}, $r = function(t, e) {
    for(var r = t; r && r.prototype;){
        if (Object.getOwnPropertyNames(r.prototype).indexOf(e) >= 0) return !0;
        r = Object.getPrototypeOf(r);
    }
    return !1;
};
function Qr(t, e) {
    var r = {}, n = jt(t, {
        locations: !0,
        onComment: function(t, e, n, i, o, s) {
            r[s.line] = e;
        }
    });
    if ("Program" !== n.type || 1 !== n.body.length || "FunctionDeclaration" !== n.body[0].type) throw new Error("JavaScript program should only have one function definition");
    var i = n.body[0].body.body, o = [], s = [];
    return i.forEach(function(t) {
        if ("ExpressionStatement" === t.type) {
            var n = t.expression;
            if ("AssignmentExpression" === n.type && "=" === n.operator && "MemberExpression" === n.left.type && "ThisExpression" === n.left.object.type && "Identifier" === n.left.property.type) {
                for(var i = [], a = n.loc.start.line - 1; a >= 0 && void 0 !== r[a]; a--)i.push(r[a]);
                if (!(i.length <= 0)) {
                    var u = n.left.property.name;
                    if (!(Array.isArray(e) && e.indexOf(u) >= 0) && "FunctionExpression" !== n.right.type) {
                        var l = function(t, e, r) {
                            var n = {
                                name: t,
                                title: {},
                                className: null,
                                proposed: !1,
                                initialValue: null
                            };
                            if (e.forEach(function(t) {
                                var e = t.indexOf("@ui ");
                                if (e >= 0) n.description = t.substring(e + 4).trim();
                                else {
                                    var r = t.indexOf("@title ");
                                    if (r >= 0) {
                                        var i = t.substring(r + 7).trim();
                                        0 === i.indexOf("@ja ") ? n.title.ja = i.substring(4).trim() : n.title.default = i;
                                    } else if (t.indexOf("@proposed") >= 0) n.proposed = !0;
                                    else {
                                        var o = t.indexOf("@comment ");
                                        if (o >= 0) {
                                            var s = t.substring(o + 9).trim();
                                            return n.comment || (n.comment = {}), void (0 === s.indexOf("@ja ") ? n.comment.ja = s.substring(4).trim() : n.comment.default = s);
                                        }
                                    }
                                }
                            }), !n.description && !n.comment) return null;
                            if (n.proposed || n.comment) return n;
                            var i = n.description.indexOf("("), o = n.description.indexOf(")", i);
                            if (!(i < 0 || o < 0)) {
                                n.className = n.description.substr(0, i);
                                try {
                                    var s = new Hr("[" + n.description.substr(i + 1, o - i - 1) + "]"), a = Date.now();
                                    for(s.unwrap = null, s.wrap = null; s.step() && !(Date.now() - a > 100););
                                    n.params = s.pseudoToNative(s.value);
                                } catch (t) {}
                                return n.params || (n.params = []), n;
                            }
                        }(u, i);
                        s.push(n), l && o.push(l);
                    }
                }
            }
        }
    }), {
        widgets: o,
        fields: s,
        ast: n
    };
}
function Kr(t, e) {
    if (void 0 === e && (e = -1), !t) return {
        dependencyAtCursor: null,
        dependencies: []
    };
    for(var r = [], n = null, i = ("string" == typeof t ? jt(t, Hr.PARSE_OPTIONS) : t).body[0].body.body.slice(0); i.length > 0;){
        var o = i.shift();
        if (null != o) {
            if ("CallExpression" !== o.type) o.expression && i.push(o.expression), o.object && i.push(o.object), o.property && i.push(o.property), o.name && "string" != typeof name && i.push(o.name), o.left && i.push(o.left), o.right && i.push(o.right), o.id && i.push(o.id), o.init && i.push(o.init), o.callee && i.push(o.callee), o.body && Array.isArray(o.body) && i.push.apply(i, o.body), o.declarations && Array.isArray(o.declarations) && i.push.apply(i, o.declarations), o.arguments && Array.isArray(o.arguments) && i.push.apply(i, o.arguments), o.params && Array.isArray(o.params) && i.push.apply(i, o.params);
            else if (o.callee.name && "require" === o.callee.name) {
                var s = o.arguments;
                if (s && Array.isArray(s) && 1 === s.length) {
                    var a = s[0];
                    if ("Literal" === a.type) {
                        var u = a.value;
                        r.push(u), o.start && o.end && o.start <= e && o.end >= e && (n = u);
                    }
                }
            }
        }
    }
    return {
        dependencyAtCursor: n,
        dependencies: r
    };
}
Hr.Object = Xr, Hr.State = Zr;
var tn = function() {
    return tn = Object.assign || function(t) {
        for(var e, r = 1, n = arguments.length; r < n; r++)for(var i in e = arguments[r])Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
    }, tn.apply(this, arguments);
};
function en(t, e, r) {
    if (r || 2 === arguments.length) for(var n, i = 0, o = e.length; i < o; i++)!n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
    return t.concat(n || Array.prototype.slice.call(e));
}
function rn(t) {
    return "boolean" == typeof t || "number" == typeof t || "string" == typeof t || null == t;
}
var nn = {
    type: "ExpressionStatement",
    start: null,
    end: null,
    expression: {
        type: "CallExpression",
        start: null,
        end: null,
        expression: null,
        arguments: null
    },
    arguments: null
}, on = function() {
    function t(t, e, r) {
        void 0 === r && (r = null), this.wrapperTable = t, this.ignoredPropNames = e, this.wrapMethodParameter = r, this.verbose = !1, this.initialize();
    }
    return t.prototype.initialize = function() {
        var t = this, e = new Hr("", function(e, r) {
            t.globalScope = r;
        });
        this.interpreter = e, this.interpreter.wrap = function(e) {
            return t.wrap(e);
        }, this.interpreter.unwrap = function(e, r) {
            return t.unwrap(e, r);
        }, this.wrappers = {}, Object.keys(this.wrapperTable).forEach(function(e) {
            return t.wrapClass(t.wrapperTable[e], e);
        });
    }, t.prototype.createGlobalFunction = function(t, e) {
        var r, n = this, i = e.func, o = e.raw, s = e.isConstructor, a = e.async, u = function() {
            for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
            var r = i(o ? t : t.map(function(e, r) {
                return r < t.length - 1 || !a ? n.unwrap(e) : e;
            }));
            return o ? r : n.wrap(r);
        };
        r = a ? this.interpreter.createAsyncFunction(u) : this.interpreter.createNativeFunction(u, s), this.interpreter.setProperty(this.globalScope, t, r);
    }, t.prototype.createFunction = function(t, e) {
        return void 0 === e && (e = !1), this.interpreter.createNativeFunction(t, e);
    }, t.prototype.setProperty = function(t, e, r) {
        this.interpreter.setProperty(t, e, this.wrap(r));
    }, t.prototype.setRawProperty = function(t, e, r) {
        this.interpreter.setProperty(t, e, r);
    }, t.prototype.getProperty = function(t, e) {
        return this.unwrap(this.interpreter.getProperty(t, e));
    }, t.prototype.getRawProperty = function(t, e) {
        return this.interpreter.getProperty(t, e);
    }, t.prototype.prepareRun = function(t) {
        var e;
        e = "string" == typeof t ? jt(t, Hr.PARSE_OPTIONS) : t;
        var r = this.interpreter.createScope(e, this.globalScope);
        return this.interpreter.stateStack = [
            {
                node: e,
                scope: r,
                done: !1
            }
        ], r;
    }, t.prototype.newStatementFor = function(t) {
        return jt("new " + t + "();", Hr.PARSE_OPTIONS);
    }, t.prototype.prepareNewInstance = function(t, e) {
        var r = this.interpreter.createScope(jt("", Hr.PARSE_OPTIONS), e);
        return this.interpreter.stateStack = [
            {
                node: t,
                scope: r,
                thisExpression: r
            }
        ], r;
    }, t.prototype.exec = function(t, e, r, n) {
        var i = this, o = this.interpreter;
        nn.expression.arguments = [];
        var s = [];
        return r.forEach(function(t) {
            nn.expression.arguments.push(null), s.push(i.wrap(t));
        }), o.stateStack = [
            {
                node: {
                    type: "Program",
                    body: [
                        nn
                    ]
                },
                scope: this.globalScope,
                done: !0,
                n_: 1
            },
            {
                node: nn,
                scope: this.globalScope,
                done_: !0
            },
            {
                node: nn.expression,
                doneCallee_: 2,
                doneArgs_: !0,
                arguments_: s,
                funcThis_: t,
                func_: o.getProperty(t, e),
                scope: t,
                n_: s.length,
                value: [
                    t,
                    e
                ]
            }
        ], this.run(700, "call a method (" + t.className + "." + e + (n || "") + ")");
    }, t.prototype.run = function(t, e) {
        var r = this.interpreter, n = Date.now(), i = !1;
        try {
            for(; r.step();)if (Date.now() - n > t) {
                i = !0;
                break;
            }
        } catch (o) {
            throw this.verbose && console.log(r.stateStack), "string" == typeof o && (o = new Error(o)), r.stateStack.length > 0 && (o.node = r.stateStack[r.stateStack.length - 1].node), o;
        }
        if (i) {
            var o = new Error("timeout: spent too long time (> " + t + "ms) to " + e);
            throw r.stateStack.length > 0 && (o.node = r.stateStack[0].node), o;
        }
        return this.interpreter.value;
    }, t.prototype.cleanupProperties = function(t) {
        if (!t) return null;
        for(var e in this.ignoredPropNames.forEach(function(e) {
            void 0 !== t.properties[e] && delete t.properties[e];
        }), t.properties)this.cleanupProperty(t.properties[e]) || delete t.properties[e];
        return t.properties;
    }, t.prototype.cleanupProperty = function(t) {
        if (rn(t)) return !0;
        var e = t;
        if (e._native) return !0;
        var r = this.globalScope.properties;
        if (e.parent === r.Array) {
            for(var n = e.length, i = 0; i < e.length; i++)this.cleanupProperty(e.properties[i]) || (delete e.properties[i], n--);
            return e.length = n, n > 0;
        }
        if (e.parent === r.Object) {
            var o = !0;
            for(var s in e.properties)this.cleanupProperty(e.properties[s]) ? o = !1 : delete e.properties[s];
            return !o;
        }
        return !1;
    }, t.prototype.restoreProperties = function(t, e) {
        e && (t.properties = tn(tn({}, t.properties), e));
    }, t.prototype.wrap = function(t) {
        if ("object" == typeof t && null !== t && void 0 !== t.constructor && "string" == typeof t.constructor.className) {
            var e = t.constructor.className, r = this.wrappers[e];
            if (void 0 === r) return;
            var n = this.interpreter.createObject(r);
            return n._native = t, n;
        }
        return this.verbose && (rn(t) || Array.isArray(t) || console.log("wrap complex obj:", String(t))), this.interpreter.nativeToPseudo(t);
    }, t.prototype.unwrap = function(t, e) {
        return "object" == typeof t && null !== t && t._native ? t._native : this.interpreter.pseudoToNative(t, e);
    }, t.prototype.wrapClass = function(t, e) {
        this.verbose && console.log("--- wrapping " + e + " ---"), t.className = e;
        var r = this, n = this.interpreter.createNativeFunction(function(e) {
            var i, o;
            if (i = r.interpreter.calledWithNew() ? this : r.interpreter.createObjectProto(n.properties.prototype), void 0 !== e) {
                if (Array.isArray(e)) for(var s = 0; s < e.length; s++)o[s] = r.unwrap(e[s]);
                else o = r.unwrap(e);
            }
            if (t) {
                var a = Object.create(t.prototype), u = t.apply(a, [
                    null
                ].concat(o).splice(1));
                i._native = null !== u && "object" == typeof u ? u : a;
            }
            return i;
        });
        return this.interpreter.setProperty(this.globalScope, e, n), this.wrapStaticMembers(n, t), this.wrapInstanceMembers(n, t), this.wrappers[e] = n, n;
    }, t.prototype.wrapStaticMembers = function(t, e) {
        var r = this, n = function(n) {
            var o = n;
            if (i.interpreter.setProperty(t, n, ReferenceError, {
                get: function() {
                    return r.wrap(e[o]);
                },
                set: function(t) {
                    return e[o] = r.unwrap(t);
                }
            }), i.verbose) {
                var s = void 0;
                try {
                    s = typeof e[o];
                } catch (t) {
                    s = "not accessible";
                }
                console.log("static " + o + " (" + s + ")");
            }
        }, i = this;
        for(var o in e)n(o);
    }, t.prototype.wrapInstanceMembers = function(t, e) {
        for(var r, n = new e, i = 0, o = en(en([], Object.keys(n), !0), function(t) {
            for(var e = t, r = []; e && e.prototype;)r = en(en([], r, !0), Object.getOwnPropertyNames(e.prototype), !0), e = Object.getPrototypeOf(e);
            return r;
        }(e), !0).filter(function(t, e, r) {
            return r.indexOf(t) === e;
        }); i < o.length; i++){
            var s = o[i];
            if ("constructor" !== s && !this.interpreter.hasProperty(t, s) && !this.interpreter.hasProperty(t.properties.prototype, s) && "_" !== s.charAt(0)) {
                if (this.verbose) {
                    var a = void 0;
                    try {
                        a = typeof n[s];
                    } catch (t) {
                        a = "not accessible";
                    }
                    r = s + " (" + a + ")";
                }
                try {
                    if ("function" == typeof n[s]) {
                        var u = function(e, r) {
                            return function(n) {
                                var i;
                                return r.wrap((i = this._native)[e].apply(i, n.map(function(e) {
                                    var n = r.unwrap(e);
                                    return r.wrapMethodParameter ? r.wrapMethodParameter(t, n) : n;
                                })));
                            };
                        }(s, this);
                        this.interpreter.setProperty(t.properties.prototype, s, this.interpreter.createNativeFunction(u)), this.verbose && (r += " native method");
                    }
                } catch (t) {}
                this.verbose && console.log(r);
            }
        }
    }, t;
}();
function sn(t) {
    var e = parseFloat(t);
    return isNaN(e) ? 0 : e;
}
function an(t) {
    var e;
    if (!(null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.search)) return null;
    for(var r = 0, n = window.location.search.substring(1).split("&"); r < n.length; r++){
        var i = n[r].split("=");
        if (decodeURIComponent(i[0]) === t) return decodeURIComponent(i[1]);
    }
    return null;
}
Object.freeze({
    __proto__: null,
    cancelIdleCallback: function(t) {
        return window.cancelIdleCallback ? window.cancelIdleCallback(t) : clearTimeout(t);
    },
    requestIdleCallback: function(t, e) {
        if (window.requestIdleCallback) return window.requestIdleCallback(t, e);
        var r = Date.now(), n = e ? e.timeout : 50;
        return setTimeout(function() {
            t({
                didTimeout: !1,
                timeRemaining: function() {
                    return Math.max(0, n - (Date.now() - r));
                }
            });
        }, 1);
    },
    getNumber: sn,
    getQueryVariable: an
});
var un = function(t, e) {
    return un = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }, un(t, e);
};
function ln(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    function r() {
        this.constructor = t;
    }
    un(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
}
var cn = function() {
    return cn = Object.assign || function(t) {
        for(var e, r = 1, n = arguments.length; r < n; r++)for(var i in e = arguments[r])Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
    }, cn.apply(this, arguments);
};
function pn(t, e, r, n) {
    return new (r || (r = Promise))(function(i, o) {
        function s(t) {
            try {
                u(n.next(t));
            } catch (t) {
                o(t);
            }
        }
        function a(t) {
            try {
                u(n.throw(t));
            } catch (t) {
                o(t);
            }
        }
        function u(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                t(e);
            })).then(s, a);
        }
        u((n = n.apply(t, e || [])).next());
    });
}
function hn(t, e) {
    var r, n, i, o, s = {
        label: 0,
        sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1];
        },
        trys: [],
        ops: []
    };
    return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
    }), o;
    function a(o) {
        return function(a) {
            return function(o) {
                if (r) throw new TypeError("Generator is already executing.");
                for(; s;)try {
                    if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                    switch(n = 0, i && (o = [
                        2 & o[0],
                        i.value
                    ]), o[0]){
                        case 0:
                        case 1:
                            i = o;
                            break;
                        case 4:
                            return s.label++, {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            s.label++, n = o[1], o = [
                                0
                            ];
                            continue;
                        case 7:
                            o = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                s = 0;
                                continue;
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                s.label = o[1];
                                break;
                            }
                            if (6 === o[0] && s.label < i[1]) {
                                s.label = i[1], i = o;
                                break;
                            }
                            if (i && s.label < i[2]) {
                                s.label = i[2], s.ops.push(o);
                                break;
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue;
                    }
                    o = e.call(t, s);
                } catch (t) {
                    o = [
                        6,
                        t
                    ], n = 0;
                } finally{
                    r = i = 0;
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }([
                o,
                a
            ]);
        };
    }
}
function dn(t, e, r) {
    if (r || 2 === arguments.length) for(var n, i = 0, o = e.length; i < o; i++)!n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
    return t.concat(n || Array.prototype.slice.call(e));
}
var fn, yn = [
    0,
    0,
    0,
    0
], vn = function() {
    function t() {
        this._position = 0, this._wait = 50, this.update = this.update.bind(this);
    }
    return Object.defineProperty(t.prototype, "wait", {
        get: function() {
            return this._wait;
        },
        set: function(t) {
            this._wait = t, this._isPlaying && this.start();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isPlaying", {
        get: function() {
            return this._isPlaying;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "position", {
        get: function() {
            if (!this.isPlaying) return this._position;
            var t = this.basePosition.position + (Date.now() - this.basePosition.time);
            return Math.min(t, this.player.video.duration);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.initialize = function(t) {
        var e = t.player, r = t.updater, n = t.emitter;
        return pn(this, void 0, void 0, function() {
            return hn(this, function(t) {
                return this.player = e, this.updateMediaPosition = r, this.emitter = n, [
                    2
                ];
            });
        });
    }, t.prototype.play = function() {
        this.start(), this.emitter.onPlay();
    }, t.prototype.stop = function() {
        this.clearInterval(), this._isPlaying = !1, this.seek(0), this.pause(), this.emitter.onStop();
    }, t.prototype.pause = function() {
        this.clearInterval(), this._isPlaying = !1, this.emitter.onPause();
    }, t.prototype.seek = function(t) {
        var e = this;
        this._position = t, this.updateMediaPosition(t).then(function() {
            e.emitter.onSeek(t), e.emitter.onSeekComplete(t);
        }), this.isPlaying && this.start();
    }, t.prototype.dispose = function() {
        this.clearInterval();
    }, t.prototype.clearInterval = function() {
        window.clearInterval(this.intervalId);
    }, t.prototype.start = function() {
        this.clearInterval(), this._isPlaying = !0, this.basePosition = {
            time: Date.now(),
            position: this._position
        }, this.intervalId = window.setInterval(this.update, this.wait);
    }, t.prototype.update = function() {
        this.player.video || this.stop();
        var t = this.basePosition.position + (Date.now() - this.basePosition.time);
        this._position = Math.min(t, this.player.video.duration), this.updateMediaPosition(this.position), this._position >= this.player.video.duration && this.stop();
    }, t;
}();
function gn() {
    return pn(this, void 0, void 0, function() {
        return hn(this, function(t) {
            return fn && fn.Player ? [
                2,
                fn
            ] : "undefined" == typeof window ? [
                2,
                require("9b2ba0ceede257b")
            ] : window.Songle && window.Songle.Player ? [
                2,
                window.Songle
            ] : [
                2,
                new Promise(function(t) {
                    var e = !1;
                    window.onSongleAPIReady = function(r) {
                        e = !0, t(fn = r);
                    }, setTimeout(function() {
                        if (!e) {
                            var t = [];
                            document.querySelectorAll("script").forEach(function(e) {
                                var r = e.getAttribute("src");
                                r && r.indexOf("songle.jp/v2/api.js") >= 0 && t.push(e);
                            }), t.forEach(function(t) {
                                return t.parentElement.removeChild(t);
                            });
                            var r = document.createElement("script");
                            r.src = "https://api.songle.jp/v2/api.js", document.head.appendChild(r);
                        }
                    }, 1e3);
                })
            ];
        });
    });
}
var mn = function() {
    function t(t) {
        void 0 === t && (t = {}), this.options = t, this.wait = 50, this.volumeListener = {
            onVolumeUpdate: this.onVolumeUpdate.bind(this)
        }, this.resetProps();
    }
    return Object.defineProperty(t.prototype, "songlePlayer", {
        get: function() {
            return this._songlePlayer;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isPlaying", {
        get: function() {
            return !!this._songlePlayer && this._songlePlayer.isPlaying;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "withSync", {
        get: function() {
            var t, e;
            return !(!(null === (t = this.options) || void 0 === t ? void 0 : t.accessToken) && !(null === (e = this.options) || void 0 === e ? void 0 : e.secretToken));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "position", {
        get: function() {
            var t;
            if (!this._songlePlayer) return 0;
            if (this.lastPosition > 0 && this.lastTime > 0) return Date.now() + this.lastPosition - this.lastTime;
            var e = this._songlePlayer.positionTime;
            if ("songle-api-html-media-element-media" === (null === (t = this._songlePlayer.media) || void 0 === t ? void 0 : t.dispatcherName)) {
                var r = this.lastTime, n = this.lastPosition, i = void 0;
                if (r > 0) {
                    var o = Date.now() - r;
                    i = Math.max(0, this.wait - o);
                } else i = this.wait;
                0 === n && e >= 500 ? e = 0 : 0 === r && e - n >= 800 && (e = n + i);
            }
            return e;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.initialize = function(t) {
        var e, r, n, i = t.player, o = t.updater, s = t.emitter, a = t.altSourceUrl;
        return pn(this, void 0, void 0, function() {
            var t, l, c;
            return hn(this, function(p) {
                switch(p.label){
                    case 0:
                        return this.player && this.player.removeListener(this.volumeListener), this.player = i, this.player.addListener(this.volumeListener), this.updateMediaPosition = o, this.emitter = s, this._songlePlayer ? [
                            3,
                            2
                        ] : [
                            4,
                            this.initializeSonglePlayer()
                        ];
                    case 1:
                        p.sent(), p.label = 2;
                    case 2:
                        return t = this.options.headless, l = a || this.options.altSourceUrls && (null === (e = this.player.data.song) || void 0 === e ? void 0 : e.permalink) && this.options.altSourceUrls[null === (r = this.player.data.song) || void 0 === r ? void 0 : r.permalink] || void 0, u.isUploaderUrl(l) && (l = u.getAltSongUrlFromUploaderGuid(u.getUploaderGuid(u.getSongPathFromUrl(l)))), (c = (null === (n = this.player.data.song) || void 0 === n ? void 0 : n.permalink) || l) === l && (l = void 0), [
                            4,
                            this._songlePlayer.useMedia(c, {
                                headless: t,
                                altSourceUrl: l
                            })
                        ];
                    case 3:
                        return p.sent(), this.ignoreSonglePlayerEvents = !0, this._songlePlayer.volume = 0 * (1 - this.player.volume / 100) + 100 * this.player.volume / 100, this._songlePlayer.play(), this._songlePlayer.stop(), this.ignoreSonglePlayerEvents = !1, this.resetProps(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.resetProps = function() {
        this.lastPosition = 0, this.lastTime = 0, this.elapsedTimes = [];
    }, t.prototype.initializeSonglePlayer = function() {
        var t;
        return pn(this, void 0, void 0, function() {
            var e, r, n, i, o, s, a, u = this;
            return hn(this, function(l) {
                switch(l.label){
                    case 0:
                        return e = this.options, r = e.accessToken, n = e.secretToken, (o = this.options.songle) ? [
                            3,
                            2
                        ] : [
                            4,
                            gn()
                        ];
                    case 1:
                        o = l.sent(), l.label = 2;
                    case 2:
                        return (i = o).System && (i.System.showLicense = !1), s = null === (t = this.options) || void 0 === t ? void 0 : t.autoUseMedia, this._songlePlayer = this.withSync ? new i.SyncPlayer({
                            mediaElement: this.player.mediaSourceElement,
                            accessToken: r,
                            secretToken: n,
                            autoUseMedia: s
                        }) : new i.Player({
                            mediaElement: this.player.mediaSourceElement
                        }), a = !1, this._songlePlayer.on("play", function() {
                            u.ignoreSonglePlayerEvents || (a = !1, u.handler || (u.startPolling(), u.emitter.onPlay()));
                        }), this._songlePlayer.on("pause", function() {
                            return pn(u, void 0, void 0, function() {
                                return hn(this, function(t) {
                                    switch(t.label){
                                        case 0:
                                            return this.ignoreSonglePlayerEvents ? [
                                                2
                                            ] : (a = !1, this.stopPolling(), this.emitter.onPause(), this.stopping ? (this.stopping = !1, [
                                                4,
                                                this.updateMediaPosition(0)
                                            ]) : [
                                                3,
                                                2
                                            ]);
                                        case 1:
                                            t.sent(), this.resetProps(), this.emitter.onStop(), t.label = 2;
                                        case 2:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                        }), this._songlePlayer.on("finish", function() {
                            return pn(u, void 0, void 0, function() {
                                return hn(this, function(t) {
                                    switch(t.label){
                                        case 0:
                                            return a = !1, this.handler ? (this.stopPolling(), [
                                                4,
                                                this.updateMediaPosition(0)
                                            ]) : [
                                                3,
                                                2
                                            ];
                                        case 1:
                                            t.sent(), this.emitter.onStop(), t.label = 2;
                                        case 2:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                        }), this._songlePlayer.on("seek", function(t) {
                            var e = t.data;
                            return pn(u, void 0, void 0, function() {
                                return hn(this, function(t) {
                                    switch(t.label){
                                        case 0:
                                            return this._songlePlayer.isPlaying ? [
                                                3,
                                                2
                                            ] : (a = !1, [
                                                4,
                                                this.updateMediaPosition(e.positionTime)
                                            ]);
                                        case 1:
                                            return t.sent(), this.emitter.onSeekComplete(e.positionTime), [
                                                3,
                                                4
                                            ];
                                        case 2:
                                            return a = !0, [
                                                4,
                                                this.updateMediaPosition(this._songlePlayer.positionTime)
                                            ];
                                        case 3:
                                            t.sent(), t.label = 4;
                                        case 4:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                        }), this._songlePlayer.on("mediaSeek", function() {
                            a && (u.emitter.onSeekComplete(u.position), a = !1);
                        }), this.withSync && (this._songlePlayer.on("mediaPlay", function() {
                            u.handler || (u.startPolling(), u.emitter.onPlay());
                        }), this._songlePlayer.on("mediaFinish", function() {
                            u.handler && (u.stopPolling(), u.emitter.onStop());
                        })), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.play = function() {
        if (this._songlePlayer) return this._songlePlayer.play();
        this.emitter.onPlay();
    }, t.prototype.stop = function() {
        if (this._songlePlayer) return this.stopping = this._songlePlayer.isPlaying, this._songlePlayer.stop();
        this.emitter.onStop();
    }, t.prototype.pause = function() {
        if (this._songlePlayer) return this.stopping = !1, this._songlePlayer.pause();
        this.emitter.onPause();
    }, t.prototype.seek = function(t) {
        var e = this;
        this._songlePlayer ? (this._songlePlayer.seekTo(t), this.emitter.onSeek(t)) : this.updateMediaPosition(t).then(function() {
            e.emitter.onSeek(t);
        });
    }, t.prototype.startPolling = function() {
        var t, e = this;
        if (this.lastTime > 0) {
            var r = Date.now() - this.lastTime;
            t = Math.max(0, this.wait - r);
        } else t = this.wait;
        this.handler = setTimeout(function() {
            return pn(e, void 0, void 0, function() {
                var e, r, n, i, o, s, a, u, l;
                return hn(this, function(c) {
                    switch(c.label){
                        case 0:
                            return r = (e = this).lastTime, n = e.lastPosition, i = this._songlePlayer.positionTime, o = !1, "songle-api-html-media-element-media" === (null === (l = this._songlePlayer.media) || void 0 === l ? void 0 : l.dispatcherName) && (0 === n && i >= 500 ? (i = 0, o = !0) : 0 === r && i - n >= 800 && (i = n + t, o = !0)), s = r > 0 ? Date.now() - r : t, this.updateElapsedTimes(s), a = n > 0 ? n + s : i, u = Math.abs(i - a), (a = u > 2 * this.wait ? i : a <= i ? .5 * (a + i) : Math.max(n, i)) < this.lastPosition && (this.lastPosition - a > 5 * this.wait || (a = this.lastPosition)), o || (this.lastTime = Date.now()), this.lastPosition = a, [
                                4,
                                this.updateMediaPosition(a)
                            ];
                        case 1:
                            return c.sent(), this.handler && this.startPolling(), [
                                2
                            ];
                    }
                });
            });
        }, t);
    }, t.prototype.updateElapsedTimes = function(t) {
        if (this.elapsedTimes.unshift(t), this.elapsedTimes = this.elapsedTimes.slice(0, 10), this.elapsedTimes.length >= 10) {
            var e = this.elapsedTimes.reduce(function(t, e) {
                return t + e;
            }) / 10;
            e > 5 * this.wait && (this.player.stageScale = Math.max(.25, .9 * this.player.stageScale), this.elapsedTimes = []), e < 1.2 * this.wait && this.player.stageScale < 1 && (this.player.stageScale = Math.min(1, this.player.stageScale / .9), this.elapsedTimes = []);
        }
    }, t.prototype.stopPolling = function() {
        var t;
        if (this.handler) {
            if (clearTimeout(this.handler), this._songlePlayer) {
                if ("songle-api-html-media-element-media" === (null === (t = this._songlePlayer.media) || void 0 === t ? void 0 : t.dispatcherName)) {
                    var e = this.lastTime, r = this.lastPosition, n = Date.now() - e;
                    this.lastPosition = r + n;
                } else this.lastPosition = this._songlePlayer.positionTime;
            }
            this.lastTime = 0;
        }
        this.handler = null;
    }, t.prototype.dispose = function() {
        this.player && this.player.removeListener(this.volumeListener), this._songlePlayer && (this._songlePlayer.stop(), this._songlePlayer = null);
    }, t.prototype.onVolumeUpdate = function(t) {
        this._songlePlayer && (this._songlePlayer.volume = t);
    }, t;
}(), bn = function() {
    function t(t) {
        this.listeners = [], this.throttleInterval = t && t.throttleInterval ? Number(t.throttleInterval) : 100;
    }
    return t.prototype.onVideoLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onVideoLoad && r.onVideoLoad(t, e);
        });
    }, t.prototype.onSongLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onSongLoad && r.onSongLoad(t, e);
        });
    }, t.prototype.onSongMapLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onSongMapLoad && r.onSongMapLoad(t, e);
        });
    }, t.prototype.onSongInfoLoad = function(t, e) {
        var r = !1;
        this.listeners.forEach(function(n) {
            n.onSongInfoLoad && (n.onSongInfoLoad(t, e), r = !0);
        }), r && console.warn('[TextAlive API] "onSongInfoLoad" event is deprecated; use "onSongMapLoad" event instead');
    }, t.prototype.onVocalAmplitudeLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onVocalAmplitudeLoad && r.onVocalAmplitudeLoad(t, e);
        });
    }, t.prototype.onValenceArousalLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onValenceArousalLoad && r.onValenceArousalLoad(t, e);
        });
    }, t.prototype.onLyricsLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onLyricsLoad && r.onLyricsLoad(t, e);
        });
    }, t.prototype.onTextLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onTextLoad && r.onTextLoad(t, e);
        });
    }, t.prototype.onAppLoad = function(t) {
        this.listeners.forEach(function(e) {
            return e.onAppLoad && e.onAppLoad(t);
        });
    }, t.prototype.onAppReady = function(t) {
        this.listeners.forEach(function(e) {
            return e.onAppReady && e.onAppReady(t);
        });
    }, t.prototype.onAppParameterUpdate = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onAppParameterUpdate && r.onAppParameterUpdate(t, e);
        });
    }, t.prototype.onAppMediaChange = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onAppMediaChange && r.onAppMediaChange(t, e);
        });
    }, t.prototype.onTemplateUpdate = function(t) {
        this.listeners.forEach(function(e) {
            return e.onTemplateUpdate && e.onTemplateUpdate(t);
        });
    }, t.prototype.onTemplateCommit = function(t) {
        this.listeners.forEach(function(e) {
            return e.onTemplateCommit && e.onTemplateCommit(t);
        });
    }, t.prototype.onTemplatesLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onTemplatesLoad && r.onTemplatesLoad(t, e);
        });
    }, t.prototype.onFontsLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onFontsLoad && r.onFontsLoad(t, e);
        });
    }, t.prototype.onVideoReady = function(t) {
        this.listeners.forEach(function(e) {
            return e.onVideoReady && e.onVideoReady(t);
        });
    }, t.prototype.onTimerReady = function(t) {
        this.listeners.forEach(function(e) {
            return e.onTimerReady && e.onTimerReady(t);
        });
    }, t.prototype.onStageElementSet = function(t) {
        this.listeners.forEach(function(e) {
            return e.onStageElementSet && e.onStageElementSet(t);
        });
    }, t.prototype.onMediaElementSet = function(t) {
        this.listeners.forEach(function(e) {
            return e.onMediaElementSet && e.onMediaElementSet(t);
        });
    }, t.prototype.onTimeUpdate = function(t) {
        var e = this;
        this.listeners.forEach(function(e) {
            return e.onTimeUpdate && e.onTimeUpdate(t);
        }), this.position = t, this.throttledTimeUpdate || (this.throttledTimeUpdate = new Promise(function(t, r) {
            setTimeout(function() {
                e.onThrottledTimeUpdate(e.position), e.throttledTimeUpdate = null, t();
            }, e.throttleInterval);
        }));
    }, t.prototype.onThrottledTimeUpdate = function(t) {
        this.listeners.forEach(function(e) {
            return e.onThrottledTimeUpdate && e.onThrottledTimeUpdate(t);
        });
    }, t.prototype.onBackgroundGraphicsUpdate = function(t) {
        this.listeners.forEach(function(e) {
            return e.onBackgroundGraphicsUpdate && e.onBackgroundGraphicsUpdate(t);
        });
    }, t.prototype.onMediaSeek = function(t) {
        this.listeners.forEach(function(e) {
            return e.onMediaSeek && e.onMediaSeek(t);
        });
    }, t.prototype.onVideoSeekStart = function() {
        this.listeners.forEach(function(t) {
            return t.onVideoSeekStart && t.onVideoSeekStart();
        });
    }, t.prototype.onVideoSeekEnd = function() {
        this.listeners.forEach(function(t) {
            return t.onVideoSeekEnd && t.onVideoSeekEnd();
        });
    }, t.prototype.onVideoSeek = function(t) {
        this.listeners.forEach(function(e) {
            return e.onVideoSeek && e.onVideoSeek(t);
        });
    }, t.prototype.onPlay = function() {
        this.listeners.forEach(function(t) {
            return t.onPlay && t.onPlay();
        });
    }, t.prototype.onPause = function() {
        this.listeners.forEach(function(t) {
            return t.onPause && t.onPause();
        });
    }, t.prototype.onSeek = function(t) {
        this.listeners.forEach(function(e) {
            return e.onSeek && e.onSeek(t);
        });
    }, t.prototype.onSeekComplete = function(t) {
        this.listeners.forEach(function(e) {
            return e.onSeekComplete && e.onSeekComplete(t);
        });
    }, t.prototype.onStop = function() {
        this.listeners.forEach(function(t) {
            return t.onStop && t.onStop();
        });
    }, t.prototype.onDispose = function() {
        this.listeners.forEach(function(t) {
            return t.onDispose && t.onDispose();
        });
    }, t.prototype.onResize = function(t) {
        this.listeners.forEach(function(e) {
            return e.onResize && e.onResize(t);
        });
    }, t.prototype.onVolumeUpdate = function(t) {
        this.listeners.forEach(function(e) {
            return e.onVolumeUpdate && e.onVolumeUpdate(t);
        });
    }, t.prototype.addListener = function(t) {
        !t || this.listeners.indexOf(t) >= 0 || this.listeners.push(t);
    }, t.prototype.removeListener = function(t) {
        var e = !1;
        return this.listeners = this.listeners.filter(function(r) {
            var n = r === t;
            return e = e || n, !n;
        }), e;
    }, t;
}(), _n = function() {
    function t(t, e, r) {
        var n = this;
        this.player = t, this.manager = e, this.emitter = r, this._defaultBackgroundCss = null, this._background = null, t.addListener({
            onStageElementSet: function(t) {
                return n.doUpdateBackground(n.background);
            }
        });
    }
    return Object.defineProperty(t.prototype, "background", {
        get: function() {
            return this._background;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "defaultBackgroundCss", {
        get: function() {
            return this._defaultBackgroundCss ? this._defaultBackgroundCss : "";
        },
        set: function(t) {
            this._defaultBackgroundCss = t, this.updateBackground(this._background);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ready", {
        get: function() {
            return null !== this._background;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.settingBackground = function(t) {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(e) {
                switch(e.label){
                    case 0:
                        return [
                            4,
                            this.doSetBackground(t)
                        ];
                    case 1:
                        return [
                            2,
                            e.sent() && this.doUpdateBackground(t)
                        ];
                }
            });
        });
    }, t.prototype.setBackground = function(t) {
        return pn(this, void 0, void 0, function() {
            var e;
            return hn(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            this.doSetBackground(t)
                        ];
                    case 1:
                        return [
                            2,
                            (e = r.sent()) && this.updateBackground(e)
                        ];
                }
            });
        });
    }, t.prototype.doSetBackground = function(t) {
        return pn(this, void 0, void 0, function() {
            var e, r, n;
            return hn(this, function(i) {
                switch(i.label){
                    case 0:
                        return e = t && t.originalUrl ? t.originalUrl : "", this.manager.isBackgroundColorAsset(t) ? [
                            2,
                            {
                                css: e,
                                originalUrl: e
                            }
                        ] : this.manager.isBackgroundPiaproImageAsset(t) ? [
                            4,
                            this.manager.read(e)
                        ] : [
                            3,
                            2
                        ];
                    case 1:
                        return (r = i.sent()) && r.url && this.manager.checkBackgroundImageLicense(r.license) ? (r.originalUrl = e, t && (r.x = t.x, r.y = t.y), [
                            2,
                            r
                        ]) : [
                            2,
                            {
                                css: "",
                                originalUrl: e,
                                x: t ? t.x : void 0,
                                y: t ? t.y : void 0,
                                license: r ? r.license : void 0
                            }
                        ];
                    case 2:
                        return this.manager.isBackgroundSpecialImageAsset(t) ? [
                            2,
                            {
                                css: 'url("https://api.textalive.jp/images/backgrounds/snowmiku2016/' + (n = /^snowmiku2016-([0-9]{2})$/.exec(e))[1] + '.jpg")',
                                contentUrl: "https://api.textalive.jp/images/backgrounds/snowmiku2016/" + n[1] + ".jpg",
                                url: "https://snowmiku.com/2016/info_chara.html",
                                name: "SNOW MIKU 2016",
                                authorName: "\u8C46\u306E\u7D20",
                                originalUrl: e,
                                x: t ? t.x : void 0,
                                y: t ? t.y : void 0,
                                defaultY: 0
                            }
                        ] : [
                            2,
                            {
                                originalUrl: null,
                                css: "",
                                x: t ? t.x : void 0,
                                y: t ? t.y : void 0
                            }
                        ];
                }
            });
        });
    }, t.prototype.updateBackground = function(t) {
        return !!this.doUpdateBackground(t) && (this.emitter && this.emitter.onBackgroundGraphicsUpdate && this.emitter.onBackgroundGraphicsUpdate(t), !0);
    }, t.prototype.doUpdateBackground = function(t) {
        if (!t) return !1;
        if (!this.player.stageElement) return this._background = t, !0;
        var e = this.player.stageElement.style;
        return t.css.length <= 0 ? e.background = this.defaultBackgroundCss : e.background = t.css, "number" == typeof t.x || this._background && "number" == typeof this._background.x ? ("number" != typeof t.x && (t.x = this._background.x), e.backgroundPositionX = e.backgroundPositionX + "%") : e.backgroundPositionX = "number" == typeof t.defaultX ? t.defaultX + "%" : "center", "number" == typeof t.y || this._background && "number" == typeof this._background.y ? ("number" != typeof t.y && (t.y = this._background.y), e.backgroundPositionY = e.backgroundPositionY + "%") : e.backgroundPositionY = "number" == typeof t.defaultY ? t.defaultY + "%" : "center", e.backgroundSize = "cover", this._background = t, !0;
    }, t.prototype.export = function() {
        if (!this.background || !this.background.originalUrl) return null;
        var t = {
            originalUrl: this.background.originalUrl
        };
        return void 0 !== this.background.x && (t.x = this.background.x), void 0 !== this.background.y && (t.y = this.background.y), t;
    }, t.prototype.exportPartialVideoEntry = function(t) {
        return {
            background: this.export()
        };
    }, t;
}();
function wn(t, e, r) {
    return pn(this, void 0, void 0, function() {
        var n, i, o, s, a, u, l, c, p, h, d, f, y, v;
        return hn(this, function(g) {
            switch(g.label){
                case 0:
                    if (n = {
                        loaded: [],
                        failed: []
                    }, "undefined" == typeof window || !window.document || !window.document.head) return n.failed = t.slice(), [
                        2,
                        n
                    ];
                    for(i = r.split("").filter(function(t, e, r) {
                        return r.indexOf(t) === e;
                    }).sort(), o = !0, s = 0, i.forEach(function(t) {
                        var r = e.indexOf(t, s);
                        o = o && r >= 0, s = r;
                    }), a = window.document.head, u = [], l = 0; l < a.children.length; l++)"link" === (c = a.children.item(l)).tagName.toLowerCase() && "stylesheet" === c.getAttribute("rel") && u.push(c.getAttribute("href"));
                    p = [], h = [], d = [], t.forEach(function(t) {
                        if (t.google) d.push(t.key);
                        else {
                            var e = o && t.compactUrl || t.url;
                            u.includes(e) || (h.push(t.en), p.push(e));
                        }
                    }), f = {
                        classes: !1,
                        active: null,
                        inactive: null,
                        fontactive: function(e) {
                            n.loaded.push(t.find(function(t) {
                                return t.en === e;
                            })), n.failed = n.failed.filter(function(t) {
                                return t.en !== e;
                            });
                        },
                        fontinactive: function(e) {
                            n.failed.push(t.find(function(t) {
                                return t.en === e;
                            }));
                        },
                        timeout: 5e3
                    }, d.length > 0 && (f.google = {
                        families: d
                    }), h.length > 0 && (f.custom = {
                        families: h,
                        urls: p
                    }), g.label = 1;
                case 1:
                    return g.trys.push([
                        1,
                        5,
                        ,
                        6
                    ]), (v = "undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.WebFont)) ? [
                        3,
                        3
                    ] : [
                        4,
                        require("d32dff30d595d4e2")
                    ];
                case 2:
                    v = g.sent(), g.label = 3;
                case 3:
                    return y = v, [
                        4,
                        new Promise(function(t) {
                            f.active = f.inactive = t, y.load(f);
                        })
                    ];
                case 4:
                case 5:
                    return g.sent(), [
                        3,
                        6
                    ];
                case 6:
                    return [
                        2,
                        n
                    ];
            }
        });
    });
}
function Pn(t, e) {
    return pn(this, void 0, void 0, function() {
        var r, n, i, o, s, a, u, l;
        return hn(this, function(c) {
            switch(c.label){
                case 0:
                    if (r = {
                        loaded: [],
                        failed: []
                    }, !("undefined" != typeof window && window.document && window.document.head && window.Ts && window.Ts.loadFontAsync)) return r.failed = t.slice(), [
                        2,
                        r
                    ];
                    for(n = window.document.head, i = {}, o = function(t) {
                        var e = n.children.item(t);
                        if ("style" !== e.tagName.toLowerCase() || "text/css" !== e.getAttribute("type") || "stylesheet" !== e.getAttribute("rel") || !e.hasAttribute("data-cssName")) return "continue";
                        var r = e.getAttribute("data-cssName");
                        if (void 0 === i[r]) return i[r] = new Set(e.getAttribute("data-text")), {
                            value: void 0
                        };
                        e.getAttribute("data-text").split("").forEach(function(t) {
                            return i[r].add(t);
                        });
                    }, s = 0; s < n.children.length; s++)if ("object" == typeof (a = o(s))) return [
                        2,
                        a.value
                    ];
                    return u = window.Ts, l = [], t.forEach(function(t) {
                        var n = new Set(e + t.en + t.ja);
                        i[t.en] && i[t.en].forEach(function(t) {
                            return n.delete(t);
                        }), n.size <= 0 ? r.loaded.push(t) : l.push(new Promise(function(e) {
                            return function(t, e, r, n, i) {
                                var o = e.en;
                                t.loadFontAsync({
                                    cssName: o,
                                    text: n,
                                    outputType: "json",
                                    callback: function(t) {
                                        try {
                                            !function(t, e, r) {
                                                var n = JSON.parse(r), i = JSON.parse(n.res), o = document.createElement("style");
                                                o.setAttribute("data-cssName", t), o.setAttribute("data-text", e), o.setAttribute("type", "text/css"), o.setAttribute("rel", "stylesheet"), o.innerHTML = "@font-face {font-family: '" + i.fontFamily + "';font-weight: " + i["font-weight"] + ";src: url(data:font/woff;base64," + i.src + ");}", document.head.appendChild(o);
                                            }(o, n, t.data), r.loaded.push(e);
                                        } catch (t) {
                                            r.failed.push(e);
                                        }
                                        i();
                                    }
                                });
                            }(u, t, r, Array.from(n.values()).join(""), e);
                        }));
                    }), [
                        4,
                        Promise.all(l)
                    ];
                case 1:
                    return c.sent(), [
                        2,
                        r
                    ];
            }
        });
    });
}
var En = function(t) {
    function e(e, r) {
        var n = this.constructor, i = t.call(this, e) || this;
        return i.fonts = r, Object.setPrototypeOf(i, n.prototype), i;
    }
    return ln(e, t), e;
}(Error), On = function() {
    function t(t, e, r) {
        this.fontInfoManager = t, this.textFetcher = e, this.listener = r, this._failed = [], this._loaded = [];
    }
    return Object.defineProperty(t.prototype, "failed", {
        get: function() {
            return this._failed;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "loaded", {
        get: function() {
            return this._loaded;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.loadAll = function() {
        return pn(this, void 0, void 0, function() {
            var t;
            return hn(this, function(e) {
                switch(e.label){
                    case 0:
                        return [
                            4,
                            this.listAvailableFonts()
                        ];
                    case 1:
                        return t = e.sent(), [
                            2,
                            this.loadFonts(t)
                        ];
                }
            });
        });
    }, t.prototype.loadForVideo = function(t) {
        return pn(this, void 0, void 0, function() {
            var e, r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return (e = this.listFontFamiliesInVideo(t)) ? [
                            4,
                            this.listAvailableFonts()
                        ] : (this.listener && this.listener.onFontsLoad && this.listener.onFontsLoad(this.loaded), [
                            2,
                            Promise.resolve(this.loaded)
                        ]);
                    case 1:
                        return r = n.sent(), [
                            2,
                            this.loadFonts(r.filter(function(t) {
                                return e.indexOf(t.en) >= 0;
                            }))
                        ];
                }
            });
        });
    }, t.prototype.listFontFamiliesInVideo = function(t) {
        if (!t || !t.phrases) return null;
        var e = [];
        return t.phrases.forEach(function(t) {
            return t.words.forEach(function(t) {
                return t.characters.forEach(function(t) {
                    return e.push(t.fontFamily);
                });
            });
        }), e.filter(function(t, e, r) {
            return r.indexOf(t) === e;
        });
    }, t.prototype.listAvailableFonts = function() {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(t) {
                return [
                    2,
                    this.fontInfoManager.listAvailableFonts()
                ];
            });
        });
    }, t.prototype.isLoading = function() {
        return !!this.queue;
    }, t.prototype.load = function(t) {
        return pn(this, void 0, void 0, function() {
            var e, r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return e = [], r = [], t.forEach(function(t) {
                            "string" == typeof t ? e.push(t) : r.push(t);
                        }), [
                            4,
                            this.fontInfoManager.listAvailableFonts()
                        ];
                    case 1:
                        return n.sent().forEach(function(t) {
                            e.indexOf(t.key) >= 0 && r.push(t);
                        }), [
                            2,
                            this.loadFonts(r)
                        ];
                }
            });
        });
    }, t.prototype.loadFonts = function(t) {
        return pn(this, void 0, void 0, function() {
            var e = this;
            return hn(this, function(r) {
                return this.queue ? (this.listener && this.listener.onFontsLoad && this.listener.onFontsLoad(null, new En("Failed to load some fonts because there is an ongoing font loding process", this.failed.slice())), [
                    2,
                    this.loaded
                ]) : (this.queue = this.doLoad(t).then(function(t) {
                    return e.queue = null, t;
                }), [
                    2,
                    this.queue
                ]);
            });
        });
    }, t.prototype.doLoad = function(t) {
        return pn(this, void 0, void 0, function() {
            var e, r, n, i, o = this;
            return hn(this, function(s) {
                switch(s.label){
                    case 0:
                        return e = [], r = [], [
                            4,
                            this.fontInfoManager.getFrequentChars()
                        ];
                    case 1:
                        return n = s.sent(), t.forEach(function(t) {
                            t.typesquare || t.typekit || e.push(t), t.typesquare && r.push(t);
                        }), i = (this.textFetcher && this.textFetcher() || "").split("").filter(function(t, e, r) {
                            return r.indexOf(t) === e;
                        }).sort().join(""), [
                            2,
                            Promise.all([
                                wn(e, n, i),
                                Pn(r, i)
                            ]).then(function(t) {
                                var e = t[0], r = t[1], n = e.loaded.concat(r.loaded);
                                if (o.addLoadedFonts(n), e.failed.length > 0 || r.failed.length > 0) {
                                    var i = e.failed.concat(r.failed);
                                    o.addFailedFonts(i), o.listener && o.listener.onFontsLoad && o.listener.onFontsLoad(null, new En("Failed to load some fonts", o.failed.slice()));
                                } else o.listener && o.listener.onFontsLoad && o.listener.onFontsLoad(n);
                                return o.loaded;
                            }).catch(function(t) {
                                return o.listener && o.listener.onFontsLoad && o.listener.onFontsLoad(null, new En(t, o.failed.slice())), o.loaded;
                            })
                        ];
                }
            });
        });
    }, t.prototype.addLoadedFonts = function(t) {
        var e = this;
        this._loaded = this.loaded.concat(t.filter(function(t) {
            return e.failed.findIndex(function(e) {
                return e.key === t.key;
            }) < 0;
        }));
    }, t.prototype.addFailedFonts = function(t) {
        var e = this;
        this._failed = this.failed.concat(t.filter(function(t) {
            return e.failed.findIndex(function(e) {
                return e.key === t.key;
            }) < 0;
        }));
    }, t;
}(), Sn = function() {
    function t() {}
    return Object.defineProperty(t.prototype, "duration", {
        get: function() {
            return this.endTime - this.startTime;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.contains = function(t) {
        return t >= this.startTime && t <= this.endTime;
    }, t.prototype.overlaps = function(t, e) {
        return this.contains(t) || this.contains(e) || this.startTime <= t && this.endTime >= e;
    }, t.prototype.progress = function(t) {
        return this.contains(t) ? this.startTime === this.endTime ? 0 : (t - this.startTime) / (this.endTime - this.startTime) : -1;
    }, t;
}(), Tn = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.previous = e.next = null, e;
    }
    return ln(e, t), Object.defineProperty(e.prototype, "endTime", {
        get: function() {
            return this.next ? this.next.startTime : this.startTime;
        },
        enumerable: !1,
        configurable: !0
    }), e;
}(Sn), xn = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.previous = e.next = null, e;
    }
    return ln(e, t), e;
}(Sn), An = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.previous = e.next = null, e;
    }
    return ln(e, t), e;
}(Sn), Rn = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.previous = e.next = null, e;
    }
    return ln(e, t), e;
}(Sn), Cn = function() {
    function t(t) {
        var e = t.analysis, r = t.info;
        this.beats = [], this.chords = [], this.segments = [], this.voice = [], this._revisions = {
            beatId: r.beatRevisionId,
            chordId: r.chordRevisionId,
            repetitiveSegmentId: r.chorusRevisionId
        }, this.parseBeats(e.beats), this.parseSegments(e.repetitive_segment), this.parseChords(e.chords), e.voice && this.parseVoice(e.voice);
    }
    return Object.defineProperty(t.prototype, "revisions", {
        get: function() {
            return this._revisions;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.parseBeats = function(t) {
        var e = this;
        if (Array.isArray(t) && Array.isArray(t[0])) {
            var r = null, n = 0;
            t[0].forEach(function(t) {
                var i = new Tn;
                i.startTime = 1e3 * t[0], i.length = t[2], i.position = t[3], i.previous = r, null !== r && (r.next = i), i.index = n++, e.beats.push(i), r = i;
            }), null !== r && (r.next = null);
        }
    }, t.prototype.parseChords = function(t) {
        var e = this;
        if (Array.isArray(t)) {
            var r = null, n = 0;
            t.forEach(function(t) {
                var i = new xn;
                i.startTime = 1e3 * t[0], i.endTime = 1e3 * t[1], i.name = t[2], i.previous = r, null !== r && (r.next = i), i.index = n++, e.chords.push(i), r = i;
            }), null !== r && (r.next = null);
        }
    }, t.prototype.parseSegments = function(t) {
        var e = this;
        Array.isArray(t) && t.forEach(function(t) {
            var r = {
                chorus: !!t.chorus,
                duration: 10 * t.segment_length,
                segments: null
            }, n = null, i = 0;
            r.segments = t.start_frames.map(function(t) {
                var e = new An;
                return e.startTime = 10 * t, e.endTime = e.startTime + r.duration, e.previous = n, null !== n && (n.next = e), e.index = i++, n = e, e;
            }), null !== n && (n.next = null), e.segments.push(r);
        });
    }, t.prototype.parseVoice = function(t) {
        var e = this;
        Array.isArray(t) && t.forEach(function(t) {
            var r = [], n = null, i = 0, o = 0;
            t.forEach(function(t) {
                var e = new Rn;
                e.startTime = o, e.endTime = e.startTime + 10 * t[1], e.f0 = t[0][0], e.initialF0 = t[0][1], e.previous = n, null !== n && (n.next = e), e.index = i++, r.push(e), n = e, o = e.endTime;
            }), null !== n && (n.next = null), e.voice.push(r);
        });
    }, t;
}();
function Nn(t, e, r) {
    for(var n = r && "number" != typeof e ? r(e) : e, i = 0, o = t.length; i < o;){
        var s = i + o >>> 1;
        (r ? r(t[s]) : t[s]) < n ? i = s + 1 : o = s;
    }
    return i;
}
var kn = function() {
    function t(t) {
        var e = t.song, r = t.analysis, n = t.vocalAmplitude, i = t.maxVocalAmplitude, o = t.valenceArousal;
        this._song = e, this._analysis = r, this._vocalAmplitude = n, this._maxVocalAmplitude = i, this._valenceArousal = o;
    }
    return Object.defineProperty(t.prototype, "song", {
        get: function() {
            return this._song;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "analysis", {
        get: function() {
            return this._analysis;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "vocalAmplitude", {
        get: function() {
            return this._vocalAmplitude;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "maxVocalAmplitude", {
        get: function() {
            return this._maxVocalAmplitude;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "valenceArousal", {
        get: function() {
            return this._valenceArousal;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.getChoruses = function() {
        var t;
        if (!this._analysis) return [];
        var e = this._analysis.segments.filter(function(t) {
            return t.chorus;
        });
        return e.length <= 0 ? [] : (null === (t = e[0].segments) || void 0 === t ? void 0 : t.slice()) || [];
    }, t.prototype.findChorus = function(t, e) {
        var r = [];
        if (this._analysis) {
            var n = this._analysis.segments.filter(function(t) {
                return t.chorus;
            });
            if (n.length <= 0) return null;
            r = n[0].segments;
        }
        return rt(r, t, e);
    }, t.prototype.findChorusBetween = function(t, e) {
        return this.findChorus(t, {
            endTime: e
        });
    }, t.prototype.getBeats = function() {
        var t;
        return this._analysis && (null === (t = this._analysis.beats) || void 0 === t ? void 0 : t.slice()) || [];
    }, t.prototype.findBeat = function(t, e) {
        return this._analysis ? rt(this._analysis.beats, t, e) : null;
    }, t.prototype.getChords = function() {
        var t;
        return this._analysis && (null === (t = this._analysis.chords) || void 0 === t ? void 0 : t.slice()) || [];
    }, t.prototype.findChord = function(t, e) {
        return this._analysis ? rt(this._analysis.chords, t, e) : null;
    }, t.prototype.getVocalFrequency = function(t) {
        var e;
        if (!Array.isArray(null === (e = this._analysis) || void 0 === e ? void 0 : e.voice)) return -1;
        var r = this._analysis.voice[0];
        if (r.length <= 0) return -1;
        var n = Nn(r, t, function(t) {
            return t.endTime;
        });
        return r[n].contains(t) ? r[n].f0 : -1;
    }, t.prototype.getVocalAmplitude = function(t) {
        var e = this._vocalAmplitude, r = Math.round(t / 10);
        return !Array.isArray(this._vocalAmplitude) || r < 0 || r >= e.length ? -1 : this._vocalAmplitude[r];
    }, t.prototype.getMaxVocalAmplitude = function() {
        return "number" == typeof this._maxVocalAmplitude ? this._maxVocalAmplitude : -1;
    }, t.prototype.getValenceArousal = function(t) {
        var e = this._valenceArousal;
        if (!e) return null;
        var r = Nn(e.seq, t, function(t) {
            return 1e3 * t.t[1];
        });
        if (r < 0) return {
            a: e.seq[0].a,
            v: e.seq[0].v
        };
        if (r + 1 >= e.seq.length || t < 1e3 * e.seq[r + 1].t[0]) return {
            a: e.seq[Math.min(r, e.seq.length - 1)].a,
            v: e.seq[Math.min(r, e.seq.length - 1)].v
        };
        var n = e.seq[r], i = e.seq[r + 1], o = t / 1e3, s = i.t[0], a = n.t[1], u = a - s;
        return {
            a: (n.a * (a - o) + i.a * (o - s)) / u,
            v: (n.v * (a - o) + i.v * (o - s)) / u
        };
    }, t.prototype.getMedianValenceArousal = function() {
        var t = this._valenceArousal;
        return t ? t.stats.median : null;
    }, t;
}(), jn = function() {
    function t(t, e, r) {
        this.songManager = t, this.options = r, this.listener = e;
    }
    return Object.defineProperty(t.prototype, "song", {
        get: function() {
            return this._song;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "analysis", {
        get: function() {
            return this._analysis;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "vocalAmplitude", {
        get: function() {
            return this._vocalAmplitude;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "maxVocalAmplitude", {
        get: function() {
            return this._maxVocalAmplitude;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "valenceArousal", {
        get: function() {
            return this._valenceArousal;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.loadSong = function(t, e) {
        var r, n, i;
        return pn(this, void 0, void 0, function() {
            var o, s;
            return hn(this, function(a) {
                switch(a.label){
                    case 0:
                        return "number" == typeof t && t < 0 || !t ? (this.onSongLoad(null, new Error("Neither Songle ID or code provided")), [
                            2,
                            null
                        ]) : [
                            4,
                            this.songManager.load("number" == typeof t ? {
                                id: t
                            } : {
                                code: t
                            })
                        ];
                    case 1:
                        return o = a.sent(), this.onSongLoad(o, o ? void 0 : new Error("Song data not found")), o ? (s = {
                            chord: null == e ? void 0 : e.chordId,
                            beat: null == e ? void 0 : e.beatId,
                            chorus: null == e ? void 0 : e.repetitiveSegmentId
                        }, [
                            4,
                            Promise.all([
                                (null === (r = this.options) || void 0 === r ? void 0 : r.vocalFrequencyEnabled) ? this.loadSongDetailInfo(o.song.code, {
                                    revisions: s
                                }) : this.loadSongInfo(o.song.code, {
                                    revisions: s
                                }),
                                (null === (n = this.options) || void 0 === n ? void 0 : n.vocalAmplitudeEnabled) ? this.loadVocalAmplitude(o.song.code) : Promise.resolve(null),
                                (null === (i = this.options) || void 0 === i ? void 0 : i.valenceArousalEnabled) ? this.loadValenceArousal(o.song.code) : Promise.resolve(null)
                            ])
                        ]) : [
                            2,
                            null
                        ];
                    case 2:
                        return a.sent(), [
                            2,
                            new kn(this)
                        ];
                }
            });
        });
    }, t.prototype.onSongLoad = function(t, e) {
        this._song = t, this.listener && this.listener.onSongLoad && this.listener.onSongLoad(t, e);
    }, t.prototype.loadSongInfo = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            this.songManager.loadInfo(String(t), e)
                        ];
                    case 1:
                        return r = n.sent(), this.onSongMapLoad(r, r ? void 0 : new Error("Song analysis data not found")), [
                            2,
                            r
                        ];
                }
            });
        });
    }, t.prototype.loadSongDetailInfo = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            this.songManager.loadDetailInfo(String(t), e)
                        ];
                    case 1:
                        return r = n.sent(), this.onSongMapLoad(r, r ? void 0 : new Error("Song analysis data not found")), [
                            2,
                            r
                        ];
                }
            });
        });
    }, t.prototype.mockSongInfo = function(t) {
        var e = function(t) {
            for(var e = t.beat, r = t.chorusSegment, n = t.duration, i = [], o = 0; 60 * o / e.bpm < n / 1e3;)i.push([
                60 * o / e.bpm,
                1,
                e.length,
                o % e.length + 1,
                1
            ]), o++;
            return {
                beats: [
                    i
                ],
                chords: null,
                repetitive_segment: [
                    {
                        chorus: !0,
                        index: 0,
                        segment_length: r.duration / 10,
                        start_frames: r.startTimes.map(function(t) {
                            return t / 10;
                        })
                    }
                ],
                voice: null
            };
        }(t);
        return this._song = null, this.onSongMapLoad({
            analysis: e,
            info: null
        }), new kn(this);
    }, t.prototype.onSongMapLoad = function(t, e) {
        var r, n;
        this._analysis = new Cn(t), (null === (r = this.listener) || void 0 === r ? void 0 : r.onSongMapLoad) && this.listener.onSongMapLoad(this._analysis, e), (null === (n = this.listener) || void 0 === n ? void 0 : n.onSongInfoLoad) && this.listener.onSongInfoLoad(t, e);
    }, t.prototype.loadVocalAmplitude = function(t) {
        var e;
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            this.songManager.loadVocalAmplitude(String(t))
                        ];
                    case 1:
                        return r._vocalAmplitude = n.sent(), this._maxVocalAmplitude = Math.max.apply(Math, this._vocalAmplitude), (null === (e = this.listener) || void 0 === e ? void 0 : e.onVocalAmplitudeLoad) && this.listener.onVocalAmplitudeLoad(this._vocalAmplitude, this._vocalAmplitude ? void 0 : new Error("Vocal amplitude data not found")), [
                            2,
                            this._vocalAmplitude
                        ];
                }
            });
        });
    }, t.prototype.loadValenceArousal = function(t) {
        var e;
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            this.songManager.loadValenceArousal(String(t))
                        ];
                    case 1:
                        return r._valenceArousal = n.sent(), (null === (e = this.listener) || void 0 === e ? void 0 : e.onValenceArousalLoad) && this.listener.onValenceArousalLoad(this._valenceArousal, this._valenceArousal ? void 0 : new Error("Valence arousal data not found")), [
                            2,
                            this._valenceArousal
                        ];
                }
            });
        });
    }, t;
}(), In = function() {
    function t(t, e, r) {
        this.managers = t, this.listener = e, this.options = r;
    }
    return t.prototype.loadRawText = function(t) {
        var e;
        return e = !t.phrases || t.phrases.length < 0 ? "" : t.phrases.map(function(t) {
            return t.words.map(function(t) {
                return t.characters.map(function(t) {
                    return t.char;
                }).join("");
            }).join("");
        }).join(""), this.onTextLoad({
            text: e
        }), {
            lyricsId: -1,
            lyrics: null,
            lyricsBody: {
                text: e,
                artist: null,
                name: null,
                url: null
            }
        };
    }, t.prototype.loadLyrics = function(t) {
        var e = t.songCode, r = t.lyricId, n = void 0 === r ? -1 : r, i = t.lyricDiffId, o = void 0 === i ? -1 : i, s = t.altLyricsUrl, a = t.directAccess;
        return pn(this, void 0, void 0, function() {
            var t, r, i, u;
            return hn(this, function(l) {
                switch(l.label){
                    case 0:
                        return n <= 0 ? (0 === n ? this.onLyricsLoad(null, new Error("Lyrics not loaded")) : this.onLyricsLoad(null, new Error("Lyrics not found")), [
                            2,
                            null
                        ]) : [
                            4,
                            this.managers.lyrics.loadDiff(e, n, o)
                        ];
                    case 1:
                        return (null == (t = l.sent()) ? void 0 : t.data) ? (r = cn(cn({}, t), {
                            processing: !1,
                            failed: !1,
                            id: n,
                            diff: {
                                id: o
                            }
                        }), this.onLyricsLoad(r), s || a ? [
                            3,
                            3
                        ] : [
                            4,
                            this.managers.lyrics.fetchLocalLyricBody(n)
                        ]) : (this.onLyricsLoad(null, new Error("Lyrics timing information not found")), [
                            2,
                            null
                        ]);
                    case 2:
                        i = l.sent(), l.label = 3;
                    case 3:
                        if (null == i ? void 0 : i.text) return [
                            3,
                            7
                        ];
                        l.label = 4;
                    case 4:
                        return l.trys.push([
                            4,
                            6,
                            ,
                            7
                        ]), [
                            4,
                            this.loadLyricsText(t, {
                                altLyricsUrl: s,
                                directAccess: a
                            })
                        ];
                    case 5:
                        return i = l.sent(), [
                            3,
                            7
                        ];
                    case 6:
                        return u = l.sent(), this.onTextLoad(null, u), [
                            3,
                            7
                        ];
                    case 7:
                        return i && this.onTextLoad(i), [
                            2,
                            {
                                lyricsId: r.id,
                                lyrics: r,
                                lyricsBody: i
                            }
                        ];
                }
            });
        });
    }, t.prototype.loadLyricsText = function(t, e) {
        var r = void 0 === e ? {} : e, n = r.altLyricsUrl, i = r.directAccess;
        return pn(this, void 0, void 0, function() {
            var e, r, o = this;
            return hn(this, function(s) {
                switch(s.label){
                    case 0:
                        return e = this.options && "number" == typeof this.options.lyricsFetchTimeout && this.options.lyricsFetchTimeout >= 0, r = this.managers.lyrics.fetchLyricBody(n || t.url, {
                            parserPath: t.parser_path,
                            directAccess: i
                        }), [
                            4,
                            e ? Promise.race([
                                r,
                                new Promise(function(t, e) {
                                    return setTimeout(function() {
                                        return e(new Error("Fetching lyrics text timeout"));
                                    }, o.options.lyricsFetchTimeout);
                                })
                            ]) : r
                        ];
                    case 1:
                        return [
                            2,
                            s.sent()
                        ];
                }
            });
        });
    }, t.prototype.onLyricsLoad = function(t, e) {
        this.listener && this.listener.onLyricsLoad && this.listener.onLyricsLoad(t, e);
    }, t.prototype.onTextLoad = function(t, e) {
        this.listener && this.listener.onTextLoad && this.listener.onTextLoad(t, e);
    }, t;
}(), Un = function() {
    function t(t) {
        var e = t.video;
        this._video = e;
    }
    return Object.defineProperty(t.prototype, "video", {
        get: function() {
            return this._video;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "data", {
        get: function() {
            return this._video.json;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), Fn = function() {
    function t(t, e) {
        this.managers = t, this.listener = e, this.listener = e;
    }
    return Object.defineProperty(t.prototype, "video", {
        get: function() {
            return this._video;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.onVideoLoad = function(t, e) {
        var r = t ? Object.assign(t, e) : null;
        return r && ("string" == typeof r.json ? r.json = JSON.parse(r.json) : "object" == typeof r.json && null !== r.json || (r.json = {}), "string" == typeof r.config ? r.config = JSON.parse(r.config) : "object" == typeof r.config && null !== r.config || (r.config = {})), this._video = r, this.listener && this.listener.onVideoLoad && this.listener.onVideoLoad(r), new Un({
            video: r
        });
    }, t.prototype.createFromVideoId = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            this.managers.video.load(t)
                        ];
                    case 1:
                        return r = n.sent(), [
                            2,
                            this.onVideoLoad(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromVideo = function(t, e) {
        return this.onVideoLoad(t, e);
    }, t.prototype.createFromSongUrl = function(t, e) {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(r) {
                return [
                    2,
                    this.createFromSongPath(this.managers.song.getSongPathFromUrl(t), e)
                ];
            });
        });
    }, t.prototype.createFromSongPath = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            this.managers.song.load({
                                songPath: t
                            })
                        ];
                    case 1:
                        return (r = n.sent()) ? [
                            2,
                            this.createFromSong(r.song, e)
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.createFromSongId = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            this.managers.song.load({
                                id: t
                            })
                        ];
                    case 1:
                        return (r = n.sent()) ? [
                            2,
                            this.createFromSong(r.song, e)
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.createFromSongCode = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            this.managers.song.load({
                                code: t
                            })
                        ];
                    case 1:
                        return (r = n.sent()) ? [
                            2,
                            this.createFromSong(r.song, e)
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.createFromSong = function(t, e) {
        var r;
        return pn(this, void 0, void 0, function() {
            var n, i, o, s, a, u;
            return hn(this, function(l) {
                switch(l.label){
                    case 0:
                        return n = null == e ? void 0 : e.lyricId, i = null == e ? void 0 : e.lyricDiffId, "number" != typeof n || n < 0 ? [
                            4,
                            this.managers.lyrics.load(t.code)
                        ] : [
                            3,
                            4
                        ];
                    case 1:
                        return o = l.sent(), (a = o && !o.status.failed && !o.status.processing && Array.isArray(o.lyrics) && o.lyrics.length > 0) ? [
                            4,
                            this.managers.lyrics.loadDetail(t.code, o.lyrics[0].id)
                        ] : [
                            3,
                            3
                        ];
                    case 2:
                        a = l.sent(), l.label = 3;
                    case 3:
                        (s = a) && (n = s.id, i = null === (r = s.diff) || void 0 === r ? void 0 : r.id), l.label = 4;
                    case 4:
                        return "number" != typeof n && (n = -1), "number" != typeof i && (i = -1), u = {
                            id: -1,
                            sourceId: -1,
                            sourceOriginId: -1,
                            songleId: t.id,
                            songleCode: t.code,
                            lyricId: n,
                            lyricDiffId: i,
                            title: null,
                            log: null,
                            background: null,
                            config: null,
                            json: null,
                            synthJson: null,
                            author: null,
                            createdDate: null,
                            accessCount: -1,
                            altUrl: null
                        }, [
                            2,
                            this.onVideoLoad(u, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromText = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r, n, i, o, s, a;
            return hn(this, function(u) {
                switch(u.label){
                    case 0:
                        return [
                            4,
                            this.managers.text.parse(t)
                        ];
                    case 1:
                        return r = u.sent(), n = r && "success" === r.status ? this.createVideoDataFromParsedText(r, t) : this.createVideoDataFromText(t), i = n[n.length - 1], o = i && i.words[i.words.length - 1], s = o && o.characters[o.characters.length - 1], a = s ? s.endTime : 0, [
                            2,
                            this.createFromJSON({
                                phrases: n,
                                startTime: 0,
                                endTime: a,
                                duration: a
                            }, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromJSON = function(t, e) {
        var r = {
            id: -1,
            sourceId: -1,
            sourceOriginId: -1,
            songleId: -1,
            lyricId: -1,
            lyricDiffId: -1,
            title: null,
            log: null,
            background: null,
            config: null,
            json: t,
            synthJson: null,
            author: null,
            createdDate: null,
            accessCount: -1,
            altUrl: null
        };
        return this.onVideoLoad(r, e);
    }, t.prototype.createVideoDataFromParsedText = function(t, e) {
        var r = 0, n = e.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/);
        return t.result.map(function(t, e) {
            return {
                words: t.map(function(t) {
                    return {
                        characters: n[e].substr(t.startPosition, t.wordLength).split("").map(function(t) {
                            return {
                                char: t,
                                startTime: 300 * r,
                                endTime: 300 * ++r
                            };
                        }),
                        pos: t.PoS,
                        rawPoS: t.rawPoS,
                        language: t.language
                    };
                }),
                templates: [
                    {
                        type: "DefaultAlignment"
                    }
                ]
            };
        });
    }, t.prototype.createVideoDataFromText = function(t) {
        for(var e, r = {
            characters: []
        }, n = {
            words: [
                r
            ],
            templates: [
                {
                    type: "DefaultAlignment"
                }
            ]
        }, i = 0, o = [
            n
        ], s = 0; s < t.length; s++){
            var a = t.charAt(s);
            "\n" !== a ? " " !== a ? (e = {
                char: a,
                startTime: 300 * i,
                endTime: 300 * ++i
            }, r.characters.push(e)) : (r = {
                characters: []
            }, n.words.push(r)) : (n = {
                words: [
                    r = {
                        characters: []
                    }
                ],
                templates: [
                    {
                        type: "DefaultAlignment"
                    }
                ]
            }, o.push(n));
        }
        return r.characters.length <= 0 && n.words.pop(), n.words.length <= 0 && o.pop(), o;
    }, t;
}(), Ln = function() {
    function t(t, e, r) {
        var n = this;
        void 0 === e && (e = null), this.managers = t, this.listener = e, this.options = r, this.fontLoader = new On(t.font, function() {
            return n.text;
        }, e);
    }
    return Object.defineProperty(t.prototype, "permalink", {
        get: function() {
            var t;
            return "https://textalive.jp" + ((null === (t = this.song) || void 0 === t ? void 0 : t.permalink) ? "/songs/" + encodeURIComponent(u.getSongPathFromUrl(this.song.permalink)) : "");
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "video", {
        get: function() {
            var t;
            return null === (t = this.videoProvider) || void 0 === t ? void 0 : t.video;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "song", {
        get: function() {
            var t, e;
            return null === (e = null === (t = this.songProvider) || void 0 === t ? void 0 : t.song) || void 0 === e ? void 0 : e.song;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "songStatus", {
        get: function() {
            var t, e;
            return null === (e = null === (t = this.songProvider) || void 0 === t ? void 0 : t.song) || void 0 === e ? void 0 : e.status;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "songMap", {
        get: function() {
            var t;
            return null === (t = this.songProvider) || void 0 === t ? void 0 : t.analysis;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lyricsId", {
        get: function() {
            var t, e;
            return null === (e = null === (t = this.textProvider) || void 0 === t ? void 0 : t.lyrics) || void 0 === e ? void 0 : e.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lyrics", {
        get: function() {
            var t;
            return null === (t = this.textProvider) || void 0 === t ? void 0 : t.lyrics;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lyricsBody", {
        get: function() {
            var t;
            return null === (t = this.textProvider) || void 0 === t ? void 0 : t.lyricsBody;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "text", {
        get: function() {
            var t, e;
            return null === (e = null === (t = this.textProvider) || void 0 === t ? void 0 : t.lyricsBody) || void 0 === e ? void 0 : e.text;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fonts", {
        get: function() {
            return this.fontLoader;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.createFromVideoId = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            new Fn(this.managers, this.listener).createFromVideoId(t, e)
                        ];
                    case 1:
                        return r.videoProvider = n.sent(), [
                            2,
                            this.videoProvider
                        ];
                }
            });
        });
    }, t.prototype.createFromVideo = function(t, e) {
        return this.videoProvider = new Fn(this.managers, this.listener).createFromVideo(t, e), this.videoProvider;
    }, t.prototype.createFromSongUrl = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            new Fn(this.managers, this.listener).createFromSongUrl(t, e)
                        ];
                    case 1:
                        return r.videoProvider = n.sent(), [
                            2,
                            this.videoProvider
                        ];
                }
            });
        });
    }, t.prototype.createFromSongPath = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            new Fn(this.managers, this.listener).createFromSongPath(t, e)
                        ];
                    case 1:
                        return r.videoProvider = n.sent(), [
                            2,
                            this.videoProvider
                        ];
                }
            });
        });
    }, t.prototype.createFromSongId = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            new Fn(this.managers, this.listener).createFromSongId(t, e)
                        ];
                    case 1:
                        return r.videoProvider = n.sent(), [
                            2,
                            this.videoProvider
                        ];
                }
            });
        });
    }, t.prototype.createFromSongCode = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            new Fn(this.managers, this.listener).createFromSongCode(t, e)
                        ];
                    case 1:
                        return r.videoProvider = n.sent(), [
                            2,
                            this.videoProvider
                        ];
                }
            });
        });
    }, t.prototype.createFromText = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            new Fn(this.managers, this.listener).createFromText(t, e)
                        ];
                    case 1:
                        return r.videoProvider = n.sent(), [
                            2,
                            this.videoProvider
                        ];
                }
            });
        });
    }, t.prototype.createFromJSON = function(t, e) {
        return this.videoProvider = new Fn(this.managers, this.listener).createFromJSON(t, e), this.videoProvider;
    }, t.prototype.finalize = function(t) {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(e) {
                switch(e.label){
                    case 0:
                        return this.video ? [
                            4,
                            this.loadSong()
                        ] : [
                            2,
                            null
                        ];
                    case 1:
                        return e.sent(), [
                            4,
                            this.loadText(t)
                        ];
                    case 2:
                        return e.sent(), [
                            4,
                            this.loadFonts()
                        ];
                    case 3:
                        return e.sent(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.mockSongInfo = function(t) {
        this.songProvider = new jn(this.managers.song, this.listener, this.options).mockSongInfo(t);
    }, t.prototype.loadSong = function() {
        return pn(this, void 0, void 0, function() {
            var t;
            return hn(this, function(e) {
                switch(e.label){
                    case 0:
                        return t = this, [
                            4,
                            new jn(this.managers.song, this.listener, this.options).loadSong(this.video.songleCode || this.video.songleId, this.video)
                        ];
                    case 1:
                        return t.songProvider = e.sent(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.loadText = function(t) {
        var e, r;
        return pn(this, void 0, void 0, function() {
            var n, i, o, s, a, u, l, c;
            return hn(this, function(p) {
                switch(p.label){
                    case 0:
                        return n = this.video, i = n.lyricId, o = n.lyricDiffId, s = this.song ? this.song.code : null, a = new In(this.managers, this.listener, this.options), !s && i < 0 ? (u = a.loadRawText(null === (e = this.videoProvider) || void 0 === e ? void 0 : e.data), [
                            3,
                            3
                        ]) : [
                            3,
                            1
                        ];
                    case 1:
                        return l = (null == t ? void 0 : t.altLyricsUrl) || void 0, c = (null == t ? void 0 : t.lyricsDirectAccess) || void 0, [
                            4,
                            a.loadLyrics({
                                songCode: s,
                                lyricId: i,
                                lyricDiffId: o,
                                altLyricsUrl: l,
                                directAccess: c
                            })
                        ];
                    case 2:
                        u = p.sent(), p.label = 3;
                    case 3:
                        return this.textProvider = u, (null == u ? void 0 : u.lyrics) && (null === (r = null == u ? void 0 : u.lyricsBody) || void 0 === r ? void 0 : r.text) && this.importLyrics(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.loadFonts = function() {
        var t, e, r;
        return pn(this, void 0, void 0, function() {
            return hn(this, function(n) {
                return "number" == typeof this.video.id && this.video.id >= 0 ? (this.fontLoader.loadForVideo(null === (t = this.videoProvider) || void 0 === t ? void 0 : t.data), [
                    2
                ]) : Array.isArray(null === (e = this.options) || void 0 === e ? void 0 : e.fontFamilies) ? (this.fontLoader.load(this.options.fontFamilies), [
                    2
                ]) : null === (null === (r = this.options) || void 0 === r ? void 0 : r.fontFamilies) ? (this.fontLoader.loadAll(), [
                    2
                ]) : [
                    2
                ];
            });
        });
    }, t.prototype.importLyrics = function() {
        var t = this.text.replace(/[\s\r\n]/g, ""), e = 0, r = {
            phrases: this.lyrics.data.map(function(r) {
                return {
                    words: r.map(function(r) {
                        return {
                            characters: r.map(function(r) {
                                return {
                                    char: t.charAt(e++),
                                    startTime: 1e3 * r.start_time,
                                    endTime: 1e3 * r.end_time
                                };
                            })
                        };
                    })
                };
            })
        };
        this.video.json && Array.isArray(this.video.json.phrases) ? this.video.json.phrases.forEach(function(t, e) {
            t.words.forEach(function(t, n) {
                t.characters.forEach(function(t, i) {
                    var o = r.phrases[e].words[n].characters[i];
                    t.char = o.char, t.startTime = o.startTime, t.endTime = o.endTime;
                });
            });
        }) : this.video.json = r;
    }, t.prototype.getChoruses = function() {
        var t;
        return null === (t = this.songProvider) || void 0 === t ? void 0 : t.getChoruses();
    }, t.prototype.findChorus = function(t, e) {
        var r;
        return null === (r = this.songProvider) || void 0 === r ? void 0 : r.findChorus(t, e);
    }, t.prototype.findChorusBetween = function(t, e) {
        var r;
        return null === (r = this.songProvider) || void 0 === r ? void 0 : r.findChorusBetween(t, e);
    }, t.prototype.getBeats = function() {
        var t;
        return null === (t = this.songProvider) || void 0 === t ? void 0 : t.getBeats();
    }, t.prototype.findBeat = function(t, e) {
        var r;
        return null === (r = this.songProvider) || void 0 === r ? void 0 : r.findBeat(t, e);
    }, t.prototype.getChords = function() {
        var t;
        return null === (t = this.songProvider) || void 0 === t ? void 0 : t.getChords();
    }, t.prototype.findChord = function(t, e) {
        var r;
        return null === (r = this.songProvider) || void 0 === r ? void 0 : r.findChord(t, e);
    }, t.prototype.getVocalFrequency = function(t) {
        var e;
        return null === (e = this.songProvider) || void 0 === e ? void 0 : e.getVocalFrequency(t);
    }, t.prototype.getVocalAmplitude = function(t) {
        var e;
        return null === (e = this.songProvider) || void 0 === e ? void 0 : e.getVocalAmplitude(t);
    }, t.prototype.getMaxVocalAmplitude = function() {
        var t;
        return null === (t = this.songProvider) || void 0 === t ? void 0 : t.getMaxVocalAmplitude();
    }, t.prototype.getValenceArousal = function(t) {
        var e;
        return null === (e = this.songProvider) || void 0 === e ? void 0 : e.getValenceArousal(t);
    }, t.prototype.getMedianValenceArousal = function() {
        var t;
        return null === (t = this.songProvider) || void 0 === t ? void 0 : t.getMedianValenceArousal();
    }, t;
}(), Dn = function() {
    function t(t, e) {
        this.player = t, this.listener = e, this.initialize();
    }
    return Object.defineProperty(t.prototype, "options", {
        get: function() {
            return this._options ? cn({}, this._options) : null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "name", {
        get: function() {
            return this._name;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "author", {
        get: function() {
            return this._author;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "status", {
        get: function() {
            return this._status;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "server", {
        get: function() {
            return this._server;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "managed", {
        get: function() {
            return !!this._host;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "host", {
        get: function() {
            return this._host;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "songUrl", {
        get: function() {
            return this._songUrl;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "songOptions", {
        get: function() {
            return this._songOptions;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parameters", {
        get: function() {
            return this._parameters;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isConnecting", {
        get: function() {
            return !!this.connecting;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.initialize = function() {
        var t, e, r, n;
        return pn(this, void 0, void 0, function() {
            return hn(this, function(i) {
                switch(i.label){
                    case 0:
                        return this._options = null === (e = null === (t = this.player) || void 0 === t ? void 0 : t.options) || void 0 === e ? void 0 : e.app, this._options && (this._options = cn({}, this._options), this._name = null === (r = this._options) || void 0 === r ? void 0 : r.appName, this._author = null === (n = this._options) || void 0 === n ? void 0 : n.appAuthor, this._options.token && (g.textalive.appToken = this._options.token)), this._parameters = {}, this.parseQueryString(), this.initializeServerConnection(), "undefined" != typeof window && this._options ? [
                            4,
                            this.connect()
                        ] : [
                            3,
                            2
                        ];
                    case 1:
                        i.sent(), this.initializePlayerListener(), this.initializeMessageListener(), i.label = 2;
                    case 2:
                        return this._songUrl && this.createFromSongUrl(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.initializeServerConnection = function() {
        var t, e, r, n, i, o;
        return pn(this, void 0, void 0, function() {
            var s, a, u, l, c;
            return hn(this, function(p) {
                switch(p.label){
                    case 0:
                        return [
                            4,
                            T.getServerStatus()
                        ];
                    case 1:
                        return s = p.sent(), a = "ja" === (null == s ? void 0 : s.lang), g.textalive.appToken && (null == s ? void 0 : s.app) && (s.app.data && (this._name = null === (t = s.app.data) || void 0 === t ? void 0 : t.name, this._author = null === (r = null === (e = s.app) || void 0 === e ? void 0 : e.data) || void 0 === r ? void 0 : r.author, u = null === (i = null === (n = s.app) || void 0 === n ? void 0 : n.data) || void 0 === i ? void 0 : i.status, this._status = "number" == typeof u ? u : -1), this._server = {
                            version: s.version,
                            message: s.app.message,
                            error: s.app.error
                        }, !this._server.error) ? (l = this._server.message ? "\n" + this._server.message : "", a ? console.info("[TextAlive API] \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8 v" + g.client.version + " \u3067\u30B5\u30FC\u30D0 v" + (this._server.version || "0.0.0") + " \u306B\u63A5\u7D9A" + l) : console.info("[TextAlive API] App API client v" + g.client.version + " connected to server v" + (this._server.version || "0.0.0") + l), this.listener.onAppLoad(this), [
                            2
                        ]) : (c = (null === (o = this._server) || void 0 === o ? void 0 : o.error) ? "\n" + this._server.error : "", a ? console.warn("[TextAlive API] \u3053\u306E\u30A2\u30D7\u30EA\u306F\u30C8\u30FC\u30AF\u30F3\u304C\u6B63\u3057\u304F\u6307\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u305F\u3081\u52D5\u4F5C\u3057\u307E\u305B\u3093\u3002 https://developer.textalive.jp \u304B\u3089\u30C8\u30FC\u30AF\u30F3\u3092\u5165\u624B\u3057\u3066\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002" + c) : console.warn("[TextAlive API] This app requires a valid app token to run properly. You could get a token from https://developer.textalive.jp." + c), this.listener.onAppLoad(null, c), [
                            2
                        ]);
                }
            });
        });
    }, t.prototype.initializePlayerListener = function() {
        var t = this;
        this.playerListener = {
            onVideoReady: function(e) {
                t._host && window.parent.postMessage({
                    kind: "ta_video",
                    options: {
                        lyrics: !!t.player.data.lyrics,
                        duration: t.player.video.duration
                    }
                }, "*");
            },
            onThrottledTimeUpdate: function(e) {
                t._host && window.parent.postMessage({
                    kind: "ta_position",
                    options: {
                        position: e
                    }
                }, "*");
            },
            onPlay: function() {
                t._host && window.parent.postMessage({
                    kind: "ta_status",
                    options: {
                        status: "play"
                    }
                }, "*");
            },
            onPause: function() {
                t._host && window.parent.postMessage({
                    kind: "ta_status",
                    options: {
                        status: "pause"
                    }
                }, "*");
            },
            onStop: function() {
                t._host && window.parent.postMessage({
                    kind: "ta_status",
                    options: {
                        status: "stop"
                    }
                }, "*");
            },
            onDispose: function() {
                t.dispose();
            }
        }, this.player.addListener(this.playerListener);
    }, t.prototype.initializeMessageListener = function() {
        var t = this;
        this.messageListener = function(e) {
            if (e.data.kind && /^ta_/.test(e.data.kind)) {
                var r = t.player;
                switch(e.data.kind.substring(3)){
                    case "status":
                        switch(e.data.options.status){
                            case "play":
                                r.requestPlay();
                                break;
                            case "pause":
                                r.requestPause();
                                break;
                            case "stop":
                                r.requestStop();
                        }
                        break;
                    case "seek":
                        r.requestMediaSeek(e.data.options.position);
                        break;
                    case "parameter":
                        var n = e.data.options, i = n.name, o = n.value;
                        t.parameters[i] = o, t.listener.onAppParameterUpdate(i, o);
                        break;
                    case "media":
                        t._songUrl = e.data.options.url, t._songOptions = e.data.options.options || {}, r.requestStop();
                        var s = t.createFromSongUrl();
                        t.listener.onAppMediaChange(t._songUrl, s);
                }
            }
        }, window.addEventListener("message", this.messageListener);
    }, t.prototype.createFromSongUrl = function() {
        var t, e = this._songOptions;
        return e && (t = {
            video: {}
        }, e.altLyricsUrl && (t.altLyricsUrl = e.altLyricsUrl), e.lyricsDirectAccess && (t.lyricsDirectAccess = e.lyricsDirectAccess), e.lyricId && (t.video.lyricId = e.lyricId), e.lyricDiffId && (t.video.lyricDiffId = e.lyricDiffId), e.chordId && (t.video.chordId = e.chordId), e.beatId && (t.video.beatId = e.beatId), e.repetitiveSegmentId && (t.video.repetitiveSegmentId = e.repetitiveSegmentId)), this.player.createFromSongUrl(this._songUrl, t);
    }, t.prototype.parseQueryString = function() {
        var t = an("ta_app_token");
        t && (g.textalive.appToken = t), this._songUrl = an("ta_song_url"), this._songOptions = {};
        var e = an("ta_lyric_id");
        e && (this._songOptions.lyricId = parseInt(e), isNaN(this._songOptions.lyricId) && delete this._songOptions.lyricId);
        var r = an("ta_lyric_diff_id");
        r && (this._songOptions.lyricDiffId = parseInt(r), isNaN(this._songOptions.lyricDiffId) && delete this._songOptions.lyricDiffId);
        var n = an("ta_alt_lyrics_url");
        n && (this._songOptions.altLyricsUrl = n);
        var i = an("ta_lyrics_direct_access");
        i && (this._songOptions.lyricsDirectAccess = "true" === i, this._songOptions.lyricsDirectAccess || delete this._songOptions.lyricsDirectAccess);
        var o = an("ta_chord_id");
        o && (this._songOptions.chordId = parseInt(o), isNaN(this._songOptions.chordId) && delete this._songOptions.chordId);
        var s = an("ta_beat_id");
        s && (this._songOptions.beatId = parseInt(s), isNaN(this._songOptions.beatId) && delete this._songOptions.beatId);
        var a = an("ta_repetitive_segment_id");
        a && (this._songOptions.repetitiveSegmentId = parseInt(a), isNaN(this._songOptions.repetitiveSegmentId) && delete this._songOptions.repetitiveSegmentId);
    }, t.prototype.connect = function() {
        return pn(this, void 0, void 0, function() {
            var t, e = this;
            return hn(this, function(r) {
                switch(r.label){
                    case 0:
                        return this.connecting ? [
                            2,
                            this.connecting
                        ] : "undefined" != typeof window && this.options && window.parent && window !== window.parent ? [
                            3,
                            2
                        ] : [
                            4,
                            new Promise(function(t) {
                                return setTimeout(t, 1);
                            })
                        ];
                    case 1:
                        return r.sent(), this.listener.onAppReady(this), [
                            2,
                            !1
                        ];
                    case 2:
                        return this.connecting = Promise.race([
                            new Promise(function(r) {
                                t = function(n) {
                                    n.data.kind && /^ta_/.test(n.data.kind) && "ack" === n.data.kind.substring(3) && (window.removeEventListener("message", t), e._host = n.data.options, r(!0));
                                }, window.addEventListener("message", t);
                            }),
                            pn(e, void 0, void 0, function() {
                                var e;
                                return hn(this, function(r) {
                                    switch(r.label){
                                        case 0:
                                            e = 0, r.label = 1;
                                        case 1:
                                            return e < 5 ? (window.parent.postMessage({
                                                kind: "ta_connect",
                                                options: this.options
                                            }, "*"), [
                                                4,
                                                new Promise(function(t) {
                                                    return setTimeout(t, 200);
                                                })
                                            ]) : [
                                                3,
                                                4
                                            ];
                                        case 2:
                                            if (r.sent(), this._host) return [
                                                3,
                                                4
                                            ];
                                            r.label = 3;
                                        case 3:
                                            return e++, [
                                                3,
                                                1
                                            ];
                                        case 4:
                                            return !this._host && t && window.removeEventListener("message", t), [
                                                2,
                                                !!this._host
                                            ];
                                    }
                                });
                            })
                        ]), this.connecting.finally(function() {
                            e.connecting = null, e.listener.onAppReady(e);
                        }), [
                            2,
                            this.connecting
                        ];
                }
            });
        });
    }, t.prototype.dispose = function() {
        "undefined" != typeof window && this.options && (this.player.removeListener(this.playerListener), window.removeEventListener("message", this.messageListener)), this._host = null, this.player = null;
    }, t;
}();
function Mn(t) {
    return t;
}
function Bn(t) {
    return t < -1 ? t = -1 : t > 1 && (t = 1), function(e) {
        return 0 == t ? e : t < 0 ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t));
    };
}
function Vn(t) {
    return function(e) {
        return Math.pow(e, t);
    };
}
function Gn(t) {
    return function(e) {
        return 1 - Math.pow(1 - e, t);
    };
}
function qn(t) {
    return function(e) {
        return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t));
    };
}
var Wn = Vn(2), Yn = Gn(2), zn = qn(2), Jn = Vn(3), Hn = Gn(3), Xn = qn(3), Zn = Vn(4), $n = Gn(4), Qn = qn(4), Kn = Vn(5), ti = Gn(5), ei = qn(5);
function ri(t) {
    return 1 - Math.cos(t * Math.PI / 2);
}
function ni(t) {
    return Math.sin(t * Math.PI / 2);
}
function ii(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
}
function oi(t) {
    return function(e) {
        return e * e * ((t + 1) * e - t);
    };
}
var si = oi(1.7);
function ai(t) {
    return function(e) {
        return --e * e * ((t + 1) * e + t) + 1;
    };
}
var ui = ai(1.7);
function li(t) {
    return t *= 1.525, function(e) {
        return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
    };
}
var ci = li(1.7);
function pi(t) {
    return -(Math.sqrt(1 - t * t) - 1);
}
function hi(t) {
    return Math.sqrt(1 - --t * t);
}
function di(t) {
    return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
function fi(t) {
    return 1 - yi(1 - t);
}
function yi(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
}
function vi(t) {
    return t < .5 ? .5 * fi(2 * t) : .5 * yi(2 * t - 1) + .5;
}
function gi(t, e) {
    var r = 2 * Math.PI;
    return function(n) {
        if (0 == n || 1 == n) return n;
        var i = e / r * Math.asin(1 / t);
        return -t * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - i) * r / e);
    };
}
var mi = gi(1, .3);
function bi(t, e) {
    var r = 2 * Math.PI;
    return function(n) {
        if (0 == n || 1 == n) return n;
        var i = e / r * Math.asin(1 / t);
        return t * Math.pow(2, -10 * n) * Math.sin((n - i) * r / e) + 1;
    };
}
var _i = bi(1, .3);
function wi(t, e) {
    var r = 2 * Math.PI;
    return function(n) {
        var i = e / r * Math.asin(1 / t);
        return (n *= 2) < 1 ? t * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - i) * r / e) * -0.5 : t * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - i) * r / e) * .5 + 1;
    };
}
var Pi = wi(1, .3 * 1.5), Ei = Object.freeze({
    __proto__: null,
    linear: Mn,
    get: Bn,
    getPowIn: Vn,
    getPowOut: Gn,
    getPowInOut: qn,
    quadIn: Wn,
    quadOut: Yn,
    quadInOut: zn,
    cubicIn: Jn,
    cubicOut: Hn,
    cubicInOut: Xn,
    quartIn: Zn,
    quartOut: $n,
    quartInOut: Qn,
    quintIn: Kn,
    quintOut: ti,
    quintInOut: ei,
    sineIn: ri,
    sineOut: ni,
    sineInOut: ii,
    getBackIn: oi,
    backIn: si,
    getBackOut: ai,
    backOut: ui,
    getBackInOut: li,
    backInOut: ci,
    circIn: pi,
    circOut: hi,
    circInOut: di,
    bounceIn: fi,
    bounceOut: yi,
    bounceInOut: vi,
    getElasticIn: gi,
    elasticIn: mi,
    getElasticOut: bi,
    elasticOut: _i,
    getElasticInOut: wi,
    elasticInOut: Pi
}), Oi = function() {
    function t() {}
    return t.linear = Mn, t.get = Bn, t.getPowIn = Vn, t.getPowOut = Gn, t.getPowInOut = qn, t.quadIn = Wn, t.quadOut = Yn, t.quadInOut = zn, t.cubicIn = Jn, t.cubicOut = Hn, t.cubicInOut = Xn, t.quartIn = Zn, t.quartOut = $n, t.quartInOut = Qn, t.quintIn = Kn, t.quintOut = ti, t.quintInOut = ei, t.sineIn = ri, t.sineOut = ni, t.sineInOut = ii, t.getBackIn = oi, t.backIn = si, t.getBackOut = ai, t.backOut = ui, t.getBackInOut = li, t.backInOut = ci, t.circIn = pi, t.circOut = hi, t.circInOut = di, t.bounceIn = fi, t.bounceOut = yi, t.bounceInOut = vi, t.getElasticIn = gi, t.elasticIn = mi, t.getElasticOut = bi, t.elasticOut = _i, t.getElasticInOut = wi, t.elasticInOut = Pi, t;
}(), Si = function() {
    function t() {
        this.cursor = -1, this.widgets = [], this.instances = [], this.model = {
            id: -1,
            type: r.NONE,
            sourceId: -1,
            author: null,
            originalAuthor: null,
            className: null,
            createdDate: null
        };
    }
    return Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.model ? this.model.id : -1;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "script", {
        get: function() {
            return this.model ? this.model.script : null;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), Ti = function() {}, xi = function() {
    function t(t, e) {
        this.onTemplateLoad = e, this._emitter = null, this._loaded = null, this._loading = null, this.verbose = !1, this._emitter = t, this.clear();
    }
    return Object.defineProperty(t.prototype, "loaded", {
        get: function() {
            return this._loaded;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "loading", {
        get: function() {
            return this._loading;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.clear = function() {
        this._loaded = {}, this._loading = {};
    }, t.prototype.loadLatest = function(t) {
        return void 0 === t && (t = 100), pn(this, void 0, void 0, function() {
            var e;
            return hn(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            V.list({
                                maxResults: t,
                                withoutAuthors: !0,
                                withoutOriginalAuthors: !0,
                                script: !0
                            })
                        ];
                    case 1:
                        return (e = r.sent()) && e.list ? (this.verbose && console.log("--- loading template classes ---"), [
                            2,
                            this.registerMany(e.list)
                        ]) : [
                            2
                        ];
                }
            });
        });
    }, t.prototype.loadForVideo = function(t) {
        return pn(this, void 0, void 0, function() {
            var e, r = this;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            V.loadForVideo(t)
                        ];
                    case 1:
                        return (e = n.sent()) && e.list ? (this.verbose && console.log("--- loading template classes for vid:" + t + " ---"), [
                            4,
                            this.registerMany(e.list)
                        ]) : [
                            2,
                            null
                        ];
                    case 2:
                        return [
                            2,
                            n.sent().map(function(t) {
                                return t ? r.getByName(t) : null;
                            })
                        ];
                }
            });
        });
    }, t.prototype.loadByNames = function(t) {
        return pn(this, void 0, void 0, function() {
            var e, r = this;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return !Array.isArray(t) || t.length <= 0 ? [
                            2,
                            []
                        ] : (this.verbose && console.log("--- loading template classes ---"), [
                            4,
                            Promise.all(t.map(function(t) {
                                return r.doLoadByName(t);
                            }))
                        ]);
                    case 1:
                        return (e = n.sent()) && this._emitter.onTemplatesLoad(e.filter(function(t) {
                            return !!t;
                        }).map(function(t) {
                            return t.className;
                        })), [
                            2,
                            e
                        ];
                }
            });
        });
    }, t.prototype.loadByName = function(t) {
        return pn(this, void 0, void 0, function() {
            var e, r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return n.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]), [
                            4,
                            this.doLoadByName(t)
                        ];
                    case 1:
                        return e = n.sent(), this._emitter.onTemplatesLoad([
                            e.className
                        ]), [
                            2,
                            e
                        ];
                    case 2:
                        return r = n.sent(), this._emitter.onTemplatesLoad(null, r), [
                            2,
                            null
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
    }, t.prototype.doLoadByName = function(t) {
        return pn(this, void 0, void 0, function() {
            var e, r, n = this;
            return hn(this, function(i) {
                return null !== (e = this.getByName(t)) ? [
                    2,
                    e
                ] : this._loading[t] ? [
                    2,
                    this._loading[t]
                ] : (r = new Promise(function(e) {
                    return V.loadByName(t).then(function(t) {
                        return n.onTemplateLoad(t);
                    }).then(e);
                }), this._loading[t] = r, r.finally(function() {
                    return delete n._loading[t];
                }), [
                    2,
                    r
                ]);
            });
        });
    }, t.prototype.loadById = function(t) {
        return pn(this, void 0, void 0, function() {
            var e, r, n;
            return hn(this, function(i) {
                switch(i.label){
                    case 0:
                        return i.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]), [
                            4,
                            this.doLoadById(t)
                        ];
                    case 1:
                        return e = i.sent(), r = null, [
                            3,
                            3
                        ];
                    case 2:
                        return n = i.sent(), r = n, [
                            3,
                            3
                        ];
                    case 3:
                        return this._emitter.onTemplatesLoad(e ? [
                            e.className
                        ] : null, r), [
                            2,
                            e
                        ];
                }
            });
        });
    }, t.prototype.doLoadById = function(t) {
        return pn(this, void 0, void 0, function() {
            var e, r, n = this;
            return hn(this, function(i) {
                return (e = this.getById(t)) ? [
                    2,
                    e
                ] : this._loading[t] ? [
                    2,
                    this._loading[t]
                ] : (r = new Promise(function(e) {
                    return V.load(t).then(function(t) {
                        return n.onTemplateLoad(t);
                    }).then(e);
                }), this._loading[t] = r, r.finally(function() {
                    return delete n._loading[t];
                }), [
                    2,
                    r
                ]);
            });
        });
    }, t.prototype.registerMany = function(t) {
        return pn(this, void 0, void 0, function() {
            var e, r, n = this;
            return hn(this, function(i) {
                switch(i.label){
                    case 0:
                        return e = t.map(function(t) {
                            var e = n.onTemplateLoad(t);
                            return n._loading[t.className] = e, n._loading[t.className + "@" + t.id] = e, e;
                        }), [
                            4,
                            Promise.all(e.map(function(t) {
                                return t.then(function(t) {
                                    return t.className;
                                }).catch(function(t) {
                                    return null;
                                });
                            }))
                        ];
                    case 1:
                        return r = i.sent().filter(function(t) {
                            return !!t;
                        }), this._emitter.onTemplatesLoad(r), [
                            2,
                            r
                        ];
                }
            });
        });
    }, t.prototype.commit = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            V.create({
                                sourceId: t.model.sourceId,
                                script: t.model.script,
                                log: e
                            })
                        ];
                    case 1:
                        return (r = n.sent()).success && (t.model.id = r.id, this._emitter.onTemplateCommit(t.className)), [
                            2,
                            r
                        ];
                }
            });
        });
    }, t.prototype.getByName = function(t, e) {
        var r;
        if (void 0 === e && (e = !1), t && (r = t.match(/(.+)@([0-9]+)/))) {
            t = r[1];
            var n = parseInt(r[2]);
            if (!this._loaded[t]) return null;
            var i = this._loaded[t].model;
            if (i.id !== n) {
                if (!e) return null;
                this.verbose && console.log("[warning] template " + t + " version " + n + " is requested but " + i.id + " is used");
            }
        }
        return this._loaded[t] ? this._loaded[t] : null;
    }, t.prototype.getById = function(t) {
        var e = null;
        for(var r in this._loaded)if (this._loaded[r].model.id === t) {
            e = this._loaded[r];
            break;
        }
        return e;
    }, t;
}(), Ai = {
    Matrix2D: st,
    Point: at,
    Color: Z,
    Font: $,
    RenderingUnit: z,
    TextUnit: X,
    Graphic: K,
    Phrase: et,
    Word: tt,
    Char: Q,
    Beat: Tn,
    RepetitiveSegment: An
}, Ri = [
    "headTime",
    "tailTime",
    "insomnia"
], Ci = [
    "animate",
    "getAssignedUnit",
    "name",
    "type"
], Ni = function() {
    function t(t, e, r) {
        this._emitter = null, this._player = null, this.interpreter = null, this.unsafeAcceleration = !1, this._verbose = !1, this.ignoreVersion = !1, this.rawConsole = !1, this._player = t, this._emitter = e, this.unsafeAcceleration = r, this.loader = new xi(e, this.register.bind(this)), t.addListener({
            onVideoReady: this.onVideoReady.bind(this)
        });
    }
    return Object.defineProperty(t.prototype, "verbose", {
        get: function() {
            return this._verbose;
        },
        set: function(t) {
            this._verbose = this.loader.verbose = t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ready", {
        get: function() {
            return !!this.interpreter;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "loaded", {
        get: function() {
            return this.loader.loaded;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.initialize = function() {
        var t = this;
        if (!this.ready) {
            var e = function(t) {
                var e = t.player, n = t.ignoredPropNames, i = t.rawConsole, o = t.templateGetter, s = e.graphics.wrapperTable, a = new on(cn(cn({}, Ai), s), n, function(t, r) {
                    return e.graphics.isGraphics(t) && r instanceof Z ? r.toString() : r;
                }), u = {
                    require: {
                        func: function(t) {
                            if (!(t.length < 1 || "string" != typeof t[0])) {
                                var e = t[0], r = o(e);
                                return null === r ? void 0 : r.functionDefinition;
                            }
                        },
                        raw: !0,
                        isConstructor: !0
                    },
                    print: {
                        func: function(t) {
                            e.isEditing && console.log.apply(console, t);
                        },
                        raw: i
                    },
                    findChorus: {
                        func: function(t) {
                            return t.length < 1 || "number" != typeof t[0] ? null : e.findChorus(t[0]);
                        }
                    },
                    findBeat: {
                        func: function(t) {
                            return t.length < 1 || "number" != typeof t[0] ? null : e.findBeat(t[0]);
                        }
                    },
                    getVocalFrequency: {
                        func: function(t) {
                            return t.length < 1 || "number" != typeof t[0] ? null : e.getVocalFrequency(t[0]);
                        }
                    },
                    getVocalAmplitude: {
                        func: function(t) {
                            return t.length < 1 || "number" != typeof t[0] ? -1 : e.getVocalAmplitude(t[0]);
                        }
                    },
                    getMaxVocalAmplitude: {
                        func: function(t) {
                            return e.getMaxVocalAmplitude();
                        }
                    },
                    getValenceArousal: {
                        func: function(t) {
                            return t.length < 1 || "number" != typeof t[0] ? null : e.getValenceArousal(t[0]);
                        }
                    },
                    getMedianValenceArousal: {
                        func: function(t) {
                            return e.getMedianValenceArousal();
                        }
                    }
                };
                Object.keys(r).forEach(function(t) {
                    a.setProperty(a.globalScope, t, r[t]), u[t] = {
                        value: r[t]
                    };
                }), Object.keys(Ei).forEach(function(t) {
                    var e = Ei[t];
                    0 !== t.indexOf("get") && (u[t] = {
                        func: e
                    });
                });
                var l = Object.keys(a.wrapperTable);
                return l && l.forEach(function(t) {
                    return u[t] = {
                        cls: a.wrapperTable[t]
                    };
                }), Object.keys(u).forEach(function(t) {
                    var e = u[t];
                    e.func ? a.createGlobalFunction(t, e) : e.value && a.setProperty(a.globalScope, t, e.value);
                }), {
                    interpreter: a,
                    unsafeGlobalScope: u
                };
            }({
                player: this._player,
                ignoredPropNames: Ci,
                rawConsole: this.rawConsole,
                templateGetter: function(e) {
                    return t.getByName(e, !0);
                }
            }), n = e.interpreter, i = e.unsafeGlobalScope;
            this.unsafeGlobalScope = i, this.interpreter = n, this.onVideoReady(this._player.video);
        }
    }, t.prototype.getByName = function(t, e) {
        return void 0 === e && (e = !1), this.loader.getByName(t, e);
    }, t.prototype.getById = function(t) {
        return this.loader.getById(t);
    }, t.prototype.clear = function() {
        this.loader.clear();
    }, t.prototype.loadLatest = function(t) {
        return void 0 === t && (t = 100), pn(this, void 0, void 0, function() {
            return hn(this, function(e) {
                return this.ready || this.initialize(), [
                    2,
                    this.loader.loadLatest(t)
                ];
            });
        });
    }, t.prototype.loadForVideo = function(t) {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(e) {
                return this.ready || this.initialize(), [
                    2,
                    this.loader.loadForVideo(t)
                ];
            });
        });
    }, t.prototype.loadByNames = function(t) {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(e) {
                return this.ready || this.initialize(), [
                    2,
                    this.loader.loadByNames(t)
                ];
            });
        });
    }, t.prototype.loadByName = function(t) {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(e) {
                return this.ready || this.initialize(), [
                    2,
                    this.loader.loadByName(t)
                ];
            });
        });
    }, t.prototype.loadById = function(t) {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(e) {
                return this.ready || this.initialize(), [
                    2,
                    this.loader.loadById(t)
                ];
            });
        });
    }, t.prototype.commit = function(t, e) {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(r) {
                return [
                    2,
                    this.loader.commit(t, e)
                ];
            });
        });
    }, t.prototype.register = function(t) {
        return pn(this, void 0, void 0, function() {
            var e, r, n, i, o, s, a, u = this;
            return hn(this, function(l) {
                switch(l.label){
                    case 0:
                        if (!t) return [
                            2,
                            null
                        ];
                        if ("number" == typeof t.sourceId) {
                            if (e = t, !(r = this.createClass(t.script))) return [
                                2,
                                null
                            ];
                        } else r = t;
                        n = Kr(r.ast).dependencies, l.label = 1;
                    case 1:
                        return l.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]), [
                            4,
                            Promise.all(n.map(function(t) {
                                var e = u.getByName(t, u.ignoreVersion);
                                return e ? Promise.resolve(e) : u.loadByName(t);
                            }))
                        ];
                    case 2:
                        return l.sent(), this.verbose && console.log("load dependencies for", r.className, n), [
                            3,
                            4
                        ];
                    case 3:
                        return i = l.sent(), this.verbose && console.error("failed loading dependencies for", r.className, i), [
                            3,
                            4
                        ];
                    case 4:
                        try {
                            if (o = void 0, e ? (o = this.newRawInstance(r), r.model = e) : o = this.createModel(r), !o) throw new Error("failed to create a template instance");
                            return [
                                2,
                                this.registerClass(r)
                            ];
                        } catch (t) {
                            throw s = void 0, e && (delete (a = cn({}, e)).script, s = a), {
                                error: t.message,
                                stack: t.stack,
                                cause: s
                            };
                        }
                        return [
                            2
                        ];
                }
            });
        });
    }, t.prototype.updateClassScript = function(t, e) {
        var r = this.createClass(e);
        return this.updateClass(t, r);
    }, t.prototype.registerClass = function(t) {
        if (!t) return null;
        if (this.loader.loaded[t.className]) {
            this.verbose && console.log("updating", t.className, t.model.id);
            var e = this.updateClass(this.loader.loaded[t.className], t);
            return this.verbose && console.log("updated", e.className, e.id), e;
        }
        return this.loader.loaded[t.className] = t, this.verbose && console.log("loaded", t.className, t.model.id), t;
    }, t.prototype.updateClass = function(t, e) {
        var r = t, n = e;
        if (!n) return null;
        if (r.model.script === n.model.script) return this.verbose && console.log("no diff for", r.className), r;
        if (!this.createModel(n)) return null;
        if (r.className !== n.className) {
            var i = this.getByName(n.className);
            if (!i) return n.cursor = r.cursor, this.loader.loaded[n.className] = n, this.verbose && console.log("create", n.className), n;
            r = i;
        }
        return r.newStatement = n.newStatement, r.widgets = n.widgets, r.scope = n.scope, r.functionDefinition = n.functionDefinition, r.newStatement = n.newStatement, r.unsafeConstructorGenerator = n.unsafeConstructorGenerator, r.ast = n.ast, r.cursor < 0 && (r.cursor = n.cursor), n.id >= 0 ? (this.verbose && console.log("replace", n.className, r.id, n.id), r.model = n.model) : (this.verbose && console.log("update", n.className, r.id, n.id), r.model.type = n.model.type, r.model.className = n.model.className, r.model.prettyName = n.model.prettyName, r.model.script = n.model.script, r.model.createdDate = null, r.id >= 0 && (r.model.sourceId = r.model.id, r.model.id = -1)), n = r, this.updateInstances(r.instances.slice(), n), this._emitter.onTemplateUpdate(n.className), n;
    }, t.prototype.createModel = function(t) {
        var e = this.newRawInstance(t);
        if (null === e) return !1;
        if (t.id >= 0) return !0;
        var r = e.templateInstance, n = t.model.script;
        return t.model = {
            id: -1,
            sourceId: -1,
            className: t.className,
            prettyName: r ? this.interpreter.getProperty(r, "name") : e.unsafeTemplateInstance.name,
            type: r ? this.interpreter.getProperty(r, "type") : e.unsafeTemplateInstance.type,
            script: n,
            author: null,
            originalAuthor: null,
            createdDate: null
        }, e;
    }, t.prototype.updateInstances = function(t, e) {
        var r = this;
        t.forEach(function(t) {
            try {
                r.updateInstance(t, e);
            } catch (r) {
                console.log("failed updating template for", t.assignedUnit, ":", e);
            }
        }), this._player.isPlaying || this._player.requestStageUpdate();
    }, t.prototype.createClass = function(t) {
        var e = this;
        this.ready || this.initialize();
        var r = new Si;
        r.model = {
            id: -1,
            sourceId: -1,
            className: null,
            prettyName: null,
            type: 0,
            script: t,
            author: null,
            originalAuthor: null,
            createdDate: null
        };
        var n = Qr(t, Ci), i = n.ast, o = n.widgets;
        if (r.ast = i, r.widgets = o, r.className = r.ast.body[0].id.name, r.scope = this.interpreter.prepareRun(r.ast), this.interpreter.run(1e3, "to define " + r.className), r.functionDefinition = this.interpreter.getRawProperty(r.scope, r.className), r.newStatement = this.interpreter.newStatementFor(r.className), this.unsafeAcceleration) {
            var s = Object.keys(this.unsafeGlobalScope), a = "return function(props){var " + Object.keys(this.getGlobalProperties()).map(function(t) {
                return t + "=props." + t;
            }).join(",") + ";" + t + "return " + r.className + ";}", u = new (Function.bind.apply(Function, dn(dn([
                void 0
            ], s, !1), [
                a
            ], !1))), l = function(t) {
                var r = e.getByName(t);
                return r ? r.unsafeConstructorGenerator(e.getGlobalProperties()) : null;
            }, c = s.map(function(t) {
                if ("require" === t) return l;
                var r = e.unsafeGlobalScope[t];
                return r.func ? function() {
                    for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
                    return r.func(t);
                } : r.cls || r.value;
            });
            r.unsafeConstructorGenerator = u.apply({}, c);
        }
        return r;
    }, t.prototype.getGlobalProperties = function() {
        var t;
        return {
            width: this._player.videoWidth,
            height: this._player.videoHeight,
            margin: this._player.margin,
            duration: (null === (t = this._player.video) || void 0 === t ? void 0 : t.duration) || 0
        };
    }, t.prototype.newRawInstance = function(t) {
        var e = t, r = new Ti;
        if (this.unsafeAcceleration) {
            var n = new (e.unsafeConstructorGenerator(this.getGlobalProperties()));
            r.unsafeTemplateInstance = n;
        } else {
            this.interpreter.prepareNewInstance(e.newStatement, e.scope);
            var i = this.interpreter.run(700, "to instantiate " + e.className);
            r.templateInstance = i, r.templateInstance._nativeInstance = r;
        }
        return r.templateClass = e, r.ignore = !1, r;
    }, t.prototype.setProperty = function(t, e, r) {
        this.unsafeAcceleration ? t.unsafeTemplateInstance[e] = r : this.interpreter.setProperty(t.templateInstance, e, r);
    }, t.prototype.getProperty = function(t, e) {
        return this.unsafeAcceleration ? t.unsafeTemplateInstance[e] : this.interpreter.getProperty(t.templateInstance, e);
    }, t.prototype.exportInstance = function(t) {
        for(var e = {}, r = 0, n = t.templateClass.widgets.map(function(t) {
            return t.name;
        }).concat(Ri); r < n.length; r++){
            var i = n[r], o = this.getProperty(t, i);
            try {
                var s = pt(o);
                void 0 !== s && (e[i] = s);
            } catch (e) {
                console.error("cannot export " + t.templateClass.className + "." + i, o, "assigned to", t.assignedUnit);
            }
        }
        return {
            type: t.templateClass.className,
            value: e
        };
    }, t.prototype.importInstances = function(t, e) {
        try {
            this.importPhraseTemplates(t.firstCredit, e.credits), this.importPhraseTemplates(t.firstPhrase, e.phrases);
            for(var r = e.graphics, n = t.firstGraphic, i = 0; null !== n;){
                var o = r[i++];
                this.importTemplates(n, o.templates), n = n.next;
            }
        } catch (t) {
            return console.error("restoring templates failed", t), !1;
        }
        return !0;
    }, t.prototype.importPhraseTemplates = function(t, e) {
        if (Array.isArray(e)) for(var r = 0; t;){
            var n = e[r++];
            this.importTemplates(t, n.templates);
            for(var i = t.firstWord, o = 0; o < t.wordCount; o++){
                var s = n.words[o];
                this.importTemplates(i, s.templates);
                for(var a = i.firstChar, u = 0; u < i.charCount; u++){
                    var l = s.characters[u];
                    this.importTemplates(a, l.templates), a = a.next;
                }
                i = i.next;
            }
            if (e.length < r + 1) break;
            t = t.next;
        }
    }, t.prototype.importTemplates = function(t, e) {
        if (Array.isArray(e)) for(var r = 0, n = e; r < n.length; r++){
            var i = n[r], o = this.importInstance(i);
            o && t.addTemplate(o);
        }
    }, t.prototype.importInstance = function(t) {
        var e = this.getByName(t.type), r = this.newInstance(e);
        if (!r || !t.value) return null;
        for(var n = 0, i = Object.keys(t.value); n < i.length; n++){
            var o = i[n], s = ht(t.value[o], this.interpreter.wrapperTable);
            void 0 !== s && this.setProperty(r, o, s);
        }
        return r;
    }, t.prototype.updateInstance = function(t, e) {
        var r = t, n = e, i = this.newRawInstance(n), o = r.templateInstance, s = this.interpreter.cleanupProperties(o);
        r.templateClass !== n && (this.disposeInstance(r), n.instances.push(r)), r.templateClass = n, r.scope = i.scope, r.templateInstance = i.templateInstance, r.ignore = i.ignore, this.interpreter.restoreProperties(r.templateInstance, s), this.attachGetAssignedUnitMethod(r);
    }, t.prototype.newInstance = function(t) {
        var e;
        try {
            if (null === (e = this.newRawInstance(t))) return null;
        } catch (t) {
            return null;
        }
        return this.attachGetAssignedUnitMethod(e), t.instances.push(e), e;
    }, t.prototype.attachGetAssignedUnitMethod = function(t) {
        var e = this;
        if (this.unsafeAcceleration) t.unsafeTemplateInstance.getAssignedUnit = function() {
            return t.assignedUnit;
        };
        else {
            var r = this.interpreter.createFunction(function() {
                return e.interpreter.wrap(t.assignedUnit);
            });
            this.interpreter.setRawProperty(t.templateInstance, "getAssignedUnit", r);
        }
    }, t.prototype.disposeInstance = function(t) {
        var e = t.templateClass;
        e.instances = e.instances.filter(function(e) {
            return e !== t;
        });
    }, t.prototype.disposeInstances = function(t) {
        var e = this;
        if (Array.isArray(t)) t.forEach(function(t) {
            return e.disposeInstance(t);
        });
        else {
            var r = t;
            [
                r.firstCredit,
                r.firstPhrase,
                r.firstWord,
                r.firstChar,
                r.firstGraphic
            ].forEach(function(t) {
                for(; t;)e.disposeInstances(t.removeTemplates()), t = t.next;
            });
        }
    }, t.prototype.setTemplate = function(t, e) {
        this.removeTemplates(t), t.addTemplate(e);
    }, t.prototype.clearTemplate = function(t) {
        this.removeTemplates(t);
    }, t.prototype.removeTemplateAt = function(t, e) {
        var r = t.removeTemplateAt(e);
        r && this.disposeInstance(r);
    }, t.prototype.removeTemplates = function(t) {
        var e = t.removeTemplates();
        this.disposeInstances(e);
    }, t.prototype.getRequiredTemplates = function(t) {
        return Kr(t).dependencies;
    }, t.prototype.getRequiredTemplateAt = function(t, e) {
        return Kr(t, e).dependencyAtCursor;
    }, t.prototype.exec = function(t, e, r) {
        if (t.unsafeTemplateInstance) {
            var n = t.unsafeTemplateInstance;
            return n[e].apply(n, r);
        }
        var i = this.interpreter.exec(t.templateInstance, e, r, t.assignedUnit ? " assigned to " + t.assignedUnit.toString() : "");
        return this.interpreter.unwrap(i);
    }, t.prototype.declareVariable = function(t, e, r, n) {
        return this.updateClassScript(t, function(t, e, r, n) {
            try {
                var i = Qr(t), o = i.ast, s = i.fields, a = s[s.length - 1], u = t.match(/(\r\n|[\n\v\f\r\x85\u2028\u2029])/), l = u ? u.pop() : "\n", c = t.split(l), p = a ? Array(a.loc.start.column + 1).join(" ") : "  ", h = a ? a.loc.end.line : 0;
                if (h <= 0) {
                    var d = o.body[0].body, f = c[d.loc.start.line - 1], y = f.substring(0, d.loc.start.column + 1), v = f.substring(d.loc.start.column + 1);
                    c[d.loc.start.line - 1] = y, c.splice(d.loc.start.line, 0, v), h = d.loc.start.line;
                }
                for(var g = void 0; (g = "var" + Math.random().toString().substring(2)).length > 8 && (g = g.substring(0, 8)), !(t.indexOf(g) < 0););
                c.length > h && c[h].length > 0 && c.splice(h, 0, ""), c.splice(h, 0, "", p + "// @proposed", p + "// @title " + e, p + "// " + function(t, e) {
                    if ("Slider" === t) return "@ui Slider(" + e.min + ", " + e.max + ")";
                    if ("Check" === t) return "@ui Check()";
                    if ("Color" === t) return "@ui Color()";
                    var r = e.etc;
                    return "@comment " + (r = r.replace(/(\r\n|[\n\v\f\r\x85\u2028\u2029])/g, "")).replace(/\/[*/]/g, "");
                }(r, n), p + "this." + g + " = " + function(t, e) {
                    return "Slider" === t ? ((e.min + e.max) / 2).toString() : "Check" === t ? "false" : "Color" === t ? 'new Color("#000000")' : "null";
                }(r, n) + ";"), t = c.join(l);
            } catch (t) {}
            return t;
        }(t.model.script, e, r, n));
    }, t.prototype.onVideoReady = function(t) {
        this.ready && (this.interpreter.setRawProperty(this.interpreter.globalScope, "width", this._player.resolutionWidth), this.interpreter.setRawProperty(this.interpreter.globalScope, "height", this._player.resolutionHeight), this.interpreter.setRawProperty(this.interpreter.globalScope, "margin", this.interpreter.wrap(this._player.margin)), this.interpreter.setRawProperty(this.interpreter.globalScope, "duration", (null == t ? void 0 : t.duration) || 0));
    }, t;
}(), ki = function(t) {
    function e(e, r) {
        var n = this.constructor, i = t.call(this, e) || this;
        return i.video = r, Object.setPrototypeOf(i, n.prototype), i;
    }
    return ln(e, t), e;
}(Error), ji = function() {
    this.halted = [], this.errors = [];
}, Ii = function() {
    function t(t, e) {
        var r = this;
        this.listener = e, this.player = null, this._scale = 1, this.playerListener = {
            onResize: function(t) {
                r.elementWidth = t.width, r.updateSize();
            },
            onVideoReady: function() {
                r.elementWidth = r.calcWidth(), r.updateSize();
            },
            onStageElementSet: function(t) {
                r.elementWidth = r.calcWidth(), r.updateSize(), r.player.graphics.setCanvas(t);
            },
            onDispose: function() {
                r.dispose();
            }
        }, this.requestedTime = 0, this.request = null, this.player = t, t.addListener(this.playerListener);
    }
    return Object.defineProperty(t.prototype, "scale", {
        get: function() {
            return this._scale;
        },
        set: function(t) {
            this._scale = t, this.updateSize();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "width", {
        get: function() {
            return this.player.graphics.width;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "height", {
        get: function() {
            return this.player.graphics.height;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.requestUpdate = function(t) {
        return pn(this, void 0, void 0, function() {
            var e = this;
            return hn(this, function(r) {
                return this.requestedTime = void 0 === t ? this.player.videoPosition : t, this.request || (this.request = new Promise(function(t) {
                    setTimeout(function() {
                        try {
                            e.update(e.requestedTime);
                        } catch (t) {}
                        e.request = null, t(e.requestedTime);
                    }, 0);
                })), [
                    2,
                    this.request
                ];
            });
        });
    }, t.prototype.update = function(t) {
        t || (t = this.player.mediaPosition), "number" == typeof t && (this.player.graphics.reset(), this.animate(t), this.player.graphics.update(), this.listener.onStageUpdate(t));
    }, t.prototype.animate = function(t) {
        for(var e = new ji, r = e.errors, n = e.halted, i = 0, o = [
            this.player.video.firstCredit,
            this.player.video.firstPhrase,
            this.player.video.firstWord,
            this.player.video.firstChar,
            this.player.video.firstGraphic
        ]; i < o.length; i++)for(var s = o[i]; s;)this.animateRenderingUnit(t, s, e), s = s.next;
        if (n.length > 0) {
            console.error("---");
            for(var a = 0; a < n.length; a++)console.error("halted", n[a], r[a]);
        }
    }, t.prototype.animateRenderingUnit = function(t, e, n) {
        if (e.animate) e.animate(t, e);
        else if (e.templateCount <= 0) Ui(e) && e.getType() === r.CHAR && (e.rendering.visible = !1);
        else for(var i = 0; i < e.templateCount; i++)this.animateTemplate(t, e, e.getTemplate(i), n);
    }, t.prototype.animateTemplate = function(t, e, n, i) {
        var o = this;
        if (n.ignore) e.rendering.visible = !1;
        else {
            if (e.getType() !== r.GRAPHIC) for(var s = e.parent; s;){
                if (s.templateCount > 0 && (!s.rendering.visible || 0 === s.rendering.alpha)) return void (e.rendering.visible = !1);
                s = s.parent;
            }
            var a = this.player.templates.getProperty(n, "insomnia"), u = Ui(e);
            if (!a && u) {
                var l = function(t, e, n, i) {
                    var o = i && t(i, "headTime") || 500, s = i && t(i, "tailTime") || 500;
                    return !(n.startTime - o <= e && n.endTime + s >= e) && (n.getType() !== r.GRAPHIC && (n.rendering.visible = !1), !0);
                }(function(t, e) {
                    return o.player.templates.getProperty(t, e);
                }, t, e, n);
                if (l) return;
            }
            this.doAnimateTemplate(t, n, i);
        }
    }, t.prototype.doAnimateTemplate = function(t, e, r) {
        var n = r.errors, i = r.halted;
        try {
            this.player.templates.exec(e, "animate", [
                t
            ]);
        } catch (t) {
            n.push(t), i.push(e);
        }
    }, t.prototype.calcWidth = function() {
        var t = this.player.stageElement;
        if (!t) return 0;
        var e = window.getComputedStyle(t);
        return t.offsetWidth - sn(e.borderLeftWidth) - sn(e.borderRightWidth) - sn(e.paddingLeft) - sn(e.paddingRight);
    }, t.prototype.updateSize = function() {
        var t = this.player.stageElement;
        if (t) {
            var e = this.elementWidth * this.player.videoProportion;
            if (t.style.height = e + "px", t.width = this.elementWidth * this._scale, t.height = e * this._scale, this.player.video) {
                var r = t.width / this.player.videoWidth;
                this.player.graphics.updateStageTx(r, this.player.margin), this.player.isPlaying || this.requestUpdate();
            }
        }
    }, t.prototype.dispose = function() {
        this.player.removeListener(this.playerListener), this.player = null;
    }, t;
}();
function Ui(t) {
    if (t.getType() === r.GRAPHIC) return !0;
    for(var e = !0, n = t.parent; n;){
        if (n.templateCount > 0) {
            e = !1;
            break;
        }
        n = n.parent;
    }
    return e;
}
var Fi = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><style>.bg{fill:#1f4391;}.fg{fill:#fff;}</style></defs><g class="logo-sq"><rect class="bg" x="-20" y="-20" width="240" height="240"/><g class="textalive-logo-art"><path class="fg" d="M97.33,130.81V142a3,3,0,0,0,4.78,2.41l56.81-42.09a3,3,0,0,0,0-4.81l-8.33-6.14Z"/><path class="fg" d="M137.14,81.43l-35-25.84A3,3,0,0,0,97.33,58v52.92Z"/><path class="fg" d="M51,55H80.33a2,2,0,0,1,2,2V71.67a0,0,0,0,1,0,0H51a2,2,0,0,1-2-2V57A2,2,0,0,1,51,55Z"/><path class="fg" d="M44.83,107.5h56.33a2,2,0,0,1,2,2v12.67a2,2,0,0,1-2,2H44.83a0,0,0,0,1,0,0V107.5A0,0,0,0,1,44.83,107.5Z" transform="translate(189.83 41.84) rotate(90)"/></g></g></svg>', Li = "https://textalive.jp", Di = function() {
    function t(t) {
        var e, r = this;
        if (this.player = t, this._position = "embed", this._rounded = !1, this._bordered = !1, this._shadowed = !1, this._background = "#fff", this._color = "#1f4391", void 0 !== (null === (e = t.options) || void 0 === e ? void 0 : e.mediaBannerPosition) && (this._position = t.options.mediaBannerPosition), this.domEnabled) {
            this.logoAnchor = document.createElement("a"), this.logoAnchor.className = "textalive-logo", this.logoAnchor.innerHTML = Fi, this.logoAnchor.style.padding = this.bordered ? "1px 2px" : "1px 3px", this.logoAnchor.href = Li, this.logoAnchor.target = "_blank", this.logoAnchor.title = "Powered by TextAlive App API", this.logoSvg = this.logoAnchor.querySelector("svg"), this.logoSvg.style.width = "24px", this.songNameDiv = document.createElement("div"), this.songNameDiv.className = "name", this.songNameDiv.style.fontWeight = "bold", this.songNameDiv.style.overflow = "hidden", this.songNameDiv.style.textOverflow = "ellipsis", this.songNameDiv.style.marginBottom = "2px", this.songNameDiv.textContent = "-", this.songArtistDiv = document.createElement("div"), this.songArtistDiv.className = "artist", this.songArtistDiv.textContent = "-", this.songArtistDiv.style.overflow = "hidden", this.songArtistDiv.style.textOverflow = "ellipsis";
            var n = document.createElement("span");
            n.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><g class="song"><path d="M120.95,45.77l-59.12,13a2.57,2.57,0,0,0-2,2.51v47.8c0,13.61-12.4,23.74-24.2,23.74-8.92,0-14.82-4.23-14.82-13,0-13,12.86-21.93,23.9-21.93a16.33,16.33,0,0,1,10,3V35a2.57,2.57,0,0,1,2-2.51l69.41-15.29a2.57,2.57,0,0,1,3.13,2.51V92.84c0,13.61-12.1,23.9-24.2,23.9-8.92,0-14.82-4.24-14.82-13,0-13.16,12.86-21.93,23.9-21.93a16.31,16.31,0,0,1,10,2.87V48.29A2.57,2.57,0,0,0,120.95,45.77Z"/><path d="M35.61,134.36c-10.22,0-16.32-5.42-16.32-14.51,0-13.81,13.38-23.43,25.4-23.43a18.4,18.4,0,0,1,8.48,1.88V35a4,4,0,0,1,3.2-4l69.41-15.29a4.07,4.07,0,0,1,5,4V92.83c0,15-13.54,25.4-25.7,25.4-10.22,0-16.32-5.42-16.32-14.51,0-13.81,13.38-23.43,25.4-23.43A19,19,0,0,1,122.57,82V48.29a1.07,1.07,0,0,0-1.3-1h0l-59.12,13a1.08,1.08,0,0,0-.84,1v47.8C61.3,124,47.76,134.36,35.61,134.36Zm9.07-34.94c-10.57,0-22.4,8.74-22.4,20.43,0,10,8.35,11.51,13.32,11.51,13.38,0,22.7-11.72,22.7-22.24V61.31a4.1,4.1,0,0,1,3.2-4l59.12-13h0a4.07,4.07,0,0,1,5,4V87.56l-2.37-1.67a14.88,14.88,0,0,0-9.12-2.6c-10.59,0-22.4,8.39-22.4,20.43,0,10,8.35,11.51,13.32,11.51,10.74,0,22.7-9.2,22.7-22.4V19.72a1.07,1.07,0,0,0-1.3-1L57,34a1.07,1.07,0,0,0-.84,1v68.83l-2.37-1.67A14.87,14.87,0,0,0,44.68,99.42Z"/></g></svg>', n.style.padding = "0 3px 0 0", this.songSvg = n.querySelector("svg"), this.songSvg.style.width = "14px", this.songWrapper = document.createElement("div"), this.songWrapper.style.width = "203px", this.songWrapper.style.maxWidth = "203px", this.songWrapper.appendChild(this.songNameDiv), this.songWrapper.appendChild(this.songArtistDiv), this.songAnchor = document.createElement("a"), this.songAnchor.className = "song", this.songAnchor.target = "_blank", this.songAnchor.style.display = "flex", this.songAnchor.style.lineHeight = "1.2em", this.songAnchor.style.padding = "4px 3px 3px 3px", this.songAnchor.style.textDecoration = "none", this.songAnchor.appendChild(n), this.songAnchor.appendChild(this.songWrapper), this.lyricsNameDiv = document.createElement("div"), this.lyricsNameDiv.className = "name", this.lyricsNameDiv.style.fontWeight = "bold", this.lyricsNameDiv.textContent = "-", this.lyricsNameDiv.style.overflow = "hidden", this.lyricsNameDiv.style.textOverflow = "ellipsis", this.lyricsNameDiv.style.marginBottom = "2px", this.lyricsArtistDiv = document.createElement("div"), this.lyricsArtistDiv.className = "artist", this.lyricsArtistDiv.textContent = "-", this.lyricsArtistDiv.style.overflow = "hidden", this.lyricsArtistDiv.style.textOverflow = "ellipsis";
            var i = document.createElement("span");
            i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><g class="lyrics"><path d="M78,126.3H67.52l-6.26-23.82H24.4L18.14,126.3H7.7L35.7,22H50ZM27,92.39H58.65l-15.82-61Z"/><path d="M78,128.3H67.52a2,2,0,0,1-1.93-1.49l-5.87-22.33H25.94l-5.87,22.33a2,2,0,0,1-1.93,1.49H7.7a2,2,0,0,1-1.93-2.52l28-104.34A2,2,0,0,1,35.7,20H50a2,2,0,0,1,1.93,1.48l28,104.34A2,2,0,0,1,78,128.3Zm-8.89-4h6.29L48.43,24H37.23L10.31,124.3h6.28L22.46,102a2,2,0,0,1,1.93-1.49H61.26A2,2,0,0,1,63.2,102ZM58.65,94.39H27a2,2,0,0,1-1.94-2.5l15.82-61a2,2,0,0,1,3.87,0l15.82,61a2,2,0,0,1-1.94,2.5Zm-29.06-4H56.07L42.83,39.32Z"/><path d="M106.82,128c-17.74,0-26.43-13-26.43-36.52S89.09,55,106.82,55a21.78,21.78,0,0,1,15.83,6.43L134,56.22V112c0,5.22,1.56,8,4.7,8a7.31,7.31,0,0,0,3.65-1v6.61A17.77,17.77,0,0,1,133.6,128a9.61,9.61,0,0,1-9.74-7.65A22.4,22.4,0,0,1,106.82,128Zm0-10.09a18.15,18.15,0,0,0,16.69-10.61V75.7a18.15,18.15,0,0,0-16.69-10.61c-11.3,0-16,9.56-16,26.43S95.52,118,106.82,118Z"/><path d="M133.6,130A11.61,11.61,0,0,1,123.08,124,24.48,24.48,0,0,1,106.82,130c-13,0-28.43-6.68-28.43-38.52S93.85,53,106.82,53A23.88,23.88,0,0,1,123,59.05l10.08-4.65A2,2,0,0,1,136,56.22V112c0,4,.91,6,2.7,6a5.3,5.3,0,0,0,2.66-.78,2,2,0,0,1,3,1.74v6.61a2,2,0,0,1-1,1.74A19.64,19.64,0,0,1,133.6,130Zm-9.74-11.65a2,2,0,0,1,1.95,1.55,7.63,7.63,0,0,0,7.79,6.1,15.19,15.19,0,0,0,6.69-1.64v-2.52a8.51,8.51,0,0,1-1.65.16c-2.5,0-6.7-1.3-6.7-10V59.34l-8.46,3.91a2,2,0,0,1-2.25-.4A19.67,19.67,0,0,0,106.82,57C90.61,57,82.39,68.62,82.39,91.52S90.61,126,106.82,126a20.33,20.33,0,0,0,15.55-7A2,2,0,0,1,123.86,118.39Zm-17,1.57c-11.94,0-18-9.57-18-28.43s6.06-28.43,18-28.43a20.07,20.07,0,0,1,18.5,11.75,2,2,0,0,1,.19.86v31.65a2,2,0,0,1-.19.86A20.06,20.06,0,0,1,106.82,120Zm0-52.86c-12.55,0-14,13.94-14,24.43,0,21.9,8,24.43,14,24.43a16.13,16.13,0,0,0,14.69-9.07V76.16A16.13,16.13,0,0,0,106.82,67.09Z"/></g></svg>', i.style.padding = "0 3px 0 0", this.lyricsSvg = i.querySelector("svg"), this.lyricsSvg.style.width = "14px", this.lyricsWrapper = document.createElement("div"), this.lyricsWrapper.style.width = "90px", this.lyricsWrapper.style.maxWidth = "90px", this.lyricsWrapper.appendChild(this.lyricsNameDiv), this.lyricsWrapper.appendChild(this.lyricsArtistDiv), this.lyricsAnchor = document.createElement("a"), this.lyricsAnchor.className = "lyrics", this.lyricsAnchor.target = "_blank", this.lyricsAnchor.style.display = "flex", this.lyricsAnchor.style.lineHeight = "1.2em", this.lyricsAnchor.style.padding = "4px 3px 3px 3px", this.lyricsAnchor.style.textDecoration = "none", this.lyricsAnchor.appendChild(i), this.lyricsAnchor.appendChild(this.lyricsWrapper), this.bannerDiv = document.createElement("div"), this.bannerDiv.className = "textalive-banner", this.bannerDiv.style.cursor = "pointer", this.bannerDiv.style.zIndex = "10000", this.bannerDiv.style.background = "#1f4391", this.bannerDiv.style.lineHeight = "0", this.bannerDiv.style.display = "flex", this.bannerDiv.style.maxWidth = "256px", this.bannerDiv.style.fontFamily = "'Hiragino Kaku Gothic Pro','\u6E38\u30B4\u30B7\u30C3\u30AF\u4F53','Yu Gothic',YuGothic,Meiryo,HelveticaNeue,'Helvetica Neue',Helvetica,Arial,sans-serif", this.bannerDiv.style.fontSize = "9px", this.bannerDiv.style.alignItems = "center", this.bannerDiv.style.whiteSpace = "nowrap", this.bannerDiv.appendChild(this.logoAnchor), this.bannerDiv.appendChild(this.songAnchor), this.bannerDiv.appendChild(this.lyricsAnchor), this.songAnchor.style.display = "none", this.lyricsAnchor.style.display = "none", this.updatePosition(), this.updateRounded(), this.updateBordered(), this.updateShadowed(), this.updateBackground(), this.updateColor();
        }
        this.listener = {
            onAppReady: function() {
                r.updatePosition();
            },
            onMediaElementSet: function(t) {
                r.domEnabled && (r.bannerDiv && r.bannerDiv.parentElement && r.bannerDiv.parentElement.removeChild(r.bannerDiv), r.player.mediaBannerElement && r.player.mediaBannerElement.appendChild(r.bannerDiv));
            },
            onVideoLoad: function() {
                r.domEnabled && (r.logoAnchor.href = Li, r.songAnchor.style.display = "none", r.lyricsAnchor.style.display = "none", r.songAnchor.style.borderRadius = "0");
            },
            onSongLoad: function(t) {
                return pn(r, void 0, void 0, function() {
                    var e, r, n, i, o, s, a, l, c;
                    return hn(this, function(p) {
                        switch(p.label){
                            case 0:
                                return t ? (e = null === (a = null === (s = null == t ? void 0 : t.song) || void 0 === s ? void 0 : s.artist) || void 0 === a ? void 0 : a.name, r = null === (l = null == t ? void 0 : t.song) || void 0 === l ? void 0 : l.name, n = null === (c = null == t ? void 0 : t.song) || void 0 === c ? void 0 : c.permalink, i = Li + (n ? "/songs/" + encodeURIComponent(u.getSongPathFromUrl(n)) : ""), this.domEnabled && (this.logoAnchor.href = i, this.songArtistDiv.textContent = Mi(e), this.songNameDiv.textContent = Mi(r), this.songAnchor.title = Mi(r) + " by " + Mi(e), this.songAnchor.href = n, this.songAnchor.style.display = "flex", this.songAnchor.style.borderRadius = this.rounded ? "0 4px 4px 0" : "0", this.songWrapper.style.width = "auto"), [
                                    4,
                                    T.getServerStatus()
                                ]) : [
                                    2
                                ];
                            case 1:
                                return "ja" === (null == (o = p.sent()) ? void 0 : o.lang) ? console.warn("[TextAlive API] \u697D\u66F2 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8:", Mi(e), "/ \u697D\u66F2\u540D:", Mi(r), "/ \u914D\u4FE1\u5143\u30B5\u30A4\u30C8:", Mi(n)) : console.warn("[TextAlive API] Song artist:", Mi(e), "/ song name:", Mi(r), "/ distributed at:", Mi(n)), [
                                    2
                                ];
                        }
                    });
                });
            },
            onLyricsLoad: function(t) {
                t && (r.songWrapper.style.maxWidth = "90px", r.lyricsAnchor.style.display = "flex", r.songAnchor.style.borderRadius = "0");
            },
            onTextLoad: function(t) {
                return pn(r, void 0, void 0, function() {
                    var e, r, n, i, o;
                    return hn(this, function(s) {
                        switch(s.label){
                            case 0:
                                return t ? (e = null === (o = null == t ? void 0 : t.artist) || void 0 === o ? void 0 : o.name, r = null == t ? void 0 : t.name, n = null == t ? void 0 : t.url, this.domEnabled && (this.lyricsArtistDiv.textContent = Mi(e), this.lyricsNameDiv.textContent = Mi(r), this.lyricsAnchor.title = Mi(r) + " by " + Mi(e), this.lyricsAnchor.href = n, this.lyricsWrapper.style.width = "auto"), [
                                    4,
                                    T.getServerStatus()
                                ]) : [
                                    2
                                ];
                            case 1:
                                return "ja" === (null == (i = s.sent()) ? void 0 : i.lang) ? console.warn("[TextAlive API] \u6B4C\u8A5E \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8:", Mi(e), "/ \u6B4C\u8A5E\u540D:", Mi(r), "/ \u914D\u4FE1\u5143\u30B5\u30A4\u30C8:", Mi(n)) : console.warn("[TextAlive API] Song lyrics artist:", Mi(e), "/ lyrics name:", Mi(r), "/ distributed at:", Mi(n)), [
                                    2
                                ];
                        }
                    });
                });
            },
            onDispose: function() {
                this.dispose();
            }
        }, t.addListener(this.listener), t.mediaBannerElement && this.player.mediaBannerElement.appendChild(this.bannerDiv);
    }
    return Object.defineProperty(t.prototype, "domEnabled", {
        get: function() {
            return "undefined" != typeof window;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "position", {
        get: function() {
            return this._position;
        },
        set: function(t) {
            this._position = t, this.updatePosition();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rounded", {
        get: function() {
            return this._rounded;
        },
        set: function(t) {
            this._rounded = t, this.updateRounded();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "bordered", {
        get: function() {
            return this._bordered;
        },
        set: function(t) {
            this._bordered = t, this.updateBordered();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "shadowed", {
        get: function() {
            return this._shadowed;
        },
        set: function(t) {
            this._shadowed = t, this.updateShadowed();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "background", {
        get: function() {
            return this._background;
        },
        set: function(t) {
            this._background = t, this.updateBackground();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            return this._color;
        },
        set: function(t) {
            this._color = t, this.updateColor();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.dispose = function() {
        this.player.removeListener(this.listener);
    }, t.prototype.updatePosition = function() {
        var t, e;
        if (this.domEnabled) {
            var r = this.position, n = this.player;
            if (null === r || !(null === (t = n.options) || void 0 === t ? void 0 : t.app) || (null === (e = n.app) || void 0 === e ? void 0 : e.managed)) this.bannerDiv.style.display = "none";
            else if (this.bannerDiv.style.display = "flex", "embed" === r) this.bannerDiv.style.position = "initial", this.bannerDiv.style.marginTop = "4px", this.songAnchor.style.flexGrow = "1", this.lyricsAnchor.style.flexGrow = "1";
            else {
                this.bannerDiv.style.position = "fixed", this.bannerDiv.style.marginTop = "0";
                var i = r.indexOf("top") >= 0, o = r.indexOf("right") >= 0, s = r.indexOf("bottom") >= 0, a = r.indexOf("left") >= 0;
                this.bannerDiv.style.top = i ? "4px" : "initial", this.bannerDiv.style.right = o ? "4px" : "initial", this.bannerDiv.style.bottom = s ? "4px" : "initial", this.bannerDiv.style.left = a ? "4px" : "initial", this.songAnchor.style.flexGrow = "0", this.lyricsAnchor.style.flexGrow = "0";
            }
        }
    }, t.prototype.updateRounded = function() {
        if (this.domEnabled) {
            var t = this.rounded;
            this.logoSvg.style.borderRadius = t ? "4px 0 0 4px" : "0", this.lyricsAnchor.style.borderRadius = t ? "0 4px 4px 0" : "0", this.bannerDiv.style.borderRadius = t ? "4px" : "0";
        }
    }, t.prototype.updateBordered = function() {
        if (this.domEnabled) {
            var t = this.bordered;
            this.logoAnchor.style.padding = t ? "1px 2px" : "1px 3px", this.bannerDiv.style.border = t ? "1px solid rgba(31, 67, 145, 0.3)" : "none";
        }
    }, t.prototype.updateShadowed = function() {
        if (this.domEnabled) {
            var t = this.shadowed;
            this.bannerDiv.style.boxShadow = t ? "1px 1px 3px 0 rgba(9, 19, 42, 0.9)" : "none";
        }
    }, t.prototype.updateBackground = function() {
        this.domEnabled && (this.songAnchor.style.background = this.background, this.lyricsAnchor.style.background = this.background);
    }, t.prototype.updateColor = function() {
        this.domEnabled && (this.songSvg.style.fill = this.color, this.songAnchor.style.color = this.color, this.lyricsSvg.style.fill = this.color, this.lyricsAnchor.style.color = this.color);
    }, t;
}();
function Mi(t) {
    return t && "" !== t ? t : "-";
}
function Bi(t, e) {
    var r = e.parser;
    return pn(this, void 0, void 0, function() {
        var e, n, i;
        return hn(this, function(o) {
            switch(o.label){
                case 0:
                    return t && t.length > 0 && t[0].words && t[0].words.length > 0 && t[0].words[0] && !t[0].words[0].pos ? (e = t.map(function(t) {
                        return t.words.map(function(t) {
                            return t.characters.map(function(t) {
                                return t.char;
                            }).join("");
                        }).join(" ");
                    }), n = e.join("\n"), [
                        4,
                        r(n)
                    ]) : [
                        2
                    ];
                case 1:
                    return (i = o.sent()) && "success" === i.status ? (t.forEach(function(t, r) {
                        var n = i.result[r], o = 0;
                        t.words.forEach(function(t) {
                            var i = t.characters.map(function(t) {
                                return t.char;
                            }).join(""), s = e[r].indexOf(i, o);
                            if (!(s < 0)) {
                                o = s;
                                var a = n.find(function(t) {
                                    return t.startPosition <= s && t.endPosition >= s;
                                });
                                a && (t.pos = a.PoS, t.rawPoS = a.rawPoS, t.language = a.language);
                            }
                        });
                    }), [
                        2
                    ]) : [
                        2
                    ];
            }
        });
    });
}
function Vi(t) {
    for(; t.firstElementChild;)t.removeChild(t.firstElementChild);
}
function Gi(t, e) {
    var r = e.id, n = e.data, i = e.loader, o = e.deserializer;
    return pn(this, void 0, void 0, function() {
        return hn(this, function(e) {
            switch(e.label){
                case 0:
                    return r && r >= 0 ? [
                        4,
                        i(r)
                    ] : [
                        3,
                        2
                    ];
                case 1:
                    e.sent(), e.label = 2;
                case 2:
                    return o(t, n), [
                        2
                    ];
            }
        });
    });
}
function qi(t) {
    return "string" != typeof t ? t : "undefined" == typeof window ? null : document.querySelector(t);
}
var Wi = function() {
    function t(t) {
        this._mediaPosition = 0, this._videoPosition = 0, this.isEditing = !1, this._isVideoSeeking = !1, this._volume = 100, this._options = t, this.emitter = new bn(t), this._templates = new Ni(this, this.emitter, t && t.unsafeAcceleration);
        var e = Object.assign({}, q);
        t && t.managers && (e = Object.assign(e, t.managers)), this.managers = e, this._timer = t && t.timer || this.createDefaultTimer(), this._data = new Ln(e, this.emitter, t), this._backgroundGraphics = new _n(this, e.asset, this.emitter), this._graphics = t && t.graphics || this.createDefaultGraphicsDriver(), this.stage = new Ii(this, {
            onStageUpdate: this.onStageUpdate.bind(this)
        }), this._banner = new Di(this), this.stageElement = qi(null == t ? void 0 : t.stageElement) || null, this.mediaElement = qi(null == t ? void 0 : t.mediaElement) || null, this._app = new Dn(this, this.emitter);
    }
    return Object.defineProperty(t.prototype, "options", {
        get: function() {
            return this._options ? cn({}, this._options) : null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "app", {
        get: function() {
            return this._app;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "data", {
        get: function() {
            return this._data;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "backgroundGraphics", {
        get: function() {
            return this._backgroundGraphics;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "video", {
        get: function() {
            return this._video;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "templates", {
        get: function() {
            return this._templates;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "graphics", {
        get: function() {
            return this._graphics;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "stageElement", {
        get: function() {
            return this._stageElement;
        },
        set: function(t) {
            this._stageElement = t, this.emitter.onStageElementSet(t);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "stageScale", {
        get: function() {
            return this.stage.scale;
        },
        set: function(t) {
            this.stage.scale = t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "mediaElement", {
        get: function() {
            return this._mediaElement;
        },
        set: function(t) {
            this.updateMediaElement(t);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "mediaSourceElement", {
        get: function() {
            return this._mediaSourceElement;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "mediaBannerElement", {
        get: function() {
            return this._mediaBannerElement;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "mediaPosition", {
        get: function() {
            return this._mediaPosition;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "videoPosition", {
        get: function() {
            return this._videoPosition;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "wait", {
        get: function() {
            return this._timer ? this._timer.wait : 0;
        },
        set: function(t) {
            this._timer && (this._timer.wait = t);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fps", {
        get: function() {
            return 1e3 / this.wait;
        },
        set: function(t) {
            this.wait = 1e3 / t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resolutionWidth", {
        get: function() {
            var t, e, r, n;
            return "object" == typeof (null === (e = null === (t = this._data) || void 0 === t ? void 0 : t.video) || void 0 === e ? void 0 : e.config) && "number" == typeof this._data.video.config.width ? this._data.video.config.width : "number" == typeof (null === (n = null === (r = this._options) || void 0 === r ? void 0 : r.defaultVideoSize) || void 0 === n ? void 0 : n.width) ? this._options.defaultVideoSize.width : 1280;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resolutionHeight", {
        get: function() {
            var t, e, r, n;
            return "object" == typeof (null === (e = null === (t = this._data) || void 0 === t ? void 0 : t.video) || void 0 === e ? void 0 : e.config) && "number" == typeof this._data.video.config.height ? this._data.video.config.height : "number" == typeof (null === (n = null === (r = this._options) || void 0 === r ? void 0 : r.defaultVideoSize) || void 0 === n ? void 0 : n.height) ? this._options.defaultVideoSize.height : 720;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resolutionProportion", {
        get: function() {
            return this.resolutionHeight / this.resolutionWidth;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "margin", {
        get: function() {
            var t, e, r, n;
            return "object" == typeof (null === (e = null === (t = this._data) || void 0 === t ? void 0 : t.video) || void 0 === e ? void 0 : e.config) && this._data.video.config.margin ? this._data.video.config.margin : (null === (n = null === (r = this._options) || void 0 === r ? void 0 : r.defaultVideoSize) || void 0 === n ? void 0 : n.margin) || yn;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "videoWidth", {
        get: function() {
            var t = this.resolutionWidth, e = this.margin;
            return t + e[1] + e[3];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "videoHeight", {
        get: function() {
            var t = this.resolutionHeight, e = this.margin;
            return t + e[0] + e[2];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "videoProportion", {
        get: function() {
            return this.videoHeight / this.videoWidth;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "stageWidth", {
        get: function() {
            return this.stage.width;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "stageHeight", {
        get: function() {
            return this.stage.height;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isLoading", {
        get: function() {
            return !!this._videoPromise;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isPlaying", {
        get: function() {
            return !!this._timer && this._timer.isPlaying;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isVideoSeeking", {
        get: function() {
            return this._isVideoSeeking;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "banner", {
        get: function() {
            return this._banner;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "timer", {
        get: function() {
            return this._timer;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "volume", {
        get: function() {
            return this._volume;
        },
        set: function(t) {
            isNaN(t) || (this._volume = Math.min(100, Math.max(0, t)), this.emitter.onVolumeUpdate(this._volume));
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.createDefaultTimer = function() {
        try {
            if ("undefined" != typeof window && "basic" !== an("ta_timer")) return new mn;
        } catch (t) {}
        return new vn;
    }, t.prototype.createDefaultGraphicsDriver = function() {
        return new ct;
    }, t.prototype.addListener = function(t) {
        return this.emitter.addListener(t);
    }, t.prototype.removeListener = function(t) {
        return this.emitter.removeListener(t);
    }, t.prototype.createFromVideoId = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r = this;
            return hn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromVideoId(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromVideoId = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            (r = new Ln(this.managers, this.emitter, this._options)).createFromVideoId(t, null == e ? void 0 : e.video)
                        ];
                    case 1:
                        return n.sent(), [
                            2,
                            this.finalize(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromVideo = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r = this;
            return hn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromVideo(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromVideo = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                return (r = new Ln(this.managers, this.emitter, this._options)).createFromVideo(t, null == e ? void 0 : e.video), [
                    2,
                    this.finalize(r, e)
                ];
            });
        });
    }, t.prototype.createFromSongUrl = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r = this;
            return hn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromSongUrl(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromSongUrl = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            (r = new Ln(this.managers, this.emitter, this._options)).createFromSongUrl(t, null == e ? void 0 : e.video)
                        ];
                    case 1:
                        return n.sent(), [
                            2,
                            this.finalize(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromSongPath = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r = this;
            return hn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromSongPath(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromSongPath = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            (r = new Ln(this.managers, this.emitter, this._options)).createFromSongPath(t, null == e ? void 0 : e.video)
                        ];
                    case 1:
                        return n.sent(), [
                            2,
                            this.finalize(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromSongId = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r = this;
            return hn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromSongId(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromSongId = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            (r = new Ln(this.managers, this.emitter, this._options)).createFromSongId(t, null == e ? void 0 : e.video)
                        ];
                    case 1:
                        return n.sent(), [
                            2,
                            this.finalize(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromSongCode = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r = this;
            return hn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromSongCode(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromSongCode = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            (r = new Ln(this.managers, this.emitter, this._options)).createFromSongCode(t, null == e ? void 0 : e.video)
                        ];
                    case 1:
                        return n.sent(), [
                            2,
                            this.finalize(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromText = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r = this;
            return hn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromText(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromText = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            (r = new Ln(this.managers, this.emitter, this._options)).createFromText(t, null == e ? void 0 : e.video)
                        ];
                    case 1:
                        return n.sent(), [
                            2,
                            this.finalize(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromJSON = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r = this;
            return hn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromJSON(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromJSON = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r;
            return hn(this, function(n) {
                return (r = new Ln(this.managers, this.emitter, this._options)).createFromJSON(t, null == e ? void 0 : e.video), [
                    2,
                    this.finalize(r, e)
                ];
            });
        });
    }, t.prototype.create = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r, n = this;
            return hn(this, function(i) {
                if (this._videoPromise && !e) throw new ki("Player.createFrom* method calls cannot run in parallel", this._videoPromise);
                return r = t(), e || (this._videoPromise = r, r.finally(function() {
                    return n._videoPromise = null;
                })), [
                    2,
                    r
                ];
            });
        });
    }, t.prototype.finalize = function(t, e) {
        return pn(this, void 0, void 0, function() {
            var r, n, i, o = this;
            return hn(this, function(s) {
                switch(s.label){
                    case 0:
                        return t.video ? [
                            4,
                            Promise.all([
                                t.finalize(e),
                                this.backgroundGraphics.setBackground(t.video.background)
                            ])
                        ] : [
                            2,
                            null
                        ];
                    case 1:
                        return s.sent(), (null == e ? void 0 : e.dryRun) ? [
                            2,
                            null
                        ] : (r = t.video.json, function(t, e) {
                            var r = e.config, n = e.song;
                            r && "object" == typeof r && "number" == typeof r.duration ? t.duration = r.duration : n ? t.duration = 1e3 * n.length : t.duration || (t.duration = t.endTime);
                        }(n = new nt(r), {
                            config: t.video.config,
                            song: t.song
                        }), [
                            4,
                            Promise.all([
                                this.graphics.createRuntime(n),
                                Gi(n, {
                                    id: t.video.id,
                                    data: r,
                                    loader: function(t) {
                                        return pn(o, void 0, void 0, function() {
                                            return hn(this, function(e) {
                                                switch(e.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            this.templates.loadForVideo(t)
                                                        ];
                                                    case 1:
                                                        return e.sent(), [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                    },
                                    deserializer: function(t, e) {
                                        return o.templates.importInstances(t, e);
                                    }
                                }),
                                Bi(null == r ? void 0 : r.phrases, {
                                    parser: x.parse.bind(x)
                                })
                            ])
                        ]);
                    case 2:
                        return s.sent(), this._data, this._video && this.templates.disposeInstances(this._video), this._data = t, this._video = n, this.emitter.onVideoReady(n), i = (null == e ? void 0 : e.altSourceUrl) || void 0, [
                            4,
                            this._timer.initialize({
                                player: this,
                                updater: this.updateMediaPosition.bind(this),
                                emitter: this.emitter,
                                altSourceUrl: i
                            })
                        ];
                    case 3:
                        return s.sent(), this.emitter.onTimerReady(this._timer), [
                            2,
                            n
                        ];
                }
            });
        });
    }, t.prototype.updateMediaPosition = function(t) {
        return pn(this, void 0, void 0, function() {
            var e = this;
            return hn(this, function(r) {
                return this._isVideoSeeking ? (this._mediaPosition = t, this.emitter.onMediaSeek(t), [
                    2,
                    t
                ]) : [
                    2,
                    this.stage.requestUpdate(t).then(function(t) {
                        return e._mediaPosition = t, e._videoPosition = t, e.emitter.onMediaSeek(t), t;
                    })
                ];
            });
        });
    }, t.prototype.exportVideo = function(t) {
        return void 0 === t && (t = {
            legacyStringMode: !0
        }), pn(this, void 0, void 0, function() {
            var e, r, n, i;
            return hn(this, function(o) {
                return e = {
                    sourceId: this._data.video.id,
                    sourceOriginId: this._data.video.sourceOriginId,
                    songleId: this._data.song.id,
                    lyricId: this._data.lyricsId,
                    lyricDiffId: this._data.lyrics ? this._data.lyrics.id : -1,
                    config: ((null == t ? void 0 : t.legacyStringMode) ? this._data.video.config && JSON.stringify(this._data.video.config) : this._data.video.config) || null
                }, r = this.backgroundGraphics.exportPartialVideoEntry(t), n = this._video.exportData(this._templates), i = (null == t ? void 0 : t.legacyStringMode) ? JSON.stringify(n) : n, [
                    2,
                    cn(cn(cn({}, e), r), {
                        json: i
                    })
                ];
            });
        });
    }, t.prototype.getChoruses = function() {
        return this._data.getChoruses();
    }, t.prototype.findChorus = function(t, e) {
        return this._data.findChorus(t, e);
    }, t.prototype.findChorusBetween = function(t, e) {
        return this._data.findChorusBetween(t, e);
    }, t.prototype.getBeats = function() {
        return this._data.getBeats();
    }, t.prototype.findBeat = function(t, e) {
        return this._data.findBeat(t, e);
    }, t.prototype.getChords = function() {
        return this._data.getChords();
    }, t.prototype.findChord = function(t, e) {
        return this._data.findChord(t, e);
    }, t.prototype.getVocalFrequency = function(t) {
        return this._data.getVocalFrequency(t);
    }, t.prototype.getVocalAmplitude = function(t) {
        return this._data.getVocalAmplitude(t);
    }, t.prototype.getMaxVocalAmplitude = function() {
        return this._data.getMaxVocalAmplitude();
    }, t.prototype.getValenceArousal = function(t) {
        return this._data.getValenceArousal(t);
    }, t.prototype.getMedianValenceArousal = function() {
        return this._data.getMedianValenceArousal();
    }, t.prototype.resize = function(t) {
        return this.emitter.onResize(t);
    }, t.prototype.onResize = function(t) {
        return this.resize(t);
    }, t.prototype.setStageElement = function(t) {
        return this._stageElement = t, this.emitter.onStageElementSet(t);
    }, t.prototype.setMediaElement = function(t) {
        this.mediaElement = t;
    }, t.prototype.updateMediaElement = function(t) {
        "undefined" != typeof document && (this._mediaElement && Vi(this._mediaElement), t ? (Vi(t), this._mediaSourceElement || (this._mediaSourceElement = document.createElement("div"), this._mediaSourceElement.classList.add("textalive-media-wrapper")), t.appendChild(this._mediaSourceElement), this._mediaBannerElement || (this._mediaBannerElement = document.createElement("div"), this._mediaSourceElement.classList.add("textalive-banner-wrapper")), t.appendChild(this._mediaBannerElement)) : (this._mediaSourceElement = null, this._mediaBannerElement = null)), this._mediaElement = t, this.emitter.onMediaElementSet(t);
    }, t.prototype.setVideoPosition = function(t) {
        return pn(this, void 0, void 0, function() {
            var e = this;
            return hn(this, function(r) {
                return [
                    2,
                    this.stage.requestUpdate(t).then(function(t) {
                        return e._videoPosition = t, e.emitter.onVideoSeek(t), t;
                    })
                ];
            });
        });
    }, t.prototype.setMediaPosition = function(t) {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(e) {
                return this.requestMediaSeek(t), [
                    2
                ];
            });
        });
    }, t.prototype.requestPlay = function() {
        return this._timer.play(), !0;
    }, t.prototype.requestStop = function() {
        return this._timer.stop(), !0;
    }, t.prototype.requestPause = function() {
        return this._timer.pause(), !0;
    }, t.prototype.requestMediaSeek = function(t) {
        return this._timer.seek(t), !0;
    }, t.prototype.startVideoSeek = function() {
        return this._isVideoSeeking = !0, this.emitter.onVideoSeekStart();
    }, t.prototype.endVideoSeek = function() {
        return this._isVideoSeeking = !1, this.emitter.onVideoSeekEnd();
    }, t.prototype.requestSettingBackground = function(t) {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(e) {
                return [
                    2,
                    this.backgroundGraphics.settingBackground(t)
                ];
            });
        });
    }, t.prototype.requestSetBackground = function(t) {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(e) {
                return [
                    2,
                    this.backgroundGraphics.setBackground(t)
                ];
            });
        });
    }, t.prototype.requestStageUpdate = function() {
        return pn(this, void 0, void 0, function() {
            return hn(this, function(t) {
                return [
                    2,
                    this.stage.requestUpdate()
                ];
            });
        });
    }, t.prototype.onStageUpdate = function(t) {
        this._isVideoSeeking || this.emitter.onTimeUpdate(t);
    }, t.prototype.dispose = function() {
        this._timer && (this._timer.dispose(), this._timer = null), this.mediaElement && (Vi(this._mediaElement), this._mediaElement = null), this.stageElement && (this._stageElement = null), this.emitter.onDispose();
    }, t;
}();
console.log("# \u30E9\u30A4\u30BB\u30F3\u30B9\u8868\u8A18\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\n\n\u56FD\u7ACB\u7814\u7A76\u958B\u767A\u6CD5\u4EBA\u7523\u696D\u6280\u8853\u7DCF\u5408\u7814\u7A76\u6240\n\u4EBA\u9593\u60C5\u5831\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u7814\u7A76\u90E8\u9580\n\u30E1\u30C7\u30A3\u30A2\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u7814\u7A76\u30B0\u30EB\u30FC\u30D7\n\nTextAlive App API\u306F\u975E\u5546\u7528\u5229\u7528\u306B\u9650\u308A\u3001\u3069\u306A\u305F\u3067\u3082\u7121\u6599\u30FB\u7121\u4FDD\u8A3C\u3067\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\n\u305F\u3060\u3057\u3001\u539F\u5247\u3068\u3057\u3066TextAlive App API\u3092\u5229\u7528\u3057\u3066\u3044\u308B\u65E8\u3092 TextAlive https://textalive.jp/ \u30B5\u30A4\u30C8\u5185\u697D\u66F2\u30DA\u30FC\u30B8\u307E\u305F\u306F https://developer.textalive.jp/ \u306B\u30CF\u30A4\u30D1\u30FC\u30EA\u30F3\u30AF\u3057\u305F\u4E0A\u3067\u3001\u5229\u7528\u3057\u3066\u3044\u308B\u30B7\u30B9\u30C6\u30E0\u3082\u3057\u304F\u306F\u5916\u90E8\u30B5\u30A4\u30C8\u7B49\u306B\u8868\u793A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\n\n# \u304A\u554F\u3044\u5408\u308F\u305B\n\ntextalive-ml@aist.go.jp");
var Yi = e.exports.sortedIndex;

},{"axios":"jo6P5","9b2ba0ceede257b":"3loM4","d32dff30d595d4e2":"LKZ7e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jo6P5":[function(require,module,exports) {
module.exports = require("9f37cef8b0e13afc");

},{"9f37cef8b0e13afc":"63MyY"}],"63MyY":[function(require,module,exports) {
"use strict";
var utils = require("1137fef34918bf53");
var bind = require("ce63a8247a300202");
var Axios = require("c14c66f4c3ec48a2");
var mergeConfig = require("345f9ec0ee8efc80");
var defaults = require("27bdb15d131780c5");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Expose Cancel & CancelToken
axios.Cancel = require("ae1da7645e57ebca");
axios.CancelToken = require("853fec7db7d524b4");
axios.isCancel = require("322a636c3e2325e1");
axios.VERSION = require("3d6b2db6c802d85d").version;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = require("75c7c70e55d88256");
// Expose isAxiosError
axios.isAxiosError = require("543a1da09311ae9b");
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"1137fef34918bf53":"5By4s","ce63a8247a300202":"haRQb","c14c66f4c3ec48a2":"cpqD8","345f9ec0ee8efc80":"b85oP","27bdb15d131780c5":"lTJJ4","ae1da7645e57ebca":"kjMy2","853fec7db7d524b4":"45wzn","322a636c3e2325e1":"a0VmF","3d6b2db6c802d85d":"h29L9","75c7c70e55d88256":"dyQ8N","543a1da09311ae9b":"eyiLq"}],"5By4s":[function(require,module,exports) {
"use strict";
var bind = require("a7c7b4094caa86ac");
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return toString.call(val) === "[object Array]";
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === "undefined";
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ function isArrayBuffer(val) {
    return toString.call(val) === "[object ArrayBuffer]";
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === "string";
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === "number";
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && typeof val === "object";
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (toString.call(val) !== "[object Object]") return false;
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ function isDate(val) {
    return toString.call(val) === "[object Date]";
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ function isFile(val) {
    return toString.call(val) === "[object File]";
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ function isBlob(val) {
    return toString.call(val) === "[object Blob]";
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === "[object Function]";
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
    var result = {};
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val);
        else if (isPlainObject(val)) result[key] = merge({}, val);
        else if (isArray(val)) result[key] = val.slice();
        else result[key] = val;
    }
    for(var i = 0, l = arguments.length; i < l; i++)forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") a[key] = bind(val, thisArg);
        else a[key] = val;
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
}
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
};

},{"a7c7b4094caa86ac":"haRQb"}],"haRQb":[function(require,module,exports) {
"use strict";
module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        return fn.apply(thisArg, args);
    };
};

},{}],"cpqD8":[function(require,module,exports) {
"use strict";
var utils = require("2cd2d0baba832579");
var buildURL = require("945ebba9256ed84f");
var InterceptorManager = require("fc2d71ae77ba798e");
var dispatchRequest = require("77b4f57f4d663a9b");
var mergeConfig = require("5db81a4f62f8927d");
var validator = require("d0f5147a00cee7c5");
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
    } else config = config || {};
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) config.method = config.method.toLowerCase();
    else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
    else config.method = "get";
    var transitional = config.transitional;
    if (transitional !== undefined) validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length)promise = promise.then(chain.shift(), chain.shift());
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    while(responseInterceptorChain.length)promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
// Provide aliases for supported request methods
utils.forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
utils.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
});
module.exports = Axios;

},{"2cd2d0baba832579":"5By4s","945ebba9256ed84f":"3bwC2","fc2d71ae77ba798e":"1VRIM","77b4f57f4d663a9b":"6sjJ6","5db81a4f62f8927d":"b85oP","d0f5147a00cee7c5":"9vgkY"}],"3bwC2":[function(require,module,exports) {
"use strict";
var utils = require("d198994ea2a45305");
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    var serializedParams;
    if (paramsSerializer) serializedParams = paramsSerializer(params);
    else if (utils.isURLSearchParams(params)) serializedParams = params.toString();
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") return;
            if (utils.isArray(val)) key = key + "[]";
            else val = [
                val
            ];
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) v = v.toISOString();
                else if (utils.isObject(v)) v = JSON.stringify(v);
                parts.push(encode(key) + "=" + encode(v));
            });
        });
        serializedParams = parts.join("&");
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
};

},{"d198994ea2a45305":"5By4s"}],"1VRIM":[function(require,module,exports) {
"use strict";
var utils = require("982be9ba543c1801");
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) this.handlers[id] = null;
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) fn(h);
    });
};
module.exports = InterceptorManager;

},{"982be9ba543c1801":"5By4s"}],"6sjJ6":[function(require,module,exports) {
"use strict";
var utils = require("dccb83262660ba2a");
var transformData = require("670a836c9c5a1abe");
var isCancel = require("9b938a75c8452b2f");
var defaults = require("293260d2186f65fb");
var Cancel = require("41ce48c743b65c6a");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new Cancel("canceled");
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach([
        "delete",
        "get",
        "head",
        "post",
        "put",
        "patch",
        "common"
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
        return Promise.reject(reason);
    });
};

},{"dccb83262660ba2a":"5By4s","670a836c9c5a1abe":"eRqJY","9b938a75c8452b2f":"a0VmF","293260d2186f65fb":"lTJJ4","41ce48c743b65c6a":"kjMy2"}],"eRqJY":[function(require,module,exports) {
"use strict";
var utils = require("506225f7f22ee5b3");
var defaults = require("5f8f7bd977372ccb");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};

},{"506225f7f22ee5b3":"5By4s","5f8f7bd977372ccb":"lTJJ4"}],"lTJJ4":[function(require,module,exports) {
var process = require("1ad3e53325021694");
"use strict";
var utils = require("46f17d5a961ed1b0");
var normalizeHeaderName = require("cc6d63c7870abf00");
var enhanceError = require("381f0945c152ddd3");
var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") // For browsers use XHR adapter
    adapter = require("f5547462a34fd4c6");
    else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") // For node use HTTP adapter
    adapter = require("1a73616b0da0ef06");
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
    },
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, "Accept");
            normalizeHeaderName(headers, "Content-Type");
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
            if (utils.isArrayBufferView(data)) return data.buffer;
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
                return data.toString();
            }
            if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
                setContentTypeIfUnset(headers, "application/json");
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional || defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) try {
                return JSON.parse(data);
            } catch (e) {
                if (strictJSONParsing) {
                    if (e.name === "SyntaxError") throw enhanceError(e, this, "E_JSON_PARSE");
                    throw e;
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
utils.forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

},{"1ad3e53325021694":"d5jf4","46f17d5a961ed1b0":"5By4s","cc6d63c7870abf00":"adBZo","381f0945c152ddd3":"itUQr","f5547462a34fd4c6":"ldm57","1a73616b0da0ef06":"ldm57"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"adBZo":[function(require,module,exports) {
"use strict";
var utils = require("5f8afca0889a63e1");
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

},{"5f8afca0889a63e1":"5By4s"}],"itUQr":[function(require,module,exports) {
"use strict";
/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */ module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) error.code = code;
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    };
    return error;
};

},{}],"ldm57":[function(require,module,exports) {
"use strict";
var utils = require("2bb8b5f6db10dd6d");
var settle = require("a7b983c12bb9f77f");
var cookies = require("19bdb320f45f036e");
var buildURL = require("568f70ee55491398");
var buildFullPath = require("a1fd5a6807469b6d");
var parseHeaders = require("f197d20bdfdcd5a4");
var isURLSameOrigin = require("32737c301de74bf5");
var createError = require("df24397a62f10f34");
var defaults = require("a828450c134f438a");
var Cancel = require("42ed100f53273f39");
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if (utils.isFormData(requestData)) delete requestHeaders["Content-Type"]; // Let the browser set it
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(createError("Request aborted", config, "ECONNABORTED", request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError("Network Error", config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            var transitional = config.transitional || defaults.transitional;
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
        // Add headers to the request
        if ("setRequestHeader" in request) utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") // Remove Content-Type if data is undefined
            delete requestHeaders[key];
            else // Otherwise add header to the request
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", config.onDownloadProgress);
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", config.onUploadProgress);
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (!request) return;
                reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        if (!requestData) requestData = null;
        // Send the request
        request.send(requestData);
    });
};

},{"2bb8b5f6db10dd6d":"5By4s","a7b983c12bb9f77f":"dD9aC","19bdb320f45f036e":"4WJjt","568f70ee55491398":"3bwC2","a1fd5a6807469b6d":"1I5TW","f197d20bdfdcd5a4":"kqDd5","32737c301de74bf5":"lxXtv","df24397a62f10f34":"5nVS9","a828450c134f438a":"lTJJ4","42ed100f53273f39":"kjMy2"}],"dD9aC":[function(require,module,exports) {
"use strict";
var createError = require("72d296795d733aeb");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
};

},{"72d296795d733aeb":"5nVS9"}],"5nVS9":[function(require,module,exports) {
"use strict";
var enhanceError = require("ff529806947600d1");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};

},{"ff529806947600d1":"itUQr"}],"4WJjt":[function(require,module,exports) {
"use strict";
var utils = require("c987331427b8b2ad");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if (utils.isString(path)) cookie.push("path=" + path);
            if (utils.isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"c987331427b8b2ad":"5By4s"}],"1I5TW":[function(require,module,exports) {
"use strict";
var isAbsoluteURL = require("5ff0e8c05aa13380");
var combineURLs = require("e1ac36eef7d02fa4");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
    return requestedURL;
};

},{"5ff0e8c05aa13380":"jD6NM","e1ac36eef7d02fa4":"brOWK"}],"jD6NM":[function(require,module,exports) {
"use strict";
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"brOWK":[function(require,module,exports) {
"use strict";
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};

},{}],"kqDd5":[function(require,module,exports) {
"use strict";
var utils = require("5802dc5113a634d0");
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) return parsed;
    utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
            if (key === "set-cookie") parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                val
            ]);
            else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
    });
    return parsed;
};

},{"5802dc5113a634d0":"5By4s"}],"lxXtv":[function(require,module,exports) {
"use strict";
var utils = require("c8f79893fd676b4c");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"c8f79893fd676b4c":"5By4s"}],"kjMy2":[function(require,module,exports) {
"use strict";
/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

},{}],"a0VmF":[function(require,module,exports) {
"use strict";
module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

},{}],"b85oP":[function(require,module,exports) {
"use strict";
var utils = require("99adbff39af8f677");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source);
        else if (utils.isPlainObject(source)) return utils.merge({}, source);
        else if (utils.isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) return getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) return getMergedValue(undefined, config1[prop]);
    }
    var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};

},{"99adbff39af8f677":"5By4s"}],"9vgkY":[function(require,module,exports) {
"use strict";
var VERSION = require("e9aa819e853e8a05").version;
var validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach(function(type, i) {
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
var deprecatedWarnings = {};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new TypeError("options must be an object");
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new TypeError("option " + opt + " must be " + result);
            continue;
        }
        if (allowUnknown !== true) throw Error("Unknown option " + opt);
    }
}
module.exports = {
    assertOptions: assertOptions,
    validators: validators
};

},{"e9aa819e853e8a05":"h29L9"}],"h29L9":[function(require,module,exports) {
module.exports = {
    "version": "0.23.0"
};

},{}],"45wzn":[function(require,module,exports) {
"use strict";
var Cancel = require("69a8f59e5e2b033");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== "function") throw new TypeError("executor must be a function.");
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    // eslint-disable-next-line func-names
    this.promise.then(function(cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;
        for(i = 0; i < l; i++)token._listeners[i](cancel);
        token._listeners = null;
    });
    // eslint-disable-next-line func-names
    this.promise.then = function(onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) // Cancellation has already been requested
        return;
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) throw this.reason;
};
/**
 * Subscribe to the cancel signal
 */ CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) this._listeners.push(listener);
    else this._listeners = [
        listener
    ];
};
/**
 * Unsubscribe from the cancel signal
 */ CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) return;
    var index = this._listeners.indexOf(listener);
    if (index !== -1) this._listeners.splice(index, 1);
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;

},{"69a8f59e5e2b033":"kjMy2"}],"dyQ8N":[function(require,module,exports) {
"use strict";
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

},{}],"eyiLq":[function(require,module,exports) {
"use strict";
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return typeof payload === "object" && payload.isAxiosError === true;
};

},{}],"3loM4":[function(require,module,exports) {
module.exports = require("bbc4269fbe11734")(require("a5b4025ae6a966dc").getBundleURL("65UuX") + "main.fb82e34c.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("jLNqd"));

},{"bbc4269fbe11734":"61B45","a5b4025ae6a966dc":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"LKZ7e":[function(require,module,exports) {
module.exports = require("76fd5ffa8c3b94b3")(require("e000f399939d3afb").getBundleURL("65UuX") + "webfontloader.3fa77979.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("3OQ6Z"));

},{"76fd5ffa8c3b94b3":"61B45","e000f399939d3afb":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"csKGc":[function(require,module,exports) {
module.exports = require("bc67f28613fb56db").getBundleURL("65UuX") + "miku_0.cb060918.png" + "?" + Date.now();

},{"bc67f28613fb56db":"lgJ39"}],"dHVhQ":[function(require,module,exports) {
module.exports = require("d3dcc4e1818b5556").getBundleURL("65UuX") + "miku_1.da41d326.png" + "?" + Date.now();

},{"d3dcc4e1818b5556":"lgJ39"}],"kWCOL":[function(require,module,exports) {
module.exports = require("8c11f57ea18e5110").getBundleURL("65UuX") + "miku_2.aaaf9c97.png" + "?" + Date.now();

},{"8c11f57ea18e5110":"lgJ39"}],"j5TtC":[function(require,module,exports) {
module.exports = require("1296ee2cd6425e2c").getBundleURL("65UuX") + "miku_3.c913dea3.png" + "?" + Date.now();

},{"1296ee2cd6425e2c":"lgJ39"}]},["hCdKa","8lqZg"], "8lqZg", "parcelRequire9749")

//# sourceMappingURL=index.40863ccb.js.map
