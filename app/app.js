'use strict';

class Notepad {

    constructor() {
        this.stringProcess = new StringProcess(DefaultLineEnding);
        
        this.startMenu = new Menu('menu1');
        this.editor = new Editor('editor1');
        this.dialog = new Dialog('dialog');
    }

    setupGUI() {
        this.startMenu.addEventListener('mouseover', this.startMenu.menuexpand);
        this.dialog.addEventListener('click', this.dialog.hideDialog);
        this.statusPanel = new StatusPanel('statusbar');
    }

    init() {
        this.setupGUI();
        this.update();
    }

    update() {
        this.statusPanel.update();
    }
}

let app = new Notepad();