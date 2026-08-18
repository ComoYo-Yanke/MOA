const {
    app,
    BrowserWindow,
    ipcMain,
    screen
} = require('electron')
const path = require('path')


let win
let i = 0;
const change = [0, 2, 1, 2, 1, 2, 2, 2]

function createWindow() {
    win = new BrowserWindow({
        // ----- 尺寸与位置 -----
        height: 600,
        width: 900,
        minWidth: 750,
        minHeight: 450,
        maxWidth: 1300,
        maxHeight: 800,
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
    // TODO 窗口尺寸随拖拽移动变化测试代码
    // setInterval(()=>{
    //     console.log(i)
    //     console.log('set:', win.getBounds())
    //     win.setPosition(i, i)
    //     i+=1
    // },100)

    // win.webContents.openDevTools() // 调试器
    win.on('closed', () => {

        win = null
    })

    win.on('resize', () => {
        console.log('resize:', win.getBounds())
    })

    win.on('move', () => {
        console.log('move:', win.getBounds())
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
    // 淡出效果
    let opacity = 1
    let [w, h] = win.getSize()

    const timer = setInterval(() => {

        opacity -= 0.1
        w -= 5
        h -= 5
        
        win.setOpacity(opacity)
        win.setTra(w, h)

        if (opacity <= 0) {

            clearInterval(timer)

            win.close()
        }

    }, 30)
    win.close()
})

// 拖拽
ipcMain.handle('custom-adsorption', (event, res) => {
    // console.log('data: ' + res.appX + ',' + res.appY)
    const [w, h] = win.getSize();
    const x = res.appX
    const y = res.appY

    win.setPosition(x, y)
    // TODO 暂时解决窗口尺寸异常变大问题 存在窗口大小抖动问题 不同环境可能存在差异 
    // 复刻bug#26-81701请删除此行:
    win.setSize(w - change[Math.abs(x) % 8],
        h - change[Math.abs(y) % 8])
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