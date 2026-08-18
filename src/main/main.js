const {
    app,
    BrowserWindow,
    ipcMain,
    screen
} = require('electron')
const path = require('path')


let win


function createWindow() {
    win = new BrowserWindow({
        // ----- 尺寸与位置 -----
        width: 900,
        minHeight: 500,
        minHeight: 500,
        center: true,
        useContentSize: false,

        // ----- 自定义标题栏 -----
        title: 'MOA',
        frame: false,
        transparent: true,
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
    // TODO bug#26-81701
    // setInterval(()=>{
    //     win.setPosition(1, 0)
    // },100)

    // win.webContents.openDevTools() 调试器
    win.on('closed', () => {
        win = null
    })

    win.on('resize', () => {
        console.log('resize:', win.getBounds())
    })

    win.on('move', () => {
        console.log('move:', win.getBounds())
    })
    win.on('will-resize', (event, newBounds) => {
        console.log("will resize", newBounds)
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
    // console.log('data: ' + res.appX + ',' + res.appY)
    // console.log("before", win.getBounds())

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
    // TODO bug#26-81701

    win.setPosition(res.appX, res.appY)

    // win.setPosition(-1, 0)
    // setTimeout(() => {
    //     console.log("after", win.getBounds())
    // }, 500)
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