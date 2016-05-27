const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function launchClient() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);

  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', launchClient);
