const {app, BrowserWindow, ipcMain} = require('electron');


app.commandLine.appendSwitch('--autoplay-policy', 'no-user-gesture-required');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';


/**
 * Keep a global reference of the window object, if you don't, the window will
 * be closed automatically when the JavaScript object is garbage collected.
 */
let window;

/**
 * This will create the main Electron window
 */
function createWindow() {

    // Create the browser window.
    window = new BrowserWindow({
        width: 1920, height: 1080,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // and load the index.html of the app.
    window.loadFile('dist/index.html');

    // Open the DevTools.
    window.webContents.openDevTools();

    // Emitted when the window is closed.
    window.on('closed', () => {

        /**
         * Dereference the window object, usually you would store windows
         * in an array if your app supports multi windows, this is the timewhen you should
         * delete the corresponding element.
         * @type {null}
         */
        window = null
    })
}



/**
 * This method will be called when Electron has finished
 * initialization and is ready to create browser windows.
 * Some APIs can only be used after this event occurs.
 */
app.on('ready', createWindow);


/**
 * Quit when all windows are closed.
 */
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

/**
 * On macOS it's common to re-create a window in the app when thedock icon
 * is clicked and there are no other windows open.
 */
app.on('activate', () => {

    if (window === null) {
        createWindow()
    }
});


ipcMain.on('asynchronous-message', (event, arg) => {
    event.sender.send('asynchronous-reply', 'something')
});

ipcMain.on('synchronous-message', (event, arg) => {
    event.returnValue = 'Received message'
});


