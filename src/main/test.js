const {app, BrowserWindow} = require('electron')

let win

app.whenReady().then(()=>{

    win = new BrowserWindow({
        width:900,
        height:600,
        frame:false,
        resizable:true,
    })

    win.loadURL('http://localhost:5173')


    win.on('resize',()=>{
        console.log(
            "resize",
            win.getBounds()
        )
    })


    win.on('move',()=>{
        console.log(
            "move",
            win.getBounds()
        )
    })


    setTimeout(()=>{
        console.log("before",win.getBounds())

        win.setPosition(300,300)

        console.log("after",win.getBounds())

    },3000)
})