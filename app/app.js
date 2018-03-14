'use strict';

class Notepad {

    constructor() {
        this.stringProcess = new StringProcess(DefaultLineEnding);
        
        this.startMenu = new Menu('menu1');
        this.editor = new Editor('editor1');
    }

    setupGUI() {
        this.startMenu.addEventListener('mouseover', this.startMenu.menuexpand);
        this.statusPanel = new StatusPanel('statusbar');
    }

    init() {
        this.setupGUI();
        this.statusPanel.update();
    }
}

let app = new Notepad();