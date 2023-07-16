const {app, BrowserWindow, Notification, ipcMain} = require('electron');
const path = require('path');

let win;
function createWindow() {
    win = new BrowserWindow({
       height: 500,
       width: 400,
       webPreferences: {
         preload: path.join(__dirname, 'preload.js'),
         nodeIntegration: true
       }
    })
    win.loadFile('index.html')
}

ipcMain.on('notify', () => {
    const win1 = new BrowserWindow({
        height: 600,
        width: 400,
     })
     win1.loadFile('notify.html')
})

app.whenReady().then(createWindow)