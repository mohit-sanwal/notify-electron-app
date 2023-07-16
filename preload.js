const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronApi', {
    notifyApp: (status) => ipcRenderer.send('notify', status)
})