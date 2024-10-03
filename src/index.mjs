import { app, BrowserWindow } from "electron/main";

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        center: true,
        maximizable: true,
        autoHideMenuBar: true,
        title: "Dannon",
        webPreferences: {},
    });

    win.loadFile("public/index.html");
    win.maximize();
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            const win = createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
