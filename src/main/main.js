const {
    app,
    BrowserWindow,
    ipcMain,
    screen
} = require('electron')
// const { tr } = require('element-plus/es/locales.mjs')
const path = require('path')


let win

function createWindow() {
    win = new BrowserWindow({
        // ----- 尺寸与位置 -----
        width: 900,
        height: 600,
        minWidth: 700,
        minHeight: 500,
        center: true,
        titleBarStyle: 'hidden',

        // ----- 自定义标题栏 -----
        title: 'MOA',
        frame: false,
        transparent: true,
        webPreferences: { nodeIntegration: true },

        // ----- 行为控制 -----

        resizable: true,
        maximizable: false,
        minimizable: true,
        closable: true,
        alwaysOnTop: false,
        fullscreen: false,

        // ----- 图标与背景 -----
        icon: path.join(__dirname, '../static/assets/icon.ico'),

        // ----- 渲染设置 -----
        webPreferences: {
            preload: path.join(__dirname, '../preload/preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    })

    // 开发环境
    win.loadURL('http://localhost:5173')
    setInterval(()=>{
        win.setPosition(1, 0)

    },100)
    // win.webContents.openDevTools() 调试器

    win.on('closed', () => {
        win = null
    })

}


/*
 * ============================
 * 自定义窗口控制
 * ============================
 */

// 最小化
ipcMain.on('window-minimize', () => {
    if (win) win.minimize()
})


// 关闭
ipcMain.on('window-close', () => {
    if (win) win.close()
})

// 拖拽
ipcMain.handle('custom-adsorption', (event, res) => {
    // const [w, h] = win.getSize()
    // const [x, y] = win.getPosition()
    console.log('ps: ' + win.getPosition())
    console.log('size: ' + win.getSize())
    console.log('data: ' + res.appX + ',' + res.appY)


    // win.setSize(win.getSize())
    // win.setBounds({
    //     x: res.appX,
    //     y: res.appY,
    //     width: w,
    //     height: h
    // })
    // const fiX = x - res.appX;
    // const fiY = y - res.appY;
    // win.setPosition(fiX, fiY)
    win.setPosition(res.appX, res.appY)
    // win.setPosition(-1, 0)
})



// Electron 初始化
app.whenReady().then(createWindow)


// 所有窗口关闭
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


// macOS
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})