// Test import of a JavaScript module
import 'pod-com-offline-sdk'

var SDK = new window.POD.OFFLINEPLAYERSDK({
    containerId: "root",
    env: "main",
    logging: {
        info: false,
        debug: false,
        error: true
    },
    styling: {
        container: {
            width: 300,
            height: 300
        }
    }
});

let btnStart = document.createElement('button');
btnStart.innerText = 'Start';
let btnStop = document.createElement('button');
btnStop.innerText = 'Stop';

btnStart.addEventListener("click", function (evt) {
    evt.preventDefault();
    SDK.playMedia({
        hash: "DBPPGRD3PUPV4MNL",
        quality: 240,
        token: "ed24e37c7ee84313acf2805a80122f94",
    });
});
btnStop.addEventListener("click", function (evt) {
    evt.preventDefault();
    SDK.destroyVideo()
});

const app = document.querySelector('#root')
 app.append(btnStart, btnStop);

